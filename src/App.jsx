import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import './App.css';
import Header from './layout/Header';
import Home from './pages/Home';
import Footer from './layout/Footer';
import ProductList from './pages/ProductList';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/shopping">
          <ProductList />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
