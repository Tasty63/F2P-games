import { useGetGamesByPlatformQuery, useGetGamesQuery } from '../../api/api'
import GameCard from '../GameCard/GameCard';
import styles from './gameList.module.css'
import { Row } from 'antd';

const GameList = () => {

  const { data } = useGetGamesQuery();

  return (
    <>
      <div className={styles.cardList}>
        <Row>
          {data && data.map((gameInfo) => (
            <div className={styles.card} key={gameInfo.id}>
              <GameCard gameInfo={gameInfo} />
            </div>
          ))}
        </Row>
      </div>
    </>
  )
}

export default GameList
