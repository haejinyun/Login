import * as S from './index.styled';
import { useState } from 'react';
//import { useState } from 'react';
const idRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

function SignUpIdPart() {
	const [signUpId, setSignUpId] = useState('');
	const [idWarn, setIdWarn] = useState(false); // 만약 경고문을 띄워야 한다면 idWarn을 true로 바꾼다.

	const bringId = (e) => {
		setSignUpId(e.target.value);
	};

	const idFormCheck = () => {
		console.log(signUpId);
		if (!idRegex.test(signUpId)) {
			//console.log('이메일 형식 안맞음.');
			setIdWarn(true);
			//console.log('상태값 ', idWarn);
		} else {
			//console.log('이메일 형식 good');
			setIdWarn(false);
		}
	};

	return (
		<>
			<S.InputBox>
				<S.InputPart
					value={signUpId}
					type='text'
					placeholder='이메일 입력(이메일 형식)'
					onChange={bringId}
					onBlur={idFormCheck}
				></S.InputPart>
			</S.InputBox>
			{idWarn && <S.WarnMessage>이메일 형식이 올바르지 않습나다. </S.WarnMessage>}
		</>
	);
}

export default SignUpIdPart;
