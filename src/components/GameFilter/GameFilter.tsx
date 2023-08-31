import { Col, Row, Radio, Select } from 'antd';
import type { RadioChangeEvent } from 'antd';
import {
  changePlatformValue,
  changeCategoryValue,
  changeSortByValue
} from '../../store/features/gamesFilter';
import { SortByType } from '../../config/types';

import styles from './GameFilter.module.css'
import { useAppDispatch, useAppSelector } from '../../store/hooks';


const GameFilter = () => {
  const { category, platform, sortBy } = useAppSelector((state) => state.gamesFilterSlice)
  const dispatch = useAppDispatch();

  const changeSortByFilter = (value: SortByType) => {
    dispatch(changeSortByValue(value));
  }

  const changePlatformFilter = (event: RadioChangeEvent) => {
    dispatch(changePlatformValue(event.target.value))
  }

  const changeCategoryFilter = (event: RadioChangeEvent) => {
    dispatch(changeCategoryValue(event.target.value))
  }

  return (
    <div className={styles.gameFilter}>
      <div className={styles.gameSort}>
        <h3>Cортировка:</h3>
        <Select
          className={styles.sortSelect}
          defaultValue="relevance"
          onChange={changeSortByFilter}
          value={sortBy}
          options={[
            { value: 'relevance', label: 'По умолчанию' },
            { value: 'alphabetical ', label: 'По алфавиту' },
            { value: 'popularity', label: 'Популярные' },
            { value: 'release-date', label: 'По дате выпуска' },
          ]}
        />
      </div>
      <div className={styles.platformFilter}>
        <h3>Платформа:</h3>
        <Radio.Group
          onChange={changePlatformFilter}
          name="platform"
          defaultValue={"all"}
          value={platform}
        >
          <Col>
            <Row><Radio value="all">Все</Radio></Row>
            <Row><Radio value="pc">PC</Radio></Row>
            <Row><Radio value="browser">Браузер</Radio></Row>
          </Col>
        </Radio.Group>
      </div>
      <div className={styles.categoryFilter}>
        <h3>Жанр:</h3>
        <Radio.Group
          onChange={changeCategoryFilter}
          name="category"
          defaultValue={null}
          value={category || null}
        >
          <Col>
            <Row><Radio value={null}>Любой</Radio></Row>
            <Row><Radio value="mmorpg">MMORPG</Radio></Row>
            <Row><Radio value="shooter">Шутер</Radio></Row>
            <Row><Radio value="strategy">Стратегия</Radio></Row>
            <Row><Radio value="moba">MOBA</Radio></Row>
            <Row><Radio value="racing">Гонки</Radio></Row>
            <Row><Radio value="sandbox">Песочница</Radio></Row>
          </Col>
        </Radio.Group>
      </div>
    </div>
  )
}

export default GameFilter