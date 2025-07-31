import Link from "next/link";
import MainHeader from "@/app/components/mainheader/index";

export default function Home() {
  return (
    <div className="">
      <MainHeader />
      <div className="flex items-center justify-center mx-auto h-[500px] p-3 gap-3">
        <Link className="bg-blue-400 p-3" href="/login">
          Giriş Yap
        </Link>
        <Link className="bg-blue-400 p-3" href="/register">
          Üye Ol
        </Link>
      </div>
    </div>
  );
}
