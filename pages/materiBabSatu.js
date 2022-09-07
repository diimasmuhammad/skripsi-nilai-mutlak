import DashboardMateri from "../components/dashboardMateri";
import Link from "next/link";
import { useState, useEffect } from "react";
import HalamanDua from "../components/materi/babSatu/halamanDua";
import HalamanSatu from "../components/materi/babSatu/halamanSatu";
import HalamanTiga from "../components/materi/babSatu/halamanTiga";
import HalamanEmpat from "../components/materi/babSatu/halamanEmpat";
import HalamanLima from "../components/materi/babSatu/halamanLima";
import HalamanEnam from "../components/materi/babSatu/halamanEnam";
// import Tes from "../components/materi/babSatu/tes";

export default function materiBabDua() {
  const [bukaHalamanBabSatu, setHalamanBabSatu] = useState(1);

  // useEffect(() => {
  //   setHalamanBabSatu(
  //     JSON.parse(window.localStorage.getItem("bukaHalamanBabSatu"))
  //   );
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("bukaHalamanBabSatu", bukaHalamanBabSatu);
  // }, [bukaHalamanBabSatu]);

  return (
    <DashboardMateri>
      <>
        <div>
          {/* materi hal-1 */}
          <div
            className={bukaHalamanBabSatu === 1 ? "block" : "hidden"}
            id="halamanSatu"
          >
            <HalamanSatu />
          </div>
          {/* materi hal-2 */}
          <div
            className={bukaHalamanBabSatu === 2 ? "block" : "hidden"}
            id="halamanDua"
          >
            <HalamanDua />
          </div>
          {/* materi hal-3 */}
          <div
            className={bukaHalamanBabSatu === 3 ? "block" : "hidden"}
            id="halamanTiga"
          >
            <HalamanTiga />
          </div>
          {/* materi hal-4 */}
          <div
            className={bukaHalamanBabSatu === 4 ? "block" : "hidden"}
            id="halamanEmpat"
          >
            <HalamanEmpat />
          </div>
          {/* materi hal-5 */}
          <div
            className={bukaHalamanBabSatu === 5 ? "block" : "hidden"}
            id="halamanLima"
          >
            <HalamanLima />
          </div>
          <div
            className={bukaHalamanBabSatu === 6 ? "block" : "hidden"}
            id="halamanEnam"
          >
            <HalamanEnam />
          </div>
        </div>
        <div className="">
          <div className="flex text-base ">
            <div className="fixed sm:absolute bottom-0 sm:mb-2 mb-8 -ml-2">
              {bukaHalamanBabSatu <= 1 ? (
                <Link href="/">
                  <button
                    hidden
                    className="  bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                  >
                    Materi Sebelumnya
                  </button>
                </Link>
              ) : (
                <button
                  className=" bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                  onClick={() => setHalamanBabSatu(bukaHalamanBabSatu - 1)}
                >
                  Sebelumnya
                </button>
              )}
            </div>
            <div className="fixed sm:absolute bottom-0 ml-20 sm:ml-130 sm:mb-2 mb-20">
              <div className="grid grid-cols-6 gap-2 ">
                <button
                  onClick={() => setHalamanBabSatu(1)}
                  className={
                    "p-2 rounded-lg hover:bg-cyan-500 duration-300 transition-all" +
                    (bukaHalamanBabSatu == 1 ? " bg-cyan-500" : "")
                  }
                >
                  1
                </button>
                <button
                  onClick={() => setHalamanBabSatu(2)}
                  className={
                    "p-2 rounded-lg hover:bg-cyan-500 duration-300 transition-all" +
                    (bukaHalamanBabSatu == 2 ? " bg-cyan-500" : "")
                  }
                >
                  2
                </button>
                <button
                  onClick={() => setHalamanBabSatu(3)}
                  className={
                    "p-2 rounded-lg hover:bg-cyan-500 duration-300 transition-all" +
                    (bukaHalamanBabSatu == 3 ? " bg-cyan-500" : "")
                  }
                >
                  3
                </button>
                <button
                  onClick={() => setHalamanBabSatu(4)}
                  className={
                    "p-2 rounded-lg hover:bg-cyan-500 duration-300 transition-all" +
                    (bukaHalamanBabSatu == 4 ? " bg-cyan-500" : "")
                  }
                >
                  4
                </button>
                <button
                  onClick={() => setHalamanBabSatu(5)}
                  className={
                    "p-2 rounded-lg hover:bg-cyan-500 duration-300 transition-all" +
                    (bukaHalamanBabSatu == 5 ? " bg-cyan-500" : "")
                  }
                >
                  5
                </button>
                <button
                  onClick={() => setHalamanBabSatu(6)}
                  className={
                    "p-2 rounded-lg hover:bg-cyan-500 duration-300 transition-all" +
                    (bukaHalamanBabSatu == 6 ? " bg-cyan-500" : "")
                  }
                >
                  6
                </button>
              </div>
            </div>
            <div className="fixed sm:absolute bottom-0 right-0 mr-8 sm:mb-2 mb-8">
              {bukaHalamanBabSatu >= 6 ? (
                <Link href="/latihanBabSatu">
                  <button className=" bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500">
                    Latihan
                  </button>
                </Link>
              ) : (
                <button
                  className=" bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                  onClick={() => setHalamanBabSatu(bukaHalamanBabSatu + 1)}
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
