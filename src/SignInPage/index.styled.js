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
	flex-direction: column;
	width: 400px;
	height: 50px;
	border: 1px solid;
	margin-bottom: 10px;
	margin-top: 30px;
	border-bottom: ${(props) => props.borderBottom}; //인자로 주어 각각 변경
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

export const WarnMessage = styled.div`
	width: 400px;
	text-align: left;
	color: red;
	//visibility: ${(props) => props.warnMessage};
`;

export const SNumMessage = styled.div`
	width: 400px;
	text-align: left;
	color: grey;
	//visibility: ${(props) => props.warnMessage};
`;
