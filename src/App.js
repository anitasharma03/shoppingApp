import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import ItemList from './components/ItemList'
import Cart from './components/Cart';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/shoppingApp" element={<ItemList/>}/>
      <Route path="/cart" element={<Cart/>}/>

        {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
