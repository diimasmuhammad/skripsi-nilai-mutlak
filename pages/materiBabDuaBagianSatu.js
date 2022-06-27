import DashboardMateri from "../components/dashboardMateri";
import Link from "next/link";
import { useState, useEffect } from "react";
import HalamanSatu from "../components/materi/babDua/halamanSatu";
import HalamanDua from "../components/materi/babDua/halamanDua";

export default function materiBabDua() {
  const [bukaHalamanBabDua, setHalaman] = useState(1);

  useEffect(() => {
    setHalaman(JSON.parse(window.localStorage.getItem("bukaHalamanBabDua")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("bukaHalamanBabDua", bukaHalamanBabDua);
  }, [bukaHalamanBabDua]);

  return (
    <DashboardMateri>
      <>
        <div>
          {/* materi hal-1 */}
          <div
            className={bukaHalamanBabDua === 1 ? "block" : "hidden"}
            id="halamanSatu"
          >
            <HalamanSatu />
          </div>
          {/* materi hal-2 */}
          <div
            className={bukaHalamanBabDua === 2 ? "block" : "hidden"}
            id="halamanDua"
          >
            <HalamanDua />
          </div>
        </div>
        <div className="">
          <div className="flex text-base">
            <div className="absolute bottom-0 mb-2 -ml-2">
              {bukaHalamanBabDua <= 1 ? (
                <Link href="/materiBabSatu">
                  <button className="  bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500">
                    Materi Sebelumnya
                  </button>
                </Link>
              ) : (
                <button
                  className=" bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                  onClick={() => setHalaman(bukaHalamanBabDua - 1)}
                >
                  Sebelumnya
                </button>
              )}
            </div>
            <div className="absolute bottom-0 right-0 mr-8 mb-2">
              {bukaHalamanBabDua >= 2 ? (
                <Link href="/materiBabDuaBagianDua">
                  <button className=" bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500">
                    Selanjutnya
                  </button>
                </Link>
              ) : (
                <button
                  className=" bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                  onClick={() => setHalaman(bukaHalamanBabDua + 1)}
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
