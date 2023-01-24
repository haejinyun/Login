import * as S from './index.styled';
import React, { useState } from 'react';

const idRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

const warncode = [
	'',
	'아이디를 입력해주세요.',
	'비밀번호를 입력해주세요.',
	'아이디 또는 비밀번호의 형식이 잘못 되었습니다.',
];

function ButtonPart({ id, pw }) {
	const [warn, setWarn] = useState(0);

	const buttonIdPwCheck = () => {
		console.log(id, pw);
		console.log('버튼 눌렸음.');
		if (!idRegex.test(id) || !pwRegex.test(pw)) {
			setWarn(3);
		} else if (idRegex.test(id) && pwRegex.test(pw)) {
			setWarn(0);
			alert('로그인 가능');
		}
	};

	return (
		<>
			<S.warnpart>{warncode[warn]}</S.warnpart>
			<S.ButtonPart onClick={buttonIdPwCheck}>LOGIN</S.ButtonPart>
		</>
	);
}

export default ButtonPart;
