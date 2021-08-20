import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
      <TextForm heading="Enter the Text To Analyze" />        
      </div>
    </>
  );
}

export default App;
