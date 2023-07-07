import Image from "next/image";

export default function AuthLayout({ children }) {
  return (
    <div className="mx-auto mt-16 max-w-md px-6">
      <Image
        src="/logo.png"
        width={160}
        height={53}
        className="mx-auto md:mt-8"
        alt="Sregep logo"
      />
      <div className="relative mt-16">{children}</div>
    </div>
  );
}
