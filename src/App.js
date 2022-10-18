import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Helmet from "react-helmet";

import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import Corporate from "./Components/Corporate";
import Custom from "./Components/Custom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ProductPage from "./Components/ProductPage";
import Shop from "./Components/Shop";

function App() {
  const [productDB, setProductDB] = useState();
  const [cartDB, setCartDB] = useState([]);
  const [total, setTotal] = useState({ quantity: 0, price: 0 });

  useEffect(() => {
    setTotal({
      price: cartDB.reduce(
        (total, current) => total + current.price * current.quantity,
        0
      ),
      quantity: cartDB.reduce((total, current) => total + current.quantity, 0),
    });
  }, [cartDB]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductDB(data));
  }, []);

  return (
    <>
      <Helmet>
        <title>Chalked - Barcelona</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A mock UI for a sustainable clothing store located in Barcelona, Spain."
        />
        <meta
          name="keywords"
          content="fashion, sustainability, store, location, green, barcelona, spain"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:url" content="https://chalked-barcelona.surge.sh/" />
        <meta property="og:title" content="Chalked - Barcelona" />
        <meta
          property="og:description"
          content="A mock UI for a sustainable clothing store located in Barcelona, Spain."
        />
        <meta
          property="og:image"
          content="https://unsplash.com/photos/SVau0pCLVbI"
        />
        <meta
          property="og:image:url"
          content="https://unsplash.com/photos/SVau0pCLVbI"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Router>
        <Navbar total={total.quantity} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop products={productDB} />} />
          <Route path="/corp" element={<Corporate />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={
              <Cart cartDB={cartDB} setCartDB={setCartDB} total={total.price} />
            }
          />
          <Route
            path="/shop/:id/:title"
            element={
              <ProductPage
                products={productDB}
                setCartDB={setCartDB}
                cartDB={cartDB}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

// const products = [
//   {
//     product: "flash t-shirt",
//     price: 27.5,
//     category: "t-shirts",
//     bestSeller: false,
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/61ZipyCaAKL._AC_UX385_.jpg",
//     onSale: true,
//     quantity: 1
//   },
//   {
//     product: "batman t-shirt",
//     price: 22.5,
//     category: "t-shirts",
//     bestSeller: true,
//     image:
//       "https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png",
//     onSale: false,
//     quantity: 1
//   },
//   {
//     product: "superman hat",
//     price: 13.9,
//     category: "hats",
//     bestSeller: true,
//     image:
//       "https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg",
//     onSale: false,
//     quantity: 1
//   },
// ];
