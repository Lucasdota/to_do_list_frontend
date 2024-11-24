import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaUser, FaEye } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";

interface formDataObj {
  userEmail: string | null;
  userPass: string | null;
  passConfirm: string | null;
}

interface formValidated {
  userEmail: boolean;
  userPass: boolean;
}

const Form = () => {
  const [emailError, setEmailError] = useState<string>("");
  const [passError, setPassError] = useState<string>("");
  const [confirmError, setConfirmError] = useState<string>("");
  const [submittedOnce, setSubmittedOnce] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>("");

	function validateForm(data: formDataObj) {
		const errors = [];
		if (data.userEmail === "") {
			setEmailError("Enter a valid email.");
			errors.push("emailError");
		}
		if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(data.userPass!)) {
			setPassError("Please enter, at least, an uppercase and a lowercase letter, a number and an special character.");
			errors.push("passError");
		}

		// SEND DATA TO THE SERVER
		if (errors.length === 0) {
			const createAccount = async (username: string|null, password: string|null) => {
        		const url = "http://localhost:8080/users"; // Adjust the URL as needed

				const data = {
					username: username,
					password: password,
				};

				try {
					const response = await fetch(url, {
						method: "POST",
						headers: {
						"Content-Type": "application/json",
						},
						body: JSON.stringify(data),
					});

					if (!response.ok) {
						throw new Error(
						"Network response was not ok " + response.statusText
						);
					}

					const result = await response.json();
					console.log("Account created successfully:", result);
				} catch (error) {
					console.error("Error creating account:", error);
				}
			};

			createAccount(data.userEmail, data.userPass);
		} else {
		// Handle validation errors
		// console.error("Validation errors:", errors);
		}
 	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		// checks the inputs in each interaction when already submitted once
		setSubmittedOnce(true);
		const formData = new FormData(e.target as HTMLFormElement);
		const formDataObj: formDataObj = {
		userEmail: formData.get("user_email") as string | null,
		userPass: formData.get("user_pass") as string | null,
		passConfirm: formData.get("pass_confirm") as string | null,
		};

			// VALIDATE INPUTS
			//email
			let emailValidated = false;
			if (
		formDataObj.userEmail === "" ||
		!/\S+@\S+\.\S+/.test(formDataObj.userEmail!)
		) {	
				console.log("test");		
		setEmailError("Enter a valid email");
		} else {			
		setEmailError("");
		emailValidated = true;
		}
			//password
			let passValidated = false;
			if (
		formDataObj.userPass === "" ||
		!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
			formDataObj.userPass!
		)
		) {
		setPassError(
			"Please enter, at least, an uppercase and a lowercase letter, a number and an special character."
		);
		} else {
			setPassError("");
			passValidated = true;
		}	
			
		// only send to the server if the inputs were all validated
		if (emailValidated && passValidated) {
			console.log(formDataObj);
			validateForm(formDataObj);
		}
	}; 

	function validateEmailOnChange(e: ChangeEvent<HTMLInputElement>) {
		if (!submittedOnce) return;

		if (e.target.value === "" || !/\S+@\S+\.\S+/.test(e.target.value)) {
		setEmailError("Enter a valid email.");
		} else {
		setEmailError("");
		}
	}

	function validatePasswordOnChange(e: ChangeEvent<HTMLInputElement>) {
			// compare passwords
			setPasswordValue(e.target.value);
		if (!submittedOnce) return;   
		// ^: in the beginning of an string.
		// (?=.*[a-z]): at least a lowercase.
		// (?=.*[A-Z]): at least an uppercase.
		// (?=.*\d): at least a number.
		// (?=.*[@$!%*?&]): at least an special character.
		// [A-Za-z\d@$!%*?&]{8,}: verify if the actual value has at least 8 characters.
		// $: at the end of the string.
		if (
		e.target.value === "" ||
		!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
			e.target.value
		)
		) {
		setPassError(
			"Please enter, at least, an uppercase and a lowercase letter, a number and an special character."
		);
		} else {
		setPassError("");
		}
	}

		function validateConfirmPassOnChange(e: ChangeEvent<HTMLInputElement>) {
		setConfirmPasswordValue(e.target.value)
	}

	//show error when both passwords are not the same in each interaction
	useEffect(() => {
	if (!submittedOnce) return;

	if (passwordValue !== confirmPasswordValue) {
		setConfirmError("Passwords are not the same.");
	} else {
		setConfirmError("");
	}
	}, [passwordValue, submittedOnce, confirmPasswordValue]); 

	return (
		<form
		onSubmit={handleSubmit}
		className="flex flex-col items-center justify-center gap-3 w-full"
		>
		{/* email */}
		<div aria-label="email" className="flex flex-col w-full">
			<label
			htmlFor="user_email"
			className="text-[.75rem] font-bold text-neutral-400 mb-1"
			>
			Your email
			</label>
			<div className="relative flex items-center">
			<input
				id="user_email"
				name="user_email"
				type="email"
				autoComplete="email"
				aria-label="put your email here"
				placeholder="your@email.com"
				required
				onChange={validateEmailOnChange}
				className="border-2 rounded tracking-wide focus:outline-neutral-500 h-8 focus:shadow-md pl-10 text-[.75rem] w-full"
			/>
			<div className="absolute p-2.5 top-0.5 bottom-0.5 border-r border-neutral-100">
				<FaUser className="w-2.5 h-2.5" />
			</div>
			</div>
			<div className="h-1.5 flex mt-1 ml-2">
			{emailError && (
				<span
				role="alert"
				aria-label="email field error"
				key="emailError-span"
				className="text-red-400 text-[0.65rem] font-semibold leading-[0.75rem] md:text-[0.6rem] md:leading-[0.7rem]"
				>
				{emailError}
				</span>
			)}
			</div>
		</div>

		{/* password */}
		<div aria-label="senha" className="flex flex-col w-full">
			<label
			htmlFor="user_pass"
			className="text-[.75rem] font-bold text-neutral-400 mb-1"
			>
			Your password
			</label>
			<div className="relative flex items-center">
			<input
				id="user_pass"
				name="user_pass"
				type={showPassword ? "text" : "password"}
				autoComplete="current-password"
				aria-label="put your password here"
				placeholder="Password123!"
				required
				onChange={validatePasswordOnChange}
				className="border-2 rounded tracking-wide focus:outline-neutral-500 h-8 focus:shadow-md pl-10 text-[.75rem] w-full pr-7"
			/>
			<div
				aria-label="lock icon"
				className="absolute p-2.5 top-0.5 bottom-0.5 border-r border-neutral-100"
			>
				<FaLock className="w-2.5 h-2.5" />
			</div>
			<div
				role="button"
				id="show_pass"
				aria-label="click to show/hide password"
				onClick={() => setShowPassword((prev) => !prev)}
				className="absolute right-2.5"
			>
				<FaEye
				className={`w-3 h-3  ${
					showPassword ? "text-neutral-600" : "text-neutral-400"
				}`}
				/>
			</div>
			</div>
			<div className="min-h-1.5 flex mt-1 ml-2">
			{passError && (
				<span
				role="alert"
				aria-label="password field error"
				key="passError-span"
				className="text-red-400 text-[0.65rem] font-semibold leading-[0.75rem] md:text-[0.6rem] md:leading-[0.7rem]"
				>
				{passError}
				</span>
			)}
			</div>
		</div>

		{/* confirm password */}
		<div aria-label="senha" className="flex flex-col w-full">
			<label
			htmlFor="pass_confirm"
			className="text-[.75rem] font-bold text-neutral-400 mb-1"
			>
			Confirm your password
			</label>
			<div className="relative flex items-center">
			<input
				id="pass_confirm"
				name="pass_confirm"
				type={showConfirm ? "text" : "password"}
				aria-label="confirm your password here"
				placeholder="Password123!"
				required
				autoComplete="new-password"
				onChange={validateConfirmPassOnChange}
				className="border-2 rounded tracking-wide focus:outline-neutral-500 h-8 focus:shadow-md pl-10 text-[.75rem] w-full pr-7"
			/>
			<div
				aria-label="lock icon"
				className="absolute p-2.5 top-0.5 bottom-0.5 border-r border-neutral-100"
			>
				<FaLock className="w-2.5 h-2.5" />
			</div>
			<div
				role="button"
				id="show_pass_confirm"
				aria-label="click to show/hide password"
				onClick={() => setShowConfirm((prev) => !prev)}
				className="absolute right-2.5"
			>
				<FaEye
				className={`w-3 h-3  ${
					showConfirm ? "text-neutral-600" : "text-neutral-400"
				}`}
				/>
			</div>
			</div>
			<div className="min-h-1.5 flex mt-1 ml-2">
			{confirmError && (
				<span
				role="alert"
				aria-label="confirm password field error"
				key="confirmError-span"
				className="text-red-400 text-[0.65rem] font-semibold leading-[0.75rem] md:text-[0.6rem] md:leading-[0.7rem]"
				>
				{confirmError}
				</span>
			)}
			</div>
		</div>

		{/* sign in button */}
		<button
			type="submit"
			aria-label="click to submit"
			className="text-[.75rem] w-4/5 bg-gradient-to-r from-green-700 to-green-500 text-white font-bold rounded-full py-1.5 shadow mt-2"
		>
			Create
		</button>
		</form>
	);
};

export default Form;
