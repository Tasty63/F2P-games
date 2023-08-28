import { useNavigate, useParams } from "react-router-dom"
import { useGetGameDetailsByIdQuery } from "../../api/api"
import { Carousel, Image, Spin } from "antd"
import { formatToLocaleDate } from "../../config/utils"

import ArrowIcon from '../../assets/arrow.svg'
import styles from './gamePage.module.css'

const GamePage = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  if (!gameId) {
    goHome();
    return;
  }

  const { data, isLoading, isError } = useGetGameDetailsByIdQuery(gameId);

  return (
    <>
      {isLoading
        ? <Spin className={styles.loader} size="large" />
        : data && <>
          <header className={styles.header}>
            <button className={styles.backButton} onClick={goHome}>
              <img src={ArrowIcon} className={styles.arrow} />
            </button>
            <h1>{data.title}</h1>
          </header>
          <main className={styles.main}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={data.thumbnail}
                alt="game"
                preview={false}
              />
            </div>
            <div className={styles.body}>
              <div className={styles.title}>{data.title}</div>
              <div className={styles.info}>
                <div>Жанр: {data.genre}</div>
                <div>Платформа: {data.platform}</div>
                <div>Разработчик: {data.developer}</div>
                <div>Дата выхода: {formatToLocaleDate(data.release_date)}</div>
              </div>
              <div className={styles.carouselContainer}>
                <Carousel className={styles.carousel} autoplay draggable={true}>
                  {data.screenshots.map((screenshot) => (
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
              {data.minimum_system_requirements &&
                <div className={styles.systemRequirements}>
                  <div className={styles.requirementsTitle}>Минимальные системые требования</div>
                  <div className={styles.requirementsBody}>
                    <div>ОС: {data.minimum_system_requirements.os}</div>
                    <div>Процессор: {data.minimum_system_requirements.processor}</div>
                    <div>Оперативная память: {data.minimum_system_requirements.memory}</div>
                    <div>Видеокарта: {data.minimum_system_requirements.graphics}</div>
                    <div>Место на диске: {data.minimum_system_requirements.storage}</div>
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