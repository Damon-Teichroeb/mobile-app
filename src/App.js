import AddContact from './AddContact';
import './App.css';
import Contacts from "./Contacts.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WeUsThem Developer Test</h1>
        <h3>Mobile Application by Damon Teichroeb</h3>
      </header>
      <AddContact />
      <Contacts className="App-body"/>
    </div>
  );
}

export default App;
