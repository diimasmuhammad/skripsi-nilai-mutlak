import "katex/dist/katex.min.css";
import Image from "next/image";
import { BlockMath, InlineMath } from "react-katex";

export default function HalamanLima() {
  return (
    <div className="relative text-base text-justify">
      <div className=" flex bg-white mt-3 border-t-2 border-trueGray-300">
        <p className="uppercase font-bold my-3 text-justify text-md">
          1.2 Menggambar Grafik Fungsi Nilai Mutlak
        </p>
      </div>
      <div className="flex flex-col bg-white text-sm border-t-2 border-trueGray-300">
        <p className=" indent-sm">
          Untuk lebih memperjelas konsep nilai mutlak dan memberikan gambaran
          secara geometris, akan lebih baik jika kita dapat membuat gambar
          grafik fungsi nilai mutlak. Terdapat beberapa langkah dalam
          menggambarkan grafik fungsi nilai mutlak yaitu.
        </p>
        <ol className="list-decimal list-inside pl-7 py-4">
          <li>Menentukan definisi dari fungsi nilai mutlak yang ditanyakan.</li>
          <li className="py-5">
            Membuat tabel nilai-nilai fungsi nilai mutlak dari beberapa titik
            bantu berdasarkan definisi nilai mutlak yang didapatkan.
          </li>
          <li>
            Menyajikan titik-titik yang diperoleh pada tabel ke dalam koordinat
            kartesius.
          </li>
        </ol>
        <p className="indent-sm">
          Untuk lebih memahami bagaimana menggambarkan grafik fungsi nilai
          mutlak, perhatikan contoh berikut.
        </p>
        <div className="flex flex-col bg-white text-sm border-t-2 mt-2 border-trueGray-300">
          <a className="mt-3 text-white bg-indigo-300 w-full justify-center p-2 flex rounded-lg items-center font-bold">
            Contoh Soal
          </a>
        </div>
        <div className="p-3 mt-2 text-sm border-2 border-trueGray-300 text-justify ">
          Gambarkan grafik dari fungsi berikut.
          <ol className=" list-decimal list-inside pl-4">
            <li>
              <InlineMath math="f(x)=|x|" />
              <ul className="pl-4 ">
                <li>
                  <a className="font-bold"> Penyelesaian: </a>
                  <ol className="list-decimal list-inside pl-4" start={1}>
                    <li className="pt-4">
                      <InlineMath math="f(x)=|x|" />
                    </li>
                  </ol>
                  <ul className="list-inside pl-8">
                    <li className="pt-2">
                      <a className="font-bold">Langkah 1</a>, Menentukan
                      definisi dari fungsi nilai mutlak:
                    </li>
                    <li className="pt-2">
                      Jadi,{" "}
                      <InlineMath math="\ |x| = \begin{cases}(x), \text{    } x \ge 0 \\ -(x), -x, \text{    } x < 0 \end{cases}" />
                    </li>
                    <li className="pt-2">
                      Maka didapatkan <InlineMath>x \ge 0</InlineMath> dan{" "}
                      <InlineMath>x \lt 0</InlineMath>.
                    </li>
                    <li className="py-2">
                      <a className="font-bold">Langkah 2</a>, Membuat tabel
                      berdasarkan titik bantu yang didapatkan dari definisi
                      nilai mutlak:
                    </li>
                    <li className="py-4">
                      <div className="flex justify-center items-center mx-auto">
                        <table className="border border-black">
                          <colgroup>
                            <col style={{ width: "49px" }} />
                            <col style={{ width: "25px" }} />
                            <col style={{ width: "26px" }} />
                            <col style={{ width: "25px" }} />
                            <col style={{ width: "25px" }} />
                            <col style={{ width: "26px" }} />
                            <col style={{ width: "26px" }} />
                            <col style={{ width: "26px" }} />
                            <col style={{ width: "26px" }} />
                            <col style={{ width: "25px" }} />
                            <col style={{ width: "26px" }} />
                            <col style={{ width: "26px" }} />
                            <col style={{ width: "26px" }} />
                            <col style={{ width: "25px" }} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th className="border border-black p-3 text-center "></th>
                              <th
                                className="border border-black p-3 text-center "
                                colSpan="6"
                              >
                                Untuk <InlineMath>x \lt 0</InlineMath>
                              </th>
                              <th
                                className="border border-black p-3 text-center "
                                colSpan="7"
                              >
                                Untuk <InlineMath>x \ge 0</InlineMath>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className=" bg-blue-200">
                              <td className="border border-black p-3 text-center ">
                                <InlineMath>x</InlineMath>
                              </td>
                              <td className="border border-black p-3 text-center ">
                                ...
                              </td>
                              <td className="border border-black p-3 text-center ">
                                -5
                              </td>
                              <td className="border border-black p-3 text-center ">
                                -4
                              </td>
                              <td className="border border-black p-3 text-center ">
                                -3
                              </td>
                              <td className="border border-black p-3 text-center ">
                                -2
                              </td>
                              <td className="border border-black p-3 text-center ">
                                -1
                              </td>
                              <td className="border border-black p-3 text-center ">
                                0
                              </td>
                              <td className="border border-black p-3 text-center ">
                                1
                              </td>
                              <td className="border border-black p-3 text-center ">
                                2
                              </td>
                              <td className="border border-black p-3 text-center ">
                                3
                              </td>
                              <td className="border border-black p-3 text-center ">
                                4
                              </td>
                              <td className="border border-black p-3 text-center ">
                                5
                              </td>
                              <td className="border border-black p-3 text-center ">
                                ...
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-black p-3 text-center ">
                                <InlineMath>x=f(x)</InlineMath>
                              </td>
                              <td className="border border-black p-3 text-center ">
                                ...
                              </td>
                              <td className="border border-black p-3 text-center ">
                                5
                              </td>
                              <td className="border border-black p-3 text-center ">
                                4
                              </td>
                              <td className="border border-black p-3 text-center ">
                                3
                              </td>
                              <td className="border border-black p-3 text-center ">
                                2
                              </td>
                              <td className="border border-black p-3 text-center ">
                                1
                              </td>
                              <td className="border border-black p-3 text-center ">
                                0
                              </td>
                              <td className="border border-black p-3 text-center ">
                                1
                              </td>
                              <td className="border border-black p-3 text-center ">
                                2
                              </td>
                              <td className="border border-black p-3 text-center ">
                                3
                              </td>
                              <td className="border border-black p-3 text-center ">
                                4
                              </td>
                              <td className="border border-black p-3 text-center ">
                                5
                              </td>
                              <td className="border border-black p-3 text-center ">
                                ...
                              </td>
                            </tr>
                            <tr className=" bg-blue-200">
                              <td className="border border-black p-3 text-center ">
                                <InlineMath>(x,y)</InlineMath>
                              </td>
                              <td className="border border-black p-3 text-center ">
                                ...
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (-5,5)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (-4,4)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (-3,3)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (-2,2)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (-1,1)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (0,0)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (1,1)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (2,2)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (3,3)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (4,4)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (5,5)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                ...
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </li>
                    <li>
                      <a className="font-bold">Langkah 3</a>, Menyajikan
                      titik-titik yang diperoleh pada tabel ke dalam koordinat
                      kartesius:
                    </li>
                    <li>
                      <figure>
                        <div className="flex justify-center items-center w-max m-2 mx-auto border border-black">
                          <Image
                            src="/contoh-soal/contoh-soal-grafik-satu.png"
                            quality={100}
                            width={800}
                            height={515}
                          ></Image>
                        </div>
                        <figcaption className=" text-xs font-serif italic pb-2 text-center">
                          Gambar 1.3 Grafik Fungsi{" "}
                          <InlineMath>f(x)=|x|</InlineMath>
                        </figcaption>
                      </figure>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="pt-4">
              <InlineMath math="f(x)=|x-2|" />
              <ul className="pl-4 ">
                <li>
                  <a className="font-bold"> Penyelesaian: </a>
                  <ol className="list-decimal list-inside pl-4" start={1}>
                    <li className="pt-4">
                      <InlineMath math="f(x)=|x-2|" />
                    </li>
                  </ol>
                  <ul className="list-inside pl-8">
                    <li className="pt-2">
                      <a className="font-bold">Langkah 1</a>, Menentukan
                      definisi dari fungsi nilai mutlak:
                    </li>
                    <li className="pt-2">
                      Jadi,{" "}
                      <InlineMath math="\ |x-2| = \begin{cases}x-2, \hspace{0.85cm} x-2 \ge 0 \\ \hspace{2.4cm} x \ge 2 \\ -(x-2), -x+2 \lt 0 \\ \hspace{1.95cm} -x \lt -2 \\ \hspace{2.4cm} x \lt 2 \end{cases}" />
                    </li>
                    <li className="pt-2">
                      Maka didapatkan <InlineMath>x \ge 2</InlineMath> dan{" "}
                      <InlineMath>x \lt 2</InlineMath>.
                    </li>
                    <li className="py-2">
                      <a className="font-bold">Langkah 2</a>, Membuat tabel
                      berdasarkan titik bantu yang didapatkan dari definisi
                      nilai mutlak:
                    </li>
                    <li className="py-4">
                      <div className="flex justify-center items-center mx-auto">
                        <table className="border border-black">
                          <colgroup>
                            <col style={{ width: "49px" }} />
                            <col style={{ width: "25px" }} />
                            <col style={{ width: "26px" }} />
                            <col style={{ width: "25px" }} />
                            <col style={{ width: "25px" }} />
                            <col style={{ width: "26px" }} />
                            <col style={{ width: "26px" }} />
                            <col style={{ width: "26px" }} />
                            <col style={{ width: "26px" }} />
                            <col style={{ width: "25px" }} />
                            <col style={{ width: "26px" }} />
                            <col style={{ width: "26px" }} />
                            <col style={{ width: "26px" }} />
                            <col style={{ width: "25px" }} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th className="border border-black p-3 text-center "></th>
                              <th
                                className="border border-black p-3 text-center "
                                colSpan="6"
                              >
                                Untuk <InlineMath>x \lt 2</InlineMath>
                              </th>
                              <th
                                className="border border-black p-3 text-center "
                                colSpan="7"
                              >
                                Untuk <InlineMath>x \ge 2</InlineMath>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className=" bg-blue-200">
                              <td className="border border-black p-3 text-center ">
                                <InlineMath>x</InlineMath>
                              </td>
                              <td className="border border-black p-3 text-center ">
                                ...
                              </td>
                              <td className="border border-black p-3 text-center ">
                                -3
                              </td>
                              <td className="border border-black p-3 text-center ">
                                -2
                              </td>
                              <td className="border border-black p-3 text-center ">
                                -1
                              </td>
                              <td className="border border-black p-3 text-center ">
                                0
                              </td>
                              <td className="border border-black p-3 text-center ">
                                1
                              </td>
                              <td className="border border-black p-3 text-center ">
                                2
                              </td>
                              <td className="border border-black p-3 text-center ">
                                3
                              </td>
                              <td className="border border-black p-3 text-center ">
                                4
                              </td>
                              <td className="border border-black p-3 text-center ">
                                5
                              </td>
                              <td className="border border-black p-3 text-center ">
                                6
                              </td>
                              <td className="border border-black p-3 text-center ">
                                7
                              </td>
                              <td className="border border-black p-3 text-center ">
                                ...
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-black p-3 text-center ">
                                <InlineMath>x=f(x)</InlineMath>
                              </td>
                              <td className="border border-black p-3 text-center ">
                                ...
                              </td>
                              <td className="border border-black p-3 text-center ">
                                5
                              </td>
                              <td className="border border-black p-3 text-center ">
                                4
                              </td>
                              <td className="border border-black p-3 text-center ">
                                3
                              </td>
                              <td className="border border-black p-3 text-center ">
                                2
                              </td>
                              <td className="border border-black p-3 text-center ">
                                1
                              </td>
                              <td className="border border-black p-3 text-center ">
                                0
                              </td>
                              <td className="border border-black p-3 text-center ">
                                1
                              </td>
                              <td className="border border-black p-3 text-center ">
                                2
                              </td>
                              <td className="border border-black p-3 text-center ">
                                3
                              </td>
                              <td className="border border-black p-3 text-center ">
                                4
                              </td>
                              <td className="border border-black p-3 text-center ">
                                5
                              </td>
                              <td className="border border-black p-3 text-center ">
                                ...
                              </td>
                            </tr>
                            <tr className=" bg-blue-200">
                              <td className="border border-black p-3 text-center ">
                                <InlineMath>(x,y)</InlineMath>
                              </td>
                              <td className="border border-black p-3 text-center ">
                                ...
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (-3,5)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (-2,4)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (-1,3)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (0,2)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (1,1)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (2,0)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (3,1)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (4,2)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (5,3)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (6,4)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                (7,5)
                              </td>
                              <td className="border border-black p-3 text-center ">
                                ...
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </li>
                    <li>
                      <a className="font-bold">Langkah 3</a>, Menyajikan
                      titik-titik yang diperoleh pada tabel ke dalam koordinat
                      kartesius:
                    </li>
                    <li>
                      <figure>
                        <div className="flex justify-center items-center w-max m-2 mx-auto border border-black">
                          <Image
                            src="/contoh-soal/contoh-soal-grafik-dua.png"
                            quality={100}
                            width={800}
                            height={491}
                          ></Image>
                        </div>
                        <figcaption className=" text-xs font-serif italic pb-2 text-center">
                          Gambar 1.4 Grafik Fungsi{" "}
                          <InlineMath>f(x)=|x-2|</InlineMath>
                        </figcaption>
                      </figure>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
