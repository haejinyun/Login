import * as S from './index.styled';
import { BsFillPersonFill } from 'react-icons/bs';
import { useState } from 'react';

function IdPart({ IdCheck }) {
	const [id, setId] = useState('');

	const bringId = (e) => {
		setId(e.target.value);
		IdCheck(id);
	};

	return (
		<>
			<S.InputBox borderBottom='none'>
				<S.IconBox>
					<BsFillPersonFill className='icon' size='30' color='black' />
				</S.IconBox>
				<S.InputPart
					value={id}
					type='text'
					placeholder='이메일 입력(이메일 형식)'
					onChange={bringId}
				/>
			</S.InputBox>
		</>
	);
}

export default IdPart;
