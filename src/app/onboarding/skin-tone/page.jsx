"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const skinTones = [
  "#f2d6cb",
  "#e0ac69",
  "#c68642",
  "#8d5524",
  "#5c3836",
];

export default function SkinTonePage() {
  const [selected, setSelected] = useState(skinTones[2]);
  const router = useRouter();

  const handleContinue = () => {
    localStorage.setItem("skinTone", selected);
    router.push("/"); // next page later
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
      
      <h1 className="text-3xl font-bold mb-6">
        Select Your Skin Tone
      </h1>

      {/* Color Options */}
      <div className="flex gap-4 mb-8">
        {skinTones.map((tone) => (
          <div
            key={tone}
            onClick={() => setSelected(tone)}
            className={`w-12 h-12 rounded-full cursor-pointer border-4 ${
              selected === tone ? "border-white" : "border-transparent"
            }`}
            style={{ backgroundColor: tone }}
          ></div>
        ))}
      </div>

      {/* Message */}
      <p className="text-center text-gray-400 max-w-md mb-6">
        We are not racist. We know you are unique, so we just want to give you 
        the best thing so that you stand out of the league ❤️
      </p>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        className="px-6 py-3 bg-white text-black rounded-xl font-semibold"
      >
        Continue
      </button>
    </div>
  );
}