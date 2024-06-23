import './App.css';
import ForgotPassword from './components/auth/forgotPassword';
import Login from './components/auth/login';
import UpdatePassword from './components/auth/updatePassword';
import FooderData from './components/dashboard/charts/fooder';
import {Routes,Route} from 'react-router-dom'
import Profile from './components/dashboard/Profile/profile';
import Account from './components/dashboard/Profile/account';
import Library from './components/dashboard/Pages/Admin/Library/Library';
import Assessment from './components/dashboard/Pages/Admin/Assessment/Assessment';
import Reports from './components/dashboard/Pages/Admin/Reports/Reports';
import RiskScenario from './components/dashboard/Pages/Admin/RiskScenario/RiskScenario';

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/*' element={<Login/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/update-password' element={<UpdatePassword/>}/>

          <Route path='/' element={<FooderData/>}/>
          <Route path='/library' element={<Library/>}/>
          <Route path='/library/risk-scenario' element={<RiskScenario/>}/>
          <Route path='/assessment' element={<Assessment />}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/chats' element={<FooderData/>}/>

          <Route path='/dashboard/profile' element={<Profile/>}/>
          <Route path='/dashboard/account' element={<Account/>}/>
        </Routes>
    </div>
  );
}

export default App;
