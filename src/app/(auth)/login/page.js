"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  async function onSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setError(null);

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
      callbackUrl: "/admin",
    });

    setIsSubmitting(false);

    if (!result?.ok) {
      setError("Username atau password salah.");
      return;
    }

    window.location.href = result.url ?? "/admin";
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 py-12">
      <h1 className="text-2xl font-bold text-foreground">Admin Login</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Masuk untuk mengelola konten portfolio.
      </p>

      <form className="mt-8 space-y-4" onSubmit={onSubmit}>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor="username">
            Username
          </label>
          <input
            className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-muted"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            required
            value={username}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor="password">
            Password
          </label>
          <input
            className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-muted"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            value={password}
          />
        </div>

        {error ? (
          <p className="rounded-sm border border-border bg-surface px-3 py-2 text-sm text-foreground">
            {error}
          </p>
        ) : null}

        <button
          className="w-full rounded-sm bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-ink disabled:opacity-60"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Signing in…" : "Sign in"}
        </button>
      </form>

      <p className="mt-6 text-xs text-muted-foreground">
        Default seed: username <span className="font-medium">admin</span>, password{" "}
        <span className="font-medium">admin123</span>
      </p>
    </div>
  );
}
