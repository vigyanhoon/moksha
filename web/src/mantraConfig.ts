import vishnuSahasranamaTexts from "./texts/vishnu_sahasranama";
import mahisasurMardiniTexts from "./texts/mahisasur_mardini";
import hanumanChalisaTexts from "./texts/hanuman_chalisa";
import shivTandatStrotaTexts from "./texts/shiv_tandav_strota";

import vishnuSahasranamaAudio from "./audio/vishnu_sahasranama.mp3";
import mahisasurMardiniAudio from "./audio/mahisasur_mardini.mp3";
import hanumanChalisaAudio from "./audio/hanuman_chalisa.mp3";
import shivTandatStrotaAudio from "./audio/shiv_tandav_strota.mp3";

export const mantraConfig = [
    {
        name: "Vishnu Sahasranama",
        resource: "vishnu_sahasranama",
        path: "VishnuSahasranama",
        text: vishnuSahasranamaTexts,
        audio: vishnuSahasranamaAudio,
    },
    {
        name: "Mahisasur Mardini",
        resource: "mahisasur_mardini",
        path: "MahisasurMardini",
        text: mahisasurMardiniTexts,
        audio: mahisasurMardiniAudio,
    },
    {
        name: "Hanuman Chalisa",
        resource: "hanuman_chalisa",
        path: "HanumanChalisa",
        text: hanumanChalisaTexts,
        audio: hanumanChalisaAudio,
    },
    {
        name: "Shiv Tandav Strota",
        resource: "shiv_tandav_strota",
        path: "ShivTandavStrota",
        text: shivTandatStrotaTexts,
        audio: shivTandatStrotaAudio,
    },
] as const;

export type MantraResource =
    typeof mantraConfig[number]["resource"];