import './App.css';
import { Navbar } from './components/Navbar';
import { Forms } from './components/CreateUser';
import ViewUser from './components/ViewUsers';
import {BrowserRouter} from 'react-router-dom';
import {Routes , Route} from  'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element = {<ViewUser/>}/>
      <Route path='/create-user' element={<Forms/> } />
      <Route path ='/create-user/:id' element ={<Forms/>}/>
    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
