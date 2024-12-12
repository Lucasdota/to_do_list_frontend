import { useRouter } from 'next/navigation';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { LiaWindowCloseSolid } from "react-icons/lia";

type Props = {
  setMenu: Dispatch<SetStateAction<boolean>>;
  setRedirectPopUp: Dispatch<SetStateAction<boolean>>;
  logout: () => void;
};

export default function ConfigMenu({ setMenu, setRedirectPopUp, logout }: Props) {
  const [isSurePopUp, setIsSurePopUp] = useState<boolean>(false);
  const configSection = useRef<HTMLUListElement>(null);
  const router = useRouter();

  const Delete = async () => {
    try {
      const response = await fetch("http://localhost:8080/user", {
        method: "DELETE",
				credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const errorMessage = `Error: ${response.status} - ${response.statusText}`;
      } else {
        setRedirectPopUp(true);
        setMenu(false);
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        configSection.current &&
        !configSection.current.contains(event.target as Node)
      ) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    // cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setMenu]);

  return (
    <ul
      ref={configSection}
      className="absolute w-full px-2 h-full z-10 bg-slate-200/30 backdrop-blur-lg flex flex-col items-center justify-center gap-2"
    >
      <button
        onClick={() => setMenu(false)}
        className="absolute right-8 top-4 text-neutral-500"
      >
        <LiaWindowCloseSolid />
      </button>
      {isSurePopUp ? (
        <li className="max-w-72 flex flex-col items-center justify-center gap-2">
          <p className="text-sm text-center">
            Are you sure you want to delete your account from our database?
          </p>
          <div className="flex gap-2 items-center justify-center">
            <button
              onClick={Delete}
              className="text-[0.65rem] py-1 px-2 shadow bg-slate-50 shadow-black/20 rounded transition-transform duration-150 ease-in-out transform active:scale-95 text-red-500"
            >
              Yes
            </button>
            <button
              onClick={() => setIsSurePopUp(false)}
              className="text-[0.65rem] py-1 px-2 shadow bg-slate-50 shadow-black/20 rounded transition-transform duration-150 ease-in-out transform active:scale-95"
            >
              No
            </button>
          </div>
        </li>
      ) : (
        <>
          <li>
            <button
              onClick={() => setIsSurePopUp(true)}
              className="text-[0.65rem] py-1 px-2 shadow bg-slate-50 shadow-black/20 rounded transition-transform duration-150 ease-in-out transform active:scale-95 text-red-500"
            >
              Delete Account
            </button>
          </li>
          <li>
            <button
              onClick={logout}
              className="text-xs md:text-[0.7rem] sm:text-[0.65rem] py-1 px-2 shadow bg-slate-50 shadow-black/20 rounded transition-transform duration-150 ease-in-out transform active:scale-95"
            >
              Logout
            </button>
          </li>
        </>
      )}
    </ul>
  );
}
