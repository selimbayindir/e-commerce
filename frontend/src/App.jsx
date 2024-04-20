
import './App.css'
import CategoriesPage from './components/Categories/CategoriesPage';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Policy from './components/Layout/Policy/Policy';
import Slider from './components/Slider/Sliders';
function App() {

  return (
    <div>
      <Header/>
      <Slider/>
      <CategoriesPage/>
    <Policy/>
    <Footer/>
    </div>
  
  )
}

export default App
