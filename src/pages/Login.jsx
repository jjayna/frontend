import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here

    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);

    // call the api
    fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        localStorage.setItem("solar-user", JSON.stringify(data));

        const isRedirecting = localStorage.getItem("solar-redirect");
        if (isRedirecting) {
          localStorage.removeItem("solar-redirect");
          navigate(isRedirecting);
          setLoading(false);
        } else {
          navigate("/");
          setLoading(false);
        }
      })
      .catch(() => {
        alert("Login failed");
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen  bg-[#1f1f1fde]">
      <div className="bg-black p-8 rounded-lg w-96 shadow-md text-black">
        <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={email}
            placeholder="Enter Your Email"
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-300 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={password}
            placeholder="Enter Your Password"
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white  py-2 px-4 rounded w-full flex gap-3 justify-center items-center"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading && <div className="loader"></div>} Login
        </button>

        <p className="text-center mt-4">
          Don&rsquo;t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
