import Header from './components/HeaderBody';
import Chat from './Chat';
import Chart from './Chart';
import Game from './Game';
import UserGuide from './UserGuide/UserGuide';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Header />
        <Game />
        <Chart />
      </div>
      <div className='chat'>
        <Chat />
      </div>
      <UserGuide />
    </div>
  );
}

export default App;
