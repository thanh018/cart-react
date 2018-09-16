import React, { Component } from 'react';
import Header from './components/Header';
import ProductListContainer from './containers/ProductListContainer';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';
import MessageContainer from './containers/MessageContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
            <div className="container">
              <ProductListContainer />
              <MessageContainer />
              <CartContainer />
            </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
