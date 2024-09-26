import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const PasswordInput = ({ value, onChange, placeholder }) => {
	const [isShowPassword, setIsShowPassword] = useState(false);

	const toggleShowPassword = () => {
		setIsShowPassword(!isShowPassword);
	};

	return (
		<div className="flex items-center bg-cyan-600/5 px-5 rounded mb-3">
			<input value={value} onChange={onChange} placeholder={placeholder || 'Password'} className="w-full text-sm bg-transparent outline-none py-3 mr-3 rounded" type={isShowPassword ? 'text' : 'password'} />
			{isShowPassword ? (
				<FaRegEye
					size={22}
          onClick={() => toggleShowPassword()}
					className="text-slate-400 cursor-pointer"
				/>
			) : (
				<FaRegEyeSlash
					size={22}
					onClick={() => toggleShowPassword()}
					className="text-primary cursor-pointer"
				/>
			)}
		</div>
	);
};

export default PasswordInput;
