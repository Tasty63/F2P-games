import { Card } from "antd"
import styles from './GameCard.module.css'
import gamepadImage from '../../assets/gamepad.jpg'

const MockGameCard = () => {
  return (
    <Card
      className={styles.card}
      cover={
        <img
          alt="game"
          src={gamepadImage}
        />
      }
    >
      <div className="body">
        <div className={styles.title}>Название</div>
        <div className={styles.cardText}>Дата Релиза: </div>
        <div className={styles.cardText}>Издатель: </div>
        <div className={styles.cardText}>Жанр: </div>
        <div className={styles.cardText}>Платформа: </div>
      </div>
    </Card>
  )
}

export default MockGameCard

