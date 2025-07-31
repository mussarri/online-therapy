import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <header className="h-[60px] bg-gray-300 flex items-center justify-end p-3 mx-auto gap-3">
        <Link href="/therapist/register">Uzman Basvuru</Link>
        <Link href="/therapist/login">Uzman Giriş</Link>
      </header>
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
