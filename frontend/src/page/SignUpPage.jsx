import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function SignUpPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    const cookies = new Cookies();

    const onSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setError(""); // Reset error state
        setSuccess(""); // Reset success state
        
        try {
            const response = await axios.post("http://localhost:3000/api/v1/users/register", {
                firstName,
                lastName,
                username,
                email,
                password
            });

            // Ensure your backend responds with a token
            if (response.data.token) {
                cookies.set("token", response.data.token, { path: '/' });
                setSuccess("Account created successfully!");
                navigate("/signin");
            } else {
                setError("Failed to create account: No token received");
            }
        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || "Failed to create account");
        }
    };

    return (
        <div className="flex mx-auto justify-center items-center h-screen">
            <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-2xl">
                <div className="text-center">
                    <h2 className="mt-6 text-4xl font-bold text-gray-900">Create Your Account</h2>
                    <p className="mt-2 text-gray-900 text-md">Join our e-commerce platform and start shopping today!</p>
                </div>
                {error && <div className="text-red-500 text-center">{error}</div>}
                {success && <div className="text-green-500 text-center">{success}</div>}
                <form className="mt-8 space-y-4" onSubmit={onSubmit}>
                    <div className="space-y-4 rounded-md shadow-sm">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="first-name" className="sr-only">First Name</label>
                                <input
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-primary sm:text-sm"
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="last-name" className="sr-only">Last Name</label>
                                <input
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-primary sm:text-sm"
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-primary sm:text-sm"
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-primary sm:text-sm"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                autoComplete="email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-primary sm:text-sm"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                autoComplete="new-password"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="relative py-3 flex justify-center w-full rounded-md border border-transparent bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center text-md">
                    <p className="text-gray-700">
                        Already have an account? <a className="font-medium text-slate-800 hover:text-slate-900" href="/signin">Sign in</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
