import React from 'react';
import './App.css';
import ProjectsScreen from './ProjectsScreen';
import Header from './HeaderBar.js'
import SubHeader from './SubHeaderBar.js'
import Card from './Card.js'

function App() {
  return (
    <div>
      <div>
        <Header></Header>
        <SubHeader></SubHeader>
      </div>
      <div className='Card'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;

