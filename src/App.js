import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './Components/Posts';
import Addpost from './Components/Addpost';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<Posts/>}/>
      <Route path='/addpost' exact element={<Addpost/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
