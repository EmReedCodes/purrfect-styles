import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import { useContext } from "react"
import { UserContext } from "../../contexts/user.context"
import "./styles/navigation.styles.css"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { signOutUser } from "../../utils/firebase/firsbase.utils"
const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  //we want to await what signOutUser does
  
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
