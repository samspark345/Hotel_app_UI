import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import { useSelector } from 'react-redux';
import  Hotels  from './components/Hotels';
import CustomerDashboard from './components/CustomerDashboard';
import HotelRooms from './components/HotelRooms';
import BookingPage from './components/BookingPage';


const RenderLayout = ({children}) => {
  return(
    <div className='homePage'>
      <Header />
      {children}
    </div>
  )
}



function App() {
  const selector = useSelector((state) => state)
  console.log(selector)
  // console.log(useSelector())
  return (
    <Router>

        <Routes>
          
          <Route 
            exact path='/' 
            element={
              <HomePage />
            } 
          />

          <Route 
            exact path='/hotels' 
            element={
              <RenderLayout>
                <Hotels />
              </RenderLayout>
            } 
          />

          <Route 
            exact path='/Dashboard' 
            element={
              <RenderLayout>
                <CustomerDashboard />
              </RenderLayout>
            } 
          />

          <Route 
            exact path='/Booking' 
            element={
              <RenderLayout>
                <BookingPage />
              </RenderLayout>
            } 
          />

          <Route 
            exact path='/Rooms' 
            element={
              <RenderLayout>
                <HotelRooms />
              </RenderLayout>
            } 
          />

          <Route 
            path="*" 
            element={ 
              <Navigate to="/" /> 
            } 
          />

        </Routes>
    
    </Router>

)



      
      
      {/* {header} */}
      {/* {sidebar} */}
      {/* {Recvids} */}
}

export default App;

// element={
//   <div className='homePage'>
//     <Header />
//     <HomePage />
//   </div>

// }
