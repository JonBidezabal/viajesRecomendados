import "./App.css";
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NewPassword from "./pages/NewPassword";
import Categories from "./pages/Categories";
import PostPlacePage from "./pages/PostPlacePage";
import MostVotedPage from "./pages/MostVotedPage";
import PlaceDetailPage from "./pages/PlaceDetailPage";
import PlaceByCategory from "./pages/PlaceByCategory";
import DeletePlace from "./pages/DeletePlace";
import PlaceByCity from "./pages/PlaceByCityPage";
import PlaceByCountry from "./pages/PlaceByCountryPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return <>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/users/newpassword' element={<NewPassword />} />
      <Route path='/places/categories' element={<Categories />} />
      <Route path='/places/newplace' element={<PostPlacePage />} />
      <Route path='/places/mostvoted' element={<MostVotedPage />} />
      <Route path='/places/:id' element={<PlaceDetailPage />} />
      <Route path='/places/category/:id' element={<PlaceByCategory />} />
      <Route path='/places/city/:city' element={<PlaceByCity />} />
      <Route path='/places/country/:country' element={<PlaceByCountry />} />
      <Route path='places/delete/:id' element={<DeletePlace />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </>;
}

export default App;
