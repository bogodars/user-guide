import Header from './components/HeaderBody';
import Chat from './Chat';
import Chart from './Chart';
import Game from './Game';
import UserGuide from './UserGuide/UserGuide';
import JoyRide from './JoyRide';
import './App.css';

//  Comment or uncomment JoyRide or userGuide components to see different user-guides frameworks
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
      {/* <JoyRide /> */}
    </div>
  );
}

export default App;
