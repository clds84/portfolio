// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
// import Header from './components/shared/Header'

import Home from './components/Home'

const App = () => {
	
		return (
			<Fragment>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Fragment>
		)
}

export default App


// //this is everything inside <Fragment>

// 	{/* <Header user={user} /> */}
// 	<Routes>
// 	<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
// 	{/* <Route
// 		path='/sign-up'
// 		element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
// 	/>
// 	<Route
// 		path='/sign-in'
// 		element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
// 	/> */}
// {/* <Route
// path='/sign-out'
// element={
// <RequireAuth user={user}>
// <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
// </RequireAuth>
// }
// /> */}
// {/* <Route
// path='/change-password'
// element={
// <RequireAuth user={user}>
// <ChangePassword msgAlert={msgAlert} user={user} />
// </RequireAuth>}
// /> */}
// </Routes>
// {/* {msgAlerts.map((msgAlert) => (
// 	<AutoDismissAlert
// 		key={msgAlert.id}
// 		heading={msgAlert.heading}
// 		variant={msgAlert.variant}
// 		message={msgAlert.message}
// 		id={msgAlert.id}
// 		deleteAlert={deleteAlert}
// 	/>
// ))} */}