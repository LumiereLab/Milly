import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { TicketsPage } from './pages/TicketsPage';

function App() {
  return (  
  <Router>
    <Routes>
      <Route path='/' element={<TicketsPage />} />
      
    </Routes>
  </Router>)


}

export default App;