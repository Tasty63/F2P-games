import styles from './gameListPage.module.css'
import GameFilter from '../../components/GameFilter/GameFilter'
import GameList from '../../components/GameList/GameList'

const GameListPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <GameFilter />
      </div>
      <div className={styles.gameList}>
        <GameList />
      </div>
    </div>
  )
}

export default GameListPage
