"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  IoBookOutline,
  IoCalendarNumberOutline,
  IoChevronBack,
  IoChevronForward,
  IoClipboardOutline,
  IoHandLeftOutline,
  IoPeopleOutline,
  IoSpeedometerOutline,
} from "react-icons/io5";

const sidebarLink = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <IoSpeedometerOutline size={24} />,
  },
  {
    name: "Jadwal",
    href: "/dashboard/jadwal",
    icon: <IoCalendarNumberOutline size={24} />,
  },
  {
    name: "Presensi",
    href: "/dashboard/presensi",
    icon: <IoHandLeftOutline size={24} />,
  },
  {
    name: "Peserta",
    href: "/dashboard/presensi",
    icon: <IoPeopleOutline size={24} />,
  },
  {
    name: "Materi",
    href: "/dashboard/tugas",
    icon: <IoBookOutline size={24} />,
  },
  {
    name: "Cek Tugas",
    href: "/dashboard/presensi",
    icon: <IoClipboardOutline size={24} />,
  },
];

function SidebarLink({ href, icon, expanded, children }) {
  const currPath = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={`flex items-center space-x-4 rounded-lg p-4 leading-7 hover:bg-brand/10 lg:py-2 ${
          href === currPath ? "bg-brand/10 text-brand" : "text-zinc-600"
        }`}
      >
        <span className="mx-auto block lg:mx-0 lg:py-1">{icon}</span>
        <span className={`hidden ${expanded && "lg:block"}`}>{children}</span>
      </Link>
    </li>
  );
}

export default function Sidebar() {
  const [expandMenu, setExpandMenu] = useState(true);

  return (
    <aside
      className={`w-18 sticky top-[70px] h-screen border-r border-zinc-200 px-2 ${
        expandMenu ? "lg:w-64" : ""
      }`}
      style={{ height: "calc(100vh - 70px)" }}
    >
      <button
        className="absolute -right-5 top-4 h-8 w-8 rounded-full border border-zinc-200 bg-white shadow"
        onClick={() => setExpandMenu(!expandMenu)}
      >
        {expandMenu ? (
          <IoChevronBack size={24} className="ml-0.5 text-brand" />
        ) : (
          <IoChevronForward size={24} className="ml-0.5 text-brand" />
        )}
      </button>

      <ul className="mt-4 space-y-2 text-lg">
        {sidebarLink.map(({ name, href, icon }) => (
          <SidebarLink key={name} icon={icon} href={href} expanded={expandMenu}>
            {name}
          </SidebarLink>
        ))}
      </ul>
    </aside>
  );
}
