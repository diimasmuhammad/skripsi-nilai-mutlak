import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Kompetensidasar() {
  const [bukaTab, setBukaTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap mt-4 ">
        <div className="w-full">
          {/* Tab Menu */}
          <div className="flex items-center border-b border-indigo-400 py-5 h-10">
            {/* Tab 1 */}
            <button
              className={
                "block p-2 bg-sky-50 hover:shadow-lg hover:bg-sky-200 focus:bg-sky-200 border-r border-indigo-400 outline-none cursor-pointer" +
                (bukaTab === 1 ? " bg-sky-200" : "")
              }
              onClick={() => setBukaTab(1)}
            >
              Kompetensi Inti
            </button>
            {/* Tab 2 */}
            <button
              className={
                "block p-2 bg-sky-50 hover:shadow-lg hover:bg-sky-200 focus:bg-sky-200 border-r border-indigo-400 outline-none cursor-pointer" +
                (bukaTab === 2 ? " bg-sky-200" : "")
              }
              onClick={() => setBukaTab(2)}
            >
              Kompetensi Dasar
            </button>
          </div>
        </div>
        {/* Konten */}
        <div className="flex justify-center text-justify p-4 mt-2 border border-indigo-200 rounded-lg shadow-xl overflow-auto h-96 sm:h-80 w-max">
          {/* Konten Tab 1 */}
          <div
            className={
              "pb-5 overflow-visible  " + (bukaTab === 1 ? "block" : "hidden")
            }
          >
            <h1 className="font-bold uppercase text-xl text-center">
              Kompetensi Inti
            </h1>
            <table>
              <tbody>
                <tr>
                  <td className="align-text-top px-4 py-2">3.</td>
                  <td className="py-2">
                    Memahami, menerapkan, dan menganalisis pengetahuan faktual,
                    konseptual, prosedural berdasarkan rasa ingintahunya tentang
                    ilmu pengetahuan, teknologi, seni, budaya, dan humaniora
                    dengan wawasan kemanusiaan, kebangsaan, kenegaraan, dan
                    peradaban terkait penyebab fenomena dan kejadian, serta
                    menerapkan pengetahuan prosedural pada bidang kajian yang
                    spesifik sesuai dengan bakat dan minatnya untuk memecahkan
                    masalah
                  </td>
                </tr>
                <tr>
                  <td className="align-text-top px-4 py-2">4.</td>
                  <td className="py-2">
                    Mengolah, menalar, dan menyaji dalam ranah konkret dan ranah
                    abstrak terkait dengan pengembangan dari yang dipelajarinya
                    di sekolah secara mandiri, dan mampu menggunakan metoda
                    sesuai kaidah keilmuan
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Konten Tab 2 */}
          <div className={"pb-5 " + (bukaTab === 2 ? "block" : "hidden")}>
            <h1 className="font-bold uppercase text-xl text-center">
              Kompetensi Dasar
            </h1>
            <table>
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
                    pertidaksamaan nilai mutlak dari bentuk linear satu variabel
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Footer */}
        <div className="item-center sm:my-4 my-8 font-semibold sm:mx-0 mx-auto">
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
    </>

    //   <section className="relative bg-trueGray-200">
    //     <div className="flex items-center justify-center mb-16 mt-10">
    //       <div className="flex flex-col bg-white shadow-lg p-8 rounded-lg w-full mx-auto sm:mx-64">
    //         <div className=" py-3 flex justify-center">
    //           <Image src="/education.svg" width={64} height={64}></Image>
    //         </div>
    //         {/* Tab */}
    //         <div className="flex items-center border-b border-indigo-400 py-5 h-10">
    //           <button
    //             className="block p-2 bg-sky-50 hover:shadow-lg hover:bg-sky-200 focus:bg-sky-200 border-r border-indigo-400 outline-none cursor-pointer"
    //             onClick={() => setBukaTab(1)}
    //           >
    //             Kompetensi Inti
    //           </button>
    //           <button
    //             className="block p-2 bg-sky-50 hover:shadow-lg hover:bg-sky-200 focus:bg-sky-200 border-none outline-none cursor-pointer"
    //             onClick={() => setBukaTab(2)}
    //           >
    //             Kompetensi Dasar
    //           </button>
    //         </div>
    //         {/* Isi */}
    //         <div className="flex justify-center text-justify py-2 mt-2 pr-2 border border-indigo-200 rounded-lg shadow-xl">
    //           <table
    //             className={"table-fixed " + (bukaTab === 1 ? "" : "hidden")}
    //           >
    //             <tbody>
    //               <tr>
    //                 <td className="align-text-top px-4 py-2">3.</td>
    //                 <td className="py-2">
    //                   Memahami, menerapkan, dan menganalisis pengetahuan
    //                   faktual, konseptual, prosedural berdasarkan rasa
    //                   ingintahunya tentang ilmu pengetahuan, teknologi, seni,
    //                   budaya, dan humaniora dengan wawasan kemanusiaan,
    //                   kebangsaan, kenegaraan, dan peradaban terkait penyebab
    //                   fenomena dan kejadian, serta menerapkan pengetahuan
    //                   prosedural pada bidang kajian yang spesifik sesuai dengan
    //                   bakat dan minatnya untuk memecahkan masalah
    //                 </td>
    //               </tr>
    //               <tr>
    //                 <td className="align-text-top px-4 py-2">4.</td>
    //                 <td className="py-2">
    //                   Mengolah, menalar, dan menyaji dalam ranah konkret dan
    //                   ranah abstrak terkait dengan pengembangan dari yang
    //                   dipelajarinya di sekolah secara mandiri, dan mampu
    //                   menggunakan metoda sesuai kaidah keilmuan
    //                 </td>
    //               </tr>
    //             </tbody>
    //           </table>
    //           <table
    //             className={"table-fixed " + (bukaTab === 2 ? "" : "hidden")}
    //           >
    //             <tbody>
    //               <tr>
    //                 <td className="align-text-top px-4 py-2">3.1</td>
    //                 <td className="py-2">
    //                   Mengintepretasi persamaan dan pertidaksamaan nilai mutlak
    //                   dari bentuk linear satu variabel dengan persamaan dan
    //                   pertidaksamaan linear aljabar lainnya.
    //                 </td>
    //               </tr>
    //               <tr>
    //                 <td className="align-text-top px-4 py-2">4.1</td>
    //                 <td className="py-2">
    //                   Menyelesaikan masalah yang berkaitan dengan persamaan dan
    //                   pertidaksamaan nilai mutlak dari bentuk linear satu
    //                   variabel
    //                 </td>
    //               </tr>
    //             </tbody>
    //           </table>
    //         </div>
    //         {/*bawah*/}
    //         <div className="item-center sm:my-4 my-8  sm:mx-0 mx-auto font-semibold">
    //           <Link href="/">
    //             <button
    //               type="button"
    //               className="flex gap-2 bg-cyan-500 text-base text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="24"
    //                 height="24"
    //                 fill="currentColor"
    //               >
    //                 <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
    //               </svg>
    //               Beranda
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
  );
}
