import Header from "~/components/Header";
import {
  IoBookOutline,
  IoCalendarNumberOutline,
  IoClipboardOutline,
  IoHandLeftOutline,
  IoPeople,
} from "react-icons/io5";
import Link from "next/link";
import cardTheme from "~/style/dashboard.module.css";

function MenuCard({ href, icon, theme, children }) {
  return (
    <Link href={href}>
      <div
        className={`${theme} flex items-center space-x-4 rounded-xl px-7 py-6 text-white`}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/25">
          {icon}
        </div>
        <div className="text-2xl font-semibold">{children}</div>
      </div>
    </Link>
  );
}

export default function Home() {
  const dashboardMenu = [
    {
      name: "Jadwal",
      icon: <IoCalendarNumberOutline size={32} />,
      href: "/",
      theme: cardTheme.theme_blue,
    },
    {
      name: "Presensi",
      icon: <IoHandLeftOutline size={32} />,
      href: "/",
      theme: cardTheme.theme_green,
    },
    {
      name: "Peserta",
      icon: <IoPeople size={32} />,
      href: "/",
      theme: cardTheme.theme_amber,
    },
    {
      name: "Materi",
      icon: <IoBookOutline size={32} />,
      href: "/",
      theme: cardTheme.theme_rose,
    },
    {
      name: "Cek Tugas",
      icon: <IoClipboardOutline size={32} />,
      href: "/",
      theme: cardTheme.theme_violet,
    },
  ];

  return (
    <>
      <Header />
      <main className="mx-auto mt-10 max-w-screen-xl px-4">
        <h3 className="text-3xl font-bold">Dashboard</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {dashboardMenu.map((menu, idx) => (
            <MenuCard
              key={idx}
              href={menu.href}
              icon={menu.icon}
              theme={menu.theme}
            >
              {menu.name}
            </MenuCard>
          ))}
        </div>
      </main>
    </>
  );
}
