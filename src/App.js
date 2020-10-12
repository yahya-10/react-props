import React from 'react';
import './App.css';
import ProfilComponent from './Profile/ProfilComponent'
import picture from './Profile/picture.jpg'
import Image from './Profile/Image'


function App() {
  return (
    <div className="App" style={{backgroundColor:"#d1f593"}}>
      <ProfilComponent 
      fullName= "Yahya Akermi" 
      bio="Stay humble. Be kind. Work hard."
      profession="I am a web dev"
      />
      <Image>{picture}</Image> 
    </div>
  );
}

export default App;
