import styled from 'styled-components';

export const Tittle = styled.p`
	font-size: 50px;
	font-weight: bold;
`;
export const BoxPart = styled.div`
	margin-top: 100px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const TittlelBack = styled.div`
	width: 300px;
`;

export const ButtonPart = styled.button`
	:hover {
		transition: 0.2s;
		transform: scale(1.03);
		background: black;
		color: white;
		border: 1px solid white;
	}
	cursor: pointer;
	width: 400px;
	height: 50px;
	margin-top: 30px;
	background: black;
	color: white;
	font-size: 17px;
	font-weight: bold;
	border: 1px solid white;

	background: white;
	color: black;
`;

export const InputBox = styled.div`
	display: flex;
	width: 400px;
	height: 50px;
	border: 1px solid;
	border-bottom: ${(props) => props.borderBottom}; //인자로 주어 각각 변경
`;

export const IconBox = styled.div`
	display: flex;
	margin-left: 8px;
	align-items: center;
	width: 40px;
	height: 50px;
`;

export const InputPart = styled.input`
	display: flex;
	justify-content: center;
	width: 400px;
	height: 50px;
	border: 1px;
	outline: none;
	background: none;
	font-size: 18x;
`;

export const warnpart = styled.div`
	visibility: ${(props) => props.warnvisible};
	font-size: 15px;
	width: 400px;
	text-align: left;
	margin-top: 15px;
	margin-bottom: 15px;
	color: red;
	//1순위: 아이디가 없다 => 아이디를 입력해주세요
	//2순위: 아이디는 O 비번 없어 => 비번을 입력해주세요
	//아이디나 비번이 틀렷다 => 아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.
`;
