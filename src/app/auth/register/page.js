"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AuthForm from "~/components/AuthForm";
import VerifyEmail from "~/components/VerifyEmail";

export default function Register() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [hasUnverifyEmail, setHasUnverifyEmail] = useState("");

  const handleRegister = async (cradentials) => {
    await supabase.auth.signUp({
      ...cradentials,
      options: { emailRedirectTo: location.origin + "/auth/callback" },
    });
    localStorage.sregepUnverifyEmail = cradentials.email;
    setHasUnverifyEmail(cradentials.email);
    router.refresh();
  };

  useEffect(() => {
    if (window && localStorage.sregepUnverifyEmail) {
      setHasUnverifyEmail(localStorage.sregepUnverifyEmail);
    }
  }, [hasUnverifyEmail]);

  return (
    <>
      <AuthForm type="register" onSubmit={handleRegister} />;
      <VerifyEmail
        email={hasUnverifyEmail}
        client={supabase}
        show={hasUnverifyEmail}
      />
    </>
  );
}
