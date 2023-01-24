import * as S from './index.styled';
import React, { useState } from 'react';
import Tittle from './Tittlepart';
import IdPart from './IdPart';
import Pwpart from './Pwpart';
import ButtonPart from './ButtonPart';

function Login() {
	const [idIndex, setIdIndex] = useState('');
	const [pwIndex, setPwIndex] = useState('');

	const IdCheck = (id) => {
		setIdIndex(id);
	};
	const PwCheck = (pw) => {
		setPwIndex(pw);
	};

	return (
		<>
			<S.BoxPart>
				<Tittle />
				<IdPart IdCheck={IdCheck} />
				<Pwpart PwCheck={PwCheck} />
				<ButtonPart id={idIndex} pw={pwIndex} />
			</S.BoxPart>
		</>
	);
}

export default Login;
