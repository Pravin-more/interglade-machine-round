import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Localstorage from "../../utils/storage/Localstorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [moNumber, setMoNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conCheckBox, setConCHeckBox] = useState(false);
  const [loginError, setLoginError] = useState(null);

  console.log(conCheckBox);

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    if (
      !email ||
      !password ||
      !name ||
      !age ||
      !gender ||
      !moNumber ||
      !conCheckBox
    ) {
      window.alert("Please fill all the fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setLoginError("Invalid email format");
      return;
    }

    if (password.length < 6) {
      setLoginError("Password must be at least 6 characters");
      return;
    }
    if (!/^\d+$/.test(moNumber)) {
      setLoginError("Mobile number must be numeric");
      return;
    }

    const response = await Localstorage.USERData.set({
      email,
      password,
      name,
      age,
      gender,
      moNumber,
      conCheckBox,
    });

    const isRegistered = Localstorage.USERData.get().email === email;

    if (isRegistered) {
      window.alert("already registered");
      navigate("/auth/login");
    } else {
      window.alert("Registration successful");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Registration</h2>
        {loginError && (
          <p className="text-red text-sm text-center mb-3 ">{loginError}</p>
        )}

        <form onSubmit={register} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />
          </div>
          {/* Age  */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

          {/* Age  */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Mobile Number  */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile no. <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="moNumber"
              value={moNumber}
              onChange={(e) => setMoNumber(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

          {/* Email  */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
              />
              <span
                className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>

          <div>
            {/* // true false checkbox */}
            <input
              type="checkbox"
              name="conCheckBox"
              checked={conCheckBox}
              onChange={(e) => setConCHeckBox(e.target.checked)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filled Data is correct <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
