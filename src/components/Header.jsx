import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <div className="flex justify-around mx-auto text-center text-xl text-red-900  mt-4"> 
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
            </div>
        </div>
    );
};

export default Header;