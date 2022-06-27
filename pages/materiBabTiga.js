import DashboardMateri from "../components/dashboardMateri";
import Link from "next/link";
import { useState, useEffect } from "react";
import HalamanDua from "../components/materi/babTiga/halamanDua";
import HalamanSatu from "../components/materi/babTiga/halamanSatu";

export default function materiBabDua() {
  const [bukaHalamanBabTiga, setHalamanBabTiga] = useState(1);

  // useEffect(() => {
  //   setHalamanBabTiga(
  //     JSON.parse(window.localStorage.getItem("bukaHalamanBabTiga"))
  //   );
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("bukaHalamanBabTiga", bukaHalamanBabTiga);
  // }, [bukaHalamanBabTiga]);

  return (
    <DashboardMateri>
      <>
        <div>
          {/* materi hal-1 */}
          <div
            className={bukaHalamanBabTiga === 1 ? "block" : "hidden"}
            id="halamanSatu"
          >
            <HalamanSatu />
          </div>
          {/* materi hal-2 */}
          <div
            className={bukaHalamanBabTiga === 2 ? "block" : "hidden"}
            id="halamanDua"
          >
            <HalamanDua />
          </div>
        </div>
        <div className="">
          <div className="flex text-base">
            <div className="absolute bottom-0 mb-2 -ml-2">
              {bukaHalamanBabTiga <= 1 ? (
                <Link href="/materiBabDua">
                  <button className="  bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500">
                    Materi Sebelumnya
                  </button>
                </Link>
              ) : (
                <button
                  className=" bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                  onClick={() => setHalamanBabTiga(bukaHalamanBabTiga - 1)}
                >
                  Sebelumnya
                </button>
              )}
            </div>
            <div className="absolute bottom-0 right-0 mr-8 mb-2">
              {bukaHalamanBabTiga >= 2 ? (
                <Link href="/latihanBabTiga">
                  <button className=" bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500">
                    Latihan
                  </button>
                </Link>
              ) : (
                <button
                  className=" bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                  onClick={() => setHalamanBabTiga(bukaHalamanBabTiga + 1)}
                >
                  Selanjutnya
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    </DashboardMateri>
  );
}
