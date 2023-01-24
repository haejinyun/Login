import * as S from './index.styled';
import { useEffect, useState } from 'react';

const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

function SignUpPwPart({ pwCheck }) {
	const [pw, setPw] = useState('');
	const [pwWarn, setPwWarn] = useState(false); // 만약 경고문을 띄워야 한다면 idWarn을 true로 바꾼다.

	const bringSPW = (e) => {
		setPw(e.target.value);
		pwCheck(pw);
	};

	useEffect(() => {
		//비동기적 처리이기 때문에 pw가 바뀔때마다 값을 찍고 함수에 값을 담아 보낼 수 있게 함.
		pwCheck(pw);
	}, [pw]);

	const pwFormCheck = () => {
		if (!pwRegex.test(pw)) {
			console.log('비번 형식 안맞음.');
			setPwWarn(true);
			//test = 'visible';
		} else {
			console.log('비번 형식 good');
			setPwWarn(false);
			//test = 'hidden';
		}
	};

	return (
		<>
			<S.InputBox>
				<S.InputPart
					value={pw}
					type='password'
					placeholder='비밀번호 입력(영문대소문자, 특수문자 포함 8자리-20자리 )'
					onChange={bringSPW}
					onBlur={pwFormCheck}
				></S.InputPart>
			</S.InputBox>
			{pwWarn && (
				<S.WarnMessage>
					비밀번호 형식이 올바르지 않습니다.
					<br />
					(영문대소문자, 특수문자 포함 8-20자리)
				</S.WarnMessage>
			)}
		</>
	);
}

export default SignUpPwPart;
