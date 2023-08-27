import { Card } from "antd"
import { GameCardProps } from "../../config/types"
import styles from './gameCard.module.css'

const GameCard = ({ gameInfo }: GameCardProps) => {

  const {
    title,
    thumbnail,
    short_description,
    game_url,
    genre,
    platform,
    publisher,
    developer,
    release_date,
    freetogame_profile_url,
  } = gameInfo

  return (
    <Card
      className={styles.card}
      cover={
        <img
          alt="game"
          src={thumbnail}
        />
      }
    >
      <div className="body">
        <div className={styles.title}>{title}</div>

        {/* русский формат */}
        <div className="release-date">Дата Релиза: {release_date}</div>
        <div className="publisher">Издатель: {publisher}</div>
        <div className="genre">Жанр: {genre}</div>
        <div className="platform">Платформы: {platform}</div>
      </div>
    </Card>
  )
}

export default GameCard