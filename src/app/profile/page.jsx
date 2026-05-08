"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [bodyType, setBodyType] = useState("");
  const [skinTone, setSkinTone] = useState("");

  useEffect(() => {
    setBodyType(localStorage.getItem("bodyType"));
    setSkinTone(localStorage.getItem("skinTone"));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#050505] text-white p-6">

      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

      {/* Profile Card */}
      <div className="bg-gray-800 backdrop-blur-lg border border-white/50 border p-6 rounded-2xl shadow-xl max-w-md">

        <p className="text-gray-300 mb-2">Body Type</p>
        <h2 className="text-xl font-semibold mb-4">{bodyType}</h2>

        <p className="text-gray-300 mb-2">Skin Tone</p>
        <div
          className="w-16 h-16 rounded-full border mb-4"
          style={{ backgroundColor: skinTone }}
        ></div>

      </div>

    </div>
  );
}