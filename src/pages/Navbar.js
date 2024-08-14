import {Link} from "react-router-dom";
import '../style/Navbar.css'
function Navbar() {
    return (
        <>
            <button className={'in-nav'}><Link to={'/home/list'} className={'link'}>List Product</Link></button>
            <button className={'in-nav'}><Link to={'/home/create'} className={'link'}>Add New</Link></button>
        </>
    );
}

export default Navbar;