import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TicketsPage, BoardsPage } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/tickets' element={<TicketsPage />} />
        <Route path='/boards' element={<BoardsPage />} />
      </Routes>
    </Router>)


}

export default App;