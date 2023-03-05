import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/aboutpage/About';
import Contact from './components/Contact';
import Home from './components/homepage/Home';
import Resume from './components/Resume';
import Layout from './pages/Layout';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About />}> </Route>
          <Route path='/Resume' element={<Resume />}> </Route>
          <Route path='/contact' element={<Contact />}> </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
