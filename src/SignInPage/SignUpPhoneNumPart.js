import { useState, useEffect } from 'react';
import * as S from './index.styled';

function SignUpPhoneNumPart() {
	const [phoneNum, setPhoneNum] = useState('');

	const bringPhoneNum = (e) => {
		setPhoneNum(e.target.value);
		///		console.log(phoneNum);
	};

	useEffect(() => {
		if (phoneNum.length === 10) {
			setPhoneNum(phoneNum.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
		}
		if (phoneNum.length === 13) {
			setPhoneNum(phoneNum.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
		}
	}, [phoneNum]);

	return (
		<>
			<S.InputBox>
				<S.InputPart
					value={phoneNum}
					onChange={bringPhoneNum}
					type='text'
					placeholder='전화번호 입력'
				></S.InputPart>
			</S.InputBox>
		</>
	);
}

export default SignUpPhoneNumPart;
