import { Routes, Route } from 'react-router-dom'
import GameListPage from './pages/GameListPage/GameListPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<GameListPage />} />
      </Routes>
    </>
  )
}

export default App
