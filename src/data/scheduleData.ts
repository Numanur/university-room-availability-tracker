export const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday"] as const;

export const TIME_SLOTS = ["08:45-10:05", "10:05-11:25", "11:25-12:45", "13:15-14:35", "14:35-15:55", "15:55-17:15"] as const;

export type Day = (typeof DAYS)[number];
export type TimeSlot = (typeof TIME_SLOTS)[number];

export interface ClassInfo {
  course: string;
  teacher: string;
  batch: string;
}

export const ROOMS = [
  "DLD Lab 0018 (B104)",
  "Electric Lab 3210 (316)",
  "Electronic Lab 3200 (315)",
  "Phy Lab 6080 (601)",
  "Lab 5160 (509)",
  "Lab 5180 (511)",
  "Lab 5200 (513)",
  "AI Lab 5210 (514)",
  "Lab 5220 (515)",
  "Lab 6150 (612)",
  "Lab 6180 (613)",
  "4020 (407)",
  "5080 (501)",
  "5070 (502)",
  "5060 (503)",
  "5020 (507)",
  "5030 (508)",
  "5190 (512)",
  "5230 (516)",
  "6020 (607)",
  "6030 (608)",
  "6170 (614)",
  "0017 (B103)",
  "0020 (B106/1)",
  "0022 (B106/2)",
  "0023 (B108)",
  "0024 (B109)",
  "0006",
  "A004",
  "0005",
  "3170 (312)",
  "3180 (313)"
] as const;

export type RoomName = (typeof ROOMS)[number];

export const schedule: Record<
  Day,
  Record<TimeSlot, Partial<Record<RoomName, ClassInfo>>>
> = {
  "Monday": {
    "08:45-10:05": {
      "DLD Lab 0018 (B104)": {
        "course": "CSE0613204",
        "teacher": "SZI",
        "batch": "65 C"
      },
      "Electronic Lab 3200 (315)": {
        "course": "EEE0713202",
        "teacher": "SU",
        "batch": "65 B"
      },
      "Phy Lab 6080 (601)": {
        "course": "PHY0533102",
        "teacher": "JHB",
        "batch": "67 B"
      },
      "Lab 5160 (509)": {
        "course": "ENG0232101",
        "teacher": "ST",
        "batch": "68 C"
      },
      "Lab 5180 (511)": {
        "course": "CSE0613206",
        "teacher": "MTZ",
        "batch": "63 B"
      },
      "Lab 5200 (513)": {
        "course": "CSE0612401",
        "teacher": "AZU",
        "batch": "60 C"
      },
      "AI Lab 5210 (514)": {
        "course": "CSE0613202",
        "teacher": "SBR",
        "batch": "65 A"
      },
      "Lab 5220 (515)": {
        "course": "ENG0232102",
        "teacher": "JFR",
        "batch": "68 D"
      },
      "Lab 6150 (612)": {
        "course": "CSE0613301",
        "teacher": "ALD",
        "batch": "62 A"
      },
      "Lab 6180 (613)": {
        "course": "CSE0612405",
        "teacher": "NSS",
        "batch": "60 D"
      },
      "4020 (407)": {
        "course": "CSE0611301",
        "teacher": "KTK",
        "batch": "61 C"
      },
      "5070 (502)": {
        "course": "CSE0613301",
        "teacher": "HAR",
        "batch": "62 D"
      },
      "5060 (503)": {
        "course": "MAT0541102",
        "teacher": "AMU",
        "batch": "66 A"
      },
      "5020 (507)": {
        "course": "CSE0611101",
        "teacher": "IZT",
        "batch": "64 E"
      },
      "5030 (508)": {
        "course": "PHY0533101",
        "teacher": "KZN",
        "batch": "67 F"
      },
      "5190 (512)": {
        "course": "CSE0611101",
        "teacher": "MRA",
        "batch": "64 A"
      },
      "5230 (516)": {
        "course": "CSE0611101",
        "teacher": "MTQ",
        "batch": "64 B"
      },
      "6020 (607)": {
        "course": "CSE0611303",
        "teacher": "PRB",
        "batch": "61 A"
      },
      "6030 (608)": {
        "course": "CSE0613205",
        "teacher": "SRR",
        "batch": "63 C"
      },
      "6170 (614)": {
        "course": "MIS0611403",
        "teacher": "SID",
        "batch": "60 B"
      },
      "0017 (B103)": {
        "course": "CSE0613309",
        "teacher": "MAK",
        "batch": "61 B"
      },
      "0020 (B106/1)": {
        "course": "CSE0613103",
        "teacher": "NTM",
        "batch": "66 D"
      },
      "0022 (B106/2)": {
        "course": "CSE0613403",
        "teacher": "PSA",
        "batch": "60 A"
      },
      "0023 (B108)": {
        "course": "CSE0611201",
        "teacher": "HKM",
        "batch": "67 C"
      },
      "0024 (B109)": {
        "course": "MAT0541202",
        "teacher": "JNJ",
        "batch": "64 D"
      },
      "A004": {
        "course": "GED0222101",
        "teacher": "MRN",
        "batch": "67 A"
      }
    },
    "10:05-11:25": {
      "Lab 5160 (509)": {
        "course": "CSE0613104",
        "teacher": "MII",
        "batch": "66 A"
      },
      "Lab 5200 (513)": {
        "course": "CSE0613206",
        "teacher": "NJN",
        "batch": "63 A"
      },
      "Lab 6150 (612)": {
        "course": "CSE0612306",
        "teacher": "SIS",
        "batch": "61 C"
      },
      "Lab 6180 (613)": {
        "course": "CSE0613302",
        "teacher": "HAR",
        "batch": "62 D"
      },
      "4020 (407)": {
        "course": "CSE0613301",
        "teacher": "MAT",
        "batch": "62 B"
      },
      "5070 (502)": {
        "course": "ECO0311101",
        "teacher": "TDL",
        "batch": "67 C"
      },
      "5060 (503)": {
        "course": "CSE0613309",
        "teacher": "MAK",
        "batch": "61 A"
      },
      "5020 (507)": {
        "course": "MIS0611403",
        "teacher": "SID",
        "batch": "60 C"
      },
      "5030 (508)": {
        "course": "MAT0541102",
        "teacher": "SHS",
        "batch": "66 C"
      },
      "5190 (512)": {
        "course": "CSE0612405",
        "teacher": "NSS",
        "batch": "60 A"
      },
      "5230 (516)": {
        "course": "CSE0611101",
        "teacher": "MTQ",
        "batch": "64 C"
      },
      "6020 (607)": {
        "course": "CSE0611201",
        "teacher": "HKM",
        "batch": "67 A"
      },
      "6030 (608)": {
        "course": "MIS0611403",
        "teacher": "FAS",
        "batch": "60 H"
      },
      "6170 (614)": {
        "course": "CSE0612401",
        "teacher": "AZU",
        "batch": "60 D"
      },
      "0017 (B103)": {
        "course": "CSE0611101",
        "teacher": "IZT",
        "batch": "64 D"
      },
      "0020 (B106/1)": {
        "course": "CSE0613207",
        "teacher": "HHR",
        "batch": "64 E"
      },
      "0022 (B106/2)": {
        "course": "BUS0411301",
        "teacher": "WH",
        "batch": "60 F"
      },
      "0023 (B108)": {
        "course": "CSE0611301",
        "teacher": "KTK",
        "batch": "61 D"
      },
      "0024 (B109)": {
        "course": "PHY0533101",
        "teacher": "MTA",
        "batch": "67 E"
      },
      "A004": {
        "course": "GED0413541",
        "teacher": "RN",
        "batch": "64 A/64 B"
      }
    },
    "11:25-12:45": {
      "DLD Lab 0018 (B104)": {
        "course": "CSE0613204",
        "teacher": "BTD",
        "batch": "65 D"
      },
      "Lab 5180 (511)": {
        "course": "CSE0613206",
        "teacher": "SRR",
        "batch": "63 C"
      },
      "AI Lab 5210 (514)": {
        "course": "CSE0613202",
        "teacher": "ZNT",
        "batch": "65 C"
      },
      "Lab 5220 (515)": {
        "course": "CSE0613311",
        "teacher": "DMH",
        "batch": "62 B"
      },
      "4020 (407)": {
        "course": "MAT0541101",
        "teacher": "AD",
        "batch": "68 C"
      },
      "5070 (502)": {
        "course": "CSE0613207",
        "teacher": "MRA",
        "batch": "64 D"
      },
      "5060 (503)": {
        "course": "CSE0611303",
        "teacher": "PRB",
        "batch": "61 B"
      },
      "5020 (507)": {
        "course": "CSE0613309",
        "teacher": "NHE",
        "batch": "61 D"
      },
      "5030 (508)": {
        "course": "CSE0612305",
        "teacher": "TZW",
        "batch": "61 A"
      },
      "5190 (512)": {
        "course": "CSE0612401",
        "teacher": "AZU",
        "batch": "60 E"
      },
      "5230 (516)": {
        "course": "CSE0613101",
        "teacher": "MMH",
        "batch": "68 D"
      },
      "6020 (607)": {
        "course": "PHY0533101",
        "teacher": "JHB",
        "batch": "67 D"
      },
      "6030 (608)": {
        "course": "BUS0411301",
        "teacher": "RKB",
        "batch": "60 C"
      },
      "6170 (614)": {
        "course": "CSE0613403",
        "teacher": "SNS",
        "batch": "60 F"
      },
      "0017 (B103)": {
        "course": "BUS0411301",
        "teacher": "MHA",
        "batch": "62 A"
      },
      "0020 (B106/1)": {
        "course": "EEE0713101",
        "teacher": "ASE",
        "batch": "66 D"
      },
      "0022 (B106/2)": {
        "course": "CSE00613209",
        "teacher": "SSK",
        "batch": "63 B"
      },
      "0023 (B108)": {
        "course": "CSE0612405",
        "teacher": "AIA",
        "batch": "60 G"
      },
      "0024 (B109)": {
        "course": "CSE0612401",
        "teacher": "DMA",
        "batch": "60 B"
      },
      "A004": {
        "course": "GED0222101",
        "teacher": "RIM",
        "batch": "67 F/67 G"
      }
    },
    "13:15-14:35": {
      "Lab 5160 (509)": {
        "course": "CSE0613310",
        "teacher": "MAK",
        "batch": "61 B"
      },
      "Lab 5200 (513)": {
        "course": "CSE0613207",
        "teacher": "SNA",
        "batch": "64 C"
      },
      "Lab 5220 (515)": {
        "course": "CSE0613208",
        "teacher": "HHR",
        "batch": "64 E"
      },
      "Lab 6150 (612)": {
        "course": "CSE0613310",
        "teacher": "MIF",
        "batch": "61 F"
      },
      "Lab 6180 (613)": {
        "course": "CSE0612306",
        "teacher": "SIS",
        "batch": "61 D"
      },
      "4020 (407)": {
        "course": "BUS0411301",
        "teacher": "MHA",
        "batch": "60 H"
      },
      "5080 (501)": {
        "course": "MAT0541102",
        "teacher": "SHS",
        "batch": "66 C"
      },
      "5070 (502)": {
        "course": "MIS0611403",
        "teacher": "SID",
        "batch": "60 F"
      },
      "5060 (503)": {
        "course": "CSE0613311",
        "teacher": "DMH",
        "batch": "62 C"
      },
      "5020 (507)": {
        "course": "CSE0611201",
        "teacher": "MRR",
        "batch": "67 E"
      },
      "5030 (508)": {
        "course": "CSE0613403",
        "teacher": "SNS",
        "batch": "60 E"
      },
      "5190 (512)": {
        "course": "CSE0611201",
        "teacher": "FFK",
        "batch": "67 D"
      },
      "5230 (516)": {
        "course": "BUS0411301",
        "teacher": "SMF",
        "batch": "60 B"
      },
      "6020 (607)": {
        "course": "MAT0541201",
        "teacher": "AMU",
        "batch": "63 A"
      },
      "6030 (608)": {
        "course": "CSE0612401",
        "teacher": "DMA",
        "batch": "60 A"
      },
      "6170 (614)": {
        "course": "CSE0611303",
        "teacher": "PRB",
        "batch": "61 C"
      },
      "0017 (B103)": {
        "course": "CSE0613201",
        "teacher": "HRA",
        "batch": "65 A"
      },
      "0020 (B106/1)": {
        "course": "MIS0611403",
        "teacher": "FAS",
        "batch": "60 G"
      },
      "0022 (B106/2)": {
        "course": "CSE0612405",
        "teacher": "NSS",
        "batch": "60 D"
      },
      "0023 (B108)": {
        "course": "PHY0533101",
        "teacher": "KZN",
        "batch": "67 A"
      },
      "0024 (B109)": {
        "course": "ECO0311101",
        "teacher": "TDL",
        "batch": "67 F"
      },
      "0006": {
        "course": "GED0222101",
        "teacher": "MRN",
        "batch": "67 B/67 C"
      }
    },
    "14:35-15:55": {
      "Electronic Lab 3200 (315)": {
        "course": "EEE0713202",
        "teacher": "MKS",
        "batch": "65 D"
      },
      "Phy Lab 6080 (601)": {
        "course": "PHY0533102",
        "teacher": "JHB",
        "batch": "67 G"
      },
      "Lab 5180 (511)": {
        "course": "CSE0612401",
        "teacher": "DMA",
        "batch": "60 F"
      },
      "Lab 5200 (513)": {
        "course": "CSE0613210",
        "teacher": "SNA",
        "batch": "63 A"
      },
      "AI Lab 5210 (514)": {
        "course": "CSE0613301",
        "teacher": "HAR",
        "batch": "62 C"
      },
      "4020 (407)": {
        "course": "CSE0611301",
        "teacher": "KTK",
        "batch": "61 A"
      },
      "5080 (501)": {
        "course": "MAT0541102",
        "teacher": "AD",
        "batch": "66 D"
      },
      "5070 (502)": {
        "course": "ECO0311101",
        "teacher": "TDL",
        "batch": "67 B"
      },
      "5060 (503)": {
        "course": "CSE0613103",
        "teacher": "MII",
        "batch": "66 A"
      },
      "5020 (507)": {
        "course": "CSE0613103",
        "teacher": "IZT",
        "batch": "66 C"
      },
      "5030 (508)": {
        "course": "CSE0613205",
        "teacher": "AIA",
        "batch": "63 B"
      },
      "5190 (512)": {
        "course": "CSE0613403",
        "teacher": "SNS",
        "batch": "60 H"
      },
      "5230 (516)": {
        "course": "BUS0411301",
        "teacher": "SMF",
        "batch": "60 A"
      },
      "6020 (607)": {
        "course": "CSE00613209",
        "teacher": "TBM",
        "batch": "63 C"
      },
      "6030 (608)": {
        "course": "CSE0612405",
        "teacher": "MNR",
        "batch": "60 E"
      },
      "6170 (614)": {
        "course": "CSE0611201",
        "teacher": "FFK",
        "batch": "67 F"
      },
      "0017 (B103)": {
        "course": "EEE0713201",
        "teacher": "TCP",
        "batch": "65 A"
      },
      "0020 (B106/1)": {
        "course": "CSE0613403",
        "teacher": "PSA",
        "batch": "60 D"
      },
      "0022 (B106/2)": {
        "course": "CSE0612401",
        "teacher": "HKM",
        "batch": "60 G"
      },
      "0006": {
        "course": "GED0222101",
        "teacher": "SAB",
        "batch": "67 D/67 E"
      }
    },
    "15:55-17:15": {
      "4020 (407)": {
        "course": "BUS0411301",
        "teacher": "WH",
        "batch": "60 G"
      },
      "5060 (503)": {
        "course": "ECO0311101",
        "teacher": "TDL",
        "batch": "67 D"
      },
      "5030 (508)": {
        "course": "CSE0611303",
        "teacher": "MNR",
        "batch": "61 D"
      },
      "6030 (608)": {
        "course": "CSE0613309",
        "teacher": "MIF",
        "batch": "61 F"
      }
    }
  },
  "Tuesday": {
    "08:45-10:05": {
      "DLD Lab 0018 (B104)": {
        "course": "CSE0613203",
        "teacher": "SAD",
        "batch": "65 B"
      },
      "Electric Lab 3210 (316)": {
        "course": "EEE0713102",
        "teacher": "ABS",
        "batch": "66 C"
      },
      "Phy Lab 6080 (601)": {
        "course": "PHY0533102",
        "teacher": "KZN",
        "batch": "67 F"
      },
      "Lab 5160 (509)": {
        "course": "CSE0613102",
        "teacher": "DMO",
        "batch": "68 B"
      },
      "Lab 5180 (511)": {
        "course": "CSE0613102",
        "teacher": "MMA",
        "batch": "68 C"
      },
      "Lab 5200 (513)": {
        "course": "CSE0613301",
        "teacher": "ALD",
        "batch": "62 A"
      },
      "AI Lab 5210 (514)": {
        "course": "CSE0613101",
        "teacher": "DNS",
        "batch": "68 A"
      },
      "Lab 5220 (515)": {
        "course": "CSE0613102",
        "teacher": "MMH",
        "batch": "68 D"
      },
      "Lab 6150 (612)": {
        "course": "CSE0613302",
        "teacher": "HAR",
        "batch": "62 C"
      },
      "Lab 6180 (613)": {
        "course": "CSE0613102",
        "teacher": "MAK",
        "batch": "68 E"
      },
      "4020 (407)": {
        "course": "MAT0541401",
        "teacher": "ASM",
        "batch": "59 B"
      },
      "5080 (501)": {
        "course": "CSE0611201",
        "teacher": "HKM",
        "batch": "67 C"
      },
      "5070 (502)": {
        "course": "ECO0311101",
        "teacher": "TDL",
        "batch": "67 E"
      },
      "5060 (503)": {
        "course": "EEE0713201",
        "teacher": "SZI",
        "batch": "65 C"
      },
      "5020 (507)": {
        "course": "CSE0613303",
        "teacher": "DSC",
        "batch": "62 B"
      },
      "5030 (508)": {
        "course": "CSE0611301",
        "teacher": "MRR",
        "batch": "61 E"
      },
      "5190 (512)": {
        "course": "MAT0541401",
        "teacher": "MSY",
        "batch": "59 A"
      },
      "5230 (516)": {
        "course": "CSE0612305",
        "teacher": "KMI",
        "batch": "61 F"
      },
      "6020 (607)": {
        "course": "MAT0541201",
        "teacher": "SHS",
        "batch": "63 C"
      },
      "6030 (608)": {
        "course": "CSE0613403",
        "teacher": "PSA",
        "batch": "60 D"
      },
      "6170 (614)": {
        "course": "EEE0713101",
        "teacher": "ASE",
        "batch": "66 D"
      },
      "0017 (B103)": {
        "course": "MIS0611403",
        "teacher": "SID",
        "batch": "60 B"
      },
      "0020 (B106/1)": {
        "course": "CSE0613309",
        "teacher": "NHE",
        "batch": "61 C"
      },
      "0022 (B106/2)": {
        "course": "CSE0611303",
        "teacher": "MNR",
        "batch": "61 D"
      },
      "0023 (B108)": {
        "course": "MAT0541202",
        "teacher": "TBM",
        "batch": "64 B"
      },
      "0024 (B109)": {
        "course": "EEE0713101",
        "teacher": "MHT",
        "batch": "66 A"
      },
      "A004": {
        "course": "GED0413541",
        "teacher": "RN",
        "batch": "64 C"
      }
    },
    "10:05-11:25": {
      "DLD Lab 0018 (B104)": {
        "course": "CSE0613203",
        "teacher": "SZI",
        "batch": "65 C"
      },
      "Lab 5200 (513)": {
        "course": "CSE0613104",
        "teacher": "NTM",
        "batch": "66 D"
      },
      "AI Lab 5210 (514)": {
        "course": "CSE0611301",
        "teacher": "MRR",
        "batch": "61 F"
      },
      "4020 (407)": {
        "course": "CSE0612305",
        "teacher": "TZW",
        "batch": "61 A"
      },
      "5070 (502)": {
        "course": "CSE0613303",
        "teacher": "DSC",
        "batch": "62 A"
      },
      "5060 (503)": {
        "course": "CSE0613309",
        "teacher": "NHE",
        "batch": "61 C"
      },
      "5020 (507)": {
        "course": "CSE0613409",
        "teacher": "MMF",
        "batch": "59 A"
      },
      "5030 (508)": {
        "course": "CSE0613207",
        "teacher": "RHA",
        "batch": "64 B"
      },
      "5190 (512)": {
        "course": "CSE00613209",
        "teacher": "TBM",
        "batch": "63 C"
      },
      "5230 (516)": {
        "course": "CSE0612401",
        "teacher": "DMA",
        "batch": "60 B"
      },
      "6020 (607)": {
        "course": "PHY0533101",
        "teacher": "JHB",
        "batch": "67 C"
      },
      "6030 (608)": {
        "course": "CSE0613311",
        "teacher": "DMH",
        "batch": "62 B"
      },
      "6170 (614)": {
        "course": "CSE0613207",
        "teacher": "SNA",
        "batch": "64 C"
      },
      "0017 (B103)": {
        "course": "CSE0613303",
        "teacher": "TSL",
        "batch": "62 D"
      },
      "0020 (B106/1)": {
        "course": "CSE0613403",
        "teacher": "PSA",
        "batch": "60 A"
      },
      "0022 (B106/2)": {
        "course": "CSE0613203",
        "teacher": "SAD",
        "batch": "65 B"
      },
      "0023 (B108)": {
        "course": "CSE0613403",
        "teacher": "SNS",
        "batch": "60 F"
      },
      "0024 (B109)": {
        "course": "CSE0611303",
        "teacher": "PRB",
        "batch": "61 B"
      },
      "0006": {
        "course": "GED0223101",
        "teacher": "AWK",
        "batch": "66 A/66 B"
      }
    },
    "11:25-12:45": {
      "DLD Lab 0018 (B104)": {
        "course": "CSE0613203",
        "teacher": "RHB",
        "batch": "65 A"
      },
      "Phy Lab 6080 (601)": {
        "course": "PHY0533102",
        "teacher": "MTA",
        "batch": "67 E"
      },
      "Lab 5160 (509)": {
        "course": "CSE0613208",
        "teacher": "RHA",
        "batch": "64 B"
      },
      "Lab 5180 (511)": {
        "course": "CSE0613103",
        "teacher": "MTR",
        "batch": "66 B"
      },
      "AI Lab 5210 (514)": {
        "course": "CSE0613208",
        "teacher": "MRA",
        "batch": "64 D"
      },
      "Lab 5220 (515)": {
        "course": "CSE0613312",
        "teacher": "NAD",
        "batch": "62 D"
      },
      "Lab 6150 (612)": {
        "course": "ENG0232102",
        "teacher": "SZC",
        "batch": "68 B"
      },
      "Lab 6180 (613)": {
        "course": "ENG0232102",
        "teacher": "RIR",
        "batch": "68 E"
      },
      "4020 (407)": {
        "course": "CSE0611301",
        "teacher": "KTK",
        "batch": "61 B"
      },
      "5070 (502)": {
        "course": "PHY0533101",
        "teacher": "JHB",
        "batch": "67 C"
      },
      "5060 (503)": {
        "course": "CSE0613311",
        "teacher": "DMO",
        "batch": "62 A"
      },
      "5020 (507)": {
        "course": "CSE0612405",
        "teacher": "NSS",
        "batch": "60 C"
      },
      "5030 (508)": {
        "course": "CSE0611303",
        "teacher": "MNR",
        "batch": "61 E"
      },
      "5190 (512)": {
        "course": "MAT0541101",
        "teacher": "AMU",
        "batch": "68 A"
      },
      "5230 (516)": {
        "course": "CSE0612305",
        "teacher": "SIS",
        "batch": "61 D"
      },
      "6020 (607)": {
        "course": "CSE0612401",
        "teacher": "DMA",
        "batch": "60 F"
      },
      "6030 (608)": {
        "course": "MAT0541101",
        "teacher": "AD",
        "batch": "68 C"
      },
      "6170 (614)": {
        "course": "EEE0713101",
        "teacher": "MHT",
        "batch": "66 C"
      },
      "0017 (B103)": {
        "course": "CSE0613103",
        "teacher": "MII",
        "batch": "66 A"
      },
      "0020 (B106/1)": {
        "course": "CSE0613409",
        "teacher": "MMF",
        "batch": "59 B"
      },
      "0022 (B106/2)": {
        "course": "MAT0541202",
        "teacher": "HRA",
        "batch": "64 C"
      },
      "0023 (B108)": {
        "course": "BUS0411301",
        "teacher": "RKB",
        "batch": "60 D"
      },
      "0024 (B109)": {
        "course": "ECO0311101",
        "teacher": "TDL",
        "batch": "67 F"
      }
    },
    "13:15-14:35": {
      "DLD Lab 0018 (B104)": {
        "course": "CSE0613203",
        "teacher": "RHB",
        "batch": "65 A"
      },
      "Lab 5180 (511)": {
        "course": "CSE0612306",
        "teacher": "KMI",
        "batch": "61 F"
      },
      "Lab 5200 (513)": {
        "course": "CSE0613310",
        "teacher": "NHE",
        "batch": "61 D"
      },
      "4020 (407)": {
        "course": "CSE0613311",
        "teacher": "DMH",
        "batch": "62 C"
      },
      "5080 (501)": {
        "course": "CSE0611301",
        "teacher": "KTK",
        "batch": "61 A"
      },
      "5070 (502)": {
        "course": "MIS0611403",
        "teacher": "SID",
        "batch": "60 D"
      },
      "5060 (503)": {
        "course": "CSE0613301",
        "teacher": "MAT",
        "batch": "62 B"
      },
      "5020 (507)": {
        "course": "CSE0612405",
        "teacher": "MNR",
        "batch": "60 F"
      },
      "5030 (508)": {
        "course": "EEE0713201",
        "teacher": "MKS",
        "batch": "65 D"
      },
      "5190 (512)": {
        "course": "MAT0541202",
        "teacher": "HRA",
        "batch": "64 C"
      },
      "5230 (516)": {
        "course": "MAT0541102",
        "teacher": "AMU",
        "batch": "66 B"
      },
      "6020 (607)": {
        "course": "MAT0541101",
        "teacher": "AD",
        "batch": "68 D"
      },
      "6030 (608)": {
        "course": "ENG0232101",
        "teacher": "ST",
        "batch": "68 C"
      },
      "6170 (614)": {
        "course": "MAT0541202",
        "teacher": "JNJ",
        "batch": "64 E"
      },
      "0017 (B103)": {
        "course": "BUS0411301",
        "teacher": "RKB",
        "batch": "60 C"
      },
      "0020 (B106/1)": {
        "course": "CSE0611303",
        "teacher": "PRB",
        "batch": "61 C"
      },
      "0022 (B106/2)": {
        "course": "CSE00613209",
        "teacher": "SSK",
        "batch": "63 B"
      },
      "0023 (B108)": {
        "course": "EEE0713201",
        "teacher": "SU",
        "batch": "65 B"
      },
      "0024 (B109)": {
        "course": "CSE0612405",
        "teacher": "NSS",
        "batch": "60 B"
      },
      "0006": {
        "course": "GED0223101",
        "teacher": "AWK",
        "batch": "66 C/66 D"
      },
      "3180 (313)": {
        "course": "MIS0611403",
        "teacher": "MIF",
        "batch": "60 A"
      }
    },
    "14:35-15:55": {
      "Electric Lab 3210 (316)": {
        "course": "EEE0713102",
        "teacher": "ABS",
        "batch": "66 B"
      },
      "Lab 5160 (509)": {
        "course": "CSE0613207",
        "teacher": "MRA",
        "batch": "64 D"
      },
      "AI Lab 5210 (514)": {
        "course": "CSE0613309",
        "teacher": "MIF",
        "batch": "61 E"
      },
      "Lab 5220 (515)": {
        "course": "ENG0232102",
        "teacher": "RIR",
        "batch": "68 A"
      },
      "Lab 6150 (612)": {
        "course": "CSE0612401",
        "teacher": "DMA",
        "batch": "60 A"
      },
      "Lab 6180 (613)": {
        "course": "CSE0613202",
        "teacher": "HRA",
        "batch": "65 D"
      },
      "4020 (407)": {
        "course": "CSE0612405",
        "teacher": "MNR",
        "batch": "60 F"
      },
      "5080 (501)": {
        "course": "CSE0612401",
        "teacher": "AZU",
        "batch": "60 C"
      },
      "5070 (502)": {
        "course": "CSE0611303",
        "teacher": "PRB",
        "batch": "61 A"
      },
      "5060 (503)": {
        "course": "ENG0232101",
        "teacher": "JFR",
        "batch": "68 D"
      },
      "5020 (507)": {
        "course": "CSE0611101",
        "teacher": "IZT",
        "batch": "64 E"
      },
      "5030 (508)": {
        "course": "MAT0541201",
        "teacher": "SHS",
        "batch": "63 B"
      },
      "5190 (512)": {
        "course": "BUS0411301",
        "teacher": "MHA",
        "batch": "62 B"
      },
      "5230 (516)": {
        "course": "CSE0612305",
        "teacher": "TZW",
        "batch": "61 B"
      },
      "6020 (607)": {
        "course": "CSE0613101",
        "teacher": "FFK",
        "batch": "68 E"
      },
      "6030 (608)": {
        "course": "ENG0232101",
        "teacher": "SZC",
        "batch": "68 B"
      },
      "6170 (614)": {
        "course": "PHY0533101",
        "teacher": "MTA",
        "batch": "67 E"
      },
      "0017 (B103)": {
        "course": "CSE0612305",
        "teacher": "SIS",
        "batch": "61 C"
      },
      "0020 (B106/1)": {
        "course": "CSE0613403",
        "teacher": "PSA",
        "batch": "60 B"
      },
      "0022 (B106/2)": {
        "course": "MAT0541102",
        "teacher": "AD",
        "batch": "66 D"
      },
      "0023 (B108)": {
        "course": "EEE0713201",
        "teacher": "TCP",
        "batch": "65 A"
      },
      "0024 (B109)": {
        "course": "CSE0613311",
        "teacher": "NAD",
        "batch": "62 D"
      }
    },
    "15:55-17:15": {
      "0006": {
        "course": "GED0413541",
        "teacher": "TAF",
        "batch": "64 D/64 E"
      }
    }
  },
  "Wednesday": {
    "08:45-10:05": {
      "Electronic Lab 3200 (315)": {
        "course": "EEE0713202",
        "teacher": "TCP",
        "batch": "65 A"
      },
      "Phy Lab 6080 (601)": {
        "course": "PHY0533102",
        "teacher": "JHB",
        "batch": "67 C"
      },
      "Lab 5160 (509)": {
        "course": "CSE0613101",
        "teacher": "DNS",
        "batch": "68 A"
      },
      "Lab 5180 (511)": {
        "course": "CSE0613311",
        "teacher": "DMO",
        "batch": "62 A"
      },
      "Lab 5200 (513)": {
        "course": "CSE0613301",
        "teacher": "HAR",
        "batch": "62 D"
      },
      "AI Lab 5210 (514)": {
        "course": "CSE0613309",
        "teacher": "MIF",
        "batch": "61 E"
      },
      "Lab 5220 (515)": {
        "course": "CSE0613310",
        "teacher": "NHE",
        "batch": "61 C"
      },
      "Lab 6150 (612)": {
        "course": "CSE0613201",
        "teacher": "HRA",
        "batch": "65 D"
      },
      "Lab 6180 (613)": {
        "course": "CSE0611201",
        "teacher": "FFK",
        "batch": "67 D"
      },
      "5080 (501)": {
        "course": "MAT0541401",
        "teacher": "MSY",
        "batch": "59 A"
      },
      "5070 (502)": {
        "course": "CSE0613101",
        "teacher": "MMA",
        "batch": "68 C"
      },
      "5060 (503)": {
        "course": "MAT0541101",
        "teacher": "ATB",
        "batch": "68 E"
      },
      "5020 (507)": {
        "course": "MAT0541102",
        "teacher": "AMU",
        "batch": "66 B"
      },
      "5030 (508)": {
        "course": "ECO0311101",
        "teacher": "TDL",
        "batch": "67 E"
      },
      "5190 (512)": {
        "course": "EEE0713201",
        "teacher": "SZI",
        "batch": "65 C"
      },
      "5230 (516)": {
        "course": "CSE0611201",
        "teacher": "HKM",
        "batch": "67 A"
      },
      "6020 (607)": {
        "course": "CSE0611301",
        "teacher": "KTK",
        "batch": "61 D"
      },
      "6030 (608)": {
        "course": "CSE0613303",
        "teacher": "AZU",
        "batch": "62 C"
      },
      "6170 (614)": {
        "course": "MAT0541101",
        "teacher": "AD",
        "batch": "68 D"
      },
      "0017 (B103)": {
        "course": "CSE0612401",
        "teacher": "MSI",
        "batch": "60 H"
      },
      "0020 (B106/1)": {
        "course": "CSE0611101",
        "teacher": "MRA",
        "batch": "64 A"
      },
      "0022 (B106/2)": {
        "course": "BUS0411301",
        "teacher": "MHA",
        "batch": "62 B"
      },
      "0024 (B109)": {
        "course": "MAT0541401",
        "teacher": "ASM",
        "batch": "59 B"
      },
      "0005": {
        "course": "GED0222101",
        "teacher": "RIM",
        "batch": "67 F/67 G"
      }
    },
    "10:05-11:25": {
      "Lab 5160 (509)": {
        "course": "CSE0613101",
        "teacher": "DMO",
        "batch": "68 B"
      },
      "Lab 5180 (511)": {
        "course": "CSE0613302",
        "teacher": "MAT",
        "batch": "62 B"
      },
      "Lab 5200 (513)": {
        "course": "CSE0611201",
        "teacher": "FFK",
        "batch": "67 F"
      },
      "AI Lab 5210 (514)": {
        "course": "CSE0613302",
        "teacher": "ALD",
        "batch": "62 A"
      },
      "Lab 6150 (612)": {
        "course": "CSE0612306",
        "teacher": "TZW",
        "batch": "61 B"
      },
      "Lab 6180 (613)": {
        "course": "CSE0611201",
        "teacher": "HKM",
        "batch": "67 B"
      },
      "4020 (407)": {
        "course": "MAT0541202",
        "teacher": "NAD",
        "batch": "64 A"
      },
      "5070 (502)": {
        "course": "CSE0613101",
        "teacher": "MMA",
        "batch": "68 C"
      },
      "5060 (503)": {
        "course": "CSE0613203",
        "teacher": "BTD",
        "batch": "65 D"
      },
      "5020 (507)": {
        "course": "CSE0612305",
        "teacher": "KMI",
        "batch": "61 E"
      },
      "5030 (508)": {
        "course": "CSE0613403",
        "teacher": "SNS",
        "batch": "60 G"
      },
      "5190 (512)": {
        "course": "CSE0613205",
        "teacher": "AIA",
        "batch": "63 A"
      },
      "5230 (516)": {
        "course": "ENG0232101",
        "teacher": "RIR",
        "batch": "68 E"
      },
      "6020 (607)": {
        "course": "MAT0541202",
        "teacher": "TBM",
        "batch": "64 B"
      },
      "6030 (608)": {
        "course": "CSE0613201",
        "teacher": "ZNT",
        "batch": "65 C"
      },
      "6170 (614)": {
        "course": "CSE0613409",
        "teacher": "MMF",
        "batch": "59 B"
      },
      "0017 (B103)": {
        "course": "BUS0411301",
        "teacher": "MHA",
        "batch": "60 H"
      },
      "0020 (B106/1)": {
        "course": "CSE0612405",
        "teacher": "MNR",
        "batch": "60 E"
      },
      "0022 (B106/2)": {
        "course": "EEE0713101",
        "teacher": "ABS",
        "batch": "66 B"
      },
      "0024 (B109)": {
        "course": "EEE0713201",
        "teacher": "SU",
        "batch": "65 B"
      },
      "0006": {
        "course": "GED0222101",
        "teacher": "SAB",
        "batch": "67 D/67 E"
      }
    },
    "11:25-12:45": {
      "Electronic Lab 3200 (315)": {
        "course": "EEE0713202",
        "teacher": "SZI",
        "batch": "65 C"
      },
      "Phy Lab 6080 (601)": {
        "course": "PHY0533102",
        "teacher": "MTA",
        "batch": "67 D"
      },
      "Lab 5160 (509)": {
        "course": "CSE0613104",
        "teacher": "MTR",
        "batch": "66 B"
      },
      "Lab 5200 (513)": {
        "course": "CSE0613101",
        "teacher": "DMO",
        "batch": "68 B"
      },
      "Lab 5220 (515)": {
        "course": "CSE0613201",
        "teacher": "ZNT",
        "batch": "65 B"
      },
      "Lab 6180 (613)": {
        "course": "ENG0232102",
        "teacher": "ST",
        "batch": "68 C"
      },
      "4020 (407)": {
        "course": "MIS0611403",
        "teacher": "SAK",
        "batch": "60 E"
      },
      "5070 (502)": {
        "course": "CSE0613301",
        "teacher": "HAR",
        "batch": "62 C"
      },
      "5060 (503)": {
        "course": "ENG0232101",
        "teacher": "JFR",
        "batch": "68 D"
      },
      "5020 (507)": {
        "course": "CSE0612405",
        "teacher": "AIA",
        "batch": "60 G"
      },
      "5030 (508)": {
        "course": "MAT0541101",
        "teacher": "AMU",
        "batch": "68 A"
      },
      "5190 (512)": {
        "course": "ECO0311101",
        "teacher": "TDL",
        "batch": "67 C"
      },
      "5230 (516)": {
        "course": "CSE0612305",
        "teacher": "KMI",
        "batch": "61 E"
      },
      "6020 (607)": {
        "course": "CSE0613403",
        "teacher": "SNS",
        "batch": "60 H"
      },
      "6030 (608)": {
        "course": "ENG0232101",
        "teacher": "RIR",
        "batch": "68 E"
      },
      "6170 (614)": {
        "course": "PHY0533101",
        "teacher": "KZN",
        "batch": "67 G"
      },
      "0017 (B103)": {
        "course": "CSE0613207",
        "teacher": "RHA",
        "batch": "64 A"
      },
      "0020 (B106/1)": {
        "course": "BUS0411301",
        "teacher": "MAS",
        "batch": "62 D"
      },
      "0022 (B106/2)": {
        "course": "CSE0612305",
        "teacher": "SIS",
        "batch": "61 D"
      },
      "0023 (B108)": {
        "course": "CSE0613409",
        "teacher": "MMF",
        "batch": "59 A"
      },
      "0024 (B109)": {
        "course": "CSE0611301",
        "teacher": "KTK",
        "batch": "61 C"
      },
      "A004": {
        "course": "GED0222101",
        "teacher": "MRN",
        "batch": "67 A"
      },
      "3180 (313)": {
        "course": "PHY0533101",
        "teacher": "JHB",
        "batch": "67 B"
      }
    },
    "13:15-14:35": {
      "Lab 5180 (511)": {
        "course": "CSE0613101",
        "teacher": "MMH",
        "batch": "68 D"
      },
      "Lab 5200 (513)": {
        "course": "CSE00613209",
        "teacher": "FFK",
        "batch": "63 A"
      },
      "AI Lab 5210 (514)": {
        "course": "CSE0613309",
        "teacher": "NHE",
        "batch": "61 D"
      },
      "Lab 6150 (612)": {
        "course": "CSE0612401",
        "teacher": "AZU",
        "batch": "60 E"
      },
      "4020 (407)": {
        "course": "CSE0612305",
        "teacher": "SIS",
        "batch": "61 C"
      },
      "5080 (501)": {
        "course": "CSE0613403",
        "teacher": "SNS",
        "batch": "60 G"
      },
      "5070 (502)": {
        "course": "MAT0541101",
        "teacher": "AMU",
        "batch": "68 B"
      },
      "5060 (503)": {
        "course": "CSE0611303",
        "teacher": "MNR",
        "batch": "61 E"
      },
      "5020 (507)": {
        "course": "CSE0611201",
        "teacher": "MRR",
        "batch": "67 E"
      },
      "5030 (508)": {
        "course": "ECO0311101",
        "teacher": "TDL",
        "batch": "67 G"
      },
      "5190 (512)": {
        "course": "BUS0411301",
        "teacher": "MAS",
        "batch": "62 C"
      },
      "5230 (516)": {
        "course": "PHY0533101",
        "teacher": "KZN",
        "batch": "67 F"
      },
      "6020 (607)": {
        "course": "CSE0611301",
        "teacher": "KTK",
        "batch": "61 B"
      },
      "6030 (608)": {
        "course": "ECO0311101",
        "teacher": "PUS",
        "batch": "67 A"
      },
      "6170 (614)": {
        "course": "CSE0612405",
        "teacher": "AIA",
        "batch": "60 H"
      },
      "0006": {
        "course": "GED0222101",
        "teacher": "MRN",
        "batch": "67 B/67 C"
      },
      "A004": {
        "course": "GED0413541",
        "teacher": "RN",
        "batch": "64 A/64 B"
      }
    },
    "14:35-15:55": {},
    "15:55-17:15": {}
  },
  "Thursday": {
    "08:45-10:05": {
      "DLD Lab 0018 (B104)": {
        "course": "CSE0613204",
        "teacher": "RHB",
        "batch": "65 A"
      },
      "Electric Lab 3210 (316)": {
        "course": "EEE0713102",
        "teacher": "ASE",
        "batch": "66 A"
      },
      "Phy Lab 6080 (601)": {
        "course": "PHY0533102",
        "teacher": "JHB",
        "batch": "67 A"
      },
      "Lab 5160 (509)": {
        "course": "CSE0613312",
        "teacher": "DMO",
        "batch": "62 A"
      },
      "Lab 5180 (511)": {
        "course": "CSE0613102",
        "teacher": "DNS",
        "batch": "68 A"
      },
      "Lab 5200 (513)": {
        "course": "CSE0613207",
        "teacher": "HHR",
        "batch": "64 E"
      },
      "AI Lab 5210 (514)": {
        "course": "CSE0613201",
        "teacher": "ZNT",
        "batch": "65 B"
      },
      "Lab 5220 (515)": {
        "course": "CSE0613309",
        "teacher": "MAK",
        "batch": "61 A"
      },
      "Lab 6150 (612)": {
        "course": "CSE0613207",
        "teacher": "RHA",
        "batch": "64 A"
      },
      "Lab 6180 (613)": {
        "course": "CSE0613101",
        "teacher": "FFK",
        "batch": "68 E"
      },
      "4020 (407)": {
        "course": "CSE0613403",
        "teacher": "PSA",
        "batch": "60 C"
      },
      "5080 (501)": {
        "course": "CSE0613303",
        "teacher": "TSL",
        "batch": "62 D"
      },
      "5070 (502)": {
        "course": "MAT0541101",
        "teacher": "AMU",
        "batch": "68 B"
      },
      "5060 (503)": {
        "course": "CSE0613201",
        "teacher": "HRA",
        "batch": "65 D"
      },
      "5020 (507)": {
        "course": "MIS0611403",
        "teacher": "SID",
        "batch": "60 D"
      },
      "5030 (508)": {
        "course": "MAT0541201",
        "teacher": "SHS",
        "batch": "63 C"
      },
      "5190 (512)": {
        "course": "ECO0311101",
        "teacher": "TDL",
        "batch": "67 D"
      },
      "5230 (516)": {
        "course": "CSE0612405",
        "teacher": "NSS",
        "batch": "60 B"
      },
      "6020 (607)": {
        "course": "CSE0611201",
        "teacher": "HKM",
        "batch": "67 B"
      },
      "6030 (608)": {
        "course": "MIS0611403",
        "teacher": "SAK",
        "batch": "60 E"
      },
      "6170 (614)": {
        "course": "MAT0541202",
        "teacher": "JNJ",
        "batch": "64 D"
      },
      "0017 (B103)": {
        "course": "CSE0613303",
        "teacher": "AZU",
        "batch": "62 C"
      },
      "0020 (B106/1)": {
        "course": "CSE0613309",
        "teacher": "MIF",
        "batch": "61 F"
      },
      "0022 (B106/2)": {
        "course": "CSE0611101",
        "teacher": "MTQ",
        "batch": "64 C"
      },
      "0023 (B108)": {
        "course": "CSE0613203",
        "teacher": "SZI",
        "batch": "65 C"
      },
      "0024 (B109)": {
        "course": "PHY0533101",
        "teacher": "KZN",
        "batch": "67 G"
      },
      "0006": {
        "course": "GED0223101",
        "teacher": "AWK",
        "batch": "66 C/66 D"
      }
    },
    "10:05-11:25": {
      "Lab 5200 (513)": {
        "course": "CSE0613309",
        "teacher": "MAK",
        "batch": "61 B"
      },
      "AI Lab 5210 (514)": {
        "course": "CSE0612306",
        "teacher": "TZW",
        "batch": "61 A"
      },
      "Lab 5220 (515)": {
        "course": "CSE0613310",
        "teacher": "MIF",
        "batch": "61 E"
      },
      "Lab 6150 (612)": {
        "course": "CSE0613312",
        "teacher": "DMH",
        "batch": "62 C"
      },
      "Lab 6180 (613)": {
        "course": "CSE0613210",
        "teacher": "TBM",
        "batch": "63 C"
      },
      "4020 (407)": {
        "course": "CSE0611303",
        "teacher": "SBN",
        "batch": "61 F"
      },
      "5070 (502)": {
        "course": "CSE0612401",
        "teacher": "AZU",
        "batch": "60 D"
      },
      "5060 (503)": {
        "course": "MAT0541101",
        "teacher": "ATB",
        "batch": "68 E"
      },
      "5020 (507)": {
        "course": "CSE0613303",
        "teacher": "DSC",
        "batch": "62 B"
      },
      "5030 (508)": {
        "course": "CSE0611101",
        "teacher": "IZT",
        "batch": "64 D"
      },
      "5190 (512)": {
        "course": "EEE0713101",
        "teacher": "MHT",
        "batch": "66 C"
      },
      "5230 (516)": {
        "course": "CSE0613103",
        "teacher": "NTM",
        "batch": "66 D"
      },
      "6020 (607)": {
        "course": "CSE0612405",
        "teacher": "NSS",
        "batch": "60 A"
      },
      "6030 (608)": {
        "course": "MIS0611403",
        "teacher": "FAS",
        "batch": "60 G"
      },
      "6170 (614)": {
        "course": "ENG0232101",
        "teacher": "SZC",
        "batch": "68 B"
      },
      "0017 (B103)": {
        "course": "CSE0613203",
        "teacher": "BTD",
        "batch": "65 D"
      },
      "0020 (B106/1)": {
        "course": "CSE0611201",
        "teacher": "TRT",
        "batch": "67 G"
      },
      "0022 (B106/2)": {
        "course": "CSE0612401",
        "teacher": "MSI",
        "batch": "60 H"
      },
      "0023 (B108)": {
        "course": "BUS0411301",
        "teacher": "WH",
        "batch": "60 F"
      },
      "0024 (B109)": {
        "course": "CSE0613403",
        "teacher": "SNS",
        "batch": "60 E"
      },
      "A004": {
        "course": "GED0413541",
        "teacher": "RN",
        "batch": "64 C"
      }
    },
    "11:25-12:45": {
      "DLD Lab 0018 (B104)": {
        "course": "CSE0613204",
        "teacher": "SAD",
        "batch": "65 B"
      },
      "Electric Lab 3210 (316)": {
        "course": "EEE0713102",
        "teacher": "ASE",
        "batch": "66 D"
      },
      "Lab 5160 (509)": {
        "course": "CSE0613208",
        "teacher": "SNA",
        "batch": "64 C"
      },
      "Lab 5180 (511)": {
        "course": "CSE0613210",
        "teacher": "SSK",
        "batch": "63 B"
      },
      "Lab 5200 (513)": {
        "course": "CSE0613104",
        "teacher": "IZT",
        "batch": "66 C"
      },
      "4020 (407)": {
        "course": "CSE0613303",
        "teacher": "DSC",
        "batch": "62 A"
      },
      "5080 (501)": {
        "course": "PHY0533101",
        "teacher": "JHB",
        "batch": "67 D"
      },
      "5070 (502)": {
        "course": "CSE0612405",
        "teacher": "NSS",
        "batch": "60 C"
      },
      "5060 (503)": {
        "course": "CSE0613201",
        "teacher": "ZNT",
        "batch": "65 C"
      },
      "5020 (507)": {
        "course": "MIS0611403",
        "teacher": "SID",
        "batch": "60 F"
      },
      "5030 (508)": {
        "course": "MAT0541202",
        "teacher": "NAD",
        "batch": "64 A"
      },
      "5190 (512)": {
        "course": "CSE0613403",
        "teacher": "PSA",
        "batch": "60 B"
      },
      "5230 (516)": {
        "course": "CSE0612305",
        "teacher": "KMI",
        "batch": "61 F"
      },
      "6020 (607)": {
        "course": "CSE0613103",
        "teacher": "MTR",
        "batch": "66 B"
      },
      "6030 (608)": {
        "course": "BUS0411301",
        "teacher": "MAS",
        "batch": "62 D"
      },
      "6170 (614)": {
        "course": "ENG0232101",
        "teacher": "RIR",
        "batch": "68 A"
      },
      "0017 (B103)": {
        "course": "ECO0311101",
        "teacher": "TDL",
        "batch": "67 B"
      },
      "0020 (B106/1)": {
        "course": "CSE0613205",
        "teacher": "AIA",
        "batch": "63 A"
      },
      "0022 (B106/2)": {
        "course": "CSE0613207",
        "teacher": "RHA",
        "batch": "64 B"
      },
      "0023 (B108)": {
        "course": "MAT0541102",
        "teacher": "AMU",
        "batch": "66 A"
      },
      "0024 (B109)": {
        "course": "BUS0411301",
        "teacher": "WH",
        "batch": "60 G"
      },
      "0006": {
        "course": "GED0413541",
        "teacher": "TAF",
        "batch": "64 D/64 E"
      }
    },
    "13:15-14:35": {
      "AI Lab 5210 (514)": {
        "course": "CSE0613312",
        "teacher": "DMH",
        "batch": "62 B"
      },
      "Lab 5220 (515)": {
        "course": "CSE0613208",
        "teacher": "RHA",
        "batch": "64 A"
      },
      "Lab 6150 (612)": {
        "course": "CSE0612306",
        "teacher": "KMI",
        "batch": "61 E"
      },
      "Lab 6180 (613)": {
        "course": "CSE0612305",
        "teacher": "TZW",
        "batch": "61 B"
      },
      "4020 (407)": {
        "course": "BUS0411301",
        "teacher": "SMF",
        "batch": "60 A"
      },
      "5080 (501)": {
        "course": "CSE0612405",
        "teacher": "AIA",
        "batch": "60 H"
      },
      "5070 (502)": {
        "course": "CSE0611101",
        "teacher": "MTQ",
        "batch": "64 B"
      },
      "5060 (503)": {
        "course": "EEE0713201",
        "teacher": "MKS",
        "batch": "65 D"
      },
      "5020 (507)": {
        "course": "CSE0613201",
        "teacher": "HRA",
        "batch": "65 A"
      },
      "5030 (508)": {
        "course": "MAT0541202",
        "teacher": "JNJ",
        "batch": "64 E"
      },
      "5190 (512)": {
        "course": "MIS0611403",
        "teacher": "SID",
        "batch": "60 C"
      },
      "5230 (516)": {
        "course": "BUS0411301",
        "teacher": "MAS",
        "batch": "60 E"
      },
      "6020 (607)": {
        "course": "EEE0713101",
        "teacher": "ABS",
        "batch": "66 B"
      },
      "6030 (608)": {
        "course": "ECO0311101",
        "teacher": "TDL",
        "batch": "67 G"
      },
      "6170 (614)": {
        "course": "MAT0541201",
        "teacher": "AMU",
        "batch": "63 A"
      },
      "0017 (B103)": {
        "course": "PHY0533101",
        "teacher": "KZN",
        "batch": "67 A"
      },
      "0020 (B106/1)": {
        "course": "CSE0613311",
        "teacher": "NAD",
        "batch": "62 D"
      },
      "0022 (B106/2)": {
        "course": "EEE0713101",
        "teacher": "MHT",
        "batch": "66 A"
      },
      "0023 (B108)": {
        "course": "CSE0611301",
        "teacher": "MRR",
        "batch": "61 F"
      },
      "0024 (B109)": {
        "course": "BUS0411301",
        "teacher": "RKB",
        "batch": "60 D"
      },
      "3170 (312)": {
        "course": "PHY0533101",
        "teacher": "JHB",
        "batch": "67 B"
      },
      "3180 (313)": {
        "course": "ENG0232101",
        "teacher": "RIR",
        "batch": "68 A"
      }
    },
    "14:35-15:55": {
      "Lab 5160 (509)": {
        "course": "BUS0411301",
        "teacher": "MHA",
        "batch": "62 A"
      },
      "Lab 5180 (511)": {
        "course": "CSE0613103",
        "teacher": "IZT",
        "batch": "66 C"
      },
      "Lab 5200 (513)": {
        "course": "CSE0613201",
        "teacher": "ZNT",
        "batch": "65 B"
      },
      "Lab 6180 (613)": {
        "course": "CSE0613310",
        "teacher": "MAK",
        "batch": "61 A"
      },
      "4020 (407)": {
        "course": "CSE0613205",
        "teacher": "AIA",
        "batch": "63 B"
      },
      "5080 (501)": {
        "course": "CSE0612401",
        "teacher": "HKM",
        "batch": "60 G"
      },
      "5070 (502)": {
        "course": "MIS0611403",
        "teacher": "FAS",
        "batch": "60 H"
      },
      "5060 (503)": {
        "course": "CSE00613209",
        "teacher": "FFK",
        "batch": "63 A"
      },
      "5020 (507)": {
        "course": "ECO0311101",
        "teacher": "PUS",
        "batch": "67 A"
      },
      "5030 (508)": {
        "course": "CSE0613205",
        "teacher": "SRR",
        "batch": "63 C"
      },
      "5190 (512)": {
        "course": "CSE0611303",
        "teacher": "SBN",
        "batch": "61 F"
      },
      "5230 (516)": {
        "course": "CSE0613403",
        "teacher": "PSA",
        "batch": "60 C"
      },
      "6020 (607)": {
        "course": "BUS0411301",
        "teacher": "MAS",
        "batch": "62 C"
      },
      "6030 (608)": {
        "course": "BUS0411301",
        "teacher": "SMF",
        "batch": "60 B"
      },
      "6170 (614)": {
        "course": "CSE0611201",
        "teacher": "TRT",
        "batch": "67 G"
      },
      "0022 (B106/2)": {
        "course": "MIS0611403",
        "teacher": "MIF",
        "batch": "60 A"
      },
      "0006": {
        "course": "GED0223101",
        "teacher": "AWK",
        "batch": "66 A/66 B"
      }
    },
    "15:55-17:15": {
      "5020 (507)": {
        "course": "MAT0541201",
        "teacher": "SHS",
        "batch": "63 B"
      },
      "5030 (508)": {
        "course": "CSE0611301",
        "teacher": "MRR",
        "batch": "61 E"
      }
    }
  }
};

export const formatTimeSlot = (slot: TimeSlot) => slot.replace("-", " – ");
