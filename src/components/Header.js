"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleLogout = () => {
    supabase.auth.signOut();
    router.refresh();
  };

  return (
    <header className="sticky top-0 bg-brand">
      <div className="mx-auto flex h-[70px] max-w-screen-xl items-center justify-between px-4">
        <Link href="/dashboard" className="text-3xl font-bold text-white">
          Sregep
        </Link>
        <button onClick={handleLogout}>Keluar</button>
      </div>
    </header>
  );
}
