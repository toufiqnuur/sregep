import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

function Label(props) {
  return (
    <label className="mb-2 block text-sm font-medium text-gray-900" {...props}>
      {props.children}
    </label>
  );
}

function InputForm(props) {
  return (
    <input
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      {...props}
    />
  );
}

export default function AuthForm({ type, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const supabase = createClientComponentClient();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "register" && password !== confirmPassword) {
      alert("Kata Sandi tidak cocok");
    } else {
      onSubmit({ email, password });
    }
  };

  const handleOAuth = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: location.origin + "/dashboard",
      },
    });
  };

  return (
    <form className="mt-16" onSubmit={handleSubmit}>
      <button
        type="button"
        className="flex w-full items-center justify-center rounded-lg bg-gray-200 px-5 py-2.5 text-center text-sm font-medium hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        onClick={handleOAuth}
      >
        <FcGoogle size={20} className="mr-4" />
        <span>Lanjutkan dengan Google</span>
      </button>

      <span className="mt-6 block text-center text-sm text-gray-500">
        — Atau —
      </span>

      <div class="mt-6">
        <Label for="email">Email</Label>
        <InputForm
          type="email"
          id="email"
          placeholder="john.doe@sregep.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div class="mt-6">
        <Label for="password">Kata Sandi</Label>
        <InputForm
          type="password"
          id="password"
          placeholder="•••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {type === "register" && (
        <div class="mt-6">
          <Label for="confirm-password">Konfirmasi Kata Sandi</Label>
          <InputForm
            type="password"
            id="confirm-password"
            placeholder="•••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
      )}

      <button
        type="submit"
        className="mt-8 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        {type === "register" ? "Daftar" : "Masuk"}
      </button>

      <div className="my-8 text-center text-gray-900">
        {type === "register" ? (
          <>
            Sudah punya akun?{" "}
            <Link href="/auth/login" className="font-medium text-blue-700">
              Masuk
            </Link>
          </>
        ) : (
          <>
            Belum punya akun?{" "}
            <Link href="/auth/register" className="font-medium text-blue-700">
              Daftar
            </Link>
          </>
        )}
      </div>
    </form>
  );
}
