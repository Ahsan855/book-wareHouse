import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddItem from "./Components/Add-item/AddItem";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageItem from "./Components/ManageItem/ManageItem";
import MyItem from "./Components/MyItem/MyItem";
import NotFound from "./Components/NotFound/NotFound";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Register from "./Components/Register/Register";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <MyItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageitems"
          element={
            <RequireAuth>
              <ManageItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/product/:productId"
          element={<ProductDetails></ProductDetails>}
        ></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
