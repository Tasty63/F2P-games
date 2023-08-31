import { Link } from 'react-router-dom';
import { useGetGamesQuery } from '../../api/api'
import { numberOfMockCards } from '../../config/constants';
import GameCard from '../GameCard/GameCard';
import MockGameCard from '../GameCard/MockGameCard';
import { Row, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import styles from './gameList.module.css'
import ErrorMesage from '../ErrorMesage/ErrorMesage';

const GameList = () => {
  const filterParameters = useSelector((state: RootState) => state.gamesFilterSlice)

  const { data, isFetching, isError } = useGetGamesQuery(filterParameters);

  const mockCards = Array.from({ length: numberOfMockCards }).map((card, index) => (
    <div className={styles.card} key={index}>
      <Spin size="large" tip="Loading">
        <MockGameCard />
      </Spin>
    </div>
  ))

  if (isError) return <ErrorMesage />

  return (
    <Row>
      {isFetching
        ? mockCards
        : data && data.map((gameInfo) => (
          <Link to={`/game/${gameInfo.id}`} key={gameInfo.id} className={styles.card}>
            <GameCard gameInfo={gameInfo} />
          </Link>
        ))}
    </Row>
  )
}

export default GameList
