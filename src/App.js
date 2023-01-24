//import MainPage from './MainPage';
import Login from './LogInPage';
import MainPage from './MainPage';
import Signin from './SignInPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import styled from 'styled-components';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<MainPage />} path='/' />
					<Route element={<Login />} path='/LogIn' />
					<Route element={<Signin />} path='/SignIn' />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
