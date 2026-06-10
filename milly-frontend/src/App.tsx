import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TicketsPage, BoardsPage } from './pages'
//TODO: sinlge board view with its tickets
//TODO: grid for status columns on detail view
//TODO: sort Tickets into columns
//TODO: create Tickets from detail view
//TODO: implement comments into ticket detail view
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