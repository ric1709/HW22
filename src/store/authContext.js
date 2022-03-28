import React, { useState } from 'react'
import { useEffect } from 'react'
export const authContext = React.createContext({
	token: '',
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
})
export const AuthContextProvider = (props) => {
	const [token, setToken] = useState(null)

	const userIsloggedIn = !!token

	useEffect(()=>{
		const initToken=localStorage.getItem('@users-token')
		setToken(initToken)
	},[])

	const loginHandler = (token) => {
		setToken(token)
		localStorage.setItem('@users-token',token)
	}

	const logoutHandler = () => {
		setToken(null)
		localStorage.removeItem('@users-token')
	}
	const contextValue = {
		token: token,
		isLoggedIn: userIsloggedIn,
		login: loginHandler,
		logout: logoutHandler,
	}
	return (
		<authContext.Provider value={contextValue}>
			{props.children}
		</authContext.Provider>
	)
}
