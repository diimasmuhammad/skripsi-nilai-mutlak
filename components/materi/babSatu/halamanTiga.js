import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

export default function HalamanTiga() {
  return (
    <>
      <div className="text-base text-justify relative">
        <a className="mt-3 text-white bg-indigo-300 w-full justify-center p-2 flex rounded-lg items-center font-bold">
          Kajian Teori
        </a>
        <div className="p-3 mt-2 text-sm border-2 border-trueGray-300 text-justify ">
          <p>
            Nilai mutlak selalu bernilai positif atau nol, atau dapat ditulis{" "}
            <InlineMath>|x| ≥ 0</InlineMath> untuk setiap bilangan real{" "}
            <InlineMath>x</InlineMath>. Nilai mutlak didefinisikan sebagai
            berikut.
            <BlockMath math="|x| = \begin{cases}x, \text{untuk } x \ge 0 \\ -x, \text{untuk } x < 0 \end{cases}" />
          </p>
          <p>
            Dengan melihat definisi tersebut, maka:
            <BlockMath math="|ax+b| = \begin{cases}(ax+b), \text{untuk } ax+b \ge 0 \\ -(ax+b), \text{untuk } ax+b < 0 \end{cases}" />
          </p>
          <p className="indent-sm">
            Definisi di atas dapat diungkapkan dengan kalimat sehari-hari
            seperti berikut ini. Nilai mutlak suatu bilangan positif atau nol
            adalah bilangan itu sendiri, sedangkan nilai mutlak dari suatu
            bilangan negatif adalah lawan dari bilangan negatif itu. Berdasarkan
            definisi tersebut maka:
          </p>
          <div className="flex">
            <ol className="list-decimal list-inside pl-7 py-4">
              <li>
                <InlineMath>|5|=5</InlineMath> karena{" "}
                <InlineMath math="5 \gt 0" /> (5 adalah bilangan positif)
              </li>
              <li className="pt-5">
                <InlineMath>|-3|=-(-3)=3</InlineMath> karena{" "}
                <InlineMath math="-3 \lt 0" /> (-3 adalah bilangan negatif)
              </li>
            </ol>
          </div>
          <div>
            <p>
              Sifat-sifat nilai mutlak dapat diturunkan sebagai berikut. Untuk x
              dan y bilangan real, maka,
            </p>
            <ol className="list-lowerAlpha list-inside pl-7 py-4">
              <li>
                <InlineMath>|x|\ge0</InlineMath>
              </li>
              <li className="pt-5">
                <InlineMath>|x|=|-x|</InlineMath>
              </li>
              <li className="pt-5">
                <InlineMath>|x-y|=|y-x|</InlineMath>
              </li>
              <li className="pt-5">
                <InlineMath math="|x|=\sqrt {x ^ 2}" />
              </li>
              <li className="pt-5">
                <InlineMath>|x|^2=x^2</InlineMath>
              </li>
              <li className="pt-5">
                Jika <InlineMath>|x|\lt|y|</InlineMath>, maka{" "}
                <InlineMath math="|x|^2 \lt |y|^2" />
              </li>
              <li className="pt-5">
                <InlineMath>|x.y|=|x|.|y|</InlineMath>
              </li>
              <li className="pt-5">
                <InlineMath math="\bigg| \dfrac x y \bigg| = \dfrac {|x|}{|y|}, y \neq 0" />
              </li>
              <li className="pt-5">
                <InlineMath>|x-y|\ge|x|-|y|</InlineMath>
              </li>
              <li className="pt-5">
                <InlineMath>|x+y|\le|x|+|y|</InlineMath>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
