export type MantraType = {
  mantra: string;
  time: number;
  meaning: string;
};

const mantras: MantraType[] = [
  {
    mantra: `शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् । प्रसन्नवदनं ध्यायेत् सर्वविघ्नोपशान्तये sdf॥ १॥`,
    time: 52,
    meaning:
      'One should meditate for the removal of all obstacles upon Vishnu who is clad in white garments, who has a lustre like the moon, who has four arms and a beneficent face.',
  },

  //   `यस्य द्विरदवक्त्राद्याः पारिषद्याः परः शतम् ।
  // विघ्नं निघ्नन्ति सततं विष्वक्सेनं तमाश्रये ॥ २॥`,
  {
    mantra: `व्यासं वसिष्ठनप्तारं शक्तेः पौत्रमकल्मषम् । पराशरात्मजं वन्दे शुकतातं तपोनिधिम् ॥ ३॥`,
    time: 61,
    meaning: `Vyasa is the great grandson of Vasishta and the grandson of Shakti. He is the son of Parasara and the father of Suka. I offer my obeisance to the Vyasa who is free from all defects and is a repository of austerities.`,
  },
  {
    mantra: `व्यासाय विष्णुरूपाय व्यासरूपाय विष्णवे । नमो वै ब्रह्मनिधये वासिष्ठाय नमो नमः ॥ ४॥`,
    time: 70,
    meaning: `My repeated salutations to Vyasa who is the form of Vishnu and to Vishnu who is the form of Vyasa — sage Vyasa who is a descendant of Vasistha and who is a treasure of Knowledge of Brahman.`,
  },
  {
    mantra: `अविकाराय शुद्धाय नित्याय परमात्मने । सदैकरूपरूपाय विष्णवे सर्वजिष्णवे ॥ ५॥`,
    time: 79.5,
    meaning: `I offer my obeisance to Vishnu, Who is devoid of all mutations, Who is by nature pure and eternal, Who is endowed with a form which is uniform at all times and Who is the victor over all.`,
  },
  {
    mantra: `यस्य स्मरणमात्रेण जन्मसंसारबन्धनात् । विमुच्यते नमस्तस्मै विष्णवे प्रभविष्णवे ॥ ६॥ \nॐ नमो विष्णवे प्रभविष्णवे ।`,
    time: 88.5,
    meaning: `My salutations to that Supreme Being Vishnu, by a mere though of Whose name all persons are freed from the bonds of Samsara. Salutations to the omnipotent Being Who is signified by the Pranava.`,
  },
  {
    mantra: `श्रीवैशम्पायन उवाच । श्रुत्वा धर्मानशेषेण पावनानि च सर्वशः । युधिष्ठिरः शान्तनवं पुनरेवाभ्यभाषत ॥ ७॥`,
    time: 102,
    meaning: `Sri Vaishampayana said — Having heard all the Dharmas in their entirety (without anything having been left out) and having learnt about all purificatory acts, Yudhisthira again addressed Bhishma as follows;`,
  },
  {
    mantra: `युधिष्ठिर उवाच । किमेकं दैवतं लोके किं वाप्येकं परायणम् । स्तुवन्तः कं कमर्चन्तः प्राप्नुयुर्मानवाः शुभम् ॥ ८॥`,
    time: 114.5,
    meaning: `Yudhisthira said:— Who is the One Supreme Being which the Scriptures declare? What is the one Supreme Goal which should be sought ? By the recitation of what mantra is a person released from the bonds of repeated birth and death? Which in your opinion is the highest form of religion?`,
  },
  {
    mantra: `को धर्मः सर्वधर्माणां भवतः परमो मतः । किं जपन्मुच्यते जन्तुर्जन्मसंसारबन्धनात् ॥ ९॥`,
    time: 127,
    meaning: `What spiritual path is that, which according to thy judgment is the foremost of all paths ? What are those mantras by reciting which a being becomes freed from the bonds of birth and death.`,
  },
  {
    mantra: `भीष्म उवाच । जगत्प्रभुं देवदेवमनन्तं पुरुषोत्तमम् । स्तुवन् नामसहस्रेण पुरुषः सततोत्थितः ॥ १०॥`,
    time: 137,
    meaning: `Bhishma said:— A person who is always engaged in praising with the hymn of a Thousand Names; the Lord of the Universe, the God of gods, and the limitless Supreme Being,`,
  },
  {
    mantra: `तमेव चार्चयन्नित्यं  भक्त्या पुरुषमव्ययम् । ध्यायन् स्तुवन् नमस्यंश्च यजमानस्तमेव च ॥ ११॥`,
    time: 148.5,
    meaning: `And engaged in worshipping Him with devotion, meditating upon Him, glorifying Him, offering obeisance and adoring Him,`,
  },
  {
    mantra: `अनादिनिधनं विष्णुं सर्वलोकमहेश्वरम् । लोकाध्यक्षं स्तुवन्नित्यं सर्वदुःखातिगो भवेत् ॥ १२॥`,
    time: 158.5,
    meaning: `one who is ever engaged in praising the Lord who is without beginning and end, the Allpervading-One, the Ruler of the Universe, the Supervisor of the worlds, the One Who is to be known from the Vedas, Who is Himself the Knower of all Dharmas, the One Who is constantly engaged in the Universal Welfare, Lord of the Universe, and the Cause of all beings — such a devotee transcends over all the sorrows of this material world.`,
  },
  {
    mantra: `ब्रह्मण्यं सर्वधर्मज्ञं लोकानां कीर्तिवर्धनम् । लोकनाथं महद्भूतं सर्वभूतभवोद्भवम् ॥ १३॥`,
    time: 168,
    meaning: `Verily He is champion of the devotees, conversant with all duties and injunctions, the enhancer of fame and achievement of all people, the master of all the universe, exceedingly wonderful, and the cause of the origination of all beings.`,
  },
  {
    mantra: `एष मे सर्वधर्माणां धर्मोऽधिकतमो मतः । यद्भक्त्या पुण्डरीकाक्षं स्तवैरर्चेन्नरः सदा ॥ १४॥`,
    time: 177.8,
    meaning: `This worship of the Supreme Lotus-eyed Lord at all times by a person endowed with devotion is regarded by me as the greatest of all religious practices`,
  },
  {
    mantra: `परमं यो महत्तेजः परमं यो महत्तपः । परमं यो महद्ब्रह्म परमं यः परायणम् ॥ १५॥`,
    time: 188,
    meaning: `He Who is the Supreme Effulgence; Who is the Supreme Director; Who is the Supreme Brahman; and Who is the Supreme, Highest and Ultimate Goal;`,
  },
  {
    mantra: `पवित्राणां पवित्रं यो मङ्गलानां च मङ्गलम् । दैवतं दैवतानां च भूतानां योऽव्ययः पिता ॥ १६॥`,
    time: 197,
    meaning: `He Who is the purest of the pure and the most auspicious amongst the auspicious, The God of gods and the indestructible Progenitor of all beings.`,
  },
  {
    mantra: `यतः सर्वाणि भूतानि भवन्त्यादियुगागमे । यस्मिंश्च प्रलयं यान्ति पुनरेव युगक्षये ॥ १७॥`,
    time: 207,
    meaning: `From Whom all beings originate in the beginning of the first Yuga and in Whom they merge again at the end of the Yuga.`,
  },
  {
    mantra: `तस्य लोकप्रधानस्य जगन्नाथस्य भूपते । विष्णोर्नामसहस्रं मे श‍ृणु पापभयापहम् ॥ १८॥`,
    time: 217,
    meaning: `O King! Hear from me the Thousand Names which remove sins and drive away fear. The appellations of that Vishnu, Lord of the Universe and Ruler of the World.`,
  },
  {
    mantra: `यानि नामानि गौणानि विख्यातानि महात्मनः । ऋषिभिः परिगीतानि तानि वक्ष्यामि भूतये ॥ १९॥`,
    time: 226.5,
    meaning: `For the good of the world, I shall tell you the holy names of the Supreme Being, which are indicative of His attributes and glory, well known and recited by the Rishis.`,
  },
  {
    mantra: `ऋषिर्नाम्नां सहस्रस्य वेदव्यासो महामुनिः । छन्दोऽनुष्टुप् तथा देवो भगवान् देवकीसुतः ॥ २०॥`,
    time: 236,
    meaning: `The Great Vedavyasa is the Seer of these Thousand Names of Vishnu, the metre is the anushtup, the Presiding Deity is Lord Krishna the son of Devaki.`,
  },
  {
    mantra: `अमृतांशूद्भवो बीजं शक्तिर्देवकिनन्दनः । त्रिसामा हृदयं तस्य शान्त्यर्थे विनियोज्यते ॥ २१॥`,
    time: 245.8,
    meaning: `The seed is He-who-was-born-in-the-lunar-race; its power is The Name, The-son-of-Devaki. The heart is the One-who-is-lauded-by-the-three-Sama-hymns, The purpose of its use is the attainment of peace.`,
  },
  {
    mantra: `विष्णुं जिष्णुं महाविष्णुं प्रभविष्णुं महेश्वरम् । अनेकरूप दैत्यान्तं नमामि पुरुषोत्तमं ॥ २२ ॥`,
    time: 255,
    meaning: `I pay my obeisance to Vishnu, the Victorious, the All-pervading One, the Mighty, the Lord of all, the enemy of the demons of many forms and the Best of Persons.`,
  },
  {
    mantra: ``,
    time: 264,
    meaning: ``,
  },
];

export { mantras };
