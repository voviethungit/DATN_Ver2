import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './viewtest/Home/Main';
import MainUser from './viewtest/User/MainUser';
import MainAbout from './viewtest/About/MainAbout';
import MainListBlog from './viewtest/Home/ListBlog/MainListBlog';
import MainListBlog1 from './viewtest/Home/ListBlog/MainListBlog1';
import MainListBlog2 from './viewtest/Home/ListBlog/MainListBlog2';
import MainProduct from './viewtest/Home/Product/MainProduct';
import MainLogin
 from './viewtest/Home/Login_Register/MainLogin';
import MainRegister from './viewtest/Home/Login_Register/MainRegister';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/user' element={<MainUser />} />
          <Route path='/about' element={<MainAbout />} />
          <Route path='/listblog' element={<MainListBlog/>} />
          <Route path='/listblog1' element={<MainListBlog1 />} />
          <Route path='/listblog2' element={<MainListBlog2 />} />
          <Route path='/product' element={<MainProduct />} />
          <Route path='/login' element={<MainLogin />} />
          <Route path='/register' element={<MainRegister />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;

