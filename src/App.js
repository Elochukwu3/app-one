// import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Message from './component/MessageState';
import EventBinder from './component/EventBinder';
function WelcomeMessage() {
  return <p>Welcome Elochukwu To React JS!</p>
 }
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventBinder/>
      <Message/>
        <WelcomeMessage />
        <Greet name = "Emmanuel" children = "emmm" />
        <Greet name = "King" />
        <Greet name = "Samuel" />
    <Welcome/>
      </header>
    </div>
  );
}

export default App;
