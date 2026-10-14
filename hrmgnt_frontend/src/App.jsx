import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Login from './pages/Login'
import {Routes,Route} from 'react-router-dom'

function App() {
 
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Services" element={<Services></Services>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
