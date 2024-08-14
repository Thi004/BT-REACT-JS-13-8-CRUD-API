import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Create from "./components/Create";
import Update from "./components/Update";
import ListProduct from "./components/ListProduct";


function App() {
  return (
    <>
      <Routes>
        <Route path={'home'} element={<Home/>}>
            <Route path={'create'} element={<Create/>}></Route>
            <Route path={'update'} element={<Update/>}></Route>
            <Route path={'list'} element={<ListProduct/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
// create, read, update, delete
// post     get    put    delete
