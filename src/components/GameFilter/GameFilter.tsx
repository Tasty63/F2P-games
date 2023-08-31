import { Checkbox, Col, Row, Radio, Select } from 'antd';
import type { RadioChangeEvent } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { useDispatch } from 'react-redux';
import { changeFilterValue } from '../../store/features/gamesFilter';
import { SortByType } from '../../config/types';

import styles from './GameFilter.module.css'


const GameFilter = () => {
  const dispatch = useDispatch();

  const onFilterChange = (event: RadioChangeEvent) => {
    const { name, value } = event.target;

    if (!name) {
      return;
    }

    dispatch(changeFilterValue({ name, value }));
  };

  const onSortChange = (value: SortByType) => {
    dispatch(changeFilterValue({ name: 'sortBy', value }))
  };

  return (
    <div className={styles.gameFilter}>
      <div className={styles.gameSort}>
        <h3>Cортировка:</h3>
        <Select
          className={styles.sortSelect}
          defaultValue="relevance"
          onChange={onSortChange}
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
        <Radio.Group onChange={onFilterChange} name="platform">
          <Col>
            <Row><Radio value="pc">PC</Radio></Row>
            <Row><Radio value="browser">Браузер</Radio></Row>
          </Col>
        </Radio.Group>
      </div>
      <div className={styles.categoryFilter}>
        <h3>Жанр:</h3>
        <Radio.Group onChange={onFilterChange} name="category">
          <Col>
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