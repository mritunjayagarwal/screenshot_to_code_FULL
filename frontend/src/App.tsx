import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import Code from './Code';
const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/code" element={<Code />} />
        </Routes>

    </Router>
  )
}

export default App