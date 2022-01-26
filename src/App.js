import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header name='Trevor' className="App-header"></Header>
      <Main></Main>
      <Footer name='Trevor'></Footer>
    </div>
  );
}

export default App;
