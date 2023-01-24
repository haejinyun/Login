import * as S from './index.styled';
import { Link } from 'react-router-dom';
//import React, { useState } from 'react';

//onst idRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
//const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

function SignUpButtonPart() {
	return (
		<>
			<S.ButtonPart>SIGNUP</S.ButtonPart>
			<Link to={'/'}>
				<S.ButtonPart>CANCEL</S.ButtonPart>
			</Link>
		</>
	);
}

export default SignUpButtonPart;
