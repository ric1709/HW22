import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { authContext } from '../../store/authContext'

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
	const history = useHistory()
	const authCtx = useContext(authContext)
	const isLoggedIn = authCtx.isLoggedIn

	const logoutHandler = () => {
		authCtx.logout()
		history.replace('/auth')
	}

	return (
		<header className={classes.header}>
			<Link to='/'>
				<div className={classes.logo}>React Auth</div>
			</Link>
			<nav>
				<ul>
					{!isLoggedIn && (
						<li>
							<Link to='/auth'>Login</Link>
						</li>
					)}
					{isLoggedIn && (
						<li>
							<Link to='/profile'>Profile</Link>
						</li>
					)}
					{isLoggedIn && (
						<li>
							<button onClick={logoutHandler}>Logout</button>
						</li>
					)}
				</ul>
			</nav>
		</header>
	)
}

export default MainNavigation
