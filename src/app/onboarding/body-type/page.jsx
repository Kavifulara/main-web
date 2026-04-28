"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";


const maleTypes = [
  { name: 'Trapezoid', image: '/images/body-type/trapezoid.jpg' },
  { name: 'Rectangle', image: '/images/body-type/rectangle.jpg' },
  { name: 'Triangle', image: '/images/body-type/triangle.jpg' },
  { name: 'Inverted Triangle', image: '/images/body-type/inverted-triangle.jpg' },
  { name: 'Oval', image: '/images/body-type/oval.jpg' },
];

const femaleTypes = [
  { name: 'Round', image: '/images/body-type/round.jpg' },
  { name: 'Pear', image: '/images/body-type/pear.jpg' },
  { name: 'Rectangular', image: '/images/body-type/rectangle-f.jpg' },
  { name: 'Inverted Triangle', image: '/images/body-type/inverted-triangle-f.jpg' },
  { name: 'Hourglass', image: '/images/body-type/hourglass.jpg' },
];

export default function BodyTypePage() {
  const [gender, setGender] = useState("male");
  const router = useRouter();
  const [selected, setSelected] = useState(null);

  const handleSelect = (type) => {
    localStorage.setItem("bodyType", type);
    localStorage.setItem("gender", gender);
    router.push("/onboarding/skin-tone");
  };

  const types = gender === "male" ? maleTypes : femaleTypes;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Select Your Body Type
      </h1>

      {/* Gender Toggle */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setGender("male")}
          className={`px-4 py-2 rounded ${
            gender === "male" ? "bg-white text-black" : "bg-gray-700"
          }`}
        >
          Male
        </button>
        <button
          onClick={() => setGender("female")}
          className={`px-4 py-2 rounded ${
            gender === "female" ? "bg-white text-black" : "bg-gray-700"
          }`}
        >
          Female
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {types.map((item) => (
          <div
            key={item.name}
            onClick={() => {
              setSelected(item.name);
              handleSelect(item.name)
            }}
            className={`group cursor-pointer rounded-xl overflow-hidden
              transition-all duration-300
              backdrop-blur-xl bg-white/5 border border-white/10
              hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]
              
              ${selected === item.name
                ? "ring-2 ring-yellow-400 scale-105 shadow-[0_0_25px_rgba(250,204,21,0.25)]"
                : ""}
            `}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Text */}
            <div className="p-2 text-center">
              <p className="text-sm font-medium text-gray-200 group-hover:text-white">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}