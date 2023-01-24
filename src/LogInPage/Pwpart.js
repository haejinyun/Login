import * as S from './index.styled';
import { AiFillLock } from 'react-icons/ai';
import { useState } from 'react';

function Pwpart({ PwCheck }) {
	const [pw, setPw] = useState('');

	const bringPw = (e) => {
		setPw(e.target.value);
		PwCheck(pw);
	};
	return (
		<>
			<S.InputBox>
				<S.IconBox>
					<AiFillLock className='icon' size='30' color='black' />
				</S.IconBox>
				<S.InputPart
					value={pw}
					type='password'
					placeholder='비밀번호 입력(영문대소문자, 특수문자 포함 8자리-20자리 )'
					onChange={bringPw}
				></S.InputPart>
			</S.InputBox>
		</>
	);
}

export default Pwpart;
