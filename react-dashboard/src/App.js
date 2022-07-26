import Topbar from './components/topbar/Topbar';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="container">
        <Sidebar/>
      
        <Home/>
      </div>


    </div>
  );
}

export default App;
