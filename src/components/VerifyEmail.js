import { useEffect, useState } from "react";
import { IoClose, IoMailUnreadOutline } from "react-icons/io5";

export default function VerifyEmail({ email, client, show }) {
  const [shown, setShown] = useState(show);
  const handleResendVerification = async (e) => {
    e.preventDefault();
    const { data, error } = await client.auth.resend({
      type: "signup",
      email,
    });
  };

  useEffect(() => {
    setShown(show);
  }, [show]);

  if (!shown) return;

  return (
    <div className="absolute left-0 top-0 flex h-full w-full items-center bg-white/70">
      <div className="relative rounded-lg border border-orange-300 bg-orange-100 px-4 py-8 text-center">
        <button
          className="absolute right-1 top-1"
          onClick={() => setShown(false)}
        >
          <IoClose size={24} />
        </button>
        <IoMailUnreadOutline size={48} className="mx-auto" />
        <h3 className="mt-6 text-lg font-bold">Tautan verifikasi terkirim!</h3>
        <p className="mt-2">
          Kami telah mengirim tautan verifikasi melalui email {email}. Terdapat
          kendala kirim ulang verifikasi{" "}
          <a
            href=""
            className="font-medium text-blue-700"
            onClick={handleResendVerification}
          >
            di sini
          </a>
        </p>
      </div>
    </div>
  );
}
