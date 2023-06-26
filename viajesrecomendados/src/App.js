import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import EditProfile from "./pages/EditProfilePage";
import Categories from "./pages/Categories";
import PostPlacePage from "./pages/PostPlacePage";
import MostVotedPage from "./pages/MostVotedPage";
import PlaceDetailPage from "./pages/PlaceDetailPage";
import DeletePlace from "./pages/DeletePlace";
import PlaceByCity from "./pages/PlaceByCityPage";
import PlaceByCountry from "./pages/PlaceByCountryPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/header/Header";

import PlaceByCategoryPage from "./pages/PlaceByCategoryPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/users/editprofile" element={<EditProfile />} />
        <Route path="/places/categories" element={<Categories />} />
        <Route path="/places/newplace" element={<PostPlacePage />} />
        <Route path="/places/mostvoted" element={<MostVotedPage />} />
        <Route path="/places/:id" element={<PlaceDetailPage />} />
        <Route path="/places/category/:id" element={<PlaceByCategoryPage />} />
        <Route path="/places/city/:city" element={<PlaceByCity />} />
        <Route path="/places/country/:country" element={<PlaceByCountry />} />
        <Route path="places/delete/:id" element={<DeletePlace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
