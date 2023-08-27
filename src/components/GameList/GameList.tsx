import { useGetGamesByPlatformQuery, useGetGamesQuery } from '../../api/api'
import GameCard from '../GameCard/GameCard';
import MockGameCard from '../GameCard/MockGameCard';
import styles from './gameList.module.css'
import { Row, Spin } from 'antd';

const GameList = () => {

  const { data, isLoading } = useGetGamesQuery();

  const mockCardList = Array.from({ length: 12 }).map((card, index) => (
    <div className={styles.card} key={index}>
      <Spin size="large" tip="Loading">
        <MockGameCard />
      </Spin>
    </div>
  ))

  return (
    <>
      <div className={styles.cardList}>
        {
          <Row>
            {isLoading
              ? mockCardList
              : data && data.map((gameInfo) => (
                <div className={styles.card} key={gameInfo.id}>
                  <GameCard gameInfo={gameInfo} />
                </div>
              ))}
          </Row>
        }
      </div>
    </>
  )
}

export default GameList
