import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { animals } from './animalList.js';

function App() {
  
  return (
    <div className="App">
      <Header name='Trevor Rezac' className="App-header"></Header>
      <Main animals={ animals }></Main>
      <Footer name='Trevor'></Footer>
    </div>
  );
}

export default App;
