import Link from "next/link";
import Image from "next/image";
// import { autentikasi } from "../firebase/initFirebase";
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { async } from "@firebase/util";
// import { useRouter } from "next/router";
export default function Header() {
  // const provider = new GoogleAuthProvider();
  // const router = useRouter();
  // const logIn = async () => {
  //   const { user } = await signInWithPopup(autentikasi, provider);
  //   const { refreshToken, providerData } = user;
  //   localStorage.setItem("pengguna", JSON.stringify(providerData));
  //   localStorage.setItem("aksesToken", JSON.stringify(refreshToken));

  //   router.push("/hasilBelajarSiswa");
  // };
  return (
    <header className="bg-cyan-400 py-4 sticky top-0 z-50 opacity-80">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-beetween items-center">
          <Link href="/">
            <a className="flex items-center p-4">
              <Image src="/logo.png" alt="logo" width={32} height={32}></Image>
              <span className=" ml-4 text-white uppercase font-semibold tracking-tighter ">
                {process.env.namaAplikasi}
              </span>
            </a>
          </Link>

          <Link href="/hasilBelajarSiswa">
            <button className="flex flex-col sm:flex-row justify-center w-20 sm:w-40 h-20 sm:h-12 items-center rounded-md sm:ml-80 px-2  bg-white hover:bg-cyan-400 hover:ring hover:ring-white hover:text-white text-cyan-400">
              <Image src="/report.svg" width={20} height={20}></Image>
              <span className="ml-2  uppercase tracking-wider font-medium text-xs">
                Halaman Guru
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
