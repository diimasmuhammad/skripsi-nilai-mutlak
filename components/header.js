import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-cyan-400 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-beetween">
          <Link href="/">
            <a className="flex items-center p-4">
              <Image src="/logo.png" alt="logo" width={32} height={32}></Image>
              <span className=" ml-4 text-white uppercase font-semibold tracking-tighter ">
                {process.env.namaAplikasi}
              </span>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
