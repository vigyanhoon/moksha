export type MantraType = {
  mantra: string;
  english: string;
  time: number;
  meaning: string;
};

const mantras: MantraType[] = [
  {
    mantra: `अयि गिरिनन्दिनि नन्दितमेदिनि विश्वविनोदिनि नन्दिनुते
    गिरिवरविन्ध्यशिरोऽधिनिवासिनि विष्णुविलासिनि जिष्णुनुते ।
    भगवति हे शितिकण्ठकुटुम्बिनि भूरिकुटुम्बिनि भूरिकृते
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १ ॥`,
    english: `Ayi Giri-Nandini Nandita-Medini Vishva-Vinodini Nandi-Nute
    Giri-Vara-Vindhya-Shiro-[A]dhi-Nivaasini Vissnnu-Vilaasini Jissnnu-Nute |
    Bhagavati He Shiti-Kannttha-Kuttumbini Bhuri-Kuttumbini Bhuri-Krte
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 1 ||`,
    time: 0,
    meaning:``,
  },
  {
    mantra: `सुरवरवर्षिणि दुर्धरधर्षिणि दुर्मुखमर्षिणि हर्षरते
    त्रिभुवनपोषिणि शङ्करतोषिणि किल्बिषमोषिणि घोषरते
    दनुजनिरोषिणि दितिसुतरोषिणि दुर्मदशोषिणि सिन्धुसुते
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ २ ॥`,
    english: `Sura-Vara-Varssinni Durdhara-Dharssinni Durmukha-Marssinni Harssa-Rate
    Tribhuvana-Possinni Shangkara-Tossinni Kilbissa-Mossinni Ghossa-Rate
    Danuja-Nirossinni Diti-Suta-Rossinni Durmada-Shossinni Sindhu-Sute
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 2 ||`,
    time: 47,
    meaning:``,
  },
  {
    mantra: `अयि जगदम्ब मदम्ब कदम्ब वनप्रियवासिनि हासरते
    शिखरि शिरोमणि तुङ्गहिमलय शृङ्गनिजालय मध्यगते ।
    मधुमधुरे मधुकैटभगञ्जिनि कैटभभञ्जिनि रासरते
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ ३ ॥`,
    english: `Ayi Jagad[t]-Amba Mad-Amba Kadamba Vana-Priya-Vaasini Haasa-Rate
    Shikhari Shiro-Manni Tungga-Himalaya Shrngga-Nija-[Aa]laya Madhya-Gate |
    Madhu-Madhure Madhu-Kaittabha-Gan.jini Kaittabha-Bhan.jini Raasa-Rate
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 3 ||`,
    time: 90,
    meaning:``,
  },
  {
    mantra: `अयि शतखण्ड विखण्डितरुण्ड वितुण्डितशुण्द गजाधिपते
    रिपुगजगण्ड विदारणचण्ड पराक्रमशुण्ड मृगाधिपते ।
    निजभुजदण्ड निपातितखण्ड विपातितमुण्ड भटाधिपते
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ ४ ॥`,
    english: `Ayi Shata-Khanndda Vikhannddita-Runndda Vitunnddita-Shunnda Gaja-[A]dhipate
    Ripu-Gaja-Ganndda Vidaaranna-Canndda Paraakrama-Shunndda Mrga-[A]dhipate |
    Nija-Bhuja-Danndda Nipaatita-Khanndda Vipaatita-Munndda Bhatta-[A]dhipate
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 4 ||`,
    time: 137,
    meaning:``,
  },
  {
    mantra: `अयि रणदुर्मद शत्रुवधोदित दुर्धरनिर्जर शक्तिभृते
    चतुरविचार धुरीणमहाशिव दूतकृत प्रमथाधिपते ।
    दुरितदुरीह दुराशयदुर्मति दानवदुत कृतान्तमते
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ ५ ॥`,
    english: `Ayi Ranna-Durmada Shatru-Vadho[a-U]dita Durdhara-Nirjara Shakti-Bhrte
    Catura-Vicaara Dhuriinna-Mahaashiva Duuta-Krta Pramatha-[A]dhipate |
    Durita-Duriiha Duraashaya-Durmati Daanava-Duta Krtaanta-Mate
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 5 ||`,
    time: 178.5,
    meaning:``,
  },
  {
    mantra: `अयि शरणागत वैरिवधुवर वीरवराभय दायकरे
    त्रिभुवनमस्तक शूलविरोधि शिरोऽधिकृतामल शूलकरे ।
    दुमिदुमितामर धुन्दुभिनादमहोमुखरीकृत दिङ्मकरे
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ ६ ॥`,
    english: `Ayi Sharannaagata Vairi-Vadhuvara Viiravara-[A]bhaya Daaya-Kare
    Tri-Bhuvana-Mastaka Shuula-Virodhi Shiro-[A]dhikrta-[A]mala Shuula-Kare |
    Dumi-Dumi-Taamara Dhundubhi-Naadam-Aho-Mukhariikrta Dingma-Kare
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 6 ||`,
    time: 221.5,
    meaning:``,
  },
  {
    mantra: `अयि निजहुङ्कृति मात्रनिराकृत धूम्रविलोचन धूम्रशते
    समरविशोषित शोणितबीज समुद्भवशोणित बीजलते ।
    शिवशिवशुम्भ निशुम्भमहाहव तर्पितभूत पिशाचरते
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ ७ ॥`,
    english: `Ayi Nija-Hungkrti Maatra-Niraakrta Dhumravilocana Dhumra-Shate
    Samara-Vishossita Shonnita-Biija Samudbhava-Shonnita Biija-Late |
    Shiva-Shiva-Shumbha Nishumbha-Mahaahava Tarpita-Bhuta Pishaaca-Rate
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 7 ||
    `,
    time: 264.5,
    meaning:``,
  },
  {
    mantra: `धनुरनुषङ्ग रणक्षणसङ्ग परिस्फुरदङ्ग नटत्कटके
    कनकपिशङ्ग पृषत्कनिषङ्ग रसद्भटशृङ्ग हताबटुके ।
    कृतचतुरङ्ग बलक्षितिरङ्ग घटद्बहुरङ्ग रटद्बटुके
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ ८ ॥`,
    english: `Dhanur-Anussangga Ranna-Kssanna-Sangga Parisphurad-Angga Nattat-Kattake
    Kanaka-Pishangga Prssatka-Nissangga Rasad-Bhatta-Shrngga Hataa-Battuke |
    Krta-Caturangga Bala-Kssiti-Rangga Ghattad-Bahu-Rangga Rattad-Battuke
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 8 ||`,
    time: 308,
    meaning:``,
  },
  {
    mantra: `सुरललना ततथेयि तथेयि कृताभिनयोदर नृत्यरते
    कृत कुकुथः कुकुथो गडदादिकताल कुतूहल गानरते ।
    धुधुकुट धुक्कुट धिंधिमित ध्वनि धीर मृदंग निनादरते
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ ९ ॥`,
    english: `Sura-Lalanaa Tatatheyi Tatheyi Krta-Abhinayo-[U]dara Nrtya-Rate
    Krta Kukuthah Kukutho Gaddadaadika-Taala Kutuuhala Gaana-Rate |
    Dhudhukutta Dhukkutta Dhimdhimita Dhvani Dhiira Mrdamga Ninaada-Rate
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 9 ||`,
    time: 351,
    meaning:``,
  },
  {
    mantra: `जय जय जप्य जयेजयशब्द परस्तुति तत्परविश्वनुते
    झणझणझिञ्झिमि झिङ्कृत नूपुरशिञ्जितमोहित भूतपते ।
    नटित नटार्ध नटी नट नायक नाटितनाट्य सुगानरते
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १० ॥`,
    english: `Jaya Jaya Japya Jaye-Jaya-Shabda Para-Stuti Tat-Para-Vishva-Nute
    Jhanna-Jhanna-Jhin.jhimi Jhingkrta Nuupura-Shin.jita-Mohita Bhuuta-Pate |
    Nattita Nattaardha Nattii Natta Naayaka Naattita-Naattya Su-Gaana-Rate
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 10 ||`,
    time: 354.5,
    meaning:``,
  },
  {
    mantra: `अयि सुमनःसुमनःसुमनः सुमनःसुमनोहरकान्तियुते
    श्रितरजनी रजनीरजनी रजनीरजनी करवक्त्रवृते ।
    सुनयनविभ्रमर भ्रमरभ्रमर भ्रमरभ्रमराधिपते
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ ११ ॥`,
    english: `Ayi Sumanah-Sumanah-Sumanah Sumanah-Sumanohara-Kaanti-Yute
    Shrita-Rajanii Rajanii-Rajanii Rajanii-Rajanii Kara-Vaktra-Vrte |
    Sunayana-Vi-Bhramara Bhramara-Bhramara Bhramara-Bhramara-[A]dhipate
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 11 ||`,
    time: 394.5,
    meaning:``,
  },
  {
    mantra: `सहितमहाहव मल्लमतल्लिक मल्लितरल्लक मल्लरते
    विरचितवल्लिक पल्लिकमल्लिक झिल्लिकभिल्लिक वर्गवृते ।
    शितकृतफुल्ल समुल्लसितारुण तल्लजपल्लव सल्ललिते
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १२ ॥`,
    english: `Sahita-Mahaahava Mallama-Tallika Malli-Tarallaka Malla-Rate
    Viracita-Vallika Pallika-Mallika Jhillika-Bhillika Varga-Vrte |
    Shita-Krta-Phulla Samullasita-[A]runna Tallaja-Pallava Sal-Lalite
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 12 ||`,
    time: 441,
    meaning:``,
  },
  {
    mantra: `अविरलगण्ड गलन्मदमेदुर मत्तमतङ्ग जराजपते
    त्रिभुवनभुषण भूतकलानिधि रूपपयोनिधि राजसुते ।
    अयि सुदतीजन लालसमानस मोहन मन्मथराजसुते
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १३ ॥`,
    english: `Avirala-Ganndda Galan-Mada-Medura Matta-Matangga ja-Raaja-Pate
    Tri-Bhuvana-Bhussanna Bhuuta-Kalaanidhi Ruupa-Payo-Nidhi Raaja-Sute |
    Ayi Sudatii-Jana Laalasa-Maanasa Mohana Manmatha-Raaja-Sute
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 13 ||`,
    time: 484.7,
    meaning:``,
  },
  {
    mantra: `कमलदलामल कोमलकान्ति कलाकलितामल भाललते
    सकलविलास कलानिलयक्रम केलिचलत्कल हंसकुले ।
    अलिकुलसङ्कुल कुवलयमण्डल मौलिमिलद्बकुलालिकुले
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १४ ॥`,
    english: `Kamala-Dala-[A]mala Komala-Kaanti Kalaa-Kalita-[A]mala Bhaalalate
    Sakala-Vilaasa Kalaa-Nilaya-Krama Keli-Calat-Kala Hamsa-Kule |
    Alikula-Sangkula Kuvalaya-Mannddala Mouli-Milad-Bakula-Ali-Kule
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 14 ||`,
    time: 528,
    meaning:``,
  },
  {
    mantra: `करमुरलीरव वीजितकूजित लज्जितकोकिल मञ्जुमते
    मिलितपुलिन्द मनोहरगुञ्जित रञ्जितशैल निकुञ्जगते ।
    निजगणभूत महाशबरीगण सद्गुणसम्भृत केलितले
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १५ ॥`,
    english: `Kara-Muralii-Rava Viijita-Kuujita Lajjita-Kokila Man.ju-Mate
    Milita-Pulinda Manohara-Gun.jita Ran.jita-Shaila Nikun.ja-Gate |
    Nija-Ganna-Bhuuta Mahaa-Shabarii-Ganna Sad-Gunna-Sambhrta Keli-Tale
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 15 ||`,
    time: 571.4,
    meaning:``,
  },
  {
    mantra: `कटितटपीत दुकूलविचित्र मयुखतिरस्कृत चन्द्ररुचे
    प्रणतसुरासुर मौलिमणिस्फुर दंशुलसन्नख चन्द्ररुचे
    जितकनकाचल मौलिमदोर्जित निर्भरकुञ्जर कुम्भकुचे
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १६ ॥`,
    english: `Kattitatta-Piita Dukuula-Vicitra Mayukha-Tiraskrta Candra-Ruce
    Prannata-Suraasura Mouli-Manni-Sphura d-Amshula-Sannakha Candra-Ruce
    Jita-Kanaka-[A]cala Mouli-Mado[a-Uu]rjita Nirbhara-Kun.jara Kumbha-Kuce
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 16 ||`,
    time: 615.8,
    meaning:``,
  },
  {
    mantra: `विजितसहस्रकरैक सहस्रकरैक सहस्रकरैकनुते
    कृतसुरतारक सङ्गरतारक सङ्गरतारक सूनुसुते ।
    सुरथसमाधि समानसमाधि समाधिसमाधि सुजातरते ।
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १७ ॥`,
    english: `Vijita-Sahasra-Karaika Sahasra-Karaika Sahasra-Karaika-Nute
    Krta-Sura-Taaraka Sanggara-Taaraka Sanggara-Taaraka Suunu-Sute |
    Suratha-Samaadhi Samaana-Samaadhi Samaadhi-Samaadhi Sujaata-Rate |
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 17 ||`,
    time: 656,
    meaning:``,
  },
  {
    mantra: `पदकमलं करुणानिलये वरिवस्यति योऽनुदिनं सुशिवे
    अयि कमले कमलानिलये कमलानिलयः स कथं न भवेत् ।
    तव पदमेव परम्पदमित्यनुशीलयतो मम किं न शिवे
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १८ ॥`,
    english: `Pada-Kamalam Karunnaa-Nilaye Varivasyati Yo-[A]nudinam Su-Shive
    Ayi Kamale Kamalaa-Nilaye Kamalaa-Nilayah Sa Katham Na Bhavet |
    Tava Padam-Eva Param-Padam-Ity-Anushiilayato Mama Kim Na Shive
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 18 ||`,
    time: 702.8,
    meaning:``,
  },
  {
    mantra: `कनकलसत्कलसिन्धुजलैरनुषिञ्चति तेगुणरङ्गभुवम्
    भजति स किं न शचीकुचकुम्भतटीपरिरम्भसुखानुभवम् ।
    तव चरणं शरणं करवाणि नतामरवाणि निवासि शिवम्
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १९ ॥`,
    english: `Kanaka-Lasat-Kala-Sindhu-Jalair-Anussin.cati Te-Gunna-Rangga-Bhuvam
    Bhajati Sa Kim Na Shacii-Kuca-Kumbha-Tattii-Parirambha-Sukha-[A]nubhavam |
    Tava Carannam Sharannam Kara-Vaanni Nata-Amara-Vaanni Nivaasi Shivam
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 19 ||`,
    time: 746.3,
    meaning:``,
  },
  {
    mantra: `तव विमलेन्दुकुलं वदनेन्दुमलं सकलं ननु कूलयते
    किमु पुरुहूतपुरीन्दु मुखी सुमुखीभिरसौ विमुखीक्रियते ।
    मम तु मतं शिवनामधने भवती कृपया किमुत क्रियते
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ २० ॥`,
    english: `Tava Vimale[a-I]ndu-Kulam Vadane[a-I]ndu-Malam Sakalam Nanu Kuula-Yate
    Kimu Puruhuuta-Purii-Indu Mukhii Sumukhiibhir-Asou Vimukhii-Kriyate |
    Mama Tu Matam Shiva-Naama-Dhane Bhavatii Krpayaa Kimuta Kriyate
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 20 ||`,
    time: 786,
    meaning:``,
  },
  {
    mantra: `अयि मयि दीन दयालुतया कृपयैव त्वया भवितव्यमुमे
    अयि जगतो जननी कृपयासि यथासि तथानुमितासिरते ।
    यदुचितमत्र भवत्युररीकुरुतादुरुतापमपाकुरुते
    जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ २१ ॥`,
    english: `Ayi Mayi Diina Dayaalu-Tayaa Krpaya-Iva Tvayaa Bhavitavyam-Ume
    Ayi Jagato Jananii Krpayaasi Yathaasi Tathanu-mita-Asira-Te |
    Yad-Ucitam-Atra Bhavatyurarii-Kurutaa-Duru-Taapam-Apaakurute
    Jaya Jaya He Mahissaasura-Mardini Ramya-Kapardini Shaila-Sute || 21 ||`,
    time: 832.5,
    meaning:``,
  },
];

export { mantras };
