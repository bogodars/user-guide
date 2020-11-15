import Header from './components/HeaderBody';
import Chat from './Chat';
import Chart from './Chart';
import Game from './Game';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Header />
        <Game />
        <div className='chat'>
          <Chat />
        </div>
        <Chart />
      </div>
    </div>
  );
}

export default App;
