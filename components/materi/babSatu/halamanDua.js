import Image from "next/image";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { useState } from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function HalamanDua() {
  return (
    <>
      <div className="text-base text-justify relative">
        <p className="indent-sm pb-2">
          Setelah melihat ilustrasi di atas maka dapat disimpulkan bahwa secara
          geometris, nilai mutlak suatu bilangan adalah jarak antara bilangan
          itu dengan nol pada garis bilangan real. Dengan demikian, tidak
          mungkin nilai mutlak suatu bilangan bernilai negatif, tetapi mungkin
          saja bernilai nol.
        </p>
        <p className="indent-sm">
          Nilai mutlak dilambangkan dengan tanda |...|
          <a className="font-bold"> (absolut)</a>. Sebagai contoh, notasi |5|
          menyatakan jarak 5 satuan dari titik 0 pada garis bilangan.
        </p>
        <div className="flex justify-center">
          <Image
            src="/materi/pergerakan-garis-bilangan.png"
            className=""
            width={675}
            height={131}
          ></Image>
        </div>
        <p className="mb-2 border-b-2 border-trueGray-300 font-bold">
          Sehingga |5| = |-5| = 5.
        </p>
        <p>
          Ada beberapa contoh perpindahan posisi pada garis bilangan sebagai
          berikut.
        </p>
        <div className="p-6">
          <table className="table-auto border-collapse border border-cyan-600 w-full">
            <thead className="h-10 bg-cyan-500 text-white">
              <tr className="text-center">
                <th className="border border-cyan-400 p-2">No</th>
                <th className="border border-cyan-400 p-2">Garis Bilangan</th>
                <th className="border border-cyan-400 p-2">Penjelasan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-cyan-400 text-center">1</td>
                <td className="border border-cyan-400">
                  <div className="flex flex-col justify-center items-center p-2">
                    <InlineMath>|3|=3</InlineMath>
                    <Image
                      src="/materi/contoh-1.png"
                      className=""
                      quality={100}
                      width={400}
                      height={100}
                    ></Image>
                  </div>
                </td>
                <td className="border border-cyan-400 p-2">
                  Tanda panah bergeser ke arah kanan berawal dari bilangan 0
                  menuju bilangan 3, dan besar langkah yang dilalui tanda panah
                  adalah 3. Hal ini berarti nilai |3|=3 atau berjarak 3 satuan
                  dari bilangan nol.
                </td>
              </tr>
              <tr>
                <td className="border border-cyan-400 text-center">2</td>
                <td className="border border-cyan-400">
                  <div className="flex flex-col justify-center items-center p-2">
                    <InlineMath>|\dfrac 3 4 |= \dfrac 3 4</InlineMath>
                    <Image
                      src="/materi/contoh-2.png"
                      className=""
                      quality={100}
                      width={400}
                      height={100}
                    ></Image>
                  </div>
                </td>
                <td className="border border-cyan-400 p-2">
                  Tanda panah bergeser ke arah kanan berawal dari bilangan 0
                  menuju bilangan 3/4, dan besar langkah yang dilalui tanda
                  panah adalah 3/4. Hal ini berarti nilai |3/4|=3/4 atau
                  berjarak 3/4 satuan dari bilangan nol.
                </td>
              </tr>
              <tr>
                <td className="border border-cyan-400 text-center">3</td>
                <td className="border border-cyan-400">
                  <div className="flex flex-col justify-center items-center p-2">
                    <InlineMath>|0|=0</InlineMath>
                    <Image
                      src="/materi/contoh-3.png"
                      className=""
                      quality={100}
                      width={400}
                      height={100}
                    ></Image>
                  </div>
                </td>
                <td className="border border-cyan-400 p-2">
                  Tidak ada perpindahan posisi pada garis bilangan karena nilai
                  |0|=0 atau berjarak 0 satuan dari bilangan nol.
                </td>
              </tr>
              <tr>
                <td className="border border-cyan-400 text-center">4</td>
                <td className="border border-cyan-400">
                  <div className="flex flex-col justify-center items-center p-2">
                    <InlineMath>|- \dfrac 5 2|= \dfrac 5 2</InlineMath>
                    <Image
                      src="/materi/no-4.png"
                      className=""
                      quality={100}
                      width={430}
                      height={100}
                    ></Image>
                  </div>
                </td>
                <td className="border border-cyan-400 p-2">
                  Tanda panah bergeser ke arah kiri berawal dari bilangan 0
                  menuju bilangan -5/2, dan besar langkah yang dilalui tanda
                  panah adalah 5/2. Hal ini berarti nilai |-5/2|=5/2 atau
                  berjarak 5/2 satuan dari bilangan nol.
                </td>
              </tr>
              <tr>
                <td className="border border-cyan-400 text-center">5</td>
                <td className="border border-cyan-400">
                  <div className="flex flex-col justify-center items-center p-2">
                    <InlineMath>|-3|=3</InlineMath>
                    <Image
                      src="/materi/contoh-5.png"
                      className=""
                      quality={100}
                      width={400}
                      height={100}
                    ></Image>
                  </div>
                </td>
                <td className="border border-cyan-400">
                  Tanda panah bergeser ke arah kiri berawal dari bilangan 0
                  menuju bilangan -3, dan besar langkah yang dilalui tanda panah
                  adalah 3. Hal ini berarti nilai |-3|=3 atau berjarak 3 satuan
                  dari bilangan nol.
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3">
            Dari beberapa contoh di atas dapat disimpulkan bahwa.
          </p>
          <ol className="list-decimal pl-14">
            <li>
              Garis bilangan digunakan sebagai media untuk menunjukkan nilai
              mutlak.
            </li>
            <li>
              Tanda panah digunakan untuk menentukan besar nilai mutlak, dimana
              arah ke kiri menandakan nilai mutlak dari bilangan negatif, dan
              begitu juga sebaliknya. Arah ke kanan menandakan nilai mutlak dari
              bilangan positif.
            </li>
            <li>
              Besar nilai mutlak dilihat dari panjang tanda panah dan dihitung
              dari bilangan nol.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
