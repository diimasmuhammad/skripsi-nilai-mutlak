import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import { useState } from "react";

export default function HalamanTiga() {
  const [petunjukSatu, setPetunjukSatu] = useState(false);
  const [petunjukDua, setPetunjukDua] = useState(false);

  const [bukaContohSatu, setBukaContohSatu] = useState(false);
  const [bukaContohDua, setBukaContohDua] = useState(false);
  const [bukaTab, setBukaTab] = useState(1);

  const [bukaTabDua, setBukaTabDua] = useState({});

  const [bukaLatihanSatu, setBukaLatihanSatu] = useState(false);
  const [bukaLatihanDua, setBukaLatihanDua] = useState(false);

  const tooglePetunjukSatu = () => {
    setPetunjukSatu(!petunjukSatu);
  };
  const tooglePetunjukDua = () => {
    setPetunjukDua(!petunjukDua);
  };

  // Save state mari mencoba cara 1
  const [box1A, setBox1A] = useState({});
  const [box1B, setBox1B] = useState({});
  const [box1C, setBox1C] = useState({});
  const [box1D, setBox1D] = useState({});
  const [box1E, setBox1E] = useState({});
  const [box1F, setBox1F] = useState({});
  const [box1G, setBox1G] = useState({});
  const [box1H, setBox1H] = useState({});
  const [box1I, setBox1I] = useState({});
  const [box1J, setBox1J] = useState({});
  const [box1K, setBox1K] = useState({});
  const [box1L, setBox1L] = useState({});
  const [box1M, setBox1M] = useState({});
  const [box1N, setBox1N] = useState({});
  const [box1O, setBox1O] = useState({});

  // Save state mari mencoba cara 1 untuk x pertama
  const [kotakX1A, setKotakX1A] = useState({});
  const [kotakX1B, setKotakX1B] = useState({});
  const [kotakX1C, setKotakX1C] = useState({});
  const [kotakX1D, setKotakX1D] = useState({});
  const [kotakX1E, setKotakX1E] = useState({});
  const [kotakX1F, setKotakX1F] = useState({});
  const [kotakX1G, setKotakX1G] = useState({});
  const [kotakX1H, setKotakX1H] = useState({});
  const [kotakX1I, setKotakX1I] = useState({});
  const [kotakX1J, setKotakX1J] = useState({});
  const [kotakX1K, setKotakX1K] = useState({});
  const [kotakX1L, setKotakX1L] = useState({});
  const [kotakX1M, setKotakX1M] = useState({});
  const [kotakX1N, setKotakX1N] = useState({});
  const [kotakX1O, setKotakX1O] = useState({});
  const [kotakX1P, setKotakX1P] = useState({});
  const [kotakX1Q, setKotakX1Q] = useState({});
  const [kotakX1R, setKotakX1R] = useState({});
  const [kotakX1S, setKotakX1S] = useState({});
  const [kotakX1T, setKotakX1T] = useState({});
  const [kotakX1U, setKotakX1U] = useState({});
  const [kotakX1V, setKotakX1V] = useState({});
  const [kotakX1W, setKotakX1W] = useState({});

  // Save state mari mencoba cara 1 untuk x kedua
  const [kotakX2A, setKotakX2A] = useState({});
  const [kotakX2B, setKotakX2B] = useState({});
  const [kotakX2C, setKotakX2C] = useState({});
  const [kotakX2D, setKotakX2D] = useState({});
  const [kotakX2E, setKotakX2E] = useState({});
  const [kotakX2F, setKotakX2F] = useState({});
  const [kotakX2G, setKotakX2G] = useState({});
  const [kotakX2H, setKotakX2H] = useState({});
  const [kotakX2I, setKotakX2I] = useState({});
  const [kotakX2J, setKotakX2J] = useState({});
  const [kotakX2K, setKotakX2K] = useState({});
  const [kotakX2L, setKotakX2L] = useState({});
  const [kotakX2M, setKotakX2M] = useState({});
  const [kotakX2N, setKotakX2N] = useState({});
  const [kotakX2O, setKotakX2O] = useState({});
  const [kotakX2P, setKotakX2P] = useState({});
  const [kotakX2Q, setKotakX2Q] = useState({});
  const [kotakX2R, setKotakX2R] = useState({});
  const [kotakX2S, setKotakX2S] = useState({});
  const [kotakX2T, setKotakX2T] = useState({});
  const [kotakX2U, setKotakX2U] = useState({});
  const [kotakX2V, setKotakX2V] = useState({});

  // Save state mari mencoba cara 2
  const [box2A, setBox2A] = useState({});
  const [box2B, setBox2B] = useState({});
  const [box2C, setBox2C] = useState({});
  const [box2D, setBox2D] = useState({});
  const [box2E, setBox2E] = useState({});
  const [box2F, setBox2F] = useState({});
  const [box2G, setBox2G] = useState({});
  const [box2H, setBox2H] = useState({});
  const [box2I, setBox2I] = useState({});
  const [box2J, setBox2J] = useState({});
  const [box2K, setBox2K] = useState({});
  const [box2L, setBox2L] = useState({});
  const [box2M, setBox2M] = useState({});
  const [box2N, setBox2N] = useState({});
  const [box2O, setBox2O] = useState({});
  const [box2P, setBox2P] = useState({});
  const [box2Q, setBox2Q] = useState({});
  const [box2R, setBox2R] = useState({});
  const [box2Sa, setBox2Sa] = useState({});
  const [box2Sb, setBox2Sb] = useState({});
  const [box2T, setBox2T] = useState({});
  const [box2U, setBox2U] = useState({});
  const [box2V, setBox2V] = useState({});
  const [box2W, setBox2W] = useState({});

  // Save state cek jawaban mari mencoba cara 1
  const [cekJawabanBox1A, setCekJawabanBox1A] = useState(false);
  const [cekJawabanBox1B, setCekJawabanBox1B] = useState(false);
  const [cekJawabanBox1C, setCekJawabanBox1C] = useState(false);
  const [cekJawabanBox1D, setCekJawabanBox1D] = useState(false);
  const [cekJawabanBox1E, setCekJawabanBox1E] = useState(false);
  const [cekJawabanBox1F, setCekJawabanBox1F] = useState(false);
  const [cekJawabanBox1G, setCekJawabanBox1G] = useState(false);
  const [cekJawabanBox1H, setCekJawabanBox1H] = useState(false);
  const [cekJawabanBox1I, setCekJawabanBox1I] = useState(false);
  const [cekJawabanBox1J, setCekJawabanBox1J] = useState(false);
  const [cekJawabanBox1K, setCekJawabanBox1K] = useState(false);
  const [cekJawabanBox1L, setCekJawabanBox1L] = useState(false);
  const [cekJawabanBox1M, setCekJawabanBox1M] = useState(false);
  const [cekJawabanBox1N, setCekJawabanBox1N] = useState(false);
  const [cekJawabanBox1O, setCekJawabanBox1O] = useState(false);

  // Save state cek jawaban mari mencoba cara 1 untuk x pertama
  const [cekJawabanBoxX1A, setCekJawabanBoxX1A] = useState(false);
  const [cekJawabanBoxX1B, setCekJawabanBoxX1B] = useState(false);
  const [cekJawabanBoxX1C, setCekJawabanBoxX1C] = useState(false);
  const [cekJawabanBoxX1D, setCekJawabanBoxX1D] = useState(false);
  const [cekJawabanBoxX1E, setCekJawabanBoxX1E] = useState(false);
  const [cekJawabanBoxX1F, setCekJawabanBoxX1F] = useState(false);
  const [cekJawabanBoxX1G, setCekJawabanBoxX1G] = useState(false);
  const [cekJawabanBoxX1H, setCekJawabanBoxX1H] = useState(false);
  const [cekJawabanBoxX1I, setCekJawabanBoxX1I] = useState(false);
  const [cekJawabanBoxX1J, setCekJawabanBoxX1J] = useState(false);
  const [cekJawabanBoxX1K, setCekJawabanBoxX1K] = useState(false);
  const [cekJawabanBoxX1L, setCekJawabanBoxX1L] = useState(false);
  const [cekJawabanBoxX1M, setCekJawabanBoxX1M] = useState(false);
  const [cekJawabanBoxX1N, setCekJawabanBoxX1N] = useState(false);
  const [cekJawabanBoxX1O, setCekJawabanBoxX1O] = useState(false);
  const [cekJawabanBoxX1P, setCekJawabanBoxX1P] = useState(false);
  const [cekJawabanBoxX1Q, setCekJawabanBoxX1Q] = useState(false);
  const [cekJawabanBoxX1R, setCekJawabanBoxX1R] = useState(false);
  const [cekJawabanBoxX1S, setCekJawabanBoxX1S] = useState(false);
  const [cekJawabanBoxX1T, setCekJawabanBoxX1T] = useState(false);
  const [cekJawabanBoxX1U, setCekJawabanBoxX1U] = useState(false);
  const [cekJawabanBoxX1V, setCekJawabanBoxX1V] = useState(false);
  const [cekJawabanBoxX1W, setCekJawabanBoxX1W] = useState(false);

  // Save state cek jawaban mari mencoba cara 1 untuk x kedua
  const [cekJawabanBoxX2A, setCekJawabanBoxX2A] = useState(false);
  const [cekJawabanBoxX2B, setCekJawabanBoxX2B] = useState(false);
  const [cekJawabanBoxX2C, setCekJawabanBoxX2C] = useState(false);
  const [cekJawabanBoxX2D, setCekJawabanBoxX2D] = useState(false);
  const [cekJawabanBoxX2E, setCekJawabanBoxX2E] = useState(false);
  const [cekJawabanBoxX2F, setCekJawabanBoxX2F] = useState(false);
  const [cekJawabanBoxX2G, setCekJawabanBoxX2G] = useState(false);
  const [cekJawabanBoxX2H, setCekJawabanBoxX2H] = useState(false);
  const [cekJawabanBoxX2I, setCekJawabanBoxX2I] = useState(false);
  const [cekJawabanBoxX2J, setCekJawabanBoxX2J] = useState(false);
  const [cekJawabanBoxX2K, setCekJawabanBoxX2K] = useState(false);
  const [cekJawabanBoxX2L, setCekJawabanBoxX2L] = useState(false);
  const [cekJawabanBoxX2M, setCekJawabanBoxX2M] = useState(false);
  const [cekJawabanBoxX2N, setCekJawabanBoxX2N] = useState(false);
  const [cekJawabanBoxX2O, setCekJawabanBoxX2O] = useState(false);
  const [cekJawabanBoxX2P, setCekJawabanBoxX2P] = useState(false);
  const [cekJawabanBoxX2Q, setCekJawabanBoxX2Q] = useState(false);
  const [cekJawabanBoxX2R, setCekJawabanBoxX2R] = useState(false);
  const [cekJawabanBoxX2S, setCekJawabanBoxX2S] = useState(false);
  const [cekJawabanBoxX2T, setCekJawabanBoxX2T] = useState(false);
  const [cekJawabanBoxX2U, setCekJawabanBoxX2U] = useState(false);
  const [cekJawabanBoxX2V, setCekJawabanBoxX2V] = useState(false);

  // Save state cek jawaban mari mencoba cara 2
  const [cekJawabanBox2A, setCekJawabanBox2A] = useState(false);
  const [cekJawabanBox2B, setCekJawabanBox2B] = useState(false);
  const [cekJawabanBox2C, setCekJawabanBox2C] = useState(false);
  const [cekJawabanBox2D, setCekJawabanBox2D] = useState(false);
  const [cekJawabanBox2E, setCekJawabanBox2E] = useState(false);
  const [cekJawabanBox2F, setCekJawabanBox2F] = useState(false);
  const [cekJawabanBox2G, setCekJawabanBox2G] = useState(false);
  const [cekJawabanBox2H, setCekJawabanBox2H] = useState(false);
  const [cekJawabanBox2I, setCekJawabanBox2I] = useState(false);
  const [cekJawabanBox2J, setCekJawabanBox2J] = useState(false);
  const [cekJawabanBox2K, setCekJawabanBox2K] = useState(false);
  const [cekJawabanBox2L, setCekJawabanBox2L] = useState(false);
  const [cekJawabanBox2M, setCekJawabanBox2M] = useState(false);
  const [cekJawabanBox2N, setCekJawabanBox2N] = useState(false);
  const [cekJawabanBox2O, setCekJawabanBox2O] = useState(false);
  const [cekJawabanBox2P, setCekJawabanBox2P] = useState(false);
  const [cekJawabanBox2Q, setCekJawabanBox2Q] = useState(false);
  const [cekJawabanBox2R, setCekJawabanBox2R] = useState(false);
  const [cekJawabanBox2Sa, setCekJawabanBox2Sa] = useState(false);
  const [cekJawabanBox2Sb, setCekJawabanBox2Sb] = useState(false);
  const [cekJawabanBox2T, setCekJawabanBox2T] = useState(false);
  const [cekJawabanBox2U, setCekJawabanBox2U] = useState(false);
  const [cekJawabanBox2V, setCekJawabanBox2V] = useState(false);
  const [cekJawabanBox2W, setCekJawabanBox2W] = useState(false);

  // function cek jawaban mari mencoba cara 1
  const cekJawaban1A = (jawaban1A) => {
    if (
      jawaban1A.target.value === "(2x+4)" ||
      jawaban1A.target.value === "2x+4"
    ) {
      setBox1A({ border: "2px solid green" });
      setCekJawabanBox1A(true);
    } else {
      setBox1A({ border: "2px solid red" });
      setCekJawabanBox1A(false);
    }
  };
  const cekJawaban1B = (jawaban1B) => {
    if (jawaban1B.target.value === "2x+4") {
      setBox1B({ border: "2px solid green" });
      setCekJawabanBox1B(true);
    } else {
      setBox1B({ border: "2px solid red" });
      setCekJawabanBox1B(false);
    }
  };
  const cekJawaban1C = (jawaban1C) => {
    if (jawaban1C.target.value === "0") {
      setBox1C({ border: "2px solid green" });
      setCekJawabanBox1C(true);
    } else {
      setBox1C({ border: "2px solid red" });
      setCekJawabanBox1C(false);
    }
  };
  const cekJawaban1D = (jawaban1D) => {
    if (jawaban1D.target.value === "2x") {
      setBox1D({ border: "2px solid green" });
      setCekJawabanBox1D(true);
    } else {
      setBox1D({ border: "2px solid red" });
      setCekJawabanBox1D(false);
    }
  };
  const cekJawaban1E = (jawaban1E) => {
    if (jawaban1E.target.value === "-4") {
      setBox1E({ border: "2px solid green" });
      setCekJawabanBox1E(true);
    } else {
      setBox1E({ border: "2px solid red" });
      setCekJawabanBox1E(false);
    }
  };
  const cekJawaban1F = (jawaban1F) => {
    if (jawaban1F.target.value === "x") {
      setBox1F({ border: "2px solid green" });
      setCekJawabanBox1F(true);
    } else {
      setBox1F({ border: "2px solid red" });
      setCekJawabanBox1F(false);
    }
  };
  const cekJawaban1G = (jawaban1G) => {
    if (jawaban1G.target.value === "-2") {
      setBox1G({ border: "2px solid green" });
      setCekJawabanBox1G(true);
    } else {
      setBox1G({ border: "2px solid red" });
      setCekJawabanBox1G(false);
    }
  };
  const cekJawaban1H = (jawaban1H) => {
    if (jawaban1H.target.value === "-(2x+4)") {
      setBox1H({ border: "2px solid green" });
      setCekJawabanBox1H(true);
    } else {
      setBox1H({ border: "2px solid red" });
      setCekJawabanBox1H(false);
    }
  };
  const cekJawaban1I = (jawaban1I) => {
    if (
      jawaban1I.target.value === "(-2x-4)" ||
      jawaban1I.target.value === "-2x-4"
    ) {
      setBox1I({ border: "2px solid green" });
      setCekJawabanBox1I(true);
    } else {
      setBox1I({ border: "2px solid red" });
      setCekJawabanBox1I(false);
    }
  };
  const cekJawaban1J = (jawaban1J) => {
    if (jawaban1J.target.value === "-2x-4") {
      setBox1J({ border: "2px solid green" });
      setCekJawabanBox1J(true);
    } else {
      setBox1J({ border: "2px solid red" });
      setCekJawabanBox1J(false);
    }
  };
  const cekJawaban1K = (jawaban1K) => {
    if (jawaban1K.target.value === "0") {
      setBox1K({ border: "2px solid green" });
      setCekJawabanBox1K(true);
    } else {
      setBox1L({ border: "2px solid red" });
      setCekJawabanBox1L(false);
    }
  };
  const cekJawaban1L = (jawaban1L) => {
    if (jawaban1L.target.value === "-2x") {
      setBox1L({ border: "2px solid green" });
      setCekJawabanBox1L(true);
    } else {
      setBox1L({ border: "2px solid red" });
      setCekJawabanBox1L(false);
    }
  };
  const cekJawaban1M = (jawaban1M) => {
    if (jawaban1M.target.value === "4") {
      setBox1M({ border: "2px solid green" });
      setCekJawabanBox1M(true);
    } else {
      setBox1M({ border: "2px solid red" });
      setCekJawabanBox1M(false);
    }
  };
  const cekJawaban1N = (jawaban1N) => {
    if (jawaban1N.target.value === "x") {
      setBox1N({ border: "2px solid green" });
      setCekJawabanBox1N(true);
    } else {
      setBox1N({ border: "2px solid red" });
      setCekJawabanBox1N(false);
    }
  };
  const cekJawaban1O = (jawaban1O) => {
    if (jawaban1O.target.value === "-2") {
      setBox1O({ border: "2px solid green" });
      setCekJawabanBox1O(true);
    } else {
      setBox1O({ border: "2px solid red" });
      setCekJawabanBox1O(false);
    }
  };

  // function cek jawaban mari mencoba cara 1 untuk x pertama
  const cekJawabanX1A = (jawabanX1A) => {
    if (jawabanX1A.target.value === "2x") {
      setKotakX1A({ border: "2px solid green" });
      setCekJawabanBoxX1A(true);
    } else {
      setKotakX1A({ border: "2px solid red" });
      setCekJawabanBoxX1A(false);
    }
  };
  const cekJawabanX1B = (jawabanX1B) => {
    if (jawabanX1B.target.value === "4") {
      setKotakX1B({ border: "2px solid green" });
      setCekJawabanBoxX1B(true);
    } else {
      setKotakX1B({ border: "2px solid red" });
      setCekJawabanBoxX1B(false);
    }
  };
  const cekJawabanX1C = (jawabanX1C) => {
    if (jawabanX1C.target.value === "x") {
      setKotakX1C({ border: "2px solid green" });
      setCekJawabanBoxX1C(true);
    } else {
      setKotakX1C({ border: "2px solid red" });
      setCekJawabanBoxX1C(false);
    }
  };
  const cekJawabanX1D = (jawabanX1D) => {
    if (jawabanX1D.target.value === "8") {
      setKotakX1D({ border: "2px solid green" });
      setCekJawabanBoxX1D(true);
    } else {
      setKotakX1D({ border: "2px solid red" });
      setCekJawabanBoxX1D(false);
    }
  };
  const cekJawabanX1E = (jawabanX1E) => {
    if (jawabanX1E.target.value === "x") {
      setKotakX1E({ border: "2px solid green" });
      setCekJawabanBoxX1E(true);
    } else {
      setKotakX1E({ border: "2px solid red" });
      setCekJawabanBoxX1E(false);
    }
  };
  const cekJawabanX1F = (jawabanX1F) => {
    if (jawabanX1F.target.value === "x") {
      setKotakX1F({ border: "2px solid green" });
      setCekJawabanBoxX1F(true);
    } else {
      setKotakX1F({ border: "2px solid red" });
      setCekJawabanBoxX1F(false);
    }
  };
  const cekJawabanX1G = (jawabanX1G) => {
    if (jawabanX1G.target.value === "3x") {
      setKotakX1G({ border: "2px solid green" });
      setCekJawabanBoxX1G(true);
    } else {
      setKotakX1G({ border: "2px solid red" });
      setCekJawabanBoxX1G(false);
    }
  };
  const cekJawabanX1H = (jawabanX1H) => {
    if (jawabanX1H.target.value === "4") {
      setKotakX1H({ border: "2px solid green" });
      setCekJawabanBoxX1H(true);
    } else {
      setKotakX1H({ border: "2px solid red" });
      setCekJawabanBoxX1H(false);
    }
  };
  const cekJawabanX1I = (jawabanX1I) => {
    if (jawabanX1I.target.value === "8") {
      setKotakX1I({ border: "2px solid green" });
      setCekJawabanBoxX1I(true);
    } else {
      setKotakX1I({ border: "2px solid red" });
      setCekJawabanBoxX1I(false);
    }
  };
  const cekJawabanX1J = (jawabanX1J) => {
    if (jawabanX1J.target.value === "3x") {
      setKotakX1J({ border: "2px solid green" });
      setCekJawabanBoxX1J(true);
    } else {
      setKotakX1J({ border: "2px solid red" });
      setCekJawabanBoxX1J(false);
    }
  };
  const cekJawabanX1K = (jawabanX1K) => {
    if (jawabanX1K.target.value === "4") {
      setKotakX1K({ border: "2px solid green" });
      setCekJawabanBoxX1K(true);
    } else {
      setKotakX1K({ border: "2px solid red" });
      setCekJawabanBoxX1K(false);
    }
  };
  const cekJawabanX1L = (jawabanX1L) => {
    if (jawabanX1L.target.value === "4") {
      setKotakX1L({ border: "2px solid green" });
      setCekJawabanBoxX1L(true);
    } else {
      setKotakX1L({ border: "2px solid red" });
      setCekJawabanBoxX1L(false);
    }
  };
  const cekJawabanX1M = (jawabanX1M) => {
    if (jawabanX1M.target.value === "8") {
      setKotakX1M({ border: "2px solid green" });
      setCekJawabanBoxX1M(true);
    } else {
      setKotakX1M({ border: "2px solid red" });
      setCekJawabanBoxX1M(false);
    }
  };
  const cekJawabanX1N = (jawabanX1N) => {
    if (jawabanX1N.target.value === "4") {
      setKotakX1N({ border: "2px solid green" });
      setCekJawabanBoxX1N(true);
    } else {
      setKotakX1N({ border: "2px solid red" });
      setCekJawabanBoxX1N(false);
    }
  };
  const cekJawabanX1O = (jawabanX1O) => {
    if (jawabanX1O.target.value === "3x") {
      setKotakX1O({ border: "2px solid green" });
      setCekJawabanBoxX1O(true);
    } else {
      setKotakX1O({ border: "2px solid red" });
      setCekJawabanBoxX1O(false);
    }
  };
  const cekJawabanX1P = (jawabanX1P) => {
    if (jawabanX1P.target.value === "4") {
      setKotakX1P({ border: "2px solid green" });
      setCekJawabanBoxX1P(true);
    } else {
      setKotakX1P({ border: "2px solid red" });
      setCekJawabanBoxX1P(false);
    }
  };
  const cekJawabanX1Q = (jawabanX1Q) => {
    if (jawabanX1Q.target.value === "3x") {
      setKotakX1Q({ border: "2px solid green" });
      setCekJawabanBoxX1Q(true);
    } else {
      setKotakX1Q({ border: "2px solid red" });
      setCekJawabanBoxX1Q(false);
    }
  };
  const cekJawabanX1R = (jawabanX1R) => {
    if (jawabanX1R.target.value === "3") {
      setKotakX1R({ border: "2px solid green" });
      setCekJawabanBoxX1R(true);
    } else {
      setKotakX1R({ border: "2px solid red" });
      setCekJawabanBoxX1R(false);
    }
  };
  const cekJawabanX1S = (jawabanX1S) => {
    if (jawabanX1S.target.value === "4") {
      setKotakX1S({ border: "2px solid green" });
      setCekJawabanBoxX1S(true);
    } else {
      setKotakX1S({ border: "2px solid red" });
      setCekJawabanBoxX1S(false);
    }
  };
  const cekJawabanX1T = (jawabanX1T) => {
    if (jawabanX1T.target.value === "3") {
      setKotakX1T({ border: "2px solid green" });
      setCekJawabanBoxX1T(true);
    } else {
      setKotakX1T({ border: "2px solid red" });
      setCekJawabanBoxX1T(false);
    }
  };
  const cekJawabanX1U = (jawabanX1U) => {
    if (jawabanX1U.target.value === "x") {
      setKotakX1U({ border: "2px solid green" });
      setCekJawabanBoxX1U(true);
    } else {
      setKotakX1U({ border: "2px solid red" });
      setCekJawabanBoxX1U(false);
    }
  };
  const cekJawabanX1V = (jawabanX1V) => {
    if (jawabanX1V.target.value === "4") {
      setKotakX1V({ border: "2px solid green" });
      setCekJawabanBoxX1V(true);
    } else {
      setKotakX1V({ border: "2px solid red" });
      setCekJawabanBoxX1V(false);
    }
  };
  const cekJawabanX1W = (jawabanX1W) => {
    if (jawabanX1W.target.value === "3") {
      setKotakX1W({ border: "2px solid green" });
      setCekJawabanBoxX1W(true);
    } else {
      setKotakX1W({ border: "2px solid red" });
      setCekJawabanBoxX1W(false);
    }
  };

  // function cek jawaban mari mencoba cara 1 untuk x kedua

  const cekJawabanX2A = (jawabanX2A) => {
    if (jawabanX2A.target.value === "-2x") {
      setKotakX2A({ border: "2px solid green" });
      setCekJawabanBoxX2A(true);
    } else {
      setKotakX2A({ border: "2px solid red" });
      setCekJawabanBoxX2A(false);
    }
  };
  const cekJawabanX2B = (jawabanX2B) => {
    if (jawabanX2B.target.value === "4") {
      setKotakX2B({ border: "2px solid green" });
      setCekJawabanBoxX2B(true);
    } else {
      setKotakX2B({ border: "2px solid red" });
      setCekJawabanBoxX2B(false);
    }
  };
  const cekJawabanX2C = (jawabanX2C) => {
    if (jawabanX2C.target.value === "x") {
      setKotakX2C({ border: "2px solid green" });
      setCekJawabanBoxX2C(true);
    } else {
      setKotakX2C({ border: "2px solid red" });
      setCekJawabanBoxX2C(false);
    }
  };
  const cekJawabanX2D = (jawabanX2D) => {
    if (jawabanX2D.target.value === "8") {
      setKotakX2D({ border: "2px solid green" });
      setCekJawabanBoxX2D(true);
    } else {
      setKotakX2D({ border: "2px solid red" });
      setCekJawabanBoxX2D(false);
    }
  };
  const cekJawabanX2E = (jawabanX2E) => {
    if (jawabanX2E.target.value === "x") {
      setKotakX2E({ border: "2px solid green" });
      setCekJawabanBoxX2E(true);
    } else {
      setKotakX2E({ border: "2px solid red" });
      setCekJawabanBoxX2E(false);
    }
  };
  const cekJawabanX2F = (jawabanX2F) => {
    if (jawabanX2F.target.value === "x") {
      setKotakX2F({ border: "2px solid green" });
      setCekJawabanBoxX2F(true);
    } else {
      setKotakX2F({ border: "2px solid red" });
      setCekJawabanBoxX2F(false);
    }
  };
  const cekJawabanX2G = (jawabanX2G) => {
    if (jawabanX2G.target.value === "-x") {
      setKotakX2G({ border: "2px solid green" });
      setCekJawabanBoxX2G(true);
    } else {
      setKotakX2G({ border: "2px solid red" });
      setCekJawabanBoxX2G(false);
    }
  };
  const cekJawabanX2H = (jawabanX2H) => {
    if (jawabanX2H.target.value === "4") {
      setKotakX2H({ border: "2px solid green" });
      setCekJawabanBoxX2H(true);
    } else {
      setKotakX2H({ border: "2px solid red" });
      setCekJawabanBoxX2H(false);
    }
  };
  const cekJawabanX2I = (jawabanX2I) => {
    if (jawabanX2I.target.value === "8") {
      setKotakX2I({ border: "2px solid green" });
      setCekJawabanBoxX2I(true);
    } else {
      setKotakX2I({ border: "2px solid red" });
      setCekJawabanBoxX2I(false);
    }
  };
  const cekJawabanX2J = (jawabanX2J) => {
    if (jawabanX2J.target.value === "-x") {
      setKotakX2J({ border: "2px solid green" });
      setCekJawabanBoxX2J(true);
    } else {
      setKotakX2J({ border: "2px solid red" });
      setCekJawabanBoxX2J(false);
    }
  };
  const cekJawabanX2K = (jawabanX2K) => {
    if (jawabanX2K.target.value === "4") {
      setKotakX2K({ border: "2px solid green" });
      setCekJawabanBoxX2K(true);
    } else {
      setKotakX2K({ border: "2px solid red" });
      setCekJawabanBoxX2K(false);
    }
  };
  const cekJawabanX2L = (jawabanX2L) => {
    if (jawabanX2L.target.value === "4") {
      setKotakX2L({ border: "2px solid green" });
      setCekJawabanBoxX2L(true);
    } else {
      setKotakX2L({ border: "2px solid red" });
      setCekJawabanBoxX2L(false);
    }
  };
  const cekJawabanX2M = (jawabanX2M) => {
    if (jawabanX2M.target.value === "8") {
      setKotakX2M({ border: "2px solid green" });
      setCekJawabanBoxX2M(true);
    } else {
      setKotakX2M({ border: "2px solid red" });
      setCekJawabanBoxX2M(false);
    }
  };
  const cekJawabanX2N = (jawabanX2N) => {
    if (jawabanX2N.target.value === "4") {
      setKotakX2N({ border: "2px solid green" });
      setCekJawabanBoxX2N(true);
    } else {
      setKotakX2N({ border: "2px solid red" });
      setCekJawabanBoxX2N(false);
    }
  };
  const cekJawabanX2O = (jawabanX2O) => {
    if (jawabanX2O.target.value === "-x") {
      setKotakX2O({ border: "2px solid green" });
      setCekJawabanBoxX2O(true);
    } else {
      setKotakX2O({ border: "2px solid red" });
      setCekJawabanBoxX2O(false);
    }
  };
  const cekJawabanX2P = (jawabanX2P) => {
    if (jawabanX2P.target.value === "12") {
      setKotakX2P({ border: "2px solid green" });
      setCekJawabanBoxX2P(true);
    } else {
      setKotakX2P({ border: "2px solid red" });
      setCekJawabanBoxX2P(false);
    }
  };
  const cekJawabanX2Q = (jawabanX2Q) => {
    if (jawabanX2Q.target.value === "-x") {
      setKotakX2Q({ border: "2px solid green" });
      setCekJawabanBoxX2Q(true);
    } else {
      setKotakX2Q({ border: "2px solid red" });
      setCekJawabanBoxX2Q(false);
    }
  };
  const cekJawabanX2R = (jawabanX2R) => {
    if (jawabanX2R.target.value === "-1") {
      setKotakX2R({ border: "2px solid green" });
      setCekJawabanBoxX2R(true);
    } else {
      setKotakX2R({ border: "2px solid red" });
      setCekJawabanBoxX2R(false);
    }
  };
  const cekJawabanX2S = (jawabanX2S) => {
    if (jawabanX2S.target.value === "12") {
      setKotakX2S({ border: "2px solid green" });
      setCekJawabanBoxX2S(true);
    } else {
      setKotakX2S({ border: "2px solid red" });
      setCekJawabanBoxX2S(false);
    }
  };
  const cekJawabanX2T = (jawabanX2T) => {
    if (jawabanX2T.target.value === "-1") {
      setKotakX2T({ border: "2px solid green" });
      setCekJawabanBoxX2T(true);
    } else {
      setKotakX2T({ border: "2px solid red" });
      setCekJawabanBoxX2T(false);
    }
  };
  const cekJawabanX2U = (jawabanX2U) => {
    if (jawabanX2U.target.value === "x") {
      setKotakX2U({ border: "2px solid green" });
      setCekJawabanBoxX2U(true);
    } else {
      setKotakX2U({ border: "2px solid red" });
      setCekJawabanBoxX2U(false);
    }
  };
  const cekJawabanX2V = (jawabanX2V) => {
    if (jawabanX2V.target.value === "-12") {
      setKotakX2V({ border: "2px solid green" });
      setCekJawabanBoxX2V(true);
    } else {
      setKotakX2V({ border: "2px solid red" });
      setCekJawabanBoxX2V(false);
    }
  };

  // function cek jawaban mari mencoba cara 2
  const cekJawaban2A = (jawaban2A) => {
    if (jawaban2A.target.value === "3x+4") {
      setBox2A({ border: "2px solid green" });
      setCekJawabanBox2A(true);
    } else {
      setBox2A({ border: "2px solid red" });
      setCekJawabanBox2A(false);
    }
  };
  const cekJawaban2B = (jawaban2B) => {
    if (jawaban2B.target.value === "x-2") {
      setBox2B({ border: "2px solid green" });
      setCekJawabanBox2B(true);
    } else {
      setBox2B({ border: "2px solid red" });
      setCekJawabanBox2B(false);
    }
  };
  const cekJawaban2C = (jawaban2C) => {
    if (jawaban2C.target.value === "3x+4") {
      setBox2C({ border: "2px solid green" });
      setCekJawabanBox2C(true);
    } else {
      setBox2C({ border: "2px solid red" });
      setCekJawabanBox2C(false);
    }
  };
  const cekJawaban2D = (jawaban2D) => {
    if (jawaban2D.target.value === "x-2") {
      setBox2D({ border: "2px solid green" });
      setCekJawabanBox2D(true);
    } else {
      setBox2D({ border: "2px solid red" });
      setCekJawabanBox2D(false);
    }
  };
  const cekJawaban2E = (jawaban2E) => {
    if (jawaban2E.target.value === "3x+4") {
      setBox2E({ border: "2px solid green" });
      setCekJawabanBox2E(true);
    } else {
      setBox2E({ border: "2px solid red" });
      setCekJawabanBox2E(false);
    }
  };
  const cekJawaban2F = (jawaban2F) => {
    if (jawaban2F.target.value === "x-2") {
      setBox2F({ border: "2px solid green" });
      setCekJawabanBox2F(true);
    } else {
      setBox2F({ border: "2px solid red" });
      setCekJawabanBox2F(false);
    }
  };
  const cekJawaban2G = (jawaban2G) => {
    if (jawaban2G.target.value === "3x+4") {
      setBox2G({ border: "2px solid green" });
      setCekJawabanBox2G(true);
    } else {
      setBox2G({ border: "2px solid red" });
      setCekJawabanBox2G(false);
    }
  };
  const cekJawaban2H = (jawaban2H) => {
    if (jawaban2H.target.value === "x-2") {
      setBox2H({ border: "2px solid green" });
      setCekJawabanBox2H(true);
    } else {
      setBox2H({ border: "2px solid red" });
      setCekJawabanBox2H(false);
    }
  };
  const cekJawaban2I = (jawaban2I) => {
    if (jawaban2I.target.value === "0") {
      setBox2I({ border: "2px solid green" });
      setCekJawabanBox2I(true);
    } else {
      setBox2I({ border: "2px solid red" });
      setCekJawabanBox2I(false);
    }
  };
  const cekJawaban2J = (jawaban2J) => {
    if (jawaban2J.target.value === "3x+4+x-2") {
      setBox2J({ border: "2px solid green" });
      setCekJawabanBox2J(true);
    } else {
      setBox2J({ border: "2px solid red" });
      setCekJawabanBox2J(false);
    }
  };
  const cekJawaban2K = (jawaban2K) => {
    if (jawaban2K.target.value === "3x+4-x+2") {
      setBox2K({ border: "2px solid green" });
      setCekJawabanBox2K(true);
    } else {
      setBox2L({ border: "2px solid red" });
      setCekJawabanBox2L(false);
    }
  };
  const cekJawaban2L = (jawaban2L) => {
    if (jawaban2L.target.value === "0") {
      setBox2L({ border: "2px solid green" });
      setCekJawabanBox2L(true);
    } else {
      setBox2L({ border: "2px solid red" });
      setCekJawabanBox2L(false);
    }
  };
  const cekJawaban2M = (jawaban2M) => {
    if (jawaban2M.target.value === "4x+2") {
      setBox2M({ border: "2px solid green" });
      setCekJawabanBox2M(true);
    } else {
      setBox2M({ border: "2px solid red" });
      setCekJawabanBox2M(false);
    }
  };
  const cekJawaban2N = (jawaban2N) => {
    if (jawaban2N.target.value === "2x+6") {
      setBox2N({ border: "2px solid green" });
      setCekJawabanBox2N(true);
    } else {
      setBox2N({ border: "2px solid red" });
      setCekJawabanBox2N(false);
    }
  };
  const cekJawaban2O = (jawaban2O) => {
    if (jawaban2O.target.value === "0") {
      setBox2O({ border: "2px solid green" });
      setCekJawabanBox2O(true);
    } else {
      setBox2O({ border: "2px solid red" });
      setCekJawabanBox2O(false);
    }
  };
  const cekJawaban2P = (jawaban2P) => {
    if (jawaban2P.target.value === "4x") {
      setBox2P({ border: "2px solid green" });
      setCekJawabanBox2P(true);
    } else {
      setBox2P({ border: "2px solid red" });
      setCekJawabanBox2P(false);
    }
  };
  const cekJawaban2Q = (jawaban2Q) => {
    if (jawaban2Q.target.value === "-2") {
      setBox2Q({ border: "2px solid green" });
      setCekJawabanBox2Q(true);
    } else {
      setBox2Q({ border: "2px solid red" });
      setCekJawabanBox2Q(false);
    }
  };
  const cekJawaban2R = (jawaban2R) => {
    if (jawaban2R.target.value === "x") {
      setBox2R({ border: "2px solid green" });
      setCekJawabanBox2R(true);
    } else {
      setBox2R({ border: "2px solid red" });
      setCekJawabanBox2R(false);
    }
  };
  const cekJawaban2Sa = (jawaban2Sa) => {
    if (jawaban2Sa.target.value === "1") {
      setBox2Sa({ border: "2px solid green" });
      setCekJawabanBox2Sa(true);
    } else {
      setBox2Sa({ border: "2px solid red" });
      setCekJawabanBox2Sa(false);
    }
  };
  const cekJawaban2Sb = (jawaban2Sb) => {
    if (jawaban2Sb.target.value === "2") {
      setBox2Sb({ border: "2px solid green" });
      setCekJawabanBox2Sb(true);
    } else {
      setBox2Sb({ border: "2px solid red" });
      setCekJawabanBox2Sb(false);
    }
  };
  const cekJawaban2T = (jawaban2T) => {
    if (jawaban2T.target.value === "2x") {
      setBox2T({ border: "2px solid green" });
      setCekJawabanBox2T(true);
    } else {
      setBox2T({ border: "2px solid red" });
      setCekJawabanBox2T(false);
    }
  };
  const cekJawaban2U = (jawaban2U) => {
    if (jawaban2U.target.value === "-6") {
      setBox2U({ border: "2px solid green" });
      setCekJawabanBox2U(true);
    } else {
      setBox2U({ border: "2px solid red" });
      setCekJawabanBox2U(false);
    }
  };
  const cekJawaban2V = (jawaban2V) => {
    if (jawaban2V.target.value === "x") {
      setBox2V({ border: "2px solid green" });
      setCekJawabanBox2V(true);
    } else {
      setBox2V({ border: "2px solid red" });
      setCekJawabanBox2V(false);
    }
  };
  const cekJawaban2W = (jawaban2W) => {
    if (jawaban2W.target.value === "-3") {
      setBox2W({ border: "2px solid green" });
      setCekJawabanBox2W(true);
    } else {
      setBox2W({ border: "2px solid red" });
      setCekJawabanBox2W(false);
    }
  };
  return (
    <>
      <div className="text-sm text-justify relative">
        <div className=" flex bg-white pb-2">
          <p className="uppercase font-bold text-justify text-md">
            2.2 Persamaan Nilai Mutlak Linear Satu Variabel
          </p>
        </div>
        <div className="border-t-2 border-trueGray-300 border-b-2">
          <p className="py-2">
            Setelah sebelumnya mempelajari persamaan linear satu variabel, pada
            sub bab ini kita akan mempelajari persamaan linear satu variabel
            yang memuat nilai mutlak.
          </p>
        </div>
        <a className="text-white bg-indigo-300 w-full justify-center uppercase h-10 p-2 mt-2 flex rounded-lg items-center font-bold">
          Kajian Teori
        </a>
        <div className="p-3 mt-2 text-sm border-2 border-trueGray-300 text-justify ">
          <ol className="list-decimal list-outside ml-2">
            <li className="font-bold">
              Persamaan Nilai Mutlak
              <p className=" font-normal">
                Persamaan nilai mutlak adalah persamaan yang variabelnya berada
                dalam tanda mutlak, persamaan linear satu variabel dalam nilai
                mutlak dapat dirumuskan sebagai berikut.{" "}
              </p>
              <p className="border border-trueGray-500 p-3 w-max mt-2">
                <InlineMath>|ax + b| = c</InlineMath>
              </p>
              <p className="font-bold pt-2">Contoh:</p>
              <ol className="font-normal list-lowerAlpha list-inside ml-6 flex flex-col gap-2">
                <li className="pt-2">
                  <InlineMath>|4x-7|=10</InlineMath>
                </li>
                <li>
                  <InlineMath>|x+1|=3</InlineMath>
                </li>
              </ol>
            </li>
            <li className="font-bold pt-4">
              Sifat-sifat Nilai Mutlak untuk Persamaan Nilai Mutlak
              <p className=" font-normal">
                Selain dari definisi nilai mutlak yang sudah kalian pelajari
                sebelumnya, terdapat beberapa sifat nilai mutlak yang sering
                digunakan dalam menyelesaikan masalah yang melibatkan persamaan
                nilai mutlak linear satu variabel ialah sebagai berikut.{" "}
              </p>
              <ol className="font-normal list-decimal list-inside ml-6 flex flex-col gap-2">
                <li className="pt-2">
                  <InlineMath math="|x|=\sqrt{x^2}" />
                </li>
                <li className="py-2">
                  <InlineMath>|a * b| = |a| * |b|</InlineMath>
                </li>
                <li>
                  <InlineMath math="|\dfrac a b| = \dfrac {|a|} {|b|}, b \ne 0" />
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <p className="pt-2">
          Terdapat dua cara dalam menyelesaikan persamaan nilai mutlak,yaitu
          sebagai berikut.
        </p>
        <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 gap-1">
          <li className="flex-auto text-center">
            <button
              className={
                " rounded-lg bg-indigo-300 text-white hover:text-indigo-300 w-full block font-medium text-base leading-tight uppercase border-x-0 border-t-0 border-b-2 border-r-2 border-transparent px-6 py-2 my-2 hover:border-indigo-300 hover:bg-gray-100  cursor-pointer " +
                (bukaTab === 1
                  ? " text-indigo-300  bg-gray-100 border-indigo-300"
                  : "")
              }
              onClick={() => setBukaTab(1)}
            >
              Cara 1 (Klik Saya)
            </button>
          </li>

          <li className=" flex-auto text-center">
            <button
              className={
                " rounded-lg bg-indigo-300 text-white hover:text-indigo-300 w-full block font-medium text-base leading-tight uppercase border-x-0 border-t-0 border-b-2 border-r-2 border-transparent px-6 py-2 my-2 hover:border-indigo-300 hover:bg-gray-100  cursor-pointer " +
                (bukaTab === 2
                  ? " text-indigo-300  bg-gray-100 border-indigo-300"
                  : "")
              }
              onClick={() => setBukaTab(2)}
            >
              Cara 2 (Klik Saya)
            </button>
          </li>
        </ul>
        <div>
          {/* Cara 1 */}
          <div className={"pb-5 " + (bukaTab === 1 ? "block" : "hidden")}>
            <div className="p-2 text-sm border-2 border-trueGray-300 text-justify ">
              <ol className="list-decimal pt-2 ml-3 list-outside flex flex-col gap-2">
                <li className="font-bold">Menggunakan Definisi Nilai Mutlak</li>
                <p>
                  Sifat-sifat persamaan nilai mutlak untuk setiap{" "}
                  <InlineMath>a,b,c,</InlineMath> dan <InlineMath>x</InlineMath>{" "}
                  bilangan riil dengan <InlineMath>a \ne 0</InlineMath> .
                </p>
                <ol className="list-lowerAlpha list-inside flex flex-col gap-2">
                  <li>
                    {" "}
                    Jika <InlineMath>|ax+b|=c</InlineMath> dengan{" "}
                    <InlineMath>c \ge 0</InlineMath>, berlaku salah satu sifat
                    berikut.
                    <ol className="list-decimal list-inside ml-3 flex flex-col gap-2">
                      <li>
                        <InlineMath>ax+b=c</InlineMath>, untuk{" "}
                        <InlineMath>x \ge -\dfrac b a</InlineMath>
                      </li>
                      <li>
                        <InlineMath>-(ax+b)=c</InlineMath>, untuk{" "}
                        <InlineMath>x \lt -\dfrac b a</InlineMath>
                      </li>
                    </ol>
                  </li>
                  <li>
                    Jika <InlineMath>|ax+b|=c</InlineMath> dengan{" "}
                    <InlineMath>c \lt 0</InlineMath> tidak ada bilangan riil x
                    yang memenuhi persamaan <InlineMath>|ax+b|=c</InlineMath> .
                  </li>
                </ol>
              </ol>
            </div>
            <button
              className="text-white justify-center bg-indigo-300 w-full h-10 p-2 mt-2 flex rounded-lg items-center font-bold hover:bg-white hover:text-indigo-300 hover:ring-2 hover:ring-indigo-300"
              onClick={() => setBukaContohSatu(!bukaContohSatu)}
            >
              Contoh Soal (Klik Saya)
            </button>

            {/* Contoh Soal Cara 1 */}
            <div
              className={" mt-2 text-sm " + (bukaContohSatu ? "" : "hidden")}
            >
              <div className="border-2 border-trueGray-300 text-justify p-2">
                <ol className="list-decimal list-inside">
                  <li>
                    Tentukan himpunan penyelesaian persamaan{" "}
                    <InlineMath>|x-2|=5</InlineMath>!
                    <p className="indent-xs py-1 font-bold">Penyelesaian:</p>
                    <p className="indent-xs py-1">Langkah 1:</p>
                    <p className="indent-xs py-1">
                      Masukkan persamaan kedalam definisi nilai mutlak.
                    </p>
                    <p className="indent-xs py-1">
                      <InlineMath math="\ |x-2| = \begin{cases}(x-2), \text{untuk } x \ge 2 \\ -(x-2) = (-x+2), \text{untuk } x \lt 2 \end{cases}" />
                    </p>
                    <p className="indent-xs py-1">Langkah 2:</p>
                    <p className="indent-xs py-1">
                      Cari nilai x untuk setiap syarat{" "}
                      <InlineMath>(x \ge 2)</InlineMath> dan{" "}
                      <InlineMath>(x \lt 2)</InlineMath>
                    </p>
                    <p className="indent-xs py-1 font-bold">
                      Untuk <InlineMath>(x \ge 2)</InlineMath>
                    </p>
                    <p className="indent-xs py-1">
                      {" "}
                      <InlineMath>(x-2)=5</InlineMath>{" "}
                    </p>
                    <p className="indent-xs py-1">
                      {" "}
                      <InlineMath>x-2+2=5+2</InlineMath>{" "}
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                          fill="black"
                          stroke="currentColor"
                          className="inline-block relative ml-6"
                        >
                          <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                        </svg>
                      </span>
                      <span className="font-bold">Kedua ruas ditambah 2</span>
                    </p>
                    <p className="indent-xs py-1">
                      {" "}
                      <InlineMath>x=7</InlineMath>{" "}
                    </p>
                    <p className="indent-xs py-1">
                      Karena nilai <InlineMath>x=7</InlineMath> memenuhi syarat{" "}
                      <InlineMath>x \ge 2</InlineMath> maka nilai x memenuhi
                      penyelesaian.
                    </p>
                    <p className="indent-xs py-1 font-bold">
                      Untuk <InlineMath>(x \lt 2)</InlineMath>
                    </p>
                    <p className="indent-xs py-1">
                      {" "}
                      <InlineMath>(-x+2)=5</InlineMath>{" "}
                    </p>
                    <p className="indent-xs py-1">
                      {" "}
                      <InlineMath>-x+2-2=5-2</InlineMath>{" "}
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                          fill="black"
                          stroke="currentColor"
                          className="inline-block relative ml-3"
                        >
                          <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                        </svg>
                      </span>
                      <span className="font-bold">Kedua ruas dikurang 2</span>
                    </p>
                    <p className="indent-xs py-1">
                      {" "}
                      <InlineMath>-x=3</InlineMath>{" "}
                    </p>
                    <p className="indent-xs py-1">
                      {" "}
                      <InlineMath math="\dfrac {-x}{-1} = \dfrac 3 {-1}" />{" "}
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                          fill="black"
                          stroke="currentColor"
                          className="inline-block relative ml-20"
                        >
                          <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                        </svg>
                      </span>
                      <span className="font-bold">Kedua ruas dibagi -1</span>
                    </p>
                    <p className="indent-xs py-1">
                      {" "}
                      <InlineMath>x=-3</InlineMath>{" "}
                    </p>
                    <p className="indent-xs py-1">
                      Karena nilai <InlineMath>x=-3</InlineMath> memenuhi syarat{" "}
                      <InlineMath>x \lt 2</InlineMath> maka nilai x memenuhi
                      penyelesaian.
                    </p>
                    <p className="indent-xs py-1">
                      Sehingga himpunan penyelesaian dari{" "}
                      <InlineMath>|x-2|=5</InlineMath> adalah{" "}
                      <InlineMath math="\{ -3, 7 \}" />.
                    </p>
                  </li>
                </ol>
              </div>

              {/* Mari Mencoba Cara 1 */}
              <button
                className="text-white justify-center bg-indigo-300 w-full h-10 p-2 mt-2 flex rounded-lg items-center font-bold hover:bg-white hover:text-indigo-300 hover:ring-2 hover:ring-indigo-300"
                onClick={() => setBukaLatihanSatu(!bukaLatihanSatu)}
              >
                Mari Mencoba (Klik Saya)
              </button>
              <div
                className={" mt-2 text-sm " + (bukaLatihanSatu ? "" : "hidden")}
              >
                {/* <div>
                  <button
                    onClick={tooglePetunjukSatu}
                    className=" uppercase mt-2 flex justify-between items-center gap-8 px-2 py-1 transition-all duration-300 ease-linear bg-cyan-600 text-white hover:ring-1 hover:ring-cyan-600 rounded-lg hover:bg-white hover:text-cyan-600 hover:rounded-lg cursor-pointer"
                  >
                    Petunjuk (klik saya)
                  </button>
                </div> */}
                <div
                  className="bg-cyan-500 w-full p-2 mt-2 text-white "
                  // className={
                  //   "bg-cyan-500 w-full p-2 mt-2 text-white " +
                  //   (petunjukSatu ? "" : "hidden")
                  // }
                >
                  <ol className="list-decimal pl-3">
                    <li>
                      <div className="flex  items-center">
                        {" "}
                        <span className="mr-4">
                          Isi kotak kosong dengan jawaban anda
                        </span>
                        <img
                          src="/materi/1.png"
                          className="rounded-full w-20 h-14"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="flex  items-center">
                        {" "}
                        <span className="mr-4">
                          Jika jawaban salah maka sisi kotak akan berwarna merah
                        </span>
                        <img
                          src="/materi/2.png"
                          className="rounded-full w-20 h-14"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="flex  items-center">
                        {" "}
                        <span className="mr-4">
                          Jika jawaban benar maka sisi kotak akan berwarna hijau
                        </span>
                        <img
                          src="/materi/3.png"
                          className="rounded-full w-20 h-14"
                        />
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="border-2 border-trueGray-300 text-justify p-2">
                  <ol className="list-decimal list-outside ml-4">
                    <li>
                      Tentukan himpunan penyelesaian persamaan{" "}
                      <InlineMath>|2x+4|=8-x</InlineMath>!
                      <ul className="list-inside">
                        <li className="font-bold pt-2">Penyelesaian:</li>
                        <li className="font-medium py-1">Langkah 1:</li>
                        <li className="font-medium py-1">
                          Masukkan persamaan kedalam definisi nilai mutlak.
                        </li>
                        <li className="py-1">
                          <div className="inline-block">
                            <div className="flex flex-row items-center">
                              <InlineMath math="\ |2x+4| = \Biggr\lbrace" />
                              <span className="inline-block">
                                <div className="flex flex-col">
                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(1)"
                                      style={box1A}
                                      onChange={cekJawaban1A}
                                      placeholder=". . . . . . . ."
                                      autoComplete="off"
                                      type="text"
                                    />
                                    , untuk
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(2)"
                                      style={box1B}
                                      onChange={cekJawaban1B}
                                      placeholder=". . . . . . . ."
                                      autoComplete="off"
                                      type="text"
                                    />
                                    <InlineMath>\ge</InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(3)"
                                      style={box1C}
                                      onChange={cekJawaban1C}
                                      placeholder=". . ."
                                      autoComplete="off"
                                      type="text"
                                    />
                                  </div>
                                  <div
                                    className={
                                      "ml-36 " +
                                      (cekJawabanBox1A &&
                                      cekJawabanBox1B &&
                                      cekJawabanBox1C
                                        ? ""
                                        : "hidden")
                                    }
                                  >
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(4)"
                                      style={box1D}
                                      onChange={cekJawaban1D}
                                      placeholder=". . . . ."
                                      autoComplete="off"
                                      type="text"
                                    />
                                    <InlineMath>\ge</InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(5)"
                                      style={box1E}
                                      onChange={cekJawaban1E}
                                      placeholder=". . ."
                                      autoComplete="off"
                                      type="text"
                                    />
                                  </div>
                                  <div
                                    className={
                                      "ml-36 " +
                                      (cekJawabanBox1A &&
                                      cekJawabanBox1B &&
                                      cekJawabanBox1C &&
                                      cekJawabanBox1D &&
                                      cekJawabanBox1E
                                        ? ""
                                        : "hidden")
                                    }
                                  >
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(6)"
                                      style={box1F}
                                      onChange={cekJawaban1F}
                                      placeholder=". . . . ."
                                      autoComplete="off"
                                      type="text"
                                    />
                                    <InlineMath>\ge</InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(7)"
                                      style={box1G}
                                      onChange={cekJawaban1G}
                                      placeholder=". . ."
                                      autoComplete="off"
                                      type="text"
                                    />
                                  </div>
                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(8)"
                                      style={box1H}
                                      onChange={cekJawaban1H}
                                      placeholder=". . . . . . . ."
                                      autoComplete="off"
                                      type="text"
                                    />
                                    <InlineMath>=</InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(9)"
                                      style={box1I}
                                      onChange={cekJawaban1I}
                                      placeholder=". . . . . . . ."
                                      autoComplete="off"
                                      type="text"
                                    />
                                    , untuk
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(10)"
                                      style={box1J}
                                      onChange={cekJawaban1J}
                                      placeholder=". . . . . . . ."
                                      autoComplete="off"
                                      type="text"
                                    />
                                    <InlineMath>\lt</InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(11)"
                                      style={box1K}
                                      onChange={cekJawaban1K}
                                      placeholder=". . ."
                                      autoComplete="off"
                                      type="text"
                                    />
                                  </div>
                                  <div
                                    className={
                                      "ml-60 " +
                                      (cekJawabanBox1H &&
                                      cekJawabanBox1I &&
                                      cekJawabanBox1J &&
                                      cekJawabanBox1K
                                        ? ""
                                        : "hidden")
                                    }
                                  >
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(12)"
                                      style={box1L}
                                      onChange={cekJawaban1L}
                                      placeholder=". . . . ."
                                      autoComplete="off"
                                      type="text"
                                    />
                                    <InlineMath>\lt</InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(13)"
                                      style={box1M}
                                      onChange={cekJawaban1M}
                                      placeholder=". . ."
                                      autoComplete="off"
                                      type="text"
                                    />
                                  </div>
                                  <div
                                    className={
                                      "ml-60 " +
                                      (cekJawabanBox1H &&
                                      cekJawabanBox1I &&
                                      cekJawabanBox1J &&
                                      cekJawabanBox1K &&
                                      cekJawabanBox1L &&
                                      cekJawabanBox1M
                                        ? ""
                                        : "hidden")
                                    }
                                  >
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(14)"
                                      style={box1N}
                                      onChange={cekJawaban1N}
                                      placeholder=". . . . ."
                                      autoComplete="off"
                                      type="text"
                                    />
                                    <InlineMath>\lt</InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(15)"
                                      style={box1O}
                                      onChange={cekJawaban1O}
                                      placeholder=". . ."
                                      autoComplete="off"
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </span>
                              <br />
                            </div>
                          </div>
                        </li>
                        <li
                          className={
                            "font-medium py-1 " +
                            (cekJawabanBox1A &&
                            cekJawabanBox1B &&
                            cekJawabanBox1C &&
                            cekJawabanBox1D &&
                            cekJawabanBox1E &&
                            cekJawabanBox1F &&
                            cekJawabanBox1G &&
                            cekJawabanBox1H &&
                            cekJawabanBox1I &&
                            cekJawabanBox1J &&
                            cekJawabanBox1K &&
                            cekJawabanBox1L &&
                            cekJawabanBox1M &&
                            cekJawabanBox1N &&
                            cekJawabanBox1O
                              ? ""
                              : "hidden")
                          }
                        >
                          Langkah 2:
                        </li>
                        <li
                          className={
                            "font-medium py-1 " +
                            (cekJawabanBox1A &&
                            cekJawabanBox1B &&
                            cekJawabanBox1C &&
                            cekJawabanBox1D &&
                            cekJawabanBox1E &&
                            cekJawabanBox1F &&
                            cekJawabanBox1G &&
                            cekJawabanBox1H &&
                            cekJawabanBox1I &&
                            cekJawabanBox1J &&
                            cekJawabanBox1K &&
                            cekJawabanBox1L &&
                            cekJawabanBox1M &&
                            cekJawabanBox1N &&
                            cekJawabanBox1O
                              ? ""
                              : "hidden")
                          }
                        >
                          Cari nilai x untuk setiap syarat{" "}
                          <InlineMath>(x \ge -2)</InlineMath> dan{" "}
                          <InlineMath>(x \lt -2)</InlineMath>
                        </li>
                        <li
                          className={
                            "py-1 " +
                            (cekJawabanBox1A &&
                            cekJawabanBox1B &&
                            cekJawabanBox1C &&
                            cekJawabanBox1D &&
                            cekJawabanBox1E &&
                            cekJawabanBox1F &&
                            cekJawabanBox1G &&
                            cekJawabanBox1H &&
                            cekJawabanBox1I &&
                            cekJawabanBox1J &&
                            cekJawabanBox1K &&
                            cekJawabanBox1L &&
                            cekJawabanBox1M &&
                            cekJawabanBox1N &&
                            cekJawabanBox1O
                              ? ""
                              : "hidden")
                          }
                        >
                          <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 gap-1 border-trueGray-300">
                            <li className="flex-auto text-center">
                              <button
                                className=" rounded-lg bg-indigo-300 text-white hover:text-indigo-300 focus:text-indigo-300 w-full block font-medium text-base leading-tight border-x-0 border-t-0 border-b-2 border-r-2 border-transparent px-6 py-2 my-2 hover:border-indigo-300 hover:bg-gray-100 focus:bg-gray-100 focus:border-indigo-300 cursor-pointer "
                                onClick={() => setBukaTabDua(1)}
                              >
                                Untuk <InlineMath>x \ge -2</InlineMath>
                              </button>
                            </li>

                            <li className=" flex-auto text-center">
                              <button
                                className=" rounded-lg bg-indigo-300 text-white hover:text-indigo-300 focus:text-indigo-300 w-full block font-medium text-base leading-tight border-x-0 border-t-0 border-b-2 border-l-2 border-transparent px-6 py-2 my-2 hover:border-indigo-300 hover:bg-gray-100 focus:bg-gray-100 focus:border-indigo-300 cursor-pointer "
                                onClick={() => setBukaTabDua(2)}
                              >
                                Untuk <InlineMath>x \lt -2</InlineMath>
                              </button>
                            </li>
                          </ul>
                        </li>
                        <li
                          className={
                            "py-1 " +
                            (bukaTabDua === 1 &&
                            cekJawabanBox1A &&
                            cekJawabanBox1B &&
                            cekJawabanBox1C &&
                            cekJawabanBox1D &&
                            cekJawabanBox1E &&
                            cekJawabanBox1F &&
                            cekJawabanBox1G &&
                            cekJawabanBox1H &&
                            cekJawabanBox1I &&
                            cekJawabanBox1J &&
                            cekJawabanBox1K &&
                            cekJawabanBox1L &&
                            cekJawabanBox1M &&
                            cekJawabanBox1N &&
                            cekJawabanBox1O
                              ? "block"
                              : "hidden")
                          }
                        >
                          {/* Kotak untuk x pertama */}
                          <div className="flex flex-col">
                            <div className="flex flex-row gap-6 items-center ml-2">
                              <InlineMath>2x+4</InlineMath>
                              <InlineMath>=</InlineMath>
                              <InlineMath>8-x</InlineMath>
                            </div>
                            <div className="flex flex-row gap-6 items-center">
                              <div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(1)"
                                  style={kotakX1A}
                                  onChange={cekJawabanX1A}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                                <InlineMath>+</InlineMath>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(2)"
                                  style={kotakX1B}
                                  onChange={cekJawabanX1B}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                                <InlineMath>+</InlineMath>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(3)"
                                  style={kotakX1C}
                                  onChange={cekJawabanX1C}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                              </div>

                              <InlineMath>=</InlineMath>
                              <div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(4)"
                                  style={kotakX1D}
                                  onChange={cekJawabanX1D}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                                <InlineMath>-</InlineMath>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(5)"
                                  style={kotakX1E}
                                  onChange={cekJawabanX1E}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                                <InlineMath>+</InlineMath>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(6)"
                                  style={kotakX1F}
                                  onChange={cekJawabanX1F}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                              </div>
                            </div>
                            <div
                              className={
                                "flex flex-row gap-6 items-center " +
                                (cekJawabanBoxX1A &&
                                cekJawabanBoxX1B &&
                                cekJawabanBoxX1C &&
                                cekJawabanBoxX1D &&
                                cekJawabanBoxX1E &&
                                cekJawabanBoxX1F
                                  ? "block"
                                  : "hidden")
                              }
                            >
                              <div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(7)"
                                  style={kotakX1G}
                                  onChange={cekJawabanX1G}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                                <InlineMath>+</InlineMath>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(8)"
                                  style={kotakX1H}
                                  onChange={cekJawabanX1H}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                              </div>

                              <InlineMath>=</InlineMath>
                              <div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(9)"
                                  style={kotakX1I}
                                  onChange={cekJawabanX1I}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                              </div>
                            </div>
                            <div
                              className={
                                "flex flex-row gap-6 items-center " +
                                (cekJawabanBoxX1A &&
                                cekJawabanBoxX1B &&
                                cekJawabanBoxX1C &&
                                cekJawabanBoxX1D &&
                                cekJawabanBoxX1E &&
                                cekJawabanBoxX1F &&
                                cekJawabanBoxX1G &&
                                cekJawabanBoxX1H &&
                                cekJawabanBoxX1I
                                  ? "block"
                                  : "hidden")
                              }
                            >
                              <div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(10)"
                                  style={kotakX1J}
                                  onChange={cekJawabanX1J}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                                <InlineMath>+</InlineMath>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(11)"
                                  style={kotakX1K}
                                  onChange={cekJawabanX1K}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                                <InlineMath>-</InlineMath>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(12)"
                                  style={kotakX1L}
                                  onChange={cekJawabanX1L}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                              </div>

                              <InlineMath>=</InlineMath>
                              <div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(13)"
                                  style={kotakX1M}
                                  onChange={cekJawabanX1M}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                                <InlineMath>-</InlineMath>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(14)"
                                  style={kotakX1N}
                                  onChange={cekJawabanX1N}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                              </div>
                            </div>
                            <div
                              className={
                                "flex flex-row gap-6 items-center " +
                                (cekJawabanBoxX1A &&
                                cekJawabanBoxX1B &&
                                cekJawabanBoxX1C &&
                                cekJawabanBoxX1D &&
                                cekJawabanBoxX1E &&
                                cekJawabanBoxX1F &&
                                cekJawabanBoxX1G &&
                                cekJawabanBoxX1H &&
                                cekJawabanBoxX1I &&
                                cekJawabanBoxX1J &&
                                cekJawabanBoxX1K &&
                                cekJawabanBoxX1L &&
                                cekJawabanBoxX1M &&
                                cekJawabanBoxX1N
                                  ? "block"
                                  : "hidden")
                              }
                            >
                              <div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(15)"
                                  style={kotakX1O}
                                  onChange={cekJawabanX1O}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                              </div>

                              <InlineMath>=</InlineMath>
                              <div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(16)"
                                  style={kotakX1P}
                                  onChange={cekJawabanX1P}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                              </div>
                            </div>
                            <div
                              className={
                                "flex flex-row gap-6 items-center " +
                                (cekJawabanBoxX1A &&
                                cekJawabanBoxX1B &&
                                cekJawabanBoxX1C &&
                                cekJawabanBoxX1D &&
                                cekJawabanBoxX1E &&
                                cekJawabanBoxX1F &&
                                cekJawabanBoxX1G &&
                                cekJawabanBoxX1H &&
                                cekJawabanBoxX1I &&
                                cekJawabanBoxX1J &&
                                cekJawabanBoxX1K &&
                                cekJawabanBoxX1L &&
                                cekJawabanBoxX1M &&
                                cekJawabanBoxX1N &&
                                cekJawabanBoxX1O &&
                                cekJawabanBoxX1P
                                  ? "block"
                                  : "hidden")
                              }
                            >
                              <div className="flex flex-col">
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(17)"
                                  style={kotakX1Q}
                                  onChange={cekJawabanX1Q}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />
                                <div className="ml-2 mr-2  border-b border-black"></div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(18)"
                                  style={kotakX1R}
                                  onChange={cekJawabanX1R}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />
                              </div>

                              <InlineMath>=</InlineMath>
                              <div className="flex flex-col">
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(19)"
                                  style={kotakX1S}
                                  onChange={cekJawabanX1S}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />
                                <div className="ml-2 mr-2  border-b border-black"></div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(20)"
                                  style={kotakX1T}
                                  onChange={cekJawabanX1T}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div
                              className={
                                "flex flex-row gap-6 items-center " +
                                (cekJawabanBoxX1A &&
                                cekJawabanBoxX1B &&
                                cekJawabanBoxX1C &&
                                cekJawabanBoxX1D &&
                                cekJawabanBoxX1E &&
                                cekJawabanBoxX1F &&
                                cekJawabanBoxX1G &&
                                cekJawabanBoxX1H &&
                                cekJawabanBoxX1I &&
                                cekJawabanBoxX1J &&
                                cekJawabanBoxX1K &&
                                cekJawabanBoxX1L &&
                                cekJawabanBoxX1M &&
                                cekJawabanBoxX1N &&
                                cekJawabanBoxX1O &&
                                cekJawabanBoxX1P &&
                                cekJawabanBoxX1Q &&
                                cekJawabanBoxX1R &&
                                cekJawabanBoxX1S &&
                                cekJawabanBoxX1T
                                  ? "block"
                                  : "hidden")
                              }
                            >
                              <div className="flex flex-col">
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(21)"
                                  style={kotakX1U}
                                  onChange={cekJawabanX1U}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />
                              </div>

                              <InlineMath>=</InlineMath>
                              <div className="flex flex-col">
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(22)"
                                  style={kotakX1V}
                                  onChange={cekJawabanX1V}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />
                                <div className="ml-2 mr-2  border-b border-black"></div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX1.a(23)"
                                  style={kotakX1W}
                                  onChange={cekJawabanX1W}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div
                              className={
                                "pt-4 " +
                                (cekJawabanBoxX1A &&
                                cekJawabanBoxX1B &&
                                cekJawabanBoxX1C &&
                                cekJawabanBoxX1D &&
                                cekJawabanBoxX1E &&
                                cekJawabanBoxX1F &&
                                cekJawabanBoxX1G &&
                                cekJawabanBoxX1H &&
                                cekJawabanBoxX1I &&
                                cekJawabanBoxX1J &&
                                cekJawabanBoxX1K &&
                                cekJawabanBoxX1L &&
                                cekJawabanBoxX1M &&
                                cekJawabanBoxX1N &&
                                cekJawabanBoxX1O &&
                                cekJawabanBoxX1P &&
                                cekJawabanBoxX1Q &&
                                cekJawabanBoxX1R &&
                                cekJawabanBoxX1S &&
                                cekJawabanBoxX1T &&
                                cekJawabanBoxX1U &&
                                cekJawabanBoxX1V &&
                                cekJawabanBoxX1W
                                  ? "block"
                                  : "hidden")
                              }
                            >
                              Karena nilai{" "}
                              <InlineMath>x = \dfrac 4 3</InlineMath> memenuhi
                              syarat <InlineMath>x \ge -2</InlineMath> maka
                              nilai <InlineMath>x</InlineMath> memenuhi
                              penyelesaian.
                            </div>
                          </div>
                        </li>
                        <li
                          className={
                            "py-1 " +
                            (bukaTabDua === 2 &&
                            cekJawabanBox1A &&
                            cekJawabanBox1B &&
                            cekJawabanBox1C &&
                            cekJawabanBox1D &&
                            cekJawabanBox1E &&
                            cekJawabanBox1F &&
                            cekJawabanBox1G &&
                            cekJawabanBox1H &&
                            cekJawabanBox1I &&
                            cekJawabanBox1J &&
                            cekJawabanBox1K &&
                            cekJawabanBox1L &&
                            cekJawabanBox1M &&
                            cekJawabanBox1N &&
                            cekJawabanBox1O
                              ? "block"
                              : "hidden")
                          }
                        >
                          {/* Kotak untuk x kedua */}
                          <div className="flex flex-col">
                            <div className="flex flex-row gap-6 items-center ml-2">
                              <InlineMath>-2x-4</InlineMath>
                              <InlineMath>=</InlineMath>
                              <InlineMath>8-x</InlineMath>
                            </div>
                            <div className="flex flex-row gap-6 items-center">
                              <div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(1)"
                                  style={kotakX2A}
                                  onChange={cekJawabanX2A}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                                <InlineMath>-</InlineMath>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(2)"
                                  style={kotakX2B}
                                  onChange={cekJawabanX2B}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                                <InlineMath>+</InlineMath>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(3)"
                                  style={kotakX2C}
                                  onChange={cekJawabanX2C}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                              </div>

                              <InlineMath>=</InlineMath>
                              <div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(4)"
                                  style={kotakX2D}
                                  onChange={cekJawabanX2D}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                                <InlineMath>-</InlineMath>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(5)"
                                  style={kotakX2E}
                                  onChange={cekJawabanX2E}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                                <InlineMath>+</InlineMath>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(6)"
                                  style={kotakX2F}
                                  onChange={cekJawabanX2F}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                              </div>
                            </div>
                            <div
                              className={
                                "flex flex-row gap-6 items-center " +
                                (cekJawabanBoxX2A &&
                                cekJawabanBoxX2B &&
                                cekJawabanBoxX2C &&
                                cekJawabanBoxX2D &&
                                cekJawabanBoxX2E &&
                                cekJawabanBoxX2F
                                  ? "block"
                                  : "hidden")
                              }
                            >
                              <div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(7)"
                                  style={kotakX2G}
                                  onChange={cekJawabanX2G}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                                <InlineMath>-</InlineMath>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(8)"
                                  style={kotakX2H}
                                  onChange={cekJawabanX2H}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                              </div>

                              <InlineMath>=</InlineMath>
                              <div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(9)"
                                  style={kotakX2I}
                                  onChange={cekJawabanX2I}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                              </div>
                            </div>
                            <div
                              className={
                                "flex flex-row gap-6 items-center " +
                                (cekJawabanBoxX2A &&
                                cekJawabanBoxX2B &&
                                cekJawabanBoxX2C &&
                                cekJawabanBoxX2D &&
                                cekJawabanBoxX2E &&
                                cekJawabanBoxX2F &&
                                cekJawabanBoxX2G &&
                                cekJawabanBoxX2H &&
                                cekJawabanBoxX2I
                                  ? "block"
                                  : "hidden")
                              }
                            >
                              <div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(10)"
                                  style={kotakX2J}
                                  onChange={cekJawabanX2J}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                                <InlineMath>-</InlineMath>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(11)"
                                  style={kotakX2K}
                                  onChange={cekJawabanX2K}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                                <InlineMath>+</InlineMath>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(12)"
                                  style={kotakX2L}
                                  onChange={cekJawabanX2L}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                              </div>

                              <InlineMath>=</InlineMath>
                              <div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(13)"
                                  style={kotakX2M}
                                  onChange={cekJawabanX2M}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                                <InlineMath>+</InlineMath>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(14)"
                                  style={kotakX2N}
                                  onChange={cekJawabanX2N}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                              </div>
                            </div>
                            <div
                              className={
                                "flex flex-row gap-6 items-center " +
                                (cekJawabanBoxX2A &&
                                cekJawabanBoxX2B &&
                                cekJawabanBoxX2C &&
                                cekJawabanBoxX2D &&
                                cekJawabanBoxX2E &&
                                cekJawabanBoxX2F &&
                                cekJawabanBoxX2G &&
                                cekJawabanBoxX2H &&
                                cekJawabanBoxX2I &&
                                cekJawabanBoxX2J &&
                                cekJawabanBoxX2K &&
                                cekJawabanBoxX2L &&
                                cekJawabanBoxX2M &&
                                cekJawabanBoxX2N
                                  ? "block"
                                  : "hidden")
                              }
                            >
                              <div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(15)"
                                  style={kotakX2O}
                                  onChange={cekJawabanX2O}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                              </div>

                              <InlineMath>=</InlineMath>
                              <div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(16)"
                                  style={kotakX2P}
                                  onChange={cekJawabanX2P}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />{" "}
                              </div>
                            </div>
                            <div
                              className={
                                "flex flex-row gap-6 items-center " +
                                (cekJawabanBoxX2A &&
                                cekJawabanBoxX2B &&
                                cekJawabanBoxX2C &&
                                cekJawabanBoxX2D &&
                                cekJawabanBoxX2E &&
                                cekJawabanBoxX2F &&
                                cekJawabanBoxX2G &&
                                cekJawabanBoxX2H &&
                                cekJawabanBoxX2I &&
                                cekJawabanBoxX2J &&
                                cekJawabanBoxX2K &&
                                cekJawabanBoxX2L &&
                                cekJawabanBoxX2M &&
                                cekJawabanBoxX2N &&
                                cekJawabanBoxX2O &&
                                cekJawabanBoxX2P
                                  ? "block"
                                  : "hidden")
                              }
                            >
                              <div className="flex flex-col">
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(17)"
                                  style={kotakX2Q}
                                  onChange={cekJawabanX2Q}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />
                                <div className="ml-2 mr-2  border-b border-black"></div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(18)"
                                  style={kotakX2R}
                                  onChange={cekJawabanX2R}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />
                              </div>

                              <InlineMath>=</InlineMath>
                              <div className="flex flex-col">
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(19)"
                                  style={kotakX2S}
                                  onChange={cekJawabanX2S}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />
                                <div className="ml-2 mr-2  border-b border-black"></div>
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(20)"
                                  style={kotakX2T}
                                  onChange={cekJawabanX2T}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div
                              className={
                                "flex flex-row gap-6 items-center " +
                                (cekJawabanBoxX2A &&
                                cekJawabanBoxX2B &&
                                cekJawabanBoxX2C &&
                                cekJawabanBoxX2D &&
                                cekJawabanBoxX2E &&
                                cekJawabanBoxX2F &&
                                cekJawabanBoxX2G &&
                                cekJawabanBoxX2H &&
                                cekJawabanBoxX2I &&
                                cekJawabanBoxX2J &&
                                cekJawabanBoxX2K &&
                                cekJawabanBoxX2L &&
                                cekJawabanBoxX2M &&
                                cekJawabanBoxX2N &&
                                cekJawabanBoxX2O &&
                                cekJawabanBoxX2P &&
                                cekJawabanBoxX2Q &&
                                cekJawabanBoxX2R &&
                                cekJawabanBoxX2S &&
                                cekJawabanBoxX2T
                                  ? "block"
                                  : "hidden")
                              }
                            >
                              <div className="flex flex-col">
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(21)"
                                  style={kotakX2U}
                                  onChange={cekJawabanX2U}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />
                              </div>

                              <InlineMath>=</InlineMath>
                              <div className="flex flex-col">
                                <input
                                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                  id="jawabanX2.a(22)"
                                  style={kotakX2V}
                                  onChange={cekJawabanX2V}
                                  placeholder=". . ."
                                  autoComplete="off"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div
                              className={
                                "pt-4 " +
                                (cekJawabanBoxX2A &&
                                cekJawabanBoxX2B &&
                                cekJawabanBoxX2C &&
                                cekJawabanBoxX2D &&
                                cekJawabanBoxX2E &&
                                cekJawabanBoxX2F &&
                                cekJawabanBoxX2G &&
                                cekJawabanBoxX2H &&
                                cekJawabanBoxX2I &&
                                cekJawabanBoxX2J &&
                                cekJawabanBoxX2K &&
                                cekJawabanBoxX2L &&
                                cekJawabanBoxX2M &&
                                cekJawabanBoxX2N &&
                                cekJawabanBoxX2O &&
                                cekJawabanBoxX2P &&
                                cekJawabanBoxX2Q &&
                                cekJawabanBoxX2R &&
                                cekJawabanBoxX2S &&
                                cekJawabanBoxX2T &&
                                cekJawabanBoxX2U &&
                                cekJawabanBoxX2V
                                  ? "block"
                                  : "hidden")
                              }
                            >
                              Karena nilai <InlineMath>x = -12 </InlineMath>{" "}
                              memenuhi syarat <InlineMath>x \lt -2</InlineMath>{" "}
                              maka nilai <InlineMath>x</InlineMath> memenuhi
                              penyelesaian.
                            </div>
                          </div>
                        </li>
                        <li
                          className={
                            "pt-4 " +
                            (cekJawabanBoxX1A &&
                            cekJawabanBoxX1B &&
                            cekJawabanBoxX1C &&
                            cekJawabanBoxX1D &&
                            cekJawabanBoxX1E &&
                            cekJawabanBoxX1F &&
                            cekJawabanBoxX1G &&
                            cekJawabanBoxX1H &&
                            cekJawabanBoxX1I &&
                            cekJawabanBoxX1J &&
                            cekJawabanBoxX1K &&
                            cekJawabanBoxX1L &&
                            cekJawabanBoxX1M &&
                            cekJawabanBoxX1N &&
                            cekJawabanBoxX1O &&
                            cekJawabanBoxX1P &&
                            cekJawabanBoxX1Q &&
                            cekJawabanBoxX1R &&
                            cekJawabanBoxX1S &&
                            cekJawabanBoxX1T &&
                            cekJawabanBoxX1U &&
                            cekJawabanBoxX1V &&
                            cekJawabanBoxX1W &&
                            cekJawabanBoxX2A &&
                            cekJawabanBoxX2B &&
                            cekJawabanBoxX2C &&
                            cekJawabanBoxX2D &&
                            cekJawabanBoxX2E &&
                            cekJawabanBoxX2F &&
                            cekJawabanBoxX2G &&
                            cekJawabanBoxX2H &&
                            cekJawabanBoxX2I &&
                            cekJawabanBoxX2J &&
                            cekJawabanBoxX2K &&
                            cekJawabanBoxX2L &&
                            cekJawabanBoxX2M &&
                            cekJawabanBoxX2N &&
                            cekJawabanBoxX2O &&
                            cekJawabanBoxX2P &&
                            cekJawabanBoxX2Q &&
                            cekJawabanBoxX2R &&
                            cekJawabanBoxX2S &&
                            cekJawabanBoxX2T &&
                            cekJawabanBoxX2U &&
                            cekJawabanBoxX2V
                              ? "block"
                              : "hidden")
                          }
                        >
                          <div className="flex flex-row items-center">
                            <p className="mr-1">
                              Sehingga himpunan penyelesaian dari{" "}
                            </p>
                            <InlineMath> |2x+4| = 8 - x</InlineMath>
                            <p className="mx-1">adalah</p>
                            <InlineMath math="\{ \dfrac 4 3, -12 \}" />
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* Cara 2 */}
          <div className={"pb-5 " + (bukaTab === 2 ? "block" : "hidden")}>
            <div className="p-2 mt-2 text-sm border-2 border-trueGray-300 text-justify ">
              <ol
                className="list-decimal pt-2 ml-3 list-outside flex flex-col gap-2 "
                start={2}
              >
                <li className="font-bold">Menggunakan Sifat Nilai Mutlak</li>
                <p>
                  Salah satu sifat nilai mutlak yang dapat digunakan untuk
                  menyelesaian persamaan nilai mutlak linear satu variable
                  adalah sifat(1) <InlineMath math="|x|=\sqrt{x^2}" />.
                </p>
              </ol>
            </div>
            <button
              className="text-white justify-center bg-indigo-300 w-full h-10 p-2 mt-2 flex rounded-lg items-center font-bold hover:bg-white hover:text-indigo-300 hover:ring-2 hover:ring-indigo-300"
              onClick={() => setBukaContohDua(!bukaContohDua)}
            >
              Contoh Soal (Klik Saya)
            </button>
            {/* Contoh Soal Cara 2 */}
            <div
              className={"p-2 mt-2 text-sm " + (bukaContohDua ? "" : "hidden")}
            >
              <div className="border-2 border-trueGray-300 text-justify p-2">
                <ol className="list-decimal list-inside">
                  <li>
                    Tentukan himpunan penyelesaian persamaan{" "}
                    <InlineMath>|x+5|=3</InlineMath>!
                    <p className="indent-xs py-1 font-bold">Penyelesaian:</p>
                    <p className="indent-xs py-1">
                      {" "}
                      <InlineMath>|x+5|=3</InlineMath>{" "}
                    </p>
                    <p className="indent-xs py-1">
                      {" "}
                      <InlineMath math="\sqrt{(x+5)^2} = 3" />{" "}
                    </p>
                    <p className="indent-xs py-1">
                      {" "}
                      <InlineMath math="(\sqrt{(x+5)^2})^2=(3)^2" />{" "}
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                          fill="black"
                          stroke="currentColor"
                          className="inline-block relative ml-16"
                        >
                          <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                        </svg>
                      </span>
                      <span className="font-bold">Kedua ruas dikuadratkan</span>
                    </p>
                    <p className="indent-xs py-1">
                      {" "}
                      <InlineMath math="(x+5)^2=3^2" />{" "}
                    </p>
                    <p className="indent-xs py-1">
                      {" "}
                      <InlineMath math="(x+5)^2-3^2=0" />{" "}
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                          fill="black"
                          stroke="currentColor"
                          className="inline-block relative ml-20"
                        >
                          <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                        </svg>
                      </span>
                      <span className="font-bold">
                        <InlineMath>3^2</InlineMath> pindah ruas ke kiri
                      </span>
                    </p>
                    <p className="indent-xs py-1">
                      {" "}
                      <InlineMath math="(x+5+3)(x+5-3)=0" />{" "}
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                          fill="black"
                          stroke="currentColor"
                          className="inline-block relative ml-3"
                        >
                          <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                        </svg>
                      </span>
                      <span className="font-bold">
                        Perhatikan bentuk{" "}
                        <InlineMath>a^2-b^2=(a+b)(a-b)</InlineMath>
                      </span>
                    </p>
                    <p className="indent-xs py-1">
                      {" "}
                      <InlineMath math="(x+8)(x+2)=0 " />{" "}
                    </p>
                    <p className="indent-xs py-1">
                      {" "}
                      <InlineMath>(x+8)</InlineMath> atau{" "}
                      <InlineMath>(x+2)</InlineMath>{" "}
                    </p>
                    <p className="indent-xs py-1 font-bold">
                      Cari nilai <InlineMath>x</InlineMath>
                    </p>
                    <p className="indent-xs py-1">
                      <InlineMath>x+8=0</InlineMath>
                    </p>
                    <p className="indent-xs py-1">
                      <InlineMath>x=-8 </InlineMath>
                    </p>
                    <p className="indent-xs py-1">atau</p>
                    <p className="indent-xs py-1">
                      <InlineMath>x+2=0</InlineMath>
                    </p>
                    <p className="indent-xs py-1">
                      <InlineMath>x=-2</InlineMath>
                    </p>
                    <p className="indent-xs py-1">
                      Jadi, nilai x yang memenuhi persamaan adalah{" "}
                      <InlineMath>x=-8</InlineMath> atau{" "}
                      <InlineMath>x=-2</InlineMath>
                    </p>
                  </li>
                </ol>
              </div>

              <button
                className="text-white justify-center bg-indigo-300 w-full h-10 p-2 mt-2 flex rounded-lg items-center font-bold hover:bg-white hover:text-indigo-300 hover:ring-2 hover:ring-indigo-300"
                onClick={() => setBukaLatihanDua(!bukaLatihanDua)}
              >
                Mari Mencoba (Klik Saya)
              </button>
              {/* Mari Mencoba Cara 2 */}
              <div
                className={" mt-2 text-sm " + (bukaLatihanDua ? "" : "hidden")}
              >
                {/* <div>
                  <button
                    onClick={tooglePetunjukDua}
                    className=" uppercase mt-2 flex justify-between items-center gap-8 px-2 py-1 transition-all duration-300 ease-linear bg-cyan-600 text-white hover:ring-1 hover:ring-cyan-600 rounded-lg hover:bg-white hover:text-cyan-600 hover:rounded-lg cursor-pointer"
                  >
                    Petunjuk (klik saya)
                  </button>
                </div> */}
                <div
                  className="bg-cyan-500 w-full p-2 mt-2 text-white "
                  // className={
                  //   "bg-cyan-500 w-full p-2 mt-2 text-white " +
                  //   (petunjukDua ? "" : "hidden")
                  // }
                >
                  <ol className="list-decimal pl-3">
                    <li>
                      <div className="flex  items-center">
                        {" "}
                        <span className="mr-4">
                          Isi kotak kosong dengan jawaban anda
                        </span>
                        <img
                          src="/materi/1.png"
                          className="rounded-full w-20 h-14"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="flex  items-center">
                        {" "}
                        <span className="mr-4">
                          Jika jawaban salah maka sisi kotak akan berwarna merah
                        </span>
                        <img
                          src="/materi/2.png"
                          className="rounded-full w-20 h-14"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="flex  items-center">
                        {" "}
                        <span className="mr-4">
                          Jika jawaban benar maka sisi kotak akan berwarna hijau
                        </span>
                        <img
                          src="/materi/3.png"
                          className="rounded-full w-20 h-14"
                        />
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="border-2 border-trueGray-300 text-justify p-2">
                  <ol className="list-decimal list-outside ml-4">
                    <li>
                      Tentukan himpunan penyelesaian dari{" "}
                      <InlineMath>|3x+4|=|x-2|</InlineMath>!
                      <ul className="list-inside">
                        <li className="font-bold">Penyelesaian:</li>
                        <li className="py-2">
                          <div className="flex flex-row gap-20">
                            <div>
                              <InlineMath math="|3x+4| \hspace{0.18cm}" />
                            </div>
                            <div className="font-bold ml-4">=</div>
                            <div>
                              <InlineMath math="\hspace{-0.25cm} |x-2|" />
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex flex-row gap-16">
                            <div>
                              <InlineMath math="\sqrt{} ( \hspace{0cm}" />
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-12 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                id="jawaban-2b(1)"
                                style={box2A}
                                onChange={cekJawaban2A}
                                type="text"
                                placeholder=". . . . . "
                                autoComplete="off"
                              />
                              <InlineMath math="\hspace{0cm} )^2" />
                            </div>
                            <div className="font-bold ml-4">=</div>
                            <div>
                              <InlineMath math="\hspace{0.01cm} \sqrt{} (" />
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-12 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                id="jawaban-2b(2)"
                                style={box2B}
                                onChange={cekJawaban2B}
                                type="text"
                                placeholder=". . . . . "
                                autoComplete="off"
                              />
                              <InlineMath math="\hspace{-0.01cm} )^2" />
                            </div>
                          </div>
                        </li>
                        <li
                          className={
                            "py-2 " +
                            (cekJawabanBox2A && cekJawabanBox2B ? "" : "hidden")
                          }
                        >
                          <div className="flex flex-row gap-14">
                            <div>
                              <InlineMath math="( \sqrt{} ( \hspace{0cm}" />
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-12 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                id="jawaban-2b(3)"
                                style={box2C}
                                onChange={cekJawaban2C}
                                type="text"
                                placeholder=". . . . . "
                                autoComplete="off"
                              />
                              <InlineMath math="\hspace{0cm} )^2)^2" />
                            </div>
                            <div className="font-bold ml-4">=</div>
                            <div>
                              <InlineMath math="\hspace{0.01cm} (\sqrt{} (" />
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-12 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                id="jawaban-2b(4)"
                                style={box2D}
                                onChange={cekJawaban2D}
                                type="text"
                                placeholder=". . . . . "
                                autoComplete="off"
                              />
                              <InlineMath math="\hspace{-0.01cm} )^2)^2" />
                            </div>
                          </div>
                        </li>
                        <li
                          className={
                            "py-2 " +
                            (cekJawabanBox2A &&
                            cekJawabanBox2B &&
                            cekJawabanBox2C &&
                            cekJawabanBox2D
                              ? ""
                              : "hidden")
                          }
                        >
                          <div className="flex flex-row gap-20">
                            <div>
                              <InlineMath math="( \hspace{0cm}" />
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-12 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                id="jawaban-2b(5)"
                                style={box2E}
                                onChange={cekJawaban2E}
                                type="text"
                                placeholder=". . . . . "
                                autoComplete="off"
                              />
                              <InlineMath math="\hspace{0cm} )^2" />
                            </div>
                            <div className="font-bold ml-3">=</div>
                            <div>
                              <InlineMath math="\hspace{0.01cm} (" />
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-12 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                id="jawaban-2b(6)"
                                style={box2F}
                                onChange={cekJawaban2F}
                                type="text"
                                placeholder=". . . . . "
                                autoComplete="off"
                              />
                              <InlineMath math="\hspace{-0.01cm} )^2" />
                            </div>
                          </div>
                        </li>
                        <li
                          className={
                            "py-2 " +
                            (cekJawabanBox2A &&
                            cekJawabanBox2B &&
                            cekJawabanBox2C &&
                            cekJawabanBox2D &&
                            cekJawabanBox2E &&
                            cekJawabanBox2F
                              ? ""
                              : "hidden")
                          }
                        >
                          <div className="flex flex-row gap-3">
                            <div>
                              <InlineMath math="( \hspace{0cm}" />
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-12 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                id="jawaban-2b(7)"
                                style={box2G}
                                onChange={cekJawaban2G}
                                type="text"
                                placeholder=". . . . . "
                                autoComplete="off"
                              />
                              <InlineMath math="\hspace{0cm} )^2 -" />
                              <InlineMath math="\hspace{0.01cm} (" />
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-12 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                id="jawaban-2b(8)"
                                style={box2H}
                                onChange={cekJawaban2H}
                                type="text"
                                placeholder=". . . . . "
                                autoComplete="off"
                              />
                              <InlineMath math="\hspace{-0.01cm} )^2" />
                            </div>
                            <div className="font-bold">=</div>
                            <div>
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                id="jawaban-2b(9)"
                                style={box2I}
                                onChange={cekJawaban2I}
                                type="text"
                                placeholder=". . . . . "
                                autoComplete="off"
                              />
                            </div>
                          </div>
                        </li>
                        <li
                          className={
                            "py-2 " +
                            (cekJawabanBox2A &&
                            cekJawabanBox2B &&
                            cekJawabanBox2C &&
                            cekJawabanBox2D &&
                            cekJawabanBox2E &&
                            cekJawabanBox2F &&
                            cekJawabanBox2G &&
                            cekJawabanBox2H &&
                            cekJawabanBox2I
                              ? ""
                              : "hidden")
                          }
                        >
                          <div className="flex flex-row gap-3">
                            <div>
                              <InlineMath math="( \hspace{0cm}" />
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-20 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                id="jawaban-2b(10)"
                                style={box2J}
                                onChange={cekJawaban2J}
                                type="text"
                                placeholder=". . . . . . . . . . . "
                                autoComplete="off"
                              />
                              <InlineMath math="\hspace{0cm} )" />
                              <InlineMath math="\hspace{0.01cm} (" />
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-20 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                id="jawaban-2b(11)"
                                style={box2K}
                                onChange={cekJawaban2K}
                                type="text"
                                placeholder=". . . . . . . . . . . "
                                autoComplete="off"
                              />
                              <InlineMath math="\hspace{-0.01cm} )" />
                            </div>
                            <div className="font-bold">=</div>
                            <div>
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                id="jawaban-2b(12)"
                                style={box2L}
                                onChange={cekJawaban2L}
                                type="text"
                                placeholder=". . . . . "
                                autoComplete="off"
                              />
                            </div>
                          </div>
                        </li>
                        <li
                          className={
                            "py-2 " +
                            (cekJawabanBox2A &&
                            cekJawabanBox2B &&
                            cekJawabanBox2C &&
                            cekJawabanBox2D &&
                            cekJawabanBox2E &&
                            cekJawabanBox2F &&
                            cekJawabanBox2G &&
                            cekJawabanBox2H &&
                            cekJawabanBox2I &&
                            cekJawabanBox2J &&
                            cekJawabanBox2K &&
                            cekJawabanBox2L
                              ? ""
                              : "hidden")
                          }
                        >
                          <div className="flex flex-row gap-3">
                            <div>
                              <InlineMath math="( \hspace{0cm}" />
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-12 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                id="jawaban-2b(13)"
                                style={box2M}
                                onChange={cekJawaban2M}
                                type="text"
                                placeholder=". . . . . "
                                autoComplete="off"
                              />
                              <InlineMath math="\hspace{0cm} )" />
                              <InlineMath math="\hspace{0.01cm} (" />
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-12 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                id="jawaban-2b(14)"
                                style={box2N}
                                onChange={cekJawaban2N}
                                type="text"
                                placeholder=". . . . . "
                                autoComplete="off"
                              />
                              <InlineMath math="\hspace{-0.01cm} )" />
                            </div>
                            <div className="font-bold">=</div>
                            <div>
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                id="jawaban-2b(15)"
                                style={box2O}
                                onChange={cekJawaban2O}
                                type="text"
                                placeholder=". . . . . "
                                autoComplete="off"
                              />
                            </div>
                          </div>
                        </li>
                        <li
                          className={
                            "py-2 " +
                            (cekJawabanBox2A &&
                            cekJawabanBox2B &&
                            cekJawabanBox2C &&
                            cekJawabanBox2D &&
                            cekJawabanBox2E &&
                            cekJawabanBox2F &&
                            cekJawabanBox2G &&
                            cekJawabanBox2H &&
                            cekJawabanBox2I &&
                            cekJawabanBox2J &&
                            cekJawabanBox2K &&
                            cekJawabanBox2L &&
                            cekJawabanBox2M &&
                            cekJawabanBox2N &&
                            cekJawabanBox2O
                              ? ""
                              : "hidden")
                          }
                        >
                          <InlineMath>(4x+2)</InlineMath> dan{" "}
                          <InlineMath>(2x+6)</InlineMath>
                        </li>
                        <li
                          className={
                            cekJawabanBox2A &&
                            cekJawabanBox2B &&
                            cekJawabanBox2C &&
                            cekJawabanBox2D &&
                            cekJawabanBox2E &&
                            cekJawabanBox2F &&
                            cekJawabanBox2G &&
                            cekJawabanBox2H &&
                            cekJawabanBox2I &&
                            cekJawabanBox2J &&
                            cekJawabanBox2K &&
                            cekJawabanBox2L &&
                            cekJawabanBox2M &&
                            cekJawabanBox2N &&
                            cekJawabanBox2O
                              ? ""
                              : "hidden"
                          }
                        >
                          <table className=" table-fixed w-full justify-center text-center">
                            <colgroup>
                              <col style={{ width: "405px" }} />
                              <col style={{ width: "405px" }} />
                            </colgroup>
                            <thead>
                              <tr>
                                <th className="py-2 " colSpan="2">
                                  Cari nilai x
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-2 border-t border-r border-b border-black font-bold">
                                  Untuk (4x+2)
                                </td>
                                <td className="py-2 border-t border-b border-black font-bold">
                                  Untuk (2x+6)
                                </td>
                              </tr>
                              <tr>
                                <td
                                  className="py-2 border-r border-b border-black"
                                  rowSpan="5"
                                >
                                  <div className="flex flex-row gap-3 justify-center">
                                    <div>
                                      <InlineMath math="4x+2=0" />
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-3 justify-center py-4">
                                    <div>
                                      <input
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                        id="jawaban-2b(16)"
                                        style={box2P}
                                        onChange={cekJawaban2P}
                                        type="text"
                                        placeholder=". . . . . "
                                        autoComplete="off"
                                      />
                                      <InlineMath math="=" />
                                      <input
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                        id="jawaban-2b(17)"
                                        style={box2Q}
                                        onChange={cekJawaban2Q}
                                        type="text"
                                        placeholder=". . . . . "
                                        autoComplete="off"
                                      />
                                    </div>
                                  </div>
                                  <div className="inline-block">
                                    <div
                                      className={
                                        "flex flex-row  justify-center items-center " +
                                        (cekJawabanBox2P && cekJawabanBox2Q
                                          ? ""
                                          : "hidden")
                                      }
                                    >
                                      <div>
                                        <input
                                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                          id="jawaban-2b(18)"
                                          style={box2R}
                                          onChange={cekJawaban2R}
                                          type="text"
                                          placeholder=". . . . . "
                                          autoComplete="off"
                                        />
                                      </div>
                                      <InlineMath math="=" />
                                      <InlineMath math="-" />
                                      <div className="flex flex-col gap-1">
                                        <input
                                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                          id="jawaban-2b(19a)"
                                          style={box2Sa}
                                          onChange={cekJawaban2Sa}
                                          type="text"
                                          placeholder=". . . . . "
                                          autoComplete="off"
                                        />

                                        <div className="ml-1 mr-1 border-b border-black"></div>
                                        <input
                                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                          id="jawaban-2b(19b)"
                                          style={box2Sb}
                                          onChange={cekJawaban2Sb}
                                          type="text"
                                          placeholder=". . . . . "
                                          autoComplete="off"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="py-2 border-b border-black"
                                  rowSpan="5"
                                >
                                  <div className="flex flex-row gap-3 justify-center">
                                    <div>
                                      <InlineMath math="2x+6=0" />
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-3 justify-center py-4">
                                    <div>
                                      <input
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                        id="jawaban-2b(20)"
                                        style={box2T}
                                        onChange={cekJawaban2T}
                                        type="text"
                                        placeholder=". . . . . "
                                        autoComplete="off"
                                      />
                                      <InlineMath math="=" />
                                      <input
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                        id="jawaban-2b(21)"
                                        style={box2U}
                                        onChange={cekJawaban2U}
                                        type="text"
                                        placeholder=". . . . . "
                                        autoComplete="off"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className={
                                      "flex flex-row gap-3 justify-center " +
                                      (cekJawabanBox2T && cekJawabanBox2U
                                        ? ""
                                        : "hidden")
                                    }
                                  >
                                    <div>
                                      <input
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                        id="jawaban-2b(22)"
                                        style={box2V}
                                        onChange={cekJawaban2V}
                                        type="text"
                                        placeholder=". . . . . "
                                        autoComplete="off"
                                      />
                                      <InlineMath math="=" />
                                      <input
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                        id="jawaban-2b(23)"
                                        style={box2W}
                                        onChange={cekJawaban2W}
                                        type="text"
                                        placeholder=". . . . . "
                                        autoComplete="off"
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </li>
                        <li
                          className={
                            "py-2 " +
                            (cekJawabanBox2P &&
                            cekJawabanBox2Q &&
                            cekJawabanBox2R &&
                            cekJawabanBox2Sa &&
                            cekJawabanBox2Sb &&
                            cekJawabanBox2T &&
                            cekJawabanBox2U &&
                            cekJawabanBox2V &&
                            cekJawabanBox2W
                              ? ""
                              : "hidden")
                          }
                        >
                          Jadi, himpunan penyelesaiannya adalah{" "}
                          <InlineMath math="\{ -3, -\dfrac {1}{2} \}" />
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
