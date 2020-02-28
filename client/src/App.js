import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
import {Container}  from 'reactstrap';
import AppNavbar from './components/AppNavbar';
import ShoppingList from '../src/components/ShoppingList';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
     <AppNavbar />
     <Container>
      <ItemModal />
      <ShoppingList />
     </Container>
    </div>
    </Provider>
  );
}

export default App;
