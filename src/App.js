 
import './App.css';
import Paths from './Paths';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
    <div className="home-container">
      <section>
        <Sidebar />
      </section>
     <Paths/>
     </div>
    </div>
    
  );
}

export default App;
