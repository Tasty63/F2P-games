import { useNavigate, useParams } from "react-router-dom"
import { useGetGameDetailsByIdQuery } from "../../api/api"
import { Carousel, Image, Spin } from "antd"
import { formatToLocaleDate, getFromLocalStorage, hasTimePassed, removeFromLocalStorage } from "../../config/utils"
import { SavedGameDetailsType } from "../../config/types"
import ArrowIcon from '../../assets/arrow.svg'
import ErrorMesage from "../../components/ErrorMesage/ErrorMesage"
import styles from './gamePage.module.css'
import { saveTimeMilliseconds } from "../../config/constants"

const GamePage = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  if (!gameId) {
    goHome();
    return;
  }

  let skip = false;
  const savedGameDetails: SavedGameDetailsType = getFromLocalStorage(`Game${gameId}`);

  if (savedGameDetails) {
    skip = true;
  }

  if (savedGameDetails && hasTimePassed(savedGameDetails?.timestamp, saveTimeMilliseconds)) {
    skip = false;
    removeFromLocalStorage(`Game${gameId}`);
  }

  const { data, isFetching, isError } = useGetGameDetailsByIdQuery(gameId, { skip });

  const gameDetails = data ? data : savedGameDetails;

  if (isError) return <ErrorMesage />
  if (isFetching) return <Spin className={styles.loader} size="large" />

  return (
    <>
      {gameDetails && <>
        <header className={styles.header}>
          <button className={styles.backButton} onClick={goHome}>
            <img src={ArrowIcon} className={styles.arrow} />
          </button>
          <h1>{gameDetails.title}</h1>
        </header>
        <main className={styles.main}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={gameDetails.thumbnail}
              alt="game"
              preview={false}
            />
          </div>
          <div className={styles.body}>
            <div className={styles.title}>{gameDetails.title}</div>
            <div className={styles.info}>
              <div>Жанр: {gameDetails.genre}</div>
              <div>Платформа: {gameDetails.platform}</div>
              <div>Разработчик: {gameDetails.developer}</div>
              <div>Дата выпуска: {formatToLocaleDate(gameDetails.release_date)}</div>
            </div>
            <div className={styles.carouselContainer}>
              <Carousel className={styles.carousel} autoplay draggable={true}>
                {gameDetails.screenshots.map((screenshot) => (
                  <Image
                    className={styles.screenshot}
                    placeholder={true}
                    preview={false}
                    src={screenshot.image}
                    key={screenshot.id}
                  />
                ))}
              </Carousel>
            </div>
            {gameDetails.minimum_system_requirements &&
              <div className={styles.systemRequirements}>
                <div className={styles.requirementsTitle}>Минимальные системые требования</div>
                <div className={styles.requirementsBody}>
                  <div>ОС: {gameDetails.minimum_system_requirements.os}</div>
                  <div>Процессор: {gameDetails.minimum_system_requirements.processor}</div>
                  <div>Оперативная память: {gameDetails.minimum_system_requirements.memory}</div>
                  <div>Видеокарта: {gameDetails.minimum_system_requirements.graphics}</div>
                  <div>Место на диске: {gameDetails.minimum_system_requirements.storage}</div>
                </div>
              </div>
            }
          </div>
        </main>
      </>
      }
    </>
  )
}

export default GamePage