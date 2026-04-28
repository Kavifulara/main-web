'use client';

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSignup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", user.user);
      
      // ✅ mark user as logged in
      localStorage.setItem("isLoggedIn", "true");

      // ✅ check onboarding
      const bodyType = localStorage.getItem("bodyType");

      if (!bodyType) {
        router.push("/onboarding/body-type");
      } else {
        router.push("/");
      }
    } catch (error : unknown) {
      toast.error((error as Error).message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Sign Up</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2"
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2"
      />

      <button
        onClick={handleSignup}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Create Account
      </button>
    </div>
  );
}