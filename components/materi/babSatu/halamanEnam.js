import "katex/dist/katex.min.css";
import Image from "next/image";
import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";

export default function HalamanEnam() {
  const [petunjuk, setPetunjuk] = useState(false);

  const tooglePetunjuk = () => {
    setPetunjuk(!petunjuk);
  };

  // Save State soal 1.a
  const [style1A, setStyle1A] = useState({});
  const [style1B, setStyle1B] = useState({});
  const [style1C, setStyle1C] = useState({});
  const [style1D, setStyle1D] = useState({});
  const [style1E, setStyle1E] = useState({});
  const [style1F, setStyle1F] = useState({});
  const [style1G, setStyle1G] = useState({});

  // Save State soal 1.b
  const [style2A, setStyle2A] = useState({});
  const [style2B, setStyle2B] = useState({});
  const [style2C, setStyle2C] = useState({});
  const [style2D, setStyle2D] = useState({});
  const [style2E, setStyle2E] = useState({});
  const [style2F, setStyle2F] = useState({});
  const [style2G, setStyle2G] = useState({});

  // Save State soal 1.c
  const [style3A, setStyle3A] = useState({});
  const [style3B, setStyle3B] = useState({});
  const [style3C, setStyle3C] = useState({});
  const [style3D, setStyle3D] = useState({});
  const [style3E, setStyle3E] = useState({});
  const [style3F, setStyle3F] = useState({});
  const [style3G, setStyle3G] = useState({});

  // Save state tabel soal 1.a
  const [styleTable1A, setStyleTable1A] = useState({});
  const [styleTable1B, setStyleTable1B] = useState({});
  const [styleTable1C, setStyleTable1C] = useState({});
  const [styleTable1D, setStyleTable1D] = useState({});
  const [styleTable1E, setStyleTable1E] = useState({});
  const [styleTable1F, setStyleTable1F] = useState({});
  const [styleTable1G, setStyleTable1G] = useState({});
  const [styleTable1H, setStyleTable1H] = useState({});
  const [styleTable1I, setStyleTable1I] = useState({});
  const [styleTable1J, setStyleTable1J] = useState({});
  const [styleTable1K, setStyleTable1K] = useState({});
  const [styleTable1L, setStyleTable1L] = useState({});
  const [styleTable1M, setStyleTable1M] = useState({});
  const [styleTable1N, setStyleTable1N] = useState({});
  const [styleTable1O, setStyleTable1O] = useState({});
  const [styleTable1P, setStyleTable1P] = useState({});
  const [styleTable1Q, setStyleTable1Q] = useState({});
  const [styleTable1R, setStyleTable1R] = useState({});
  const [styleTable1S, setStyleTable1S] = useState({});
  const [styleTable1T, setStyleTable1T] = useState({});
  const [styleTable1U, setStyleTable1U] = useState({});
  const [styleTable1V, setStyleTable1V] = useState({});

  // Save state tabel soal 1.b
  const [styleTable2A, setStyleTable2A] = useState({});
  const [styleTable2B, setStyleTable2B] = useState({});
  const [styleTable2C, setStyleTable2C] = useState({});
  const [styleTable2D, setStyleTable2D] = useState({});
  const [styleTable2E, setStyleTable2E] = useState({});
  const [styleTable2F, setStyleTable2F] = useState({});
  const [styleTable2G, setStyleTable2G] = useState({});
  const [styleTable2H, setStyleTable2H] = useState({});
  const [styleTable2I, setStyleTable2I] = useState({});
  const [styleTable2J, setStyleTable2J] = useState({});
  const [styleTable2K, setStyleTable2K] = useState({});
  const [styleTable2L, setStyleTable2L] = useState({});
  const [styleTable2M, setStyleTable2M] = useState({});
  const [styleTable2N, setStyleTable2N] = useState({});
  const [styleTable2O, setStyleTable2O] = useState({});
  const [styleTable2P, setStyleTable2P] = useState({});
  const [styleTable2Q, setStyleTable2Q] = useState({});
  const [styleTable2R, setStyleTable2R] = useState({});
  const [styleTable2S, setStyleTable2S] = useState({});
  const [styleTable2T, setStyleTable2T] = useState({});
  const [styleTable2U, setStyleTable2U] = useState({});
  const [styleTable2V, setStyleTable2V] = useState({});

  // Save state tabel soal 1.b
  const [styleTable3A, setStyleTable3A] = useState({});
  const [styleTable3B, setStyleTable3B] = useState({});
  const [styleTable3C, setStyleTable3C] = useState({});
  const [styleTable3D, setStyleTable3D] = useState({});
  const [styleTable3E, setStyleTable3E] = useState({});
  const [styleTable3F, setStyleTable3F] = useState({});
  const [styleTable3G, setStyleTable3G] = useState({});
  const [styleTable3H, setStyleTable3H] = useState({});
  const [styleTable3I, setStyleTable3I] = useState({});
  const [styleTable3J, setStyleTable3J] = useState({});
  const [styleTable3K, setStyleTable3K] = useState({});
  const [styleTable3L, setStyleTable3L] = useState({});
  const [styleTable3M, setStyleTable3M] = useState({});
  const [styleTable3N, setStyleTable3N] = useState({});
  const [styleTable3O, setStyleTable3O] = useState({});
  const [styleTable3P, setStyleTable3P] = useState({});
  const [styleTable3Q, setStyleTable3Q] = useState({});
  const [styleTable3R, setStyleTable3R] = useState({});
  const [styleTable3S, setStyleTable3S] = useState({});
  const [styleTable3T, setStyleTable3T] = useState({});
  const [styleTable3U, setStyleTable3U] = useState({});
  const [styleTable3V, setStyleTable3V] = useState({});

  // Save state kondisi soal 1.a
  const [jawabanSatuA, setJawabanSatuA] = useState(false);
  const [jawabanSatuB, setJawabanSatuB] = useState(false);
  const [jawabanSatuC, setJawabanSatuC] = useState(false);
  const [jawabanSatuD, setJawabanSatuD] = useState(false);
  const [jawabanSatuE, setJawabanSatuE] = useState(false);
  const [jawabanSatuF, setJawabanSatuF] = useState(false);
  const [jawabanSatuG, setJawabanSatuG] = useState(false);

  // Save state kondisi soal 1.b
  const [jawabanDuaA, setJawabanDuaA] = useState(false);
  const [jawabanDuaB, setJawabanDuaB] = useState(false);
  const [jawabanDuaC, setJawabanDuaC] = useState(false);
  const [jawabanDuaD, setJawabanDuaD] = useState(false);
  const [jawabanDuaE, setJawabanDuaE] = useState(false);
  const [jawabanDuaF, setJawabanDuaF] = useState(false);
  const [jawabanDuaG, setJawabanDuaG] = useState(false);

  // Save state kondisi soal 1.c
  const [jawabanTigaA, setJawabanTigaA] = useState(false);
  const [jawabanTigaB, setJawabanTigaB] = useState(false);
  const [jawabanTigaC, setJawabanTigaC] = useState(false);
  const [jawabanTigaD, setJawabanTigaD] = useState(false);
  const [jawabanTigaE, setJawabanTigaE] = useState(false);
  const [jawabanTigaF, setJawabanTigaF] = useState(false);
  const [jawabanTigaG, setJawabanTigaG] = useState(false);

  // Save state kondisi tabel soal 1.a
  const [jawabanTabelSatuA, setJawabanTabelSatuA] = useState(false);
  const [jawabanTabelSatuB, setJawabanTabelSatuB] = useState(false);
  const [jawabanTabelSatuC, setJawabanTabelSatuC] = useState(false);
  const [jawabanTabelSatuD, setJawabanTabelSatuD] = useState(false);
  const [jawabanTabelSatuE, setJawabanTabelSatuE] = useState(false);
  const [jawabanTabelSatuF, setJawabanTabelSatuF] = useState(false);
  const [jawabanTabelSatuG, setJawabanTabelSatuG] = useState(false);
  const [jawabanTabelSatuH, setJawabanTabelSatuH] = useState(false);
  const [jawabanTabelSatuI, setJawabanTabelSatuI] = useState(false);
  const [jawabanTabelSatuJ, setJawabanTabelSatuJ] = useState(false);
  const [jawabanTabelSatuK, setJawabanTabelSatuK] = useState(false);
  const [jawabanTabelSatuL, setJawabanTabelSatuL] = useState(false);
  const [jawabanTabelSatuM, setJawabanTabelSatuM] = useState(false);
  const [jawabanTabelSatuN, setJawabanTabelSatuN] = useState(false);
  const [jawabanTabelSatuO, setJawabanTabelSatuO] = useState(false);
  const [jawabanTabelSatuP, setJawabanTabelSatuP] = useState(false);
  const [jawabanTabelSatuQ, setJawabanTabelSatuQ] = useState(false);
  const [jawabanTabelSatuR, setJawabanTabelSatuR] = useState(false);
  const [jawabanTabelSatuS, setJawabanTabelSatuS] = useState(false);
  const [jawabanTabelSatuT, setJawabanTabelSatuT] = useState(false);
  const [jawabanTabelSatuU, setJawabanTabelSatuU] = useState(false);
  const [jawabanTabelSatuV, setJawabanTabelSatuV] = useState(false);

  // Save state kondisi tabel soal 1.a
  const [jawabanTabelDuaA, setJawabanTabelDuaA] = useState(false);
  const [jawabanTabelDuaB, setJawabanTabelDuaB] = useState(false);
  const [jawabanTabelDuaC, setJawabanTabelDuaC] = useState(false);
  const [jawabanTabelDuaD, setJawabanTabelDuaD] = useState(false);
  const [jawabanTabelDuaE, setJawabanTabelDuaE] = useState(false);
  const [jawabanTabelDuaF, setJawabanTabelDuaF] = useState(false);
  const [jawabanTabelDuaG, setJawabanTabelDuaG] = useState(false);
  const [jawabanTabelDuaH, setJawabanTabelDuaH] = useState(false);
  const [jawabanTabelDuaI, setJawabanTabelDuaI] = useState(false);
  const [jawabanTabelDuaJ, setJawabanTabelDuaJ] = useState(false);
  const [jawabanTabelDuaK, setJawabanTabelDuaK] = useState(false);
  const [jawabanTabelDuaL, setJawabanTabelDuaL] = useState(false);
  const [jawabanTabelDuaM, setJawabanTabelDuaM] = useState(false);
  const [jawabanTabelDuaN, setJawabanTabelDuaN] = useState(false);
  const [jawabanTabelDuaO, setJawabanTabelDuaO] = useState(false);
  const [jawabanTabelDuaP, setJawabanTabelDuaP] = useState(false);
  const [jawabanTabelDuaQ, setJawabanTabelDuaQ] = useState(false);
  const [jawabanTabelDuaR, setJawabanTabelDuaR] = useState(false);
  const [jawabanTabelDuaS, setJawabanTabelDuaS] = useState(false);
  const [jawabanTabelDuaT, setJawabanTabelDuaT] = useState(false);
  const [jawabanTabelDuaU, setJawabanTabelDuaU] = useState(false);
  const [jawabanTabelDuaV, setJawabanTabelDuaV] = useState(false);

  // Save state kondisi tabel soal 1.c
  const [jawabanTabelTigaA, setJawabanTabelTigaA] = useState(false);
  const [jawabanTabelTigaB, setJawabanTabelTigaB] = useState(false);
  const [jawabanTabelTigaC, setJawabanTabelTigaC] = useState(false);
  const [jawabanTabelTigaD, setJawabanTabelTigaD] = useState(false);
  const [jawabanTabelTigaE, setJawabanTabelTigaE] = useState(false);
  const [jawabanTabelTigaF, setJawabanTabelTigaF] = useState(false);
  const [jawabanTabelTigaG, setJawabanTabelTigaG] = useState(false);
  const [jawabanTabelTigaH, setJawabanTabelTigaH] = useState(false);
  const [jawabanTabelTigaI, setJawabanTabelTigaI] = useState(false);
  const [jawabanTabelTigaJ, setJawabanTabelTigaJ] = useState(false);
  const [jawabanTabelTigaK, setJawabanTabelTigaK] = useState(false);
  const [jawabanTabelTigaL, setJawabanTabelTigaL] = useState(false);
  const [jawabanTabelTigaM, setJawabanTabelTigaM] = useState(false);
  const [jawabanTabelTigaN, setJawabanTabelTigaN] = useState(false);
  const [jawabanTabelTigaO, setJawabanTabelTigaO] = useState(false);
  const [jawabanTabelTigaP, setJawabanTabelTigaP] = useState(false);
  const [jawabanTabelTigaQ, setJawabanTabelTigaQ] = useState(false);
  const [jawabanTabelTigaR, setJawabanTabelTigaR] = useState(false);
  const [jawabanTabelTigaS, setJawabanTabelTigaS] = useState(false);
  const [jawabanTabelTigaT, setJawabanTabelTigaT] = useState(false);
  const [jawabanTabelTigaU, setJawabanTabelTigaU] = useState(false);
  const [jawabanTabelTigaV, setJawabanTabelTigaV] = useState(false);

  // Function cek jawaban soal 1.a
  const cekJawaban1A = (jawaban1A) => {
    if (jawaban1A.target.value === "x-1") {
      setStyle1A({ border: "2px solid green" });
      setJawabanSatuA(true);
    } else {
      setStyle1A({ border: "2px solid red" });
      setJawabanSatuA(false);
    }
  };
  const cekJawaban1B = (jawaban1B) => {
    if (jawaban1B.target.value === "x") {
      setStyle1B({ border: "2px solid green" });
      setJawabanSatuB(true);
    } else {
      setStyle1B({ border: "2px solid red" });
      setJawabanSatuB(false);
    }
  };
  const cekJawaban1C = (jawaban1C) => {
    if (jawaban1C.target.value === "1") {
      setStyle1C({ border: "2px solid green" });
      setJawabanSatuC(true);
    } else {
      setStyle1C({ border: "2px solid red" });
      setJawabanSatuC(false);
    }
  };
  const cekJawaban1D = (jawaban1D) => {
    if (jawaban1D.target.value === "-(x-1)") {
      setStyle1D({ border: "2px solid green" });
      setJawabanSatuD(true);
    } else {
      setStyle1D({ border: "2px solid red" });
      setJawabanSatuD(false);
    }
  };
  const cekJawaban1E = (jawaban1E) => {
    if (jawaban1E.target.value === "-x+1") {
      setStyle1E({ border: "2px solid green" });
      setJawabanSatuE(true);
    } else {
      setStyle1E({ border: "2px solid red" });
      setJawabanSatuE(false);
    }
  };
  const cekJawaban1F = (jawaban1F) => {
    if (jawaban1F.target.value === "x") {
      setStyle1F({ border: "2px solid green" });
      setJawabanSatuF(true);
    } else {
      setStyle1F({ border: "2px solid red" });
      setJawabanSatuF(false);
    }
  };
  const cekJawaban1G = (jawaban1G) => {
    if (jawaban1G.target.value === "1") {
      setStyle1G({ border: "2px solid green" });
      setJawabanSatuG(true);
    } else {
      setStyle1G({ border: "2px solid red" });
      setJawabanSatuG(false);
    }
  };

  // Function cek jawaban soal 1.b
  const cekJawaban2A = (jawaban2A) => {
    if (jawaban2A.target.value === "x+2") {
      setStyle2A({ border: "2px solid green" });
      setJawabanDuaA(true);
    } else {
      setStyle2A({ border: "2px solid red" });
      setJawabanDuaA(false);
    }
  };
  const cekJawaban2B = (jawaban2B) => {
    if (jawaban2B.target.value === "x") {
      setStyle2B({ border: "2px solid green" });
      setJawabanDuaB(true);
    } else {
      setStyle2B({ border: "2px solid red" });
      setJawabanDuaB(false);
    }
  };
  const cekJawaban2C = (jawaban2C) => {
    if (jawaban2C.target.value === "-2") {
      setStyle2C({ border: "2px solid green" });
      setJawabanDuaC(true);
    } else {
      setStyle2C({ border: "2px solid red" });
      setJawabanDuaC(false);
    }
  };
  const cekJawaban2D = (jawaban2D) => {
    if (jawaban2D.target.value === "-(x+2)") {
      setStyle2D({ border: "2px solid green" });
      setJawabanDuaD(true);
    } else {
      setStyle2D({ border: "2px solid red" });
      setJawabanDuaD(false);
    }
  };
  const cekJawaban2E = (jawaban2E) => {
    if (jawaban2E.target.value === "-x-2") {
      setStyle2E({ border: "2px solid green" });
      setJawabanDuaE(true);
    } else {
      setStyle2E({ border: "2px solid red" });
      setJawabanDuaE(false);
    }
  };
  const cekJawaban2F = (jawaban2F) => {
    if (jawaban2F.target.value === "x") {
      setStyle2F({ border: "2px solid green" });
      setJawabanDuaF(true);
    } else {
      setStyle2F({ border: "2px solid red" });
      setJawabanDuaF(false);
    }
  };
  const cekJawaban2G = (jawaban2G) => {
    if (jawaban2G.target.value === "-2") {
      setStyle2G({ border: "2px solid green" });
      setJawabanDuaG(true);
    } else {
      setStyle2G({ border: "2px solid red" });
      setJawabanDuaG(false);
    }
  };

  // Function cek jawaban soal 1.c
  const cekJawaban3A = (jawaban3A) => {
    if (jawaban3A.target.value === "2x-8") {
      setStyle3A({ border: "2px solid green" });
      setJawabanTigaA(true);
    } else {
      setStyle3A({ border: "2px solid red" });
      setJawabanTigaA(false);
    }
  };
  const cekJawaban3B = (jawaban3B) => {
    if (jawaban3B.target.value === "x") {
      setStyle3B({ border: "2px solid green" });
      setJawabanTigaB(true);
    } else {
      setStyle3B({ border: "2px solid red" });
      setJawabanTigaB(false);
    }
  };
  const cekJawaban3C = (jawaban3C) => {
    if (jawaban3C.target.value === "4") {
      setStyle3C({ border: "2px solid green" });
      setJawabanTigaC(true);
    } else {
      setStyle3C({ border: "2px solid red" });
      setJawabanTigaC(false);
    }
  };
  const cekJawaban3D = (jawaban3D) => {
    if (jawaban3D.target.value === "-(2x-8)") {
      setStyle3D({ border: "2px solid green" });
      setJawabanTigaD(true);
    } else {
      setStyle3D({ border: "2px solid red" });
      setJawabanTigaD(false);
    }
  };
  const cekJawaban3E = (jawaban3E) => {
    if (jawaban3E.target.value === "-2x+8") {
      setStyle3E({ border: "2px solid green" });
      setJawabanTigaE(true);
    } else {
      setStyle3E({ border: "2px solid red" });
      setJawabanTigaE(false);
    }
  };
  const cekJawaban3F = (jawaban3F) => {
    if (jawaban3F.target.value === "x") {
      setStyle3F({ border: "2px solid green" });
      setJawabanTigaF(true);
    } else {
      setStyle3F({ border: "2px solid red" });
      setJawabanTigaF(false);
    }
  };
  const cekJawaban3G = (jawaban3G) => {
    if (jawaban3G.target.value === "4") {
      setStyle3G({ border: "2px solid green" });
      setJawabanTigaG(true);
    } else {
      setStyle3G({ border: "2px solid red" });
      setJawabanTigaG(false);
    }
  };

  // Function cek jawaban tabel soal 1.a
  const cekJawabanTabel1A = (jawabanTabel1A) => {
    if (jawabanTabel1A.target.value === "-4") {
      setStyleTable1A({ border: "2px solid green" });
      setJawabanTabelSatuA(true);
    } else {
      setStyleTable1A({ border: "2px solid red" });
      setJawabanTabelSatuA(false);
    }
  };
  const cekJawabanTabel1B = (jawabanTabel1B) => {
    if (jawabanTabel1B.target.value === "-3") {
      setStyleTable1B({ border: "2px solid green" });
      setJawabanTabelSatuB(true);
    } else {
      setStyleTable1B({ border: "2px solid red" });
      setJawabanTabelSatuB(false);
    }
  };
  const cekJawabanTabel1C = (jawabanTabel1C) => {
    if (jawabanTabel1C.target.value === "-2") {
      setStyleTable1C({ border: "2px solid green" });
      setJawabanTabelSatuC(true);
    } else {
      setStyleTable1C({ border: "2px solid red" });
      setJawabanTabelSatuC(false);
    }
  };
  const cekJawabanTabel1D = (jawabanTabel1D) => {
    if (jawabanTabel1D.target.value === "-1") {
      setStyleTable1D({ border: "2px solid green" });
      setJawabanTabelSatuD(true);
    } else {
      setStyleTable1D({ border: "2px solid red" });
      setJawabanTabelSatuD(false);
    }
  };
  const cekJawabanTabel1E = (jawabanTabel1E) => {
    if (jawabanTabel1E.target.value === "0") {
      setStyleTable1E({ border: "2px solid green" });
      setJawabanTabelSatuE(true);
    } else {
      setStyleTable1E({ border: "2px solid red" });
      setJawabanTabelSatuE(false);
    }
  };
  const cekJawabanTabel1F = (jawabanTabel1F) => {
    if (jawabanTabel1F.target.value === "1") {
      setStyleTable1F({ border: "2px solid green" });
      setJawabanTabelSatuF(true);
    } else {
      setStyleTable1F({ border: "2px solid red" });
      setJawabanTabelSatuF(false);
    }
  };
  const cekJawabanTabel1G = (jawabanTabel1G) => {
    if (jawabanTabel1G.target.value === "2") {
      setStyleTable1G({ border: "2px solid green" });
      setJawabanTabelSatuG(true);
    } else {
      setStyleTable1G({ border: "2px solid red" });
      setJawabanTabelSatuG(false);
    }
  };
  const cekJawabanTabel1H = (jawabanTabel1H) => {
    if (jawabanTabel1H.target.value === "3") {
      setStyleTable1H({ border: "2px solid green" });
      setJawabanTabelSatuH(true);
    } else {
      setStyleTable1H({ border: "2px solid red" });
      setJawabanTabelSatuH(false);
    }
  };
  const cekJawabanTabel1I = (jawabanTabel1I) => {
    if (jawabanTabel1I.target.value === "4") {
      setStyleTable1I({ border: "2px solid green" });
      setJawabanTabelSatuI(true);
    } else {
      setStyleTable1I({ border: "2px solid red" });
      setJawabanTabelSatuI(false);
    }
  };
  const cekJawabanTabel1J = (jawabanTabel1J) => {
    if (jawabanTabel1J.target.value === "5") {
      setStyleTable1J({ border: "2px solid green" });
      setJawabanTabelSatuJ(true);
    } else {
      setStyleTable1J({ border: "2px solid red" });
      setJawabanTabelSatuJ(false);
    }
  };
  const cekJawabanTabel1K = (jawabanTabel1K) => {
    if (jawabanTabel1K.target.value === "6") {
      setStyleTable1K({ border: "2px solid green" });
      setJawabanTabelSatuK(true);
    } else {
      setStyleTable1K({ border: "2px solid red" });
      setJawabanTabelSatuK(false);
    }
  };
  const cekJawabanTabel1L = (jawabanTabel1L) => {
    if (jawabanTabel1L.target.value === "5") {
      setStyleTable1L({ border: "2px solid green" });
      setJawabanTabelSatuL(true);
    } else {
      setStyleTable1L({ border: "2px solid red" });
      setJawabanTabelSatuL(false);
    }
  };
  const cekJawabanTabel1M = (jawabanTabel1M) => {
    if (jawabanTabel1M.target.value === "4") {
      setStyleTable1M({ border: "2px solid green" });
      setJawabanTabelSatuM(true);
    } else {
      setStyleTable1M({ border: "2px solid red" });
      setJawabanTabelSatuM(false);
    }
  };
  const cekJawabanTabel1N = (jawabanTabel1N) => {
    if (jawabanTabel1N.target.value === "3") {
      setStyleTable1N({ border: "2px solid green" });
      setJawabanTabelSatuN(true);
    } else {
      setStyleTable1N({ border: "2px solid red" });
      setJawabanTabelSatuN(false);
    }
  };
  const cekJawabanTabel1O = (jawabanTabel1O) => {
    if (jawabanTabel1O.target.value === "2") {
      setStyleTable1O({ border: "2px solid green" });
      setJawabanTabelSatuO(true);
    } else {
      setStyleTable1O({ border: "2px solid red" });
      setJawabanTabelSatuO(false);
    }
  };
  const cekJawabanTabel1P = (jawabanTabel1P) => {
    if (jawabanTabel1P.target.value === "1") {
      setStyleTable1P({ border: "2px solid green" });
      setJawabanTabelSatuP(true);
    } else {
      setStyleTable1P({ border: "2px solid red" });
      setJawabanTabelSatuP(false);
    }
  };
  const cekJawabanTabel1Q = (jawabanTabel1Q) => {
    if (jawabanTabel1Q.target.value === "0") {
      setStyleTable1Q({ border: "2px solid green" });
      setJawabanTabelSatuQ(true);
    } else {
      setStyleTable1Q({ border: "2px solid red" });
      setJawabanTabelSatuQ(false);
    }
  };
  const cekJawabanTabel1R = (jawabanTabel1R) => {
    if (jawabanTabel1R.target.value === "1") {
      setStyleTable1R({ border: "2px solid green" });
      setJawabanTabelSatuR(true);
    } else {
      setStyleTable1R({ border: "2px solid red" });
      setJawabanTabelSatuR(false);
    }
  };
  const cekJawabanTabel1S = (jawabanTabel1S) => {
    if (jawabanTabel1S.target.value === "2") {
      setStyleTable1S({ border: "2px solid green" });
      setJawabanTabelSatuS(true);
    } else {
      setStyleTable1S({ border: "2px solid red" });
      setJawabanTabelSatuS(false);
    }
  };
  const cekJawabanTabel1T = (jawabanTabel1T) => {
    if (jawabanTabel1T.target.value === "3") {
      setStyleTable1T({ border: "2px solid green" });
      setJawabanTabelSatuT(true);
    } else {
      setStyleTable1T({ border: "2px solid red" });
      setJawabanTabelSatuT(false);
    }
  };
  const cekJawabanTabel1U = (jawabanTabel1U) => {
    if (jawabanTabel1U.target.value === "4") {
      setStyleTable1U({ border: "2px solid green" });
      setJawabanTabelSatuU(true);
    } else {
      setStyleTable1U({ border: "2px solid red" });
      setJawabanTabelSatuU(false);
    }
  };
  const cekJawabanTabel1V = (jawabanTabel1V) => {
    if (jawabanTabel1V.target.value === "5") {
      setStyleTable1V({ border: "2px solid green" });
      setJawabanTabelSatuV(true);
    } else {
      setStyleTable1V({ border: "2px solid red" });
      setJawabanTabelSatuV(false);
    }
  };

  // Function cek jawaban tabel soal 1.c
  const cekJawabanTabel3A = (jawabanTabel3A) => {
    if (jawabanTabel3A.target.value === "-1") {
      setStyleTable3A({ border: "2px solid green" });
      setJawabanTabelTigaA(true);
    } else {
      setStyleTable3A({ border: "2px solid red" });
      setJawabanTabelTigaA(false);
    }
  };
  const cekJawabanTabel3B = (jawabanTabel3B) => {
    if (jawabanTabel3B.target.value === "0") {
      setStyleTable3B({ border: "2px solid green" });
      setJawabanTabelTigaB(true);
    } else {
      setStyleTable3B({ border: "2px solid red" });
      setJawabanTabelTigaB(false);
    }
  };
  const cekJawabanTabel3C = (jawabanTabel3C) => {
    if (jawabanTabel3C.target.value === "1") {
      setStyleTable3C({ border: "2px solid green" });
      setJawabanTabelTigaC(true);
    } else {
      setStyleTable3C({ border: "2px solid red" });
      setJawabanTabelTigaC(false);
    }
  };
  const cekJawabanTabel3D = (jawabanTabel3D) => {
    if (jawabanTabel3D.target.value === "2") {
      setStyleTable3D({ border: "2px solid green" });
      setJawabanTabelTigaD(true);
    } else {
      setStyleTable3D({ border: "2px solid red" });
      setJawabanTabelTigaD(false);
    }
  };
  const cekJawabanTabel3E = (jawabanTabel3E) => {
    if (jawabanTabel3E.target.value === "3") {
      setStyleTable3E({ border: "2px solid green" });
      setJawabanTabelTigaE(true);
    } else {
      setStyleTable3E({ border: "2px solid red" });
      setJawabanTabelTigaE(false);
    }
  };
  const cekJawabanTabel3F = (jawabanTabel3F) => {
    if (jawabanTabel3F.target.value === "4") {
      setStyleTable3F({ border: "2px solid green" });
      setJawabanTabelTigaF(true);
    } else {
      setStyleTable3F({ border: "2px solid red" });
      setJawabanTabelTigaF(false);
    }
  };
  const cekJawabanTabel3G = (jawabanTabel3G) => {
    if (jawabanTabel3G.target.value === "5") {
      setStyleTable3G({ border: "2px solid green" });
      setJawabanTabelTigaG(true);
    } else {
      setStyleTable3G({ border: "2px solid red" });
      setJawabanTabelTigaG(false);
    }
  };
  const cekJawabanTabel3H = (jawabanTabel3H) => {
    if (jawabanTabel3H.target.value === "6") {
      setStyleTable3H({ border: "2px solid green" });
      setJawabanTabelTigaH(true);
    } else {
      setStyleTable3H({ border: "2px solid red" });
      setJawabanTabelTigaH(false);
    }
  };
  const cekJawabanTabel3I = (jawabanTabel3I) => {
    if (jawabanTabel3I.target.value === "7") {
      setStyleTable3I({ border: "2px solid green" });
      setJawabanTabelTigaI(true);
    } else {
      setStyleTable3I({ border: "2px solid red" });
      setJawabanTabelTigaI(false);
    }
  };
  const cekJawabanTabel3J = (jawabanTabel3J) => {
    if (jawabanTabel3J.target.value === "8") {
      setStyleTable3J({ border: "2px solid green" });
      setJawabanTabelTigaJ(true);
    } else {
      setStyleTable3J({ border: "2px solid red" });
      setJawabanTabelTigaJ(false);
    }
  };
  const cekJawabanTabel3K = (jawabanTabel3K) => {
    if (jawabanTabel3K.target.value === "9") {
      setStyleTable3K({ border: "2px solid green" });
      setJawabanTabelTigaK(true);
    } else {
      setStyleTable3K({ border: "2px solid red" });
      setJawabanTabelTigaK(false);
    }
  };
  const cekJawabanTabel3L = (jawabanTabel3L) => {
    if (jawabanTabel3L.target.value === "10") {
      setStyleTable3L({ border: "2px solid green" });
      setJawabanTabelTigaL(true);
    } else {
      setStyleTable3L({ border: "2px solid red" });
      setJawabanTabelTigaL(false);
    }
  };
  const cekJawabanTabel3M = (jawabanTabel3M) => {
    if (jawabanTabel3M.target.value === "8") {
      setStyleTable3M({ border: "2px solid green" });
      setJawabanTabelTigaM(true);
    } else {
      setStyleTable3M({ border: "2px solid red" });
      setJawabanTabelTigaM(false);
    }
  };
  const cekJawabanTabel3N = (jawabanTabel3N) => {
    if (jawabanTabel3N.target.value === "6") {
      setStyleTable3N({ border: "2px solid green" });
      setJawabanTabelTigaN(true);
    } else {
      setStyleTable3N({ border: "2px solid red" });
      setJawabanTabelTigaN(false);
    }
  };
  const cekJawabanTabel3O = (jawabanTabel3O) => {
    if (jawabanTabel3O.target.value === "4") {
      setStyleTable3O({ border: "2px solid green" });
      setJawabanTabelTigaO(true);
    } else {
      setStyleTable3O({ border: "2px solid red" });
      setJawabanTabelTigaO(false);
    }
  };
  const cekJawabanTabel3P = (jawabanTabel3P) => {
    if (jawabanTabel3P.target.value === "2") {
      setStyleTable3P({ border: "2px solid green" });
      setJawabanTabelTigaP(true);
    } else {
      setStyleTable3P({ border: "2px solid red" });
      setJawabanTabelTigaP(false);
    }
  };
  const cekJawabanTabel3Q = (jawabanTabel3Q) => {
    if (jawabanTabel3Q.target.value === "0") {
      setStyleTable3Q({ border: "2px solid green" });
      setJawabanTabelTigaQ(true);
    } else {
      setStyleTable3Q({ border: "2px solid red" });
      setJawabanTabelTigaQ(false);
    }
  };
  const cekJawabanTabel3R = (jawabanTabel3R) => {
    if (jawabanTabel3R.target.value === "2") {
      setStyleTable3R({ border: "2px solid green" });
      setJawabanTabelTigaR(true);
    } else {
      setStyleTable3R({ border: "2px solid red" });
      setJawabanTabelTigaR(false);
    }
  };
  const cekJawabanTabel3S = (jawabanTabel3S) => {
    if (jawabanTabel3S.target.value === "4") {
      setStyleTable3S({ border: "2px solid green" });
      setJawabanTabelTigaS(true);
    } else {
      setStyleTable3S({ border: "2px solid red" });
      setJawabanTabelTigaS(false);
    }
  };
  const cekJawabanTabel3T = (jawabanTabel3T) => {
    if (jawabanTabel3T.target.value === "6") {
      setStyleTable3T({ border: "2px solid green" });
      setJawabanTabelTigaT(true);
    } else {
      setStyleTable3T({ border: "2px solid red" });
      setJawabanTabelTigaT(false);
    }
  };
  const cekJawabanTabel3U = (jawabanTabel3U) => {
    if (jawabanTabel3U.target.value === "8") {
      setStyleTable3U({ border: "2px solid green" });
      setJawabanTabelTigaU(true);
    } else {
      setStyleTable3U({ border: "2px solid red" });
      setJawabanTabelTigaU(false);
    }
  };
  const cekJawabanTabel3V = (jawabanTabel3V) => {
    if (jawabanTabel3V.target.value === "10") {
      setStyleTable3V({ border: "2px solid green" });
      setJawabanTabelTigaV(true);
    } else {
      setStyleTable3V({ border: "2px solid red" });
      setJawabanTabelTigaV(false);
    }
  };

  // Function cek jawaban tabel soal 1.b
  const cekJawabanTabel2A = (jawabanTabel2A) => {
    if (jawabanTabel2A.target.value === "-7") {
      setStyleTable2A({ border: "2px solid green" });
      setJawabanTabelDuaA(true);
    } else {
      setStyleTable2A({ border: "2px solid red" });
      setJawabanTabelDuaA(false);
    }
  };
  const cekJawabanTabel2B = (jawabanTabel2B) => {
    if (jawabanTabel2B.target.value === "-6") {
      setStyleTable2B({ border: "2px solid green" });
      setJawabanTabelDuaB(true);
    } else {
      setStyleTable2B({ border: "2px solid red" });
      setJawabanTabelDuaB(false);
    }
  };
  const cekJawabanTabel2C = (jawabanTabel2C) => {
    if (jawabanTabel2C.target.value === "-5") {
      setStyleTable2C({ border: "2px solid green" });
      setJawabanTabelDuaC(true);
    } else {
      setStyleTable2C({ border: "2px solid red" });
      setJawabanTabelDuaC(false);
    }
  };
  const cekJawabanTabel2D = (jawabanTabel2D) => {
    if (jawabanTabel2D.target.value === "-4") {
      setStyleTable2D({ border: "2px solid green" });
      setJawabanTabelDuaD(true);
    } else {
      setStyleTable2D({ border: "2px solid red" });
      setJawabanTabelDuaD(false);
    }
  };
  const cekJawabanTabel2E = (jawabanTabel2E) => {
    if (jawabanTabel2E.target.value === "-3") {
      setStyleTable2E({ border: "2px solid green" });
      setJawabanTabelDuaE(true);
    } else {
      setStyleTable2E({ border: "2px solid red" });
      setJawabanTabelDuaE(false);
    }
  };
  const cekJawabanTabel2F = (jawabanTabel2F) => {
    if (jawabanTabel2F.target.value === "-2") {
      setStyleTable2F({ border: "2px solid green" });
      setJawabanTabelDuaF(true);
    } else {
      setStyleTable2F({ border: "2px solid red" });
      setJawabanTabelDuaF(false);
    }
  };
  const cekJawabanTabel2G = (jawabanTabel2G) => {
    if (jawabanTabel2G.target.value === "-1") {
      setStyleTable2G({ border: "2px solid green" });
      setJawabanTabelDuaG(true);
    } else {
      setStyleTable2G({ border: "2px solid red" });
      setJawabanTabelDuaG(false);
    }
  };
  const cekJawabanTabel2H = (jawabanTabel2H) => {
    if (jawabanTabel2H.target.value === "0") {
      setStyleTable2H({ border: "2px solid green" });
      setJawabanTabelDuaH(true);
    } else {
      setStyleTable2H({ border: "2px solid red" });
      setJawabanTabelDuaH(false);
    }
  };
  const cekJawabanTabel2I = (jawabanTabel2I) => {
    if (jawabanTabel2I.target.value === "1") {
      setStyleTable2I({ border: "2px solid green" });
      setJawabanTabelDuaI(true);
    } else {
      setStyleTable2I({ border: "2px solid red" });
      setJawabanTabelDuaI(false);
    }
  };
  const cekJawabanTabel2J = (jawabanTabel2J) => {
    if (jawabanTabel2J.target.value === "2") {
      setStyleTable2J({ border: "2px solid green" });
      setJawabanTabelDuaJ(true);
    } else {
      setStyleTable2J({ border: "2px solid red" });
      setJawabanTabelDuaJ(false);
    }
  };
  const cekJawabanTabel2K = (jawabanTabel2K) => {
    if (jawabanTabel2K.target.value === "3") {
      setStyleTable2K({ border: "2px solid green" });
      setJawabanTabelDuaK(true);
    } else {
      setStyleTable2K({ border: "2px solid red" });
      setJawabanTabelDuaK(false);
    }
  };
  const cekJawabanTabel2L = (jawabanTabel2L) => {
    if (jawabanTabel2L.target.value === "5") {
      setStyleTable2L({ border: "2px solid green" });
      setJawabanTabelDuaL(true);
    } else {
      setStyleTable2L({ border: "2px solid red" });
      setJawabanTabelDuaL(false);
    }
  };
  const cekJawabanTabel2M = (jawabanTabel2M) => {
    if (jawabanTabel2M.target.value === "4") {
      setStyleTable2M({ border: "2px solid green" });
      setJawabanTabelDuaM(true);
    } else {
      setStyleTable2M({ border: "2px solid red" });
      setJawabanTabelDuaM(false);
    }
  };
  const cekJawabanTabel2N = (jawabanTabel2N) => {
    if (jawabanTabel2N.target.value === "3") {
      setStyleTable2N({ border: "2px solid green" });
      setJawabanTabelDuaN(true);
    } else {
      setStyleTable2N({ border: "2px solid red" });
      setJawabanTabelDuaN(false);
    }
  };
  const cekJawabanTabel2O = (jawabanTabel2O) => {
    if (jawabanTabel2O.target.value === "2") {
      setStyleTable2O({ border: "2px solid green" });
      setJawabanTabelDuaO(true);
    } else {
      setStyleTable2O({ border: "2px solid red" });
      setJawabanTabelDuaO(false);
    }
  };
  const cekJawabanTabel2P = (jawabanTabel2P) => {
    if (jawabanTabel2P.target.value === "1") {
      setStyleTable2P({ border: "2px solid green" });
      setJawabanTabelDuaP(true);
    } else {
      setStyleTable2P({ border: "2px solid red" });
      setJawabanTabelDuaP(false);
    }
  };
  const cekJawabanTabel2Q = (jawabanTabel2Q) => {
    if (jawabanTabel2Q.target.value === "0") {
      setStyleTable2Q({ border: "2px solid green" });
      setJawabanTabelDuaQ(true);
    } else {
      setStyleTable2Q({ border: "2px solid red" });
      setJawabanTabelDuaQ(false);
    }
  };
  const cekJawabanTabel2R = (jawabanTabel2R) => {
    if (jawabanTabel2R.target.value === "1") {
      setStyleTable2R({ border: "2px solid green" });
      setJawabanTabelDuaR(true);
    } else {
      setStyleTable2R({ border: "2px solid red" });
      setJawabanTabelDuaR(false);
    }
  };
  const cekJawabanTabel2S = (jawabanTabel2S) => {
    if (jawabanTabel2S.target.value === "2") {
      setStyleTable2S({ border: "2px solid green" });
      setJawabanTabelDuaS(true);
    } else {
      setStyleTable2S({ border: "2px solid red" });
      setJawabanTabelDuaS(false);
    }
  };
  const cekJawabanTabel2T = (jawabanTabel2T) => {
    if (jawabanTabel2T.target.value === "3") {
      setStyleTable2T({ border: "2px solid green" });
      setJawabanTabelDuaT(true);
    } else {
      setStyleTable2T({ border: "2px solid red" });
      setJawabanTabelDuaT(false);
    }
  };
  const cekJawabanTabel2U = (jawabanTabel2U) => {
    if (jawabanTabel2U.target.value === "4") {
      setStyleTable2U({ border: "2px solid green" });
      setJawabanTabelDuaU(true);
    } else {
      setStyleTable2U({ border: "2px solid red" });
      setJawabanTabelDuaU(false);
    }
  };
  const cekJawabanTabel2V = (jawabanTabel2V) => {
    if (jawabanTabel2V.target.value === "5") {
      setStyleTable2V({ border: "2px solid green" });
      setJawabanTabelDuaV(true);
    } else {
      setStyleTable2V({ border: "2px solid red" });
      setJawabanTabelDuaV(false);
    }
  };

  return (
    <div className="relative text-base text-justify">
      <div className="flex flex-col bg-white text-sm border-t-2 border-trueGray-300">
        <p>
          Berdasarkan contoh-contoh yang sudah dijelaskan sebelumnya, kerjakan
          latihan berikut dengan cermat!
        </p>
        <div className="flex flex-col bg-white text-sm border-t-2 mt-2 border-trueGray-300">
          <a className="mt-3 text-white bg-indigo-300 w-full justify-center p-2 flex rounded-lg items-center font-bold mx-auto">
            Mari Mencoba
          </a>
        </div>
        <button
          onClick={tooglePetunjuk}
          className="w-max uppercase mt-2 flex justify-between items-center gap-8 px-2 py-1 transition-all duration-300 ease-linear bg-cyan-600 text-white hover:ring-1 hover:ring-cyan-600 rounded-lg hover:bg-white hover:text-cyan-600 hover:rounded-lg cursor-pointer"
        >
          Petunjuk (Klik saya)
        </button>
        <div
          className={
            "bg-cyan-500 w-full p-2 mt-2 text-white " +
            (petunjuk ? "" : "hidden")
          }
        >
          <ol className="list-decimal pl-3">
            <li>
              <div className="flex  items-center">
                {" "}
                <span className="mr-4">Kerjakan sesuai contoh sebelumnya</span>
              </div>
            </li>

            <li>
              <div className="flex  items-center">
                {" "}
                <span className="mr-4">
                  Isi kotak kosong dengan jawaban anda
                </span>
                <img src="/materi/1.png" className="rounded-full w-20 h-14" />
              </div>
            </li>
            <li>
              <div className="flex  items-center">
                {" "}
                <span className="mr-4">
                  Jika jawaban salah maka sisi kotak akan berwarna merah
                </span>
                <img src="/materi/2.png" className="rounded-full w-20 h-14" />
              </div>
            </li>
            <li>
              <div className="flex  items-center">
                {" "}
                <span className="mr-4">
                  Jika jawaban benar maka sisi kotak akan berwarna hijau
                </span>
                <img src="/materi/3.png" className="rounded-full w-20 h-14" />
              </div>
            </li>
          </ol>
        </div>
        <div className="p-3 mt-2 text-sm border-2 border-trueGray-300 text-justify ">
          Gambarkan grafik dari fungsi berikut.
          <ol className=" list-decimal list-inside pl-4">
            {/* Soal 1 */}
            <li>
              <InlineMath math="f(x)=|x-1|" />
              <ul className="pl-4 ">
                <li>
                  <a className="font-bold"> Penyelesaian: </a>
                  <ol className="list-decimal list-inside pl-4" start={1}>
                    <li className="pt-4">
                      <InlineMath math="f(x)=|x-1|" />
                    </li>
                  </ol>
                  <ul className="list-inside pl-8">
                    <li className="pt-2">
                      <a className="font-bold">Langkah 1</a>, Menentukan
                      definisi dari fungsi nilai mutlak:
                    </li>
                    <li>
                      <ol className=" list-inside">
                        <li>
                          <div className="inline-block">
                            <div className="flex flex-row items-center">
                              Jadi,
                              <InlineMath math="\hspace{0.2cm} |x-1| = \Biggm\lbrace" />
                              <span className="inline-block">
                                <div className="flex flex-col">
                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(1)"
                                      style={style1A}
                                      autoComplete="off"
                                      onChange={cekJawaban1A}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    untuk ,
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(2)"
                                      style={style1B}
                                      autoComplete="off"
                                      onChange={cekJawaban1B}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    <InlineMath>\ge</InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(3)"
                                      autoComplete="off"
                                      style={style1C}
                                      onChange={cekJawaban1C}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                  </div>

                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(6)"
                                      autoComplete="off"
                                      style={style1D}
                                      onChange={cekJawaban1D}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    =
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(6)"
                                      autoComplete="off"
                                      style={style1E}
                                      onChange={cekJawaban1E}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    untuk ,
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(7)"
                                      autoComplete="off"
                                      style={style1F}
                                      onChange={cekJawaban1F}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    <InlineMath>\lt</InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(8)"
                                      autoComplete="off"
                                      style={style1G}
                                      onChange={cekJawaban1G}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                    <li
                      className={
                        "pt-2 " +
                        (jawabanSatuA &&
                        jawabanSatuB &&
                        jawabanSatuC &&
                        jawabanSatuD &&
                        jawabanSatuE &&
                        jawabanSatuF &&
                        jawabanSatuG
                          ? ""
                          : "hidden")
                      }
                    >
                      Maka didapatkan <InlineMath>x \ge 1</InlineMath> dan{" "}
                      <InlineMath>x \lt 1</InlineMath>.
                    </li>
                    <li
                      className={
                        "py-2 " +
                        (jawabanSatuA &&
                        jawabanSatuB &&
                        jawabanSatuC &&
                        jawabanSatuD &&
                        jawabanSatuE &&
                        jawabanSatuF &&
                        jawabanSatuG
                          ? ""
                          : "hidden")
                      }
                    >
                      <a className="font-bold">Langkah 2</a>, Membuat tabel
                      berdasarkan titik bantu yang didapatkan dari definisi
                      nilai mutlak:
                    </li>
                    <li
                      className={
                        "py-4 " +
                        (jawabanSatuA &&
                        jawabanSatuB &&
                        jawabanSatuC &&
                        jawabanSatuD &&
                        jawabanSatuE &&
                        jawabanSatuF &&
                        jawabanSatuG
                          ? ""
                          : "hidden")
                      }
                    >
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
                                Untuk <InlineMath>x \lt 1</InlineMath>
                              </th>
                              <th
                                className="border border-black p-3 text-center "
                                colSpan="7"
                              >
                                Untuk <InlineMath>x \ge 1</InlineMath>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className=" bg-blue-200">
                              <td className="border border-black p-3 text-center ">
                                <InlineMath>x</InlineMath>
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(1)"
                                  autoComplete="off"
                                  style={styleTable1A}
                                  onChange={cekJawabanTabel1A}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(2)"
                                  autoComplete="off"
                                  style={styleTable1B}
                                  onChange={cekJawabanTabel1B}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(3)"
                                  style={styleTable1C}
                                  autoComplete="off"
                                  onChange={cekJawabanTabel1C}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(4)"
                                  style={styleTable1D}
                                  autoComplete="off"
                                  onChange={cekJawabanTabel1D}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(5)"
                                  style={styleTable1E}
                                  autoComplete="off"
                                  onChange={cekJawabanTabel1E}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(6)"
                                  style={styleTable1F}
                                  autoComplete="off"
                                  onChange={cekJawabanTabel1F}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(7)"
                                  style={styleTable1G}
                                  autoComplete="off"
                                  onChange={cekJawabanTabel1G}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(8)"
                                  style={styleTable1H}
                                  autoComplete="off"
                                  onChange={cekJawabanTabel1H}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(9)"
                                  style={styleTable1I}
                                  autoComplete="off"
                                  onChange={cekJawabanTabel1I}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(10)"
                                  style={styleTable1J}
                                  autoComplete="off"
                                  onChange={cekJawabanTabel1J}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(11)"
                                  style={styleTable1K}
                                  autoComplete="off"
                                  onChange={cekJawabanTabel1K}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-black p-3 text-center ">
                                <InlineMath>x=f(x)</InlineMath>
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(12)"
                                  style={styleTable1L}
                                  autoComplete="off"
                                  onChange={cekJawabanTabel1L}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(13)"
                                  style={styleTable1M}
                                  autoComplete="off"
                                  onChange={cekJawabanTabel1M}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(14)"
                                  autoComplete="off"
                                  style={styleTable1N}
                                  onChange={cekJawabanTabel1N}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(15)"
                                  style={styleTable1O}
                                  autoComplete="off"
                                  onChange={cekJawabanTabel1O}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(16)"
                                  autoComplete="off"
                                  style={styleTable1P}
                                  onChange={cekJawabanTabel1P}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(17)"
                                  autoComplete="off"
                                  style={styleTable1Q}
                                  onChange={cekJawabanTabel1Q}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(18)"
                                  style={styleTable1R}
                                  autoComplete="off"
                                  onChange={cekJawabanTabel1R}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(19)"
                                  style={styleTable1S}
                                  autoComplete="off"
                                  onChange={cekJawabanTabel1S}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(20)"
                                  style={styleTable1T}
                                  autoComplete="off"
                                  onChange={cekJawabanTabel1T}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(21)"
                                  autoComplete="off"
                                  style={styleTable1U}
                                  onChange={cekJawabanTabel1U}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.a(22)"
                                  style={styleTable1V}
                                  autoComplete="off"
                                  onChange={cekJawabanTabel1V}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                            </tr>
                            <tr className=" bg-blue-200">
                              <td className="border border-black p-3 text-center ">
                                <InlineMath>(x,y)</InlineMath>
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelSatuA && jawabanTabelSatuL ? (
                                  <label>
                                    <InlineMath>(-4,5)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelSatuB && jawabanTabelSatuM ? (
                                  <label>
                                    <InlineMath>(-3,4)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelSatuC && jawabanTabelSatuN ? (
                                  <label>
                                    <InlineMath>(-2,3)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelSatuD && jawabanTabelSatuO ? (
                                  <label>
                                    <InlineMath>(-1,2)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelSatuE && jawabanTabelSatuP ? (
                                  <label>
                                    <InlineMath>(0,1)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelSatuF && jawabanTabelSatuQ ? (
                                  <label>
                                    <InlineMath>(1,0)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelSatuG && jawabanTabelSatuR ? (
                                  <label>
                                    <InlineMath>(2,1)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelSatuH && jawabanTabelSatuS ? (
                                  <label>
                                    <InlineMath>(3,2)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelSatuI && jawabanTabelSatuT ? (
                                  <label>
                                    <InlineMath>(4,3)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelSatuJ && jawabanTabelSatuU ? (
                                  <label>
                                    <InlineMath>(5,4)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelSatuK && jawabanTabelSatuV ? (
                                  <label>
                                    <InlineMath>(6,5)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </li>

                    <li
                      className={
                        "pt-2 " +
                        (jawabanTabelSatuA &&
                        jawabanTabelSatuB &&
                        jawabanTabelSatuC &&
                        jawabanTabelSatuD &&
                        jawabanTabelSatuE &&
                        jawabanTabelSatuF &&
                        jawabanTabelSatuG &&
                        jawabanTabelSatuH &&
                        jawabanTabelSatuI &&
                        jawabanTabelSatuJ &&
                        jawabanTabelSatuK &&
                        jawabanTabelSatuL &&
                        jawabanTabelSatuM &&
                        jawabanTabelSatuN &&
                        jawabanTabelSatuO &&
                        jawabanTabelSatuP &&
                        jawabanTabelSatuQ &&
                        jawabanTabelSatuR &&
                        jawabanTabelSatuS &&
                        jawabanTabelSatuT &&
                        jawabanTabelSatuU &&
                        jawabanTabelSatuV
                          ? ""
                          : "hidden")
                      }
                    >
                      <a className="font-bold">Langkah 3</a>, Menyajikan
                      titik-titik yang diperoleh pada tabel ke dalam koordinat
                      kartesius:
                    </li>
                    <li
                      className={
                        "py-2 " +
                        (jawabanTabelSatuA &&
                        jawabanTabelSatuB &&
                        jawabanTabelSatuC &&
                        jawabanTabelSatuD &&
                        jawabanTabelSatuE &&
                        jawabanTabelSatuF &&
                        jawabanTabelSatuG &&
                        jawabanTabelSatuH &&
                        jawabanTabelSatuI &&
                        jawabanTabelSatuJ &&
                        jawabanTabelSatuK &&
                        jawabanTabelSatuL &&
                        jawabanTabelSatuM &&
                        jawabanTabelSatuN &&
                        jawabanTabelSatuO &&
                        jawabanTabelSatuP &&
                        jawabanTabelSatuQ &&
                        jawabanTabelSatuR &&
                        jawabanTabelSatuS &&
                        jawabanTabelSatuT &&
                        jawabanTabelSatuU &&
                        jawabanTabelSatuV
                          ? ""
                          : "hidden")
                      }
                    >
                      <iframe
                        className="border border-cyan-600 ml-16 "
                        scrolling="no"
                        title="Mari-mencoba3-soal1"
                        src="https://www.geogebra.org/material/iframe/id/duc3cxzx/width/1000/height/550/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false"
                        width="1000px"
                        height="550px"
                      >
                        {" "}
                      </iframe>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Soal 2 */}
            <li className="pt-4">
              <InlineMath math="f(x)=|x+2|" />
              <ul className="pl-4 ">
                <li>
                  <a className="font-bold"> Penyelesaian: </a>
                  <ol className="list-decimal list-inside pl-4" start={2}>
                    <li className="pt-4">
                      <InlineMath math="f(x)=|x+2|" />
                    </li>
                  </ol>
                  <ul className="list-inside pl-8">
                    <li className="pt-2">
                      <a className="font-bold">Langkah 1</a>, Menentukan
                      definisi dari fungsi nilai mutlak:
                    </li>
                    <li>
                      <ol className=" list-inside">
                        <li>
                          <div className="inline-block">
                            <div className="flex flex-row items-center">
                              Jadi,
                              <InlineMath math="\hspace{0.2cm} |x+2| = \Biggm\lbrace" />
                              <span className="inline-block">
                                <div className="flex flex-col">
                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.b(1)"
                                      style={style2A}
                                      autoComplete="off"
                                      onChange={cekJawaban2A}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    untuk ,
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.b(2)"
                                      style={style2B}
                                      autoComplete="off"
                                      onChange={cekJawaban2B}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    <InlineMath>\ge</InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.b(3)"
                                      style={style2C}
                                      autoComplete="off"
                                      onChange={cekJawaban2C}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                  </div>

                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.b(6)"
                                      style={style2D}
                                      autoComplete="off"
                                      onChange={cekJawaban2D}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    =
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.b(6)"
                                      style={style2E}
                                      autoComplete="off"
                                      onChange={cekJawaban2E}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    ,untuk
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.b(7)"
                                      style={style2F}
                                      autoComplete="off"
                                      onChange={cekJawaban2F}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    <InlineMath>\lt</InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.b(8)"
                                      style={style2G}
                                      autoComplete="off"
                                      onChange={cekJawaban2G}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                    <li
                      className={
                        "pt-2 " +
                        (jawabanDuaA &&
                        jawabanDuaB &&
                        jawabanDuaC &&
                        jawabanDuaD &&
                        jawabanDuaE &&
                        jawabanDuaF &&
                        jawabanDuaG
                          ? ""
                          : "hidden")
                      }
                    >
                      Maka didapatkan <InlineMath>x \ge -2</InlineMath> dan{" "}
                      <InlineMath>x \lt -2</InlineMath>.
                    </li>
                    <li
                      className={
                        "py-2 " +
                        (jawabanDuaA &&
                        jawabanDuaB &&
                        jawabanDuaC &&
                        jawabanDuaD &&
                        jawabanDuaE &&
                        jawabanDuaF &&
                        jawabanDuaG
                          ? ""
                          : "hidden")
                      }
                    >
                      <a className="font-bold">Langkah 2</a>, Membuat tabel
                      berdasarkan titik bantu yang didapatkan dari definisi
                      nilai mutlak:
                    </li>
                    <li
                      className={
                        "py-4 " +
                        (jawabanDuaA &&
                        jawabanDuaB &&
                        jawabanDuaC &&
                        jawabanDuaD &&
                        jawabanDuaE &&
                        jawabanDuaF &&
                        jawabanDuaG
                          ? ""
                          : "hidden")
                      }
                    >
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
                                Untuk <InlineMath>x \lt -2</InlineMath>
                              </th>
                              <th
                                className="border border-black p-3 text-center "
                                colSpan="7"
                              >
                                Untuk <InlineMath>x \ge -2</InlineMath>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className=" bg-blue-200">
                              <td className="border border-black p-3 text-center ">
                                <InlineMath>x</InlineMath>
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(1)"
                                  autoComplete="off"
                                  style={styleTable2A}
                                  onChange={cekJawabanTabel2A}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(2)"
                                  autoComplete="off"
                                  style={styleTable2B}
                                  onChange={cekJawabanTabel2B}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(3)"
                                  autoComplete="off"
                                  style={styleTable2C}
                                  onChange={cekJawabanTabel2C}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(4)"
                                  autoComplete="off"
                                  style={styleTable2D}
                                  onChange={cekJawabanTabel2D}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(5)"
                                  autoComplete="off"
                                  style={styleTable2E}
                                  onChange={cekJawabanTabel2E}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(6)"
                                  autoComplete="off"
                                  style={styleTable2F}
                                  onChange={cekJawabanTabel2F}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(7)"
                                  autoComplete="off"
                                  style={styleTable2G}
                                  onChange={cekJawabanTabel2G}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(8)"
                                  autoComplete="off"
                                  style={styleTable2H}
                                  onChange={cekJawabanTabel2H}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(9)"
                                  autoComplete="off"
                                  style={styleTable2I}
                                  onChange={cekJawabanTabel2I}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(10)"
                                  autoComplete="off"
                                  style={styleTable2J}
                                  onChange={cekJawabanTabel2J}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(11)"
                                  autoComplete="off"
                                  style={styleTable2K}
                                  onChange={cekJawabanTabel2K}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-black p-3 text-center ">
                                <InlineMath>x=f(x)</InlineMath>
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(12)"
                                  autoComplete="off"
                                  style={styleTable2L}
                                  onChange={cekJawabanTabel2L}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(13)"
                                  autoComplete="off"
                                  style={styleTable2M}
                                  onChange={cekJawabanTabel2M}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(14)"
                                  autoComplete="off"
                                  style={styleTable2N}
                                  onChange={cekJawabanTabel2N}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(15)"
                                  autoComplete="off"
                                  style={styleTable2O}
                                  onChange={cekJawabanTabel2O}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(16)"
                                  autoComplete="off"
                                  style={styleTable2P}
                                  onChange={cekJawabanTabel2P}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(17)"
                                  autoComplete="off"
                                  style={styleTable2Q}
                                  onChange={cekJawabanTabel2Q}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(18)"
                                  autoComplete="off"
                                  style={styleTable2R}
                                  onChange={cekJawabanTabel2R}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(19)"
                                  autoComplete="off"
                                  style={styleTable2S}
                                  onChange={cekJawabanTabel2S}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(20)"
                                  autoComplete="off"
                                  style={styleTable2T}
                                  onChange={cekJawabanTabel2T}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(21)"
                                  autoComplete="off"
                                  style={styleTable2U}
                                  onChange={cekJawabanTabel2U}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.b(22)"
                                  autoComplete="off"
                                  style={styleTable2V}
                                  onChange={cekJawabanTabel2V}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                            </tr>
                            <tr className=" bg-blue-200">
                              <td className="border border-black p-3 text-center ">
                                <InlineMath>(x,y)</InlineMath>
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelDuaA && jawabanTabelDuaL ? (
                                  <label>
                                    <InlineMath>(-7,5)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelDuaB && jawabanTabelDuaM ? (
                                  <label>
                                    <InlineMath>(-6,4)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelDuaC && jawabanTabelDuaN ? (
                                  <label>
                                    <InlineMath>(-5,3)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelDuaD && jawabanTabelDuaO ? (
                                  <label>
                                    <InlineMath>(-4,2)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelDuaE && jawabanTabelDuaP ? (
                                  <label>
                                    <InlineMath>(-3,1)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelDuaF && jawabanTabelDuaQ ? (
                                  <label>
                                    <InlineMath>(-2,0)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelDuaG && jawabanTabelDuaR ? (
                                  <label>
                                    <InlineMath>(-1,1)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelDuaH && jawabanTabelDuaS ? (
                                  <label>
                                    <InlineMath>(0,2)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelDuaI && jawabanTabelDuaT ? (
                                  <label>
                                    <InlineMath>(1,3)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelDuaJ && jawabanTabelDuaU ? (
                                  <label>
                                    <InlineMath>(2,4)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelDuaK && jawabanTabelDuaV ? (
                                  <label>
                                    <InlineMath>(3,5)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </li>
                    <li
                      className={
                        "pt-2 " +
                        (jawabanTabelDuaA &&
                        jawabanTabelDuaB &&
                        jawabanTabelDuaC &&
                        jawabanTabelDuaD &&
                        jawabanTabelDuaE &&
                        jawabanTabelDuaF &&
                        jawabanTabelDuaG &&
                        jawabanTabelDuaH &&
                        jawabanTabelDuaI &&
                        jawabanTabelDuaJ &&
                        jawabanTabelDuaK &&
                        jawabanTabelDuaL &&
                        jawabanTabelDuaM &&
                        jawabanTabelDuaN &&
                        jawabanTabelDuaO &&
                        jawabanTabelDuaP &&
                        jawabanTabelDuaQ &&
                        jawabanTabelDuaR &&
                        jawabanTabelDuaS &&
                        jawabanTabelDuaT &&
                        jawabanTabelDuaU &&
                        jawabanTabelDuaV
                          ? ""
                          : "hidden")
                      }
                    >
                      <a className="font-bold">Langkah 3</a>, Menyajikan
                      titik-titik yang diperoleh pada tabel ke dalam koordinat
                      kartesius:
                    </li>
                    <li
                      className={
                        "pt-2 " +
                        (jawabanTabelDuaA &&
                        jawabanTabelDuaB &&
                        jawabanTabelDuaC &&
                        jawabanTabelDuaD &&
                        jawabanTabelDuaE &&
                        jawabanTabelDuaF &&
                        jawabanTabelDuaG &&
                        jawabanTabelDuaH &&
                        jawabanTabelDuaI &&
                        jawabanTabelDuaJ &&
                        jawabanTabelDuaK &&
                        jawabanTabelDuaL &&
                        jawabanTabelDuaM &&
                        jawabanTabelDuaN &&
                        jawabanTabelDuaO &&
                        jawabanTabelDuaP &&
                        jawabanTabelDuaQ &&
                        jawabanTabelDuaR &&
                        jawabanTabelDuaS &&
                        jawabanTabelDuaT &&
                        jawabanTabelDuaU &&
                        jawabanTabelDuaV
                          ? ""
                          : "hidden")
                      }
                    >
                      <iframe
                        className="border border-cyan-600 ml-16 "
                        scrolling="no"
                        title="mari-mencoba-3_b"
                        src="https://www.geogebra.org/material/iframe/id/uwjgcnas/width/1000/height/550/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false"
                        width="1000px"
                        height="550px"
                      >
                        {" "}
                      </iframe>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Soal 3 */}
            <li className="pt-4">
              <InlineMath math="f(x)=|2x-8|" />
              <ul className="pl-4 ">
                <li>
                  <a className="font-bold"> Penyelesaian: </a>
                  <ol className="list-decimal list-inside pl-4" start={3}>
                    <li className="pt-4">
                      <InlineMath math="f(x)=|2x-8|" />
                    </li>
                  </ol>
                  <ul className="list-inside pl-8">
                    <li className="pt-2">
                      <a className="font-bold">Langkah 1</a>, Menentukan
                      definisi dari fungsi nilai mutlak:
                    </li>
                    <li>
                      <ol className=" list-inside">
                        <li>
                          <div className="inline-block">
                            <div className="flex flex-row items-center">
                              Jadi,
                              <InlineMath math="\hspace{0.2cm} |2x-8| = \Biggm\lbrace" />
                              <span className="inline-block">
                                <div className="flex flex-col">
                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.c(1)"
                                      style={style3A}
                                      autoComplete="off"
                                      onChange={cekJawaban3A}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    , untuk
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.c(2)"
                                      style={style3B}
                                      autoComplete="off"
                                      onChange={cekJawaban3B}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    <InlineMath>\ge</InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.c(3)"
                                      style={style3C}
                                      autoComplete="off"
                                      onChange={cekJawaban3C}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                  </div>

                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.c(8)"
                                      style={style3D}
                                      autoComplete="off"
                                      onChange={cekJawaban3D}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    =
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.c(8)"
                                      style={style3E}
                                      autoComplete="off"
                                      onChange={cekJawaban3E}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    , untuk
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.c(9)"
                                      style={style3F}
                                      autoComplete="off"
                                      onChange={cekJawaban3F}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    <InlineMath math="\lt" />
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.c(10)"
                                      style={style3G}
                                      autoComplete="off"
                                      onChange={cekJawaban3G}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                    <li
                      className={
                        "pt-2 " +
                        (jawabanTigaA &&
                        jawabanTigaB &&
                        jawabanTigaC &&
                        jawabanTigaD &&
                        jawabanTigaE &&
                        jawabanTigaF &&
                        jawabanTigaG
                          ? ""
                          : "hidden")
                      }
                    >
                      Maka didapatkan <InlineMath>x \ge 4</InlineMath> dan{" "}
                      <InlineMath>x \lt 4</InlineMath>.
                    </li>
                    <li
                      className={
                        "py-2 " +
                        (jawabanTigaA &&
                        jawabanTigaB &&
                        jawabanTigaC &&
                        jawabanTigaD &&
                        jawabanTigaE &&
                        jawabanTigaF &&
                        jawabanTigaG
                          ? ""
                          : "hidden")
                      }
                    >
                      <a className="font-bold">Langkah 2</a>, Membuat tabel
                      berdasarkan titik bantu yang didapatkan dari definisi
                      nilai mutlak:
                    </li>
                    <li
                      className={
                        "py-4 " +
                        (jawabanTigaA &&
                        jawabanTigaB &&
                        jawabanTigaC &&
                        jawabanTigaD &&
                        jawabanTigaE &&
                        jawabanTigaF &&
                        jawabanTigaG
                          ? ""
                          : "hidden")
                      }
                    >
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
                                Untuk <InlineMath>x \lt 4</InlineMath>
                              </th>
                              <th
                                className="border border-black p-3 text-center "
                                colSpan="7"
                              >
                                Untuk <InlineMath>x \ge 4</InlineMath>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className=" bg-blue-200">
                              <td className="border border-black p-3 text-center ">
                                <InlineMath>x</InlineMath>
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(1)"
                                  autoComplete="off"
                                  style={styleTable3A}
                                  onChange={cekJawabanTabel3A}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(2)"
                                  autoComplete="off"
                                  style={styleTable3B}
                                  onChange={cekJawabanTabel3B}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(3)"
                                  autoComplete="off"
                                  style={styleTable3C}
                                  onChange={cekJawabanTabel3C}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(4)"
                                  autoComplete="off"
                                  style={styleTable3D}
                                  onChange={cekJawabanTabel3D}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(5)"
                                  autoComplete="off"
                                  style={styleTable3E}
                                  onChange={cekJawabanTabel3E}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(6)"
                                  autoComplete="off"
                                  style={styleTable3F}
                                  onChange={cekJawabanTabel3F}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(7)"
                                  autoComplete="off"
                                  style={styleTable3G}
                                  onChange={cekJawabanTabel3G}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(8)"
                                  autoComplete="off"
                                  style={styleTable3H}
                                  onChange={cekJawabanTabel3H}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(9)"
                                  autoComplete="off"
                                  style={styleTable3I}
                                  onChange={cekJawabanTabel3I}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(10)"
                                  autoComplete="off"
                                  style={styleTable3J}
                                  onChange={cekJawabanTabel3J}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(11)"
                                  autoComplete="off"
                                  style={styleTable3K}
                                  onChange={cekJawabanTabel3K}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-black p-3 text-center ">
                                <InlineMath>x=f(x)</InlineMath>
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(12)"
                                  autoComplete="off"
                                  style={styleTable3L}
                                  onChange={cekJawabanTabel3L}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(13)"
                                  autoComplete="off"
                                  style={styleTable3M}
                                  onChange={cekJawabanTabel3M}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(14)"
                                  autoComplete="off"
                                  style={styleTable3N}
                                  onChange={cekJawabanTabel3N}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(15)"
                                  autoComplete="off"
                                  style={styleTable3O}
                                  onChange={cekJawabanTabel3O}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(16)"
                                  autoComplete="off"
                                  style={styleTable3P}
                                  onChange={cekJawabanTabel3P}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(17)"
                                  autoComplete="off"
                                  style={styleTable3Q}
                                  onChange={cekJawabanTabel3Q}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(18)"
                                  autoComplete="off"
                                  style={styleTable3R}
                                  onChange={cekJawabanTabel3R}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(19)"
                                  autoComplete="off"
                                  style={styleTable3S}
                                  onChange={cekJawabanTabel3S}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(20)"
                                  autoComplete="off"
                                  style={styleTable3T}
                                  onChange={cekJawabanTabel3T}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(21)"
                                  autoComplete="off"
                                  style={styleTable3U}
                                  onChange={cekJawabanTabel3U}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                <input
                                  className=" rounded w-12 p-2 text-black outline-black bg-white"
                                  id="jawabanTabel1.c(22)"
                                  autoComplete="off"
                                  style={styleTable3V}
                                  onChange={cekJawabanTabel3V}
                                  placeholder=". . . . . . . ."
                                  type="text"
                                />
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                            </tr>
                            <tr className=" bg-blue-200">
                              <td className="border border-black p-3 text-center ">
                                <InlineMath>(x,y)</InlineMath>
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelTigaA && jawabanTabelTigaL ? (
                                  <label>
                                    <InlineMath>(-1,10)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelTigaB && jawabanTabelTigaM ? (
                                  <label>
                                    <InlineMath>(0,8)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelTigaC && jawabanTabelTigaN ? (
                                  <label>
                                    <InlineMath>(1,6)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelTigaD && jawabanTabelTigaO ? (
                                  <label>
                                    <InlineMath>(2,4)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelTigaE && jawabanTabelTigaP ? (
                                  <label>
                                    <InlineMath>(3,2)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelTigaF && jawabanTabelTigaQ ? (
                                  <label>
                                    <InlineMath>(4,0)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelTigaG && jawabanTabelTigaR ? (
                                  <label>
                                    <InlineMath>(5,2)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelTigaH && jawabanTabelTigaS ? (
                                  <label>
                                    <InlineMath>(6,4)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelTigaI && jawabanTabelTigaT ? (
                                  <label>
                                    <InlineMath>(7,6)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelTigaJ && jawabanTabelTigaU ? (
                                  <label>
                                    <InlineMath>(8,8)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                {jawabanTabelTigaK && jawabanTabelTigaV ? (
                                  <label>
                                    <InlineMath>(9,10)</InlineMath>
                                  </label>
                                ) : (
                                  <label>. . . . . .</label>
                                )}
                              </td>
                              <td className="border border-black p-3 text-center ">
                                dst
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </li>
                    <li
                      className={
                        "pt-2 " +
                        (jawabanTabelTigaA &&
                        jawabanTabelTigaB &&
                        jawabanTabelTigaC &&
                        jawabanTabelTigaD &&
                        jawabanTabelTigaE &&
                        jawabanTabelTigaF &&
                        jawabanTabelTigaG &&
                        jawabanTabelTigaH &&
                        jawabanTabelTigaI &&
                        jawabanTabelTigaJ &&
                        jawabanTabelTigaK &&
                        jawabanTabelTigaL &&
                        jawabanTabelTigaM &&
                        jawabanTabelTigaN &&
                        jawabanTabelTigaO &&
                        jawabanTabelTigaP &&
                        jawabanTabelTigaQ &&
                        jawabanTabelTigaR &&
                        jawabanTabelTigaS &&
                        jawabanTabelTigaT &&
                        jawabanTabelTigaU &&
                        jawabanTabelTigaV
                          ? ""
                          : "hidden")
                      }
                    >
                      <a className="font-bold">Langkah 3</a>, Menyajikan
                      titik-titik yang diperoleh pada tabel ke dalam koordinat
                      kartesius:
                    </li>
                    <li
                      className={
                        "pt-2 " +
                        (jawabanTabelTigaA &&
                        jawabanTabelTigaB &&
                        jawabanTabelTigaC &&
                        jawabanTabelTigaD &&
                        jawabanTabelTigaE &&
                        jawabanTabelTigaF &&
                        jawabanTabelTigaG &&
                        jawabanTabelTigaH &&
                        jawabanTabelTigaI &&
                        jawabanTabelTigaJ &&
                        jawabanTabelTigaK &&
                        jawabanTabelTigaL &&
                        jawabanTabelTigaM &&
                        jawabanTabelTigaN &&
                        jawabanTabelTigaO &&
                        jawabanTabelTigaP &&
                        jawabanTabelTigaQ &&
                        jawabanTabelTigaR &&
                        jawabanTabelTigaS &&
                        jawabanTabelTigaT &&
                        jawabanTabelTigaU &&
                        jawabanTabelTigaV
                          ? ""
                          : "hidden")
                      }
                    >
                      <iframe
                        className="border border-cyan-600 ml-16 "
                        scrolling="no"
                        title="mari-mencoba-3_c"
                        src="https://www.geogebra.org/material/iframe/id/c2rzq6kj/width/1000/height/550/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false"
                        width="1000px"
                        height="550px"
                      >
                        {" "}
                      </iframe>
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
