import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utiles/firebase/firebase.util";
import "./navigation.style.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

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

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
