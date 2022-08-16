import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { useRouter } from "next/router";
import { ChevronDoubleRightIcon } from "@heroicons/react/outline";

export default function Video1() {
  const router = useRouter();
  return (
    <div className="">
      <div className="bg-cyan-500 flex justify-center items-center p-2 uppercase font-bold text-white">
        Video 1.1 Menggambar pergerakan bilangan
      </div>
      <div className="flex flex-col items-center justify-center">
        <div></div>
        <div className="flex my-40">
          <div className="flex flex-row items-center">
            <span className="mr-2">1.</span>
            <InlineMath>|2|=</InlineMath>
            <div>
              <input
                style={{ border: "2px solid green" }}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-12 m-2 p-2 ml-8 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                id="jawaban-2a"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className={"  "}>
              <ChevronDoubleRightIcon className="w-10 h-10 text-cyan-500 animate-pulse" />
            </div>
          </div>
          <iframe
            className="border border-cyan-600 ml-3"
            scrolling="no"
            title="videoPenjelasan1"
            src="https://www.geogebra.org/material/iframe/id/keamdm25/width/1000/height/250/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/true/sdz/false/ctl/false"
            width="1000px"
            height="250px"
          >
            {" "}
          </iframe>
        </div>
        <div className="flex justify-center">
          <button
            className="ring-1 ring-white font-bold uppercase mt-2 flex justify-between items-center gap-8 px-2 py-1 transition-all duration-300 ease-linear bg-cyan-600 text-white hover:ring-1 hover:ring-cyan-600 rounded-lg hover:bg-white hover:text-cyan-600 hover:rounded-lg cursor-pointer"
            onClick={() => router.back()}
          >
            Mengerti
          </button>
        </div>
      </div>
    </div>
  );
}
