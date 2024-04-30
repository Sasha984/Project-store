import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/pages/Home'
import News from './components/pages/News'
import Article from './components/pages/Article'
import BloggerProfile from './components/pages/BloggerProfile'
import Tutorial from './components/pages/Tutorial'
import Bloggers from './components/pages/Bloggers'
import Login from './components/pages/Login'
import TutorialPage from './components/pages/TutorialPage'
import Sponsors from './components/pages/Sponsors'
import Contacts from './components/pages/Contacts'
import ScrollToTop from './utils/ScrollToTop.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './reset.css'
import './App.css'
import './App.js'


function App(){

      return (
    <>
    <Router>

    <ScrollToTop/>
       
    <Header></Header>

       <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/article" element={<Article/>}/>
      <Route path="/bloggerProfile" element={<BloggerProfile/>}/>
      <Route path="/tutorial" element={<Tutorial/>}/>
      <Route path="/bloggers" element={<Bloggers/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/tutorialPage" element={<TutorialPage/>}/>
      <Route path="/sponsors" element={<Sponsors/>}/>
      <Route path="/contacts" element={<Contacts/>}/></Routes>

      <Footer></Footer>
      </Router>
    </>
      )
  
}


export default App
