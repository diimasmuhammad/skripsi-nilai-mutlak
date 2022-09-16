import React, { useState, useEffect } from "react";
import EditKkm from "../components/guru/edit/editKkm";
import EditToken from "../components/guru/edit/editToken";

import DashboardHalamanGuru from "../components/dashboardHalamanGuru";

export default function edit() {
  const [bukaTab, setBukaTab] = useState(1);
  return (
    <DashboardHalamanGuru>
      <div className="bg-white flex justify-center items-center p-7 m-2 border-2  border-trueGray-400 shadow-lg rounded sm:h-kontenguru h-screen">
        <div className="container mx-auto px-4 sm:px-8">
          <div>
            <ul className="flex gap-4 items-center justify-center">
              <li>
                <a
                  onClick={() => setBukaTab(1)}
                  className={
                    " cursor-pointer " +
                    (bukaTab === 1 ? " border-b-4 border-cyan-600" : "")
                  }
                >
                  Edit KKM
                </a>
              </li>
              <li>
                <a
                  onClick={() => setBukaTab(2)}
                  className={
                    " cursor-pointer " +
                    (bukaTab === 2 ? " border-b-4 border-cyan-600" : "")
                  }
                >
                  Edit Token Latihan
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 ">
              <div className="inline-block min-w-full shadow rounded-lg ">
                <div className="min-w-full leading-normal w-120 h-96 overflow-auto p-3 border-2 border-cyan-500 mt-2 ">
                  <div>
                    <div className={" " + (bukaTab === 1 ? "block" : "hidden")}>
                      <EditKkm></EditKkm>
                    </div>
                    <div className={" " + (bukaTab === 2 ? "block" : "hidden")}>
                      <EditToken></EditToken>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-white flex justify-center items-center p-7 m-2 border-2  border-trueGray-400 shadow-lg rounded h-kontenguru">
        <div className="container mx-auto px-4 sm:px-8">
          <ul class="flex gap-4 items-center justify-center">
            <li>
              <a
                onClick={() => setBukaTab(1)}
                className={
                  " cursor-pointer " +
                  (bukaTab === 1 ? " border-b-4 border-cyan-600" : "")
                }
              >
                Edit KKM
              </a>
            </li>
            <li>
              <a
                onClick={() => setBukaTab(2)}
                className={
                  " cursor-pointer " +
                  (bukaTab === 2 ? " border-b-4 border-cyan-600" : "")
                }
              >
                Edit Token Latihan
              </a>
            </li>
          </ul>
          
        </div>
      </div> */}
    </DashboardHalamanGuru>
  );
}
