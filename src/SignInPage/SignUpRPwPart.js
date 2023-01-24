import * as S from './index.styled';
import React, { useState } from 'react';

function SignUpRPwPart({ pw }) {
	const [rPw, setRPw] = useState('');
	const [rRwWarn, setRPwWarn] = useState(false); // 만약 경고문을 띄워야 한다면 idWarn을 true로 바꾼다.

	const bringRPW = (e) => {
		setRPw(e.target.value);
	};

	const pwSameCheck = () => {
		//console.log('처음 입력한 비번', pw);
		//console.log('다시 입력한 비번', rPw);
		if (pw === rPw) {
			//console.log('비밀번호가 일치힙나다.');
			setRPwWarn(false);
		} else {
			//console.log('비밀번호가 일치하지 않습니다. 다시 입력하시오.');
			setRPwWarn(true);
		}
	};

	return (
		<>
			<S.InputBox>
				<S.InputPart
					value={rPw}
					onBlur={pwSameCheck}
					onChange={bringRPW}
					type='password'
					placeholder='비밀번호 재확인'
				></S.InputPart>
			</S.InputBox>
			{rRwWarn && <S.WarnMessage>비밀번호가 일치하지 않습니다.</S.WarnMessage>}
		</>
	);
}

export default SignUpRPwPart;
