
import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Regis from './pages/Regis'
import Dashboard from './Dashboard'
import MyAccount from './pages/MyAccount'
import MyDeposit from './pages/MyDeposit'
import Resetpass from './pages/Resetpass'
import MyWithdraw from './pages/MyWithdraw'
import MyCurrentBalance from './pages/MyCurrentBalance'
import MyStatement from './pages/MyStatement'
import MiniStatment from './pages/MiniStatment'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>

        <Route path='/home' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='login/regis' element={<Regis/>}/>
       

        </Route>
      </Routes>

      <Routes>
        <Route path='/dash' element={<Dashboard/>}>
       <Route path='dash/myacc' element={<MyAccount/>}/>
       <Route path='dash/mydepo' element={<MyDeposit/>}/>
       <Route path='dash/mywith' element={<MyWithdraw/>}/>
       <Route path='dash/mybalance' element={<MyCurrentBalance/>}/>
       <Route path='dash/mystat' element={<MyStatement/>}/>
       <Route path='dash/mymini' element={<MiniStatment/>}/>
       <Route path='dash/resetpass' element={<Resetpass/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
