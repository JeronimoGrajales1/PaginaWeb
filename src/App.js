import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Main from './pages/main/Main';
import Colab from './pages/colab/Colab';
import '../src/styles/global.css'


function App() {
  return (
    <BrowserRouter>
      <div className='main-screen shadow-custom' > 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='main' element={<Main />}> 
            <Route path='colab' element={<Colab />} /> 
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
