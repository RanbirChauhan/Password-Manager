
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Navbar />
      <div className='min-h-[80vh]'>
          <Manager />
      </div>
      <Footer />
    </div>
    
  )
}

export default App
