import DashboardMateri from "../components/dashboardMateri";
import Link from "next/link";
import { useState, useEffect } from "react";
import HalamanTiga from "../components/materi/babDua/halamanTiga";

export default function materiBabDuaBagianDua() {
  const [bukaHalamanBabDua, setHalaman] = useState(1);

  // useEffect(() => {
  //   setHalaman(JSON.parse(window.localStorage.getItem("bukaHalamanBabDua")));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("bukaHalamanBabDua", bukaHalamanBabDua);
  // }, [bukaHalamanBabDua]);

  return (
    <DashboardMateri>
      <>
        <div>
          {/* materi hal-3 */}
          <div
            className={bukaHalamanBabDua === 1 ? "block" : "hidden"}
            id="halamanTiga"
          >
            <HalamanTiga />
          </div>
        </div>
        <div className="">
          <div className="flex text-base">
            <div className="absolute bottom-0 mb-2 -ml-2">
              <Link href="/materiBabDuaBagianSatu">
                <button className="  bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500">
                  Sebelumnya
                </button>
              </Link>
            </div>
            <div className="absolute bottom-0 ml-28 sm:ml-130 mb-2">
              <div className="grid grid-cols-6 gap-2 ">
                <Link href="/materiBabDuaBagianSatu">
                  <button
                    className={
                      "p-2 rounded-lg hover:bg-cyan-500 duration-300 transition-all"
                    }
                  >
                    1
                  </button>
                </Link>
                <Link href="/materiBabDuaBagianSatu">
                  <button
                    className={
                      "p-2 rounded-lg hover:bg-cyan-500 duration-300 transition-all"
                    }
                  >
                    2
                  </button>
                </Link>
                <button
                  onClick={() => setHalaman(1)}
                  className={
                    "p-2 rounded-lg hover:bg-cyan-500 duration-300 transition-all" +
                    (bukaHalamanBabDua == 1 ? " bg-cyan-500" : "")
                  }
                >
                  3
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 mr-8 mb-2">
              <Link href="/latihanBabDua">
                <button className=" bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500">
                  Latihan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    </DashboardMateri>
  );
}
