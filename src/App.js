import React, { Component } from 'react';
import './App.css';
import ProfilComponent from './Profile/ProfilComponent'
import picture from './Profile/picture.jpg'

const data = {
  fullName: "Yahya Akermi" ,
  bio:"Stay humble. Be kind. Work hard.",
  profession:"I am a web dev",
  src : picture
}

class App extends Component {

  handleName= () => {
    alert (`My Name is ${data.fullName}`);
  }

  render(){
    return (
      <div className="App">
        <ProfilComponent user={data}>
          <img src={data.src} style={{height:400, width:250}}/>
        </ProfilComponent>
        <button onClick= {this.handleName} style={{border:"1px solid #c816f0", borderRadius:"5px", backGroundColor:"#fa64f0", padding:15, cursor:"pointer"}}> 
          Click here!
        </button>
      </div>
    );
  }
}

export default App;
