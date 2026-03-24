import React, { useState } from "react";
import type { ChangeEvent } from "react";

type RegisterForm = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const [form, setForm] = useState<RegisterForm>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Basic client-side validation
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("https://api.strykz.net/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password,
          confirmpassword: form.confirmPassword,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Register failed");
      }

      const data = await res.json();
      console.log("Registered:", data);

      setForm({ username: "", email: "", password: "", confirmPassword: "" });
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        name="username"
        type="text"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        required
      />

      <button type="submit">Register</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
