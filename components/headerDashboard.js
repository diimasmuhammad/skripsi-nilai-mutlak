import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { userAccessToken, fetchUser } from "../components/utils/fetchDataUser";

export default function HeaderDashboard() {
  const [btnToogle, setBtnToogle] = useState(false);
  const [pengguna, setPengguna] = useState({});

  const router = useRouter();

  useEffect(() => {
    const accessToken = userAccessToken();
    if (!accessToken) return router.push("/");
    const userInfo = fetchUser();

    console.log(userInfo);
    setPengguna(userInfo);
  }, []);
  return (
    <div className="flex justify-between fixed inset-x-0 h-12 top-0 bg-cyan-500 text-white items-center border-b-2 border-white">
      <div className="flex ml-8">
        <a onClick={() => setBtnToogle(!btnToogle)}>
          {btnToogle ? (
            <svg
              className="hover:bg-white hover:text-cyan-500 hover:rounded-lg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
            >
              <path d="m21 15.344-2.121 2.121-3.172-3.172-1.414 1.414 3.172 3.172L15.344 21H21zM3 8.656l2.121-2.121 3.172 3.172 1.414-1.414-3.172-3.172L8.656 3H3zM21 3h-5.656l2.121 2.121-3.172 3.172 1.414 1.414 3.172-3.172L21 8.656zM3 21h5.656l-2.121-2.121 3.172-3.172-1.414-1.414-3.172 3.172L3 15.344z"></path>
            </svg>
          ) : (
            <svg
              className="hover:bg-white hover:text-cyan-500 hover:rounded-lg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
            >
              <path d="M16.121 6.465 14 4.344V10h5.656l-2.121-2.121 3.172-3.172-1.414-1.414zM4.707 3.293 3.293 4.707l3.172 3.172L4.344 10H10V4.344L7.879 6.465zM19.656 14H14v5.656l2.121-2.121 3.172 3.172 1.414-1.414-3.172-3.172zM6.465 16.121l-3.172 3.172 1.414 1.414 3.172-3.172L10 19.656V14H4.344z"></path>
            </svg>
          )}
        </a>
      </div>
      <div className="flex mx-auto">
        <Link href="/">
          <a className="flex items-center p-2">
            <Image src="/logo.png" alt="logo" width={32} height={32}></Image>
            <span className=" ml-4 uppercase tracking-tighter ">
              {process.env.namaAplikasi}
            </span>
          </a>
        </Link>
      </div>
      <div className="flex mr-8">
        <img src={pengguna?.photoURL} alt="" />
      </div>
    </div>
  );
}
