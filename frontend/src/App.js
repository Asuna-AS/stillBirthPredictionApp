import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AuthProvider from './contexts/AuthProvider';
import OrderProvider from './contexts/OrderProvider';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import ContactScreen from './screens/ContactScreen';
import ErrorScreen from './screens/ErrorScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ProductsScreen from './screens/ProductsScreen';
import ServicesDetailScreen from './screens/ServicesDetailScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HospitalScreen from './screens/HospitalScreen';
import CheckupScreen from './screens/CheckupScreen';
import AdvancedFeatures from './components/TabComponent/AdvancedFeatures';
import NormalFeatures from './components/TabComponent/NormalFeatures';
import Particle from './Particle.jsx';
import background from "./background.png"
import './styles/app.css'
import Loading from './components/loading/loading.jsx'
const App = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <OrderProvider>
          <Particle/>
          <Navbar />
          {/* <Loading/> */}
          <Switch>
            <Route exact path="/"><HomeScreen /></Route>
            <Route exact path="/contact"><ContactScreen /></Route>
            <Route exact path='/checkup'>
              <CheckupScreen />
              </Route>
            <PublicRoute path="/signup"><SignUpScreen /></PublicRoute>
            <PublicRoute path="/signin"><SignInScreen /></PublicRoute>
            <Route exact path="/blogs/"><ProductsScreen /></Route>
            <Route exact path="/doctorForm/"><AdvancedFeatures /></Route>
            <Route exact path="/patientForm/"><NormalFeatures /></Route>
            <Route exact path="/hospitals/"><HospitalScreen /></Route>
            <Route path="*"><ErrorScreen /></Route>
          </Switch>
          <Footer />
        </OrderProvider>
      </AuthProvider>
    </HashRouter>
  )
}

export default App
