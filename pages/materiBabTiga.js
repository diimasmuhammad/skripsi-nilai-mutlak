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
            <div className="fixed sm:absolute bottom-0 sm:mb-2 mb-8 -ml-2">
              {bukaHalamanBabTiga <= 1 ? (
                <Link href="/materiBabDuaBagianDua">
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
            <div className="fixed sm:absolute bottom-0 ml-40 sm:ml-130 sm:mb-2 mb-20">
              <div className="grid grid-cols-6 gap-2 ">
                <button
                  onClick={() => setHalamanBabTiga(1)}
                  className={
                    "p-2 rounded-lg hover:bg-cyan-500 duration-300 transition-all" +
                    (bukaHalamanBabTiga == 1 ? " bg-cyan-500" : "")
                  }
                >
                  1
                </button>
                <button
                  onClick={() => setHalamanBabTiga(2)}
                  className={
                    "p-2 rounded-lg hover:bg-cyan-500 duration-300 transition-all" +
                    (bukaHalamanBabTiga == 2 ? " bg-cyan-500" : "")
                  }
                >
                  2
                </button>
              </div>
            </div>
            <div className="fixed sm:absolute bottom-0 right-0 mr-8 sm:mb-2 mb-8">
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
