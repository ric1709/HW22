import React from 'react'
import { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthPage from '../pages/AuthPage'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import { authContext } from '../store/authContext'
import PrivateRoute from './PrivateRoute'

function AppRoutes() {
	const { isLoggedIn } = useContext(authContext)
	return (
		<Switch>
			<Route path='/' exact>
				<HomePage />
			</Route>
      <PrivateRoute
				component={<AuthPage />}
				path={'/auth'}
				when={!isLoggedIn}
				to={'/'}
			/>
			<PrivateRoute
				component={<ProfilePage />}
				path={'/profile'}
				when={isLoggedIn}
				to={'/auth'}
			/>
		</Switch>
	)
}

export default AppRoutes
