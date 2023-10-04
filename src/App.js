import './App.css';
import {  BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import HomePage from './components/HomePage';
import PropertyPage from './components/propertyPage/PropertyPage';

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/property/:id" element={<PropertyPage/>}/>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
