import {Link} from "react-router-dom";
import '../style/Navbar.css'
import {useContext} from "react";
import myContext, {MyContext} from "../components/MyContext";
function Navbar() {
    let {currentUser} = useContext(MyContext)
    return (
        <>
            <button className={'in-nav'}><Link to={'/home/list'} className={'link'}>List Product</Link></button>
            <button className={'in-nav'}><Link to={'/home/create'} className={'link'}>Add New</Link></button>
            <button className={'in-nav'}><Link to={'/home/login'} className={'link'}>Login</Link></button>
            <span className={'user'}>{currentUser.username}</span>
        </>
    );
}

export default Navbar;