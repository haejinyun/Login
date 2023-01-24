import * as S from './index.styled';
import React, { useState, useEffect } from 'react';

function SignUpStuNumPart() {
	//const majorNum = '';

	const [sNum, setSNum] = useState('');
	const [majors, setMajor] = useState(''); // 만약 경고문을 띄워야 한다면 idWarn을 true로 바꾼다.
	let check = '';
	const majorCheck = (major) => {
		//호이스팅을 위해 화살표 함수를 쓴다고 하는데 이함수는 아래서 활용하는데 그러면 화살표 쓰면 알아서 되는거 아님? 아닌가 개소린가
		if (major === '136') {
			//console.log('컴퓨터공학부');
			setMajor('컴퓨터공학부');
		} else if (major === '151') {
			//console.log('디자인공학부');
			setMajor('디자인공학부');
		} else {
			setMajor('');
		}
	};

	const bringSNum = (e) => {
		setSNum(e.target.value);
	};

	useEffect(() => {
		//비동기적 처리이기 때문에 pw가 바뀔때마다 값을 찍고 함수에 값을 담아 보낼 수 있게 함.
		// console.log(sNum);
		// console.log(sNum.length);
		if (sNum.length >= 6) {
			check = sNum.slice(4, 7);
			majorCheck(check);
		} else if (sNum.length < 6) {
			setMajor('');
		}
	}, [sNum]);

	const majorbring = () => {
		majorCheck(check);
	};

	return (
		<>
			<S.InputBox>
				<S.InputPart
					value={sNum}
					onChange={bringSNum}
					onBlur={majorbring}
					type='text'
					placeholder='학번입력(숫자 10자리)'
					maxLength={10}
				></S.InputPart>
			</S.InputBox>
			<S.SNumMessage>{majors}</S.SNumMessage>
		</>
	);
}

export default SignUpStuNumPart;
