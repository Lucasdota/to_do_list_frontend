"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
	const router = useRouter();
	
  useEffect(() => {
    // You can fetch user data here if needed
  }, []);

	const Logout = async () => {
		try {
      const response = await fetch("/api/logout", {
        method: "POST",
        credentials: "include", // Include cookies in the request
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
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
			<button onClick={Logout}>Logout</button>
    </div>
  );
}
