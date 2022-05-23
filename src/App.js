import logo from './logo.svg';
import './App.css';
import {UserList} from './components/userList';
import {OrderList} from './components/orderList';
import { useState} from 'react';


function App() {
  const [set,setState ]=useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <button onClick={()=> {setState(true)} }>lista utenti</button>
          <button onClick={()=> {setState(false)} }>lista commesse</button>
        </div>
        {
          set ? <UserList/> : <OrderList/>
        }
        

      </header>
    </div>
  );
}

export default App;
