import Spinner from "@/components/shared/Spinner";
import React, { FormEvent, useState, useRef } from "react";
import { FaUser, FaEye } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface formDataObj {
  userEmail: string | null;
  userPass: string | null;
}

type Props = {};

const FormContainer = (props: Props) => {
  const [serverError, setServerError] = useState<string>("");
  const [passError, setPassError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [waiting, setWaiting] = useState<boolean>(false);
  const passErrorRef = useRef<HTMLSpanElement | null>(null);
  const serverErrorRef = useRef<HTMLSpanElement | null>(null);
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPassError("");
    // Accessing form data
    const formData = new FormData(e.target as HTMLFormElement);
    // Creating an object with the form data
    const formDataObj: formDataObj = {
      //the FormData object can hold various types of values, including files, so we need to explicitly specify the expected types for each form field
      userEmail: formData.get("user_email") as string | null,
      userPass: formData.get("user_pass") as string | null,
    };

    validateForm(formDataObj);
  };

  function validateForm(data: formDataObj) {	
    const email = data.userEmail;
    const password = data.userPass;

    // Validate password
    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?])(?=.{8,}).*$/;
    if (!regexPassword.test(data.userPass!)) {
      // Nice animations when clicking submit button for the password error message
      if (passErrorRef.current) {
        passErrorRef.current?.classList.remove("text-red-400");
        passErrorRef.current?.classList.add("text-slate-100");
        setTimeout(() => {
          passErrorRef.current?.classList.remove("text-slate-100");
          passErrorRef.current?.classList.add("text-red-400");
        }, 100);
      }
      setPassError(
        "Password must have at least 8 characters, one uppercase, one lowercase, and one special character."
      );
      return;
    }

    setWaiting(true);
    // SEND DATA TO THE SERVER
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
			credentials: "include"
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid email or password."); // Handle specific error
        }
        return response.json();
      })
      .then((responseData) => {
        // Handle successful response
        console.log("Data sent successfully:", responseData);
        setWaiting(false);
        router.push("/dashboard");
				setServerError("");
      })
      .catch((error) => {
        // Handle error
				console.log("chegou no error do validate");
        console.error("Error sending data:", error);
        setWaiting(false);
        if (serverErrorRef.current) {
          serverErrorRef.current?.classList.remove("text-red-400");
          serverErrorRef.current?.classList.add("text-slate-100");
          setTimeout(() => {
            serverErrorRef.current?.classList.remove("text-slate-100");
            serverErrorRef.current?.classList.add("text-red-400");
          }, 100);
        }
        setServerError(error.message);
      });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-3 w-full"
    >
      {/* email */}
      <div aria-label="email" className="flex flex-col w-full mb-1.5">
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
            aria-label="Put your email here"
            placeholder="your@email.com"
            required
            className="border-2 rounded tracking-wide focus:outline-neutral-500 h-8 focus:shadow-md pl-10 text-[.75rem] w-full"
          />
          <div className="absolute p-2.5 top-0.5 bottom-0.5 border-r border-neutral-100">
            <FaUser className="w-2.5 h-2.5" />
          </div>
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
            className="border-2 rounded tracking-wide focus:outline-neutral-500 h-8 focus:shadow-md pl-10 text-[.75rem] w-full pr-7"
          />
          <div
            aria-label="lock icon"
            className="absolute p-2.5 top-0.5 bottom-0.5 border-r border-neutral-100"
          >
            <FaLock className="w-2.5 h-2.5" />
          </div>
          <button
						type="button"
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
          </button>
        </div>
        <div className="min-h-1.5 flex mt-1 ml-2">
          {passError && (
            <span
              ref={passErrorRef}
              role="alert"
              aria-label="password field error"
              key="passError-span"
              className="text-red-400 text-[0.65rem] font-semibold leading-[0.75rem] md:text-[0.6rem] md:leading-[0.7rem] transition-all duration-100 ease-in-out"
            >
              {passError}
            </span>
          )}
        </div>
      </div>

      {serverError && (
        <span
          ref={serverErrorRef}
          role="alert"
          aria-label="email field error"
          key="emailError-span"
          className="text-red-400 h-1.5 flex mt-1 ml-2 text-[0.75rem] font-semibold leading-[0.75rem] md:text-[0.6rem] md:leading-[0.7rem] transition-all duration-100 ease-in-out"
        >
          {serverError}
        </span>
      )}

      {/* login button */}
      <button
        type="submit"
        aria-label="click here to login"
        className="text-[.75rem] w-4/5 bg-gradient-to-r from-green-700 to-green-500 text-white font-bold rounded-full py-1.5 shadow mt-2 transition-transform duration-150 ease-in-out transform active:scale-95"
      >
        {waiting ? <Spinner width={1} height={1} /> : "Login"}
      </button>
    </form>
  );
};

export default FormContainer;