import Header from './components/HeaderBody';
import Chat from './Chat';
import Chart from './Chart';
import Game from './Game';
import UserGuide from './UserGuide';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <UserGuide />
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
