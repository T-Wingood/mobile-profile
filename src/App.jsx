import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/HomePage';
import ProfilePage from './components/ProfilePage'
import Settings from './components/Settings'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Homepage/>}/>
      <Route path='/ProfilePage' element = {<ProfilePage/>}/>
      <Route path='/Settings' element = {<Settings/>}/>

    </Routes>
    </>

  );
}

export default App;
