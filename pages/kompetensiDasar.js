import Layout from "../components/layout";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Kompetensidasar() {
  const [bukaTab, setBukaTab] = useState(1);
  return (
    <Layout>
      <section className="relative bg-trueGray-200">
        <div className="flex items-center justify-center mb-24 mt-16">
          <div className="flex flex-col bg-white shadow-lg p-8 rounded-lg w-3/5">
            <div className=" py-3 flex justify-center">
              <Image src="/education.svg" width={64} height={64}></Image>
            </div>
            {/* Tab */}
            <div className="flex items-center border-b border-indigo-400 py-5 h-10">
              <button
                className="block p-2 bg-sky-50 hover:shadow-lg hover:bg-sky-200 focus:bg-sky-200 border-r border-indigo-400 outline-none cursor-pointer"
                onClick={() => setBukaTab(1)}
              >
                Kompetensi Inti
              </button>
              <button
                className="block p-2 bg-sky-50 hover:shadow-lg hover:bg-sky-200 focus:bg-sky-200 border-none outline-none cursor-pointer"
                onClick={() => setBukaTab(2)}
              >
                Kompetensi Dasar
              </button>
            </div>
            {/* Isi */}
            <div className="flex justify-center text-justify py-2 mt-2 pr-2 border border-indigo-200 rounded-lg shadow-xl">
              <table
                className={"table-fixed " + (bukaTab === 1 ? "" : "hidden")}
              >
                <tbody>
                  <tr>
                    <td className="align-text-top px-4 py-2">3.</td>
                    <td className="py-2">
                      Mengintepretasi persamaan dan pertidaksamaan nilai mutlak
                      dari bentuk linear satu variabel dengan persamaan dan
                      pertidaksamaan linear aljabar lainnya.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-text-top px-4 py-2">4.</td>
                    <td className="py-2">
                      Menyelesaikan masalah yang berkaitan dengan persamaan dan
                      pertidaksamaan nilai mutlak dari bentuk linear satu
                      variabel
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                className={"table-fixed " + (bukaTab === 2 ? "" : "hidden")}
              >
                <tbody>
                  <tr>
                    <td className="align-text-top px-4 py-2">3.1</td>
                    <td className="py-2">
                      Mengintepretasi persamaan dan pertidaksamaan nilai mutlak
                      dari bentuk linear satu variabel dengan persamaan dan
                      pertidaksamaan linear aljabar lainnya.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-text-top px-4 py-2">4.1</td>
                    <td className="py-2">
                      Menyelesaikan masalah yang berkaitan dengan persamaan dan
                      pertidaksamaan nilai mutlak dari bentuk linear satu
                      variabel
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/*bawah*/}
            <div className="item-center mt-4 font-semibold">
              <Link href="/">
                <button
                  type="button"
                  className="flex gap-2 bg-cyan-500 text-base text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
                  </svg>
                  Beranda
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
