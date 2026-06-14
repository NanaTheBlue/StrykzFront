import React, { useState } from "react";
import type { ChangeEvent } from "react";
type LoginForm = {
  email: string;
  password: string;
};

export default function Login() {
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://api.strykz.net/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
        credentials: "include",
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Login failed");
      }

      const data = await res.json();
      console.log("Logged in:", data);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Something went wrong");
    }
  };

  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center">
      <form
        className="flex flex-col max-w-100 w-75 bg-blue-700 rounded-md p-2"
        onSubmit={handleSubmit}
      >
        <h2 className="pb-4 m-0">Login</h2>
        <div className="gap-3 flex flex-col items-center">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="bg-[#16171d]"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="bg-[#16171d]"
            required
          />

          <button className="max-w-3xs" type="submit">
            Login
          </button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </form>
    </div>
  );
}
