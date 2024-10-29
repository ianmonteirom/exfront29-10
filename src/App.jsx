import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Home from './routes/Home/Home'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
