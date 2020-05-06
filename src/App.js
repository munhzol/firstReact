import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <>                
        <h1 className="my-class">Hello DOJO</h1>                
        <p>Things I need to do</p>      

        <ul>
          <li>Learn React</li>  
          <li>Make FaceBook</li>  
          <li>Make money</li>  
          <li>Explore brain interface</li>  
          <li>Make myself cyborg</li>  
          <li>Buy Rocket</li>  
          <li>Go Mars</li>  
          <li>Go ...</li>  
        </ul>

        {/* <form action="/process" method="post">
          <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="username" class="form-control" />
          </div>
        </form> */}

      </>    
  );
}

export default App;
