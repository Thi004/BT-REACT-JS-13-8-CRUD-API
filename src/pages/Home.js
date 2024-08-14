import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";

function Home() {
    return (
        <>
            <Navbar/>
            <Outlet></Outlet>
        </>
    );
}

export default Home;