import React, { Component } from 'react';
import Header from './components/Header';
import ProductListContainer from './containers/ProductListContainer';
import Message from './components/Message';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
            <div className="container">
              <ProductListContainer />
              <Message />
              <CartContainer />
            </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
