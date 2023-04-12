import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  useNavigate
} from "react-router-dom";
import { useSelector } from 'react-redux';
import  Hotels  from './components/Hotels';
import CustomerDashboard from './components/CustomerDashboard';
import HotelRooms from './components/HotelRooms';
import BookingPage from './components/BookingPage';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import CustomerProfile from './components/CustomerProfile';
import { useEffect } from 'react';
import EmployeeBookingsPage from './components/EmployeeBookingsPage';
import Views from './components/Views';


const RenderLayout = ({children}) => {
  return(
    <div className='homePage'>
      <Header />
      {children}
    </div>
  )
}



function App() {
  const selector = useSelector((state) => state);
  
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

          {(selector.User.customerInfo !== null || selector.User.employeeInfo !== null) &&
            <Route 
              exact path='/hotels' 
              element={
                <RenderLayout>
                  <Hotels />
                </RenderLayout>
              } 
            />
          }


          {(selector.User.customerInfo !== null ||selector.User.employeeInfo !== null) &&
            <Route 
            exact path='/Booking' 
            element={
              <RenderLayout>
                <BookingPage />
              </RenderLayout>
            } 
          />}

          {(selector.User.customerInfo !== null || selector.User.employeeInfo !== null) &&
          <Route 
            exact path='/Rooms' 
            element={
              <RenderLayout>
                <HotelRooms />
              </RenderLayout>
            } 
          />}

          <Route 
            exact path='/SignUp' 
            element={
              <RenderLayout>
                <SignUpForm />
              </RenderLayout>
            } 
          />

          <Route 
            exact path='/signin' 
            element={
              <RenderLayout>
                <SignInForm />
              </RenderLayout>
            } 
          />

          {(selector.User.customerInfo !== null || selector.User.employeeInfo !== null) &&

            <Route 
              exact path='/profile' 
              element={
                <RenderLayout>
                  <CustomerProfile />
                </RenderLayout>
              } 
            />
          }


          <Route 
              exact path='/customerBookings' 
              element={
                <RenderLayout>
                  <EmployeeBookingsPage />
                </RenderLayout>
              } 
          />

          <Route 
              exact path='/views' 
              element={
                <RenderLayout>
                  <Views />
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
