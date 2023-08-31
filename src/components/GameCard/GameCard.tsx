import { Card, Image } from "antd"
import { GameCardProps } from "../../config/types"
import { formatToLocaleDate } from "../../config/utils"
import GamepadImage from '../../assets/gamepad.jpg'

import styles from './gameCard.module.css'

const GameCard = ({ gameInfo }: GameCardProps) => {

  const {
    title,
    thumbnail,
    genre,
    platform,
    publisher,
    release_date,
  } = gameInfo;

  return (
    <Card
      className={styles.card}
      cover={
        <Image
          alt="game"
          src={thumbnail}
          preview={false}
          fallback={GamepadImage}
          placeholder={true}
        />
      }
    >
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.cardText}>Дата выпуска: {formatToLocaleDate(release_date)}</div>
        <div className={styles.cardText}>Издатель: {publisher}</div>
        <div className={styles.cardText}>Жанр: {genre}</div>
        <div className={styles.cardText}>Платформа: {platform}</div>
      </div>
    </Card>
  )
}

export default GameCard