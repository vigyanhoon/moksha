import vishnuSahasranamaTexts from "./texts/vishnu_sahasranama.js";
import mahisasurMardiniTexts from "./texts/mahisasur_mardini.js";
import hanumanChalisaTexts from "./texts/hanuman_chalisa.js";
import shivTandatStrotaTexts from "./texts/shiv_tandav_strota.js";
import shivPanchaksharStotra from "./texts/shiv_panchakshar_stotra.js";

import vishnuSahasranamaAudio from "./audio/vishnu_sahasranama.mp3";
import mahisasurMardiniAudio from "./audio/mahisasur_mardini.mp3";
import hanumanChalisaAudio from "./audio/hanuman_chalisa.mp3";
import shivTandatStrotaAudio from "./audio/shiv_tandav_strota.mp3";
import shivPanchaksharStotraAudio from "./audio/shiv_panchakshar_stotra.mp3";

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
    {
        name: "Shiv Panchakshar Strota",
        resource: "shiv_panchakshar_strota",
        path: "ShivPanchaksharStrota",
        text: shivPanchaksharStotra,
        audio: shivPanchaksharStotraAudio,
    },
] as const;

export type MantraResource =
    typeof mantraConfig[number]["resource"];