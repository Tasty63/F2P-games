import { Card } from "antd"
import { GameCardProps } from "../../config/types"
import styles from './gameCard.module.css'
import { formatToLocaleDate } from "../../config/utils"

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
        <div className="release-date">Дата Релиза: {formatToLocaleDate(release_date)}</div>
        <div className="publisher">Издатель: {publisher}</div>
        <div className="genre">Жанр: {genre}</div>
        <div className="platform">Платформа: {platform}</div>
      </div>
    </Card>
  )
}

export default GameCard