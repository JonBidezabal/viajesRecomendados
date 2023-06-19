import "./App.css";
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NewPassword from "./pages/NewPassword";
import Categories from "./pages/Categories";
import PostPlace from "./pages/PostPlace";
import MostVoted from "./pages/MostVoted";
import PlaceDetail from "./pages/PlaceDetail";
import PlaceByCategory from "./pages/PlaceByCategory";
import DeletePlace from "./pages/DeletePlace";
import PlaceByCity from "./pages/PlaceByCity";
import PlaceByCountry from "./pages/PlaceByCountry";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return <>
  <Header />
  <Routes>
<Route path='/' element={<HomePage />}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<SignUp />}/>
<Route path='/newpassword' element={<NewPassword />}/>
<Route path='/categories' element={<Categories />}/>
<Route path='/postplace' element={<PostPlace />}/>
<Route path='/mostvoted' element={<MostVoted />}/>
<Route path='/places/:id' element={<PlaceDetail />}/>
<Route path='/places/category/:id' element={<PlaceByCategory />}/>
<Route path='/places/city/:city' element={<PlaceByCity />}/>
<Route path='/places/country/:country' element={<PlaceByCountry />}/>
<Route path='places/delete/:id' element={<DeletePlace />}/>
<Route path='*' element={<NotFoundPage />}/>
  </Routes>
  <Footer />
  </>;
}

export default App;
