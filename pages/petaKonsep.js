import DashboardMateri from "../components/dashboardMateri";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function petaKonsep() {
  return (
    <DashboardMateri>
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold uppercase tracking-wide">Peta Konsep</p>
        <Image
          src={"/petaKonsep.png"}
          quality={100}
          width={1280}
          height={720}
        ></Image>
      </div>
      <div className="fixed sm:absolute bottom-0 right-0 mr-8 mb-8 sm:mb-2 ">
        <Link href={"/materiBabSatu"}>
          <button className=" bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500">
            Materi
          </button>
        </Link>
      </div>
    </DashboardMateri>
  );
}
