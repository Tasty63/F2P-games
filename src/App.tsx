import { Row, Col } from "antd"
import GameFilter from "./components/GameFilter/GameFilter"
import GameList from "./components/GameList/GameList"
import styles from './app.module.css'

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu}>
          <GameFilter />
        </div>
        <div className={styles.gameList}>
          <GameList />
        </div>
      </div>
    </>
  )
}

export default App
