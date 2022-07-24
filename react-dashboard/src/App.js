import Topbar from './components/topbar/Topbar';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        

      </div>


    </div>
  );
}

export default App;
