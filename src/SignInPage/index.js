import * as S from './index.styled';
import React, { useState } from 'react';

import Tittle from './SignUpTittlepart';

import SignUpButtonPart from './SignUpButtonPart';
import SignUpIdPart from './SignUpIdPart';
import SignUpPwPart from './SignUpPwPart';
import SignUpRPwPart from './SignUpRPwPart';
import SignUpStuNumPart from './SignUpStuNumPart';
import SignUpPhoneNumPart from './SignUpPhoneNumPart';

import { Link } from 'react-router-dom';

function Signin() {
	const [pwIndex, setPwIndex] = useState('');

	const pwCheck = (pw) => {
		setPwIndex(pw);
	};
	//console.log('test값', pwIndex); //값이 하나씩 밀리면서 저장 된다. (마지막 문자가 저장 X)
	//비동기적이기때문인가? 그렇다면 해결채긍로는 useRef를 사용해야 하는 것인가.
	//console.log(typeof pwIndex); //string 값 찍힘
	return (
		<>
			<S.BoxPart>
				<Tittle />
				<SignUpIdPart />
				<SignUpPwPart pwCheck={pwCheck} />
				<SignUpRPwPart pw={pwIndex} />
				<SignUpStuNumPart />
				<SignUpPhoneNumPart />
				<SignUpButtonPart />
			</S.BoxPart>
		</>
	);
}

export default Signin;
