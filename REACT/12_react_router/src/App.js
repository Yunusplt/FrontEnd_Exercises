import "./App.css";
import Footer from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseCard from "./pages/CourseCard";
import Teacher from "./pages/Teacher";
import ContactForm from "./pages/ContactForm";
import data from "./helpers/data";
import NotFound from "./pages/NotFound";
import TeacherDetail from "./pages/TeacherDetail";
import CardDetail from "./pages/CardDetail";
//! Tüm sayfalarin BrowserRouter icinde olmasina dikkat et.
//! Her sayfaya gidince görünmesini devam etmesini istedigin componentsleri Routers disinda birak

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/courses" element={<CourseCard data={data} />} />
          <Route path="/courses/:name" element={<CardDetail data={data} />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacher/:id" element={<TeacherDetail />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
