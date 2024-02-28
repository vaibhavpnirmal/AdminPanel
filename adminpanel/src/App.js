
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loginpage from './Components/Loginpage';
import  {Navigate}  from 'react-router-dom';
import Pages from './Components/Pages';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Navigate to='login'></Navigate>}/>
  <Route path='/login' element={<Loginpage></Loginpage>}></Route>
  <Route path='/pages' element={<Pages></Pages>}></Route>
</Routes>
    
 </div>
  );
}

export default App;
