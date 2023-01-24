import * as S from './index.styled';

import { Link } from 'react-router-dom';

function login() {
	console.log('로그인');
}

function signin() {
	console.log('회원가입');
}

function MainPage() {
	return (
		<div>
			<S.Top />
			<S.BoxPart>
				<S.TittlelBack>
					<h1>Join us!</h1>
				</S.TittlelBack>
				<div></div>
				<Link to='/LogIn'>
					<S.Buttonform onClick={login}>로그인 하기</S.Buttonform>
				</Link>
				<S.ParentOr>
					<S.Or>--------</S.Or>
					<S.Or>또는</S.Or>
					<S.Or>--------</S.Or>
				</S.ParentOr>
				<Link to='/SignIn'>
					<S.Buttonform onClick={signin}>회원가입 하기</S.Buttonform>
				</Link>
			</S.BoxPart>
		</div>
	);
}

export default MainPage;
