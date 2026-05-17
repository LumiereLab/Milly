import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TicketsPage, BoardPage } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/tickets' element={<TicketsPage />} />
        <Route path='/board/:id' element={<BoardPage />} />
      </Routes>
    </Router>)


}

export default App;