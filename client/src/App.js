import './App.css';
import { Navbar } from './components/Navbar';
import { Forms } from './components/CreateUser';
import ViewUser from './components/ViewUsers';
import {Routes , Route} from  'react-router-dom'

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element = {<ViewUser/>}/>
      <Route path ='/create-user' element ={<Forms/>}/>
    </Routes>
    </div>
  );
}

export default App;
