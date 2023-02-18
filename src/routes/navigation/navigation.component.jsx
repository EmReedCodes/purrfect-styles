import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import { useContext } from "react"
import { UserContext } from "../../contexts/user.context"
import './styles/navigation.styles.css'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    console.log(currentUser)
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className="logo" />
                    </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                    SHOP
                    </Link>
                    <Link className="nav-link" to='/auth'>
                    SIGNIN
                    </Link>
                </div>
            </div>
            <Outlet />
      </Fragment>
  )
}

export default Navigation
