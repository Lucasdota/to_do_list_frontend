"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/shared/Spinner";

interface User {
	id: number;
	email: string;
	password: string;
}

interface Todos {
	id: Number;
	name: string;
	description: string;
	done: number;
	user_id: number | null;
}

export default function Dashboard() {
	const router = useRouter();
	const [user, setUser] = useState<User | null>(null);
	const [todos, setTodos] = useState<Todos[] | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const fetchUserInfo = async () => {
		try {
      const response = await fetch("/api/get", {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user information");
      }
      const data = await response.json();
			const { user, todos } = data;
      setUser(user);
			setTodos(todos);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
	}

	useEffect(() => {
		fetchUserInfo();
	}, [])
	
	const Logout = async () => {
		try {
      const response = await fetch("/api/logout", {
        method: "POST",
        credentials: "include", // include cookies in the request
      });

      if (response.ok) {
        console.log("Logged out successfully");
        router.push('/');
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("An error occurred while logging out:", error);
    }
	}

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10">
      {loading && (<Spinner width={8} height={8} />)}
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <>
          <h1 className="text-xl font-bold">Welcome to your dashboard</h1>
          <h2 className="italic mb-8">{user?.email}</h2>
          <section className="mb-8 rounded shadow shadow-black/20 w-4/5 min-h-96 bg-slate-50/60">
            {todos!.length > 0 ? (
              <ul>
                {todos!.map((todo, index) => (
                  <li key={index}>{todo.name}</li>
                ))}
              </ul>
            ) : (
              <button>Create To-do</button>
            )}
          </section>
        </>
      )}
      {!loading && (
        <button
          onClick={Logout}
          className="text-xs py-1 px-2 shadow bg-slate-50 shadow-black/20 rounded transition-transform duration-150 ease-in-out transform active:scale-95"
        >
          Logout
        </button>
      )}
    </main>
  );
}
