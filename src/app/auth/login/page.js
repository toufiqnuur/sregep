"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AuthForm from "~/components/AuthForm";
import VerifyEmail from "~/components/VerifyEmail";

export default function Login() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [hasUnverifyEmail, setHasUnverifyEmail] = useState("");

  const handleLogin = async (cradentials) => {
    await supabase.auth.signInWithPassword(cradentials);
    router.refresh();
  };

  useEffect(() => {
    if (localStorage.sregepUnverifyEmail) {
      setHasUnverifyEmail(localStorage.sregepUnverifyEmail);
    }
  }, []);

  return (
    <>
      <AuthForm type="login" onSubmit={handleLogin} />
      <VerifyEmail
        email={hasUnverifyEmail}
        client={supabase}
        show={hasUnverifyEmail}
      />
    </>
  );
}
