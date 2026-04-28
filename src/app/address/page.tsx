"use client";

import { useState , useEffect } from "react";
import toast from "react-hot-toast";

// 🔹 Types
type AddressForm = {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  landmark: string;
};

type LocationType = {
  lat: number;
  lng: number;
};



export default function AddressPage() {

  const [form, setForm] = useState<AddressForm>({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
  });
  
  const [showToast, setShowToast] = useState(false);

  // 🔹 Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [loadingLocation, setLoadingLocation] = useState(false);

  // 📍 Get current location
  const getLocation = () => {
    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        fetchAddress(pos.coords.latitude, pos.coords.longitude);
        setLoadingLocation(false);
      },
      () => {
        toast.error("Location permission denied");
        setLoadingLocation(false);
      }
    );
  };

  // 💾 Save address
  const handleSave = () => {
    const { name, phone, address, landmark, city, state, pincode } = form;

    // 🔴 Checks empty fields
    if (
      !name ||
      !phone ||
      !address ||
      !landmark ||
      !state ||
      !pincode
    ) {
      toast.error("Please fill all fields before saving!");
      return;
    }
  
    // 📞 Basic phone validation (10 digits)
    if (!/^[0-9]{10}$/.test(phone)) {
      toast.error("Enter a valid 10-digit phone number");
      return;
    }
  
    // 📮 Basic pincode validation (6 digits)
    if (!/^[0-9]{6}$/.test(pincode)) {
      toast.error("Enter a valid pincode");
      return;
    }

    localStorage.setItem("userAddress", JSON.stringify(form));
    
    setShowToast(true); //shows animation of address saved

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const fetchAddress = async (lat: number, lng: number) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await res.json();
  
      const address = data.address || {};
  
      setForm((prev) => ({
        ...prev,
        address: data.display_name || "",
        city: address.city || address.town || address.village || "",
        state: address.state || "",
        pincode: address.postcode || "",
      }));
    } catch (err) {
      console.log("Error fetching address", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#050505] text-white p-6">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#050505] text-white p-6 rounded-2xl shadow-xl border border-gray-700">

        <h1 className="text-2xl font-bold text-white mb-4">Your Address</h1>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input name="name" placeholder="Full Name"
            onChange={handleChange} className="border p-3 rounded-xl text-white" />
 
          <input name="phone" placeholder="Phone Number" 
            onChange={handleChange} className="border p-3 rounded-xl text-white" />

          <input name="landmark" placeholder="Nearest landmark (e.g. temple, mall)" 
            onChange={handleChange} className="border p-3 rounded-xl text-white md:col-span-2" />

          <h1 className="text-2xl font-bold text-white mb-4 md:col-span-2">Just click 'Use my location' to set your address and please check your location after clicking the button</h1>
          
          <input
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="border p-3 rounded-xl md:col-span-2 text-gray-100"
          />
 
          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="border p-3 rounded-xl md:col-span-2 text-white"
          />
 
          <input
            name="state"
            placeholder="State"
            value={form.state}
            onChange={handleChange}
            className="border p-3 rounded-xl md:col-span-2 text-white"
          />

          <input
            name="pincode"
            placeholder="Pincode"
            value={form.pincode}
            onChange={handleChange}
            className="border p-3 rounded-xl md:col-span-2 text-white"
          />

        </div>

          {/* LOCATION BUTTON */}
        <div className="flex justify-center ">
          <button
            onClick={getLocation}
            className="mt-3 px-4 py-2 bg-gray-600 text-white rounded-xl hover:scale-105 transition"
          >
            {loadingLocation ? "Fetching location..." : "Use My Location 📍"}
          </button>
        </div>

        {/* SAVE BUTTON */}
        <button
          onClick={handleSave}
          className="mt-6 w-full bg-gray-600 text-white py-3 rounded-xl text-lg font-semibold hover:scale-105 transition"
        >
          Save Address
        </button>

        {showToast && (
          <div className="fixed bottom-6 right-6 z-50">
    
            <div className="
              relative px-6 py-3 rounded-2xl 
              text-white text-sm font-medium
              bg-white/10 backdrop-blur-xl 
              border border-white/20
              shadow-[0_0_25px_rgba(255,255,255,0.08)]
              animate-toastIn [animation-delay:1.6s] [animation-fill-mode:forwards]
              overflow-hidden
            ">
              
              {/* Glow layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-transparent to-green-400/10 blur-xl opacity-70"></div>
        
              {/* Content */}
              <div className="relative flex items-center gap-2">
                <span className="text-green-400 text-lg">✔</span>
                Address Saved Successfully
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}