import { Link } from 'react-router-dom';
import { useGetGamesByPlatformQuery, useGetGamesQuery } from '../../api/api'
import { numberOfMockCards } from '../../config/constants';
import GameCard from '../GameCard/GameCard';
import MockGameCard from '../GameCard/MockGameCard';
import styles from './gameList.module.css'
import { Row, Spin } from 'antd';

const GameList = () => {

  const { data, isLoading } = useGetGamesQuery();

  const mockCards = Array.from({ length: numberOfMockCards }).map((card, index) => (
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
              ? mockCards
              : data && data.map((gameInfo) => (
                <div className={styles.card} key={gameInfo.id}>
                  <Link to={`/game/${gameInfo.id}`}>
                    <GameCard gameInfo={gameInfo} />
                  </Link>
                </div>
              ))}
          </Row>
        }
      </div>
    </>
  )
}

export default GameList
