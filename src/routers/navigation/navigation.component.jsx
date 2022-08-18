import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utiles/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import "./navigation.style.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    // const signOutHandler = () => {
    //     signOutUser();
    //     setCurrentUser(null);
    // }

    return (
        <Fragment>
            <div className="navigation">
                <div>
                    <Link className="nav-logo" to='/'>
                        <CrwnLogo className="logo" />
                    </Link>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ?
                        (<span className="nav-link" onClick={signOutUser}> SIGN OUT </span>) :
                        (<Link className="nav-link" to='/auth'>
                            SIGN IN
                        </Link>)}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
