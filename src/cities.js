const cities = [
  {
    "city": "Algiers",
    "lat": 36.7539,
    "lng": 3.0589
  },
  {
    "city": "Oran",
    "lat": 35.6969,
    "lng": -0.6331
  },
  {
    "city": "Constantine",
    "lat": 36.365,
    "lng": 6.6147
  },
  {
    "city": "Blida",
    "lat": 36.4722,
    "lng": 2.8333
  },
  {
    "city": "Batna",
    "lat": 35.55,
    "lng": 6.1667
  },
  {
    "city": "Setif",
    "lat": 36.19,
    "lng": 5.41
  },
  {
    "city": "Djelfa",
    "lat": 34.6667,
    "lng": 3.25
  },
  {
    "city": "Annaba",
    "lat": 36.9,
    "lng": 7.7667
  },
  {
    "city": "Sidi Bel Abbes",
    "lat": 35.2,
    "lng": -0.6333
  },
  {
    "city": "Biskra",
    "lat": 34.85,
    "lng": 5.7333
  },
  {
    "city": "Tebessa",
    "lat": 35.4,
    "lng": 8.1167
  },
  {
    "city": "Tiaret",
    "lat": 35.3667,
    "lng": 1.3167
  },
  {
    "city": "Bejaia",
    "lat": 36.7511,
    "lng": 5.0642
  },
  {
    "city": "Tlemcen",
    "lat": 34.8828,
    "lng": -1.3167
  },
  {
    "city": "Bordj Bou Arreridj",
    "lat": 36.0667,
    "lng": 4.7667
  },
  {
    "city": "Skikda",
    "lat": 36.8667,
    "lng": 6.9
  },
  {
    "city": "Bechar",
    "lat": 31.6333,
    "lng": -2.2
  },
  {
    "city": "El Eulma",
    "lat": 36.1528,
    "lng": 5.69
  },
  {
    "city": "Chlef",
    "lat": 36.1647,
    "lng": 1.3317
  },
  {
    "city": "Souk Ahras",
    "lat": 36.2864,
    "lng": 7.9511
  },
  {
    "city": "M'Sila",
    "lat": 35.7058,
    "lng": 4.5419
  },
  {
    "city": "Mostaganem",
    "lat": 35.9333,
    "lng": 0.0833
  },
  {
    "city": "Medea",
    "lat": 36.2675,
    "lng": 2.75
  },
  {
    "city": "Tizi Ouzou",
    "lat": 36.7169,
    "lng": 4.0497
  },
  {
    "city": "El Oued",
    "lat": 33.3683,
    "lng": 6.8675
  },
  {
    "city": "Laghouat",
    "lat": 33.8,
    "lng": 2.865
  },
  {
    "city": "Jijel",
    "lat": 36.8206,
    "lng": 5.7667
  },
  {
    "city": "Ouargla",
    "lat": 31.95,
    "lng": 5.3167
  },
  {
    "city": "Relizane",
    "lat": 35.7372,
    "lng": 0.5558
  },
  {
    "city": "Saida",
    "lat": 34.8303,
    "lng": 0.1517
  },
  {
    "city": "Guelma",
    "lat": 36.4619,
    "lng": 7.4258
  },
  {
    "city": "Ghardaia",
    "lat": 32.4833,
    "lng": 3.6667
  },
  {
    "city": "Ain Beida",
    "lat": 35.7964,
    "lng": 7.3928
  },
  {
    "city": "Khenchela",
    "lat": 35.4167,
    "lng": 7.1333
  },
  {
    "city": "Bou Saada",
    "lat": 35.2083,
    "lng": 4.1739
  },
  {
    "city": "Mascara",
    "lat": 35.4,
    "lng": 0.1333
  },
  {
    "city": "Messaad",
    "lat": 34.1542,
    "lng": 3.4969
  },
  {
    "city": "Ain Oussera",
    "lat": 35.4489,
    "lng": 2.9044
  },
  {
    "city": "Oum el Bouaghi",
    "lat": 35.8706,
    "lng": 7.115
  },
  {
    "city": "El Bayadh",
    "lat": 33.6831,
    "lng": 1.0192
  },
  {
    "city": "Dar el Beida",
    "lat": 36.7142,
    "lng": 3.2125
  },
  {
    "city": "Ain Temouchent",
    "lat": 35.3044,
    "lng": -1.14
  },
  {
    "city": "Tamanrasset",
    "lat": 22.785,
    "lng": 5.5228
  },
  {
    "city": "Tissemsilt",
    "lat": 35.6072,
    "lng": 1.8106
  },
  {
    "city": "Bouira",
    "lat": 36.38,
    "lng": 3.9014
  },
  {
    "city": "Adrar",
    "lat": 27.8742,
    "lng": -0.2939
  },
  {
    "city": "Boudouaou",
    "lat": 36.73,
    "lng": 3.41
  },
  {
    "city": "Tindouf",
    "lat": 27.6753,
    "lng": -8.1286
  },
  {
    "city": "Boumerdes",
    "lat": 36.7603,
    "lng": 3.4724
  },
  {
    "city": "El Golea",
    "lat": 30.6,
    "lng": 2.9
  },
  {
    "city": "Touggourt",
    "lat": 33.1,
    "lng": 6.0667
  },
  {
    "city": "Timimoun",
    "lat": 29.25,
    "lng": 0.2333
  },
  {
    "city": "I-n-Salah",
    "lat": 27.1936,
    "lng": 2.4606
  },
  {
    "city": "El Tarf",
    "lat": 36.7669,
    "lng": 8.3136
  },
  {
    "city": "Tipasa",
    "lat": 36.5942,
    "lng": 2.443
  },
  {
    "city": "Illizi",
    "lat": 26.508,
    "lng": 8.4829
  },
  {
    "city": "Bordj Mokhtar",
    "lat": 21.3289,
    "lng": 0.9542
  },
  {
    "city": "Naama",
    "lat": 33.2678,
    "lng": -0.3111
  },
  {
    "city": "Djanet",
    "lat": 24.555,
    "lng": 9.4853
  },
  {
    "city": "Beni Abbes",
    "lat": 30.08,
    "lng": -2.1
  },
  {
    "city": "In Guezzam",
    "lat": 19.5686,
    "lng": 5.7722
  },
  {
    "city": "Ain Defla",
    "lat": 36.2583,
    "lng": 1.9583
  },
  {
    "city": "Mila",
    "lat": 36.4481,
    "lng": 6.2622
  },
  {
    "city": "Ouled Djellal",
    "lat": 34.4167,
    "lng": 5.0667
  },
  {
    "city": "El Meghaier",
    "lat": 33.9506,
    "lng": 5.9242
  },
  {
    "city": "Es Senia",
    "lat": 35.6478,
    "lng": -0.6239
  },
  {
    "city": "Ain M'Lila",
    "lat": 36.0367,
    "lng": 6.5719
  },
  {
    "city": "Khemis Miliana",
    "lat": 36.26,
    "lng": 2.2
  },
  {
    "city": "El Milia",
    "lat": 36.75,
    "lng": 6.2667
  },
  {
    "city": "Chelghoum el Aid",
    "lat": 36.1667,
    "lng": 6.1667
  },
  {
    "city": "Khemis el Khechna",
    "lat": 36.65,
    "lng": 3.3306
  },
  {
    "city": "Bordj Menaiel",
    "lat": 36.7417,
    "lng": 3.7231
  },
  {
    "city": "Mecheria",
    "lat": 33.55,
    "lng": -0.2833
  },
  {
    "city": "Ain Sefra",
    "lat": 32.75,
    "lng": -0.5833
  },
  {
    "city": "Rouiba",
    "lat": 36.7333,
    "lng": 3.2833
  },
  {
    "city": "Tighenif",
    "lat": 35.4167,
    "lng": 0.333
  },
  {
    "city": "Lakhdaria",
    "lat": 36.5622,
    "lng": 3.5944
  },
  {
    "city": "Boufarik",
    "lat": 36.575,
    "lng": 2.9097
  },
  {
    "city": "Azzaba",
    "lat": 36.7333,
    "lng": 7.1
  },
  {
    "city": "Akbou",
    "lat": 36.4667,
    "lng": 4.5333
  },
  {
    "city": "'Ain Azel",
    "lat": 35.8433,
    "lng": 5.5219
  },
  {
    "city": "Ouled Moussa",
    "lat": 36.6831,
    "lng": 3.3681
  },
  {
    "city": "Hassi Messaoud",
    "lat": 31.7,
    "lng": 6.0667
  },
  {
    "city": "'Ain Arnat",
    "lat": 36.1833,
    "lng": 5.3167
  },
  {
    "city": "Draa el Mizan",
    "lat": 36.5333,
    "lng": 3.8333
  },
  {
    "city": "Souma",
    "lat": 36.5183,
    "lng": 2.9053
  },
  {
    "city": "Bougara",
    "lat": 36.5333,
    "lng": 3.0833
  },
  {
    "city": "Azazga",
    "lat": 36.7453,
    "lng": 4.3711
  },
  {
    "city": "Didouche Mourad",
    "lat": 36.4484,
    "lng": 6.6339
  },
  {
    "city": "Dellys",
    "lat": 36.9133,
    "lng": 3.9141
  },
  {
    "city": "Draa Ben Khedda",
    "lat": 36.7349,
    "lng": 3.9556
  },
  {
    "city": "Boghni",
    "lat": 36.5437,
    "lng": 3.9523
  },
  {
    "city": "'Ain Abid",
    "lat": 36.2325,
    "lng": 6.944
  },
  {
    "city": "Tizi Gheniff",
    "lat": 36.5891,
    "lng": 3.7678
  },
  {
    "city": "El Kseur",
    "lat": 36.6844,
    "lng": 4.8522
  },
  {
    "city": "L'Arbaa Nait Irathen",
    "lat": 36.6367,
    "lng": 4.2067
  },
  {
    "city": "N'Gaous",
    "lat": 35.555,
    "lng": 5.6106
  },
  {
    "city": "Timizart",
    "lat": 36.8,
    "lng": 4.2667
  },
  {
    "city": "Babar",
    "lat": 35.1692,
    "lng": 7.1013
  },
  {
    "city": "Freha",
    "lat": 36.762,
    "lng": 4.3163
  },
  {
    "city": "Mekla",
    "lat": 36.6876,
    "lng": 4.2681
  },
  {
    "city": "Tadjmout",
    "lat": 33.8667,
    "lng": 2.5167
  },
  {
    "city": "Beni Amrane",
    "lat": 36.6686,
    "lng": 3.5922
  },
  {
    "city": "Makouda",
    "lat": 36.7909,
    "lng": 4.0669
  },
  {
    "city": "Tadmait",
    "lat": 36.7427,
    "lng": 3.9019
  },
  {
    "city": "Amoucha",
    "lat": 36.388,
    "lng": 5.4108
  },
  {
    "city": "Naciria",
    "lat": 36.75,
    "lng": 3.8333
  },
  {
    "city": "Kadiria",
    "lat": 36.5333,
    "lng": 3.6833
  },
  {
    "city": "Djinet",
    "lat": 36.877,
    "lng": 3.7231
  },
  {
    "city": "Beni Douala",
    "lat": 36.6167,
    "lng": 4.0667
  },
  {
    "city": "Thenia",
    "lat": 36.7278,
    "lng": 3.5539
  },
  {
    "city": "Tizi-n-Bechar",
    "lat": 36.4311,
    "lng": 5.36
  },
  {
    "city": "'Ain el Hammam",
    "lat": 36.5714,
    "lng": 4.3097
  },
  {
    "city": "Aomar",
    "lat": 36.5,
    "lng": 3.7833
  },
  {
    "city": "Tala Yfassene",
    "lat": 36.4583,
    "lng": 5.0889
  },
  {
    "city": "Reggane",
    "lat": 26.7,
    "lng": 0.1667
  },
  {
    "city": "Arbaoun",
    "lat": 36.4667,
    "lng": 5.65
  },
  {
    "city": "Tirmitine",
    "lat": 36.6618,
    "lng": 3.9848
  },
  {
    "city": "Timoktene",
    "lat": 27.0217,
    "lng": 1.015
  },
  {
    "city": "Bettioua",
    "lat": 35.8,
    "lng": -0.2667
  },
  {
    "city": "Beni Fouda",
    "lat": 36.2861,
    "lng": 5.6071
  },
  {
    "city": "Tizi Rached",
    "lat": 36.6718,
    "lng": 4.1918
  },
  {
    "city": "Ain Zaouia",
    "lat": 36.5483,
    "lng": 3.8942
  },
  {
    "city": "Sidi Daoud",
    "lat": 36.85,
    "lng": 3.85
  },
  {
    "city": "Azeffoun",
    "lat": 36.8961,
    "lng": 4.4204
  },
  {
    "city": "Tichi",
    "lat": 36.6675,
    "lng": 5.1601
  },
  {
    "city": "'Ain Abessa",
    "lat": 36.3,
    "lng": 5.295
  },
  {
    "city": "Chorfa",
    "lat": 36.3617,
    "lng": 4.3307
  },
  {
    "city": "Ouadhia",
    "lat": 36.55,
    "lng": 4.0833
  },
  {
    "city": "Boudjima",
    "lat": 36.814,
    "lng": 4.1588
  },
  {
    "city": "Tizi-n-Tleta",
    "lat": 36.5457,
    "lng": 4.0571
  },
  {
    "city": "Ait Yaich",
    "lat": 36.5811,
    "lng": 4.3303
  },
  {
    "city": "Ouled Sidi Brahim",
    "lat": 36.3667,
    "lng": 3.7167
  },
  {
    "city": "Iflissen",
    "lat": 36.8636,
    "lng": 4.2203
  },
  {
    "city": "Abadla",
    "lat": 31.0167,
    "lng": -2.7333
  },
  {
    "city": "Takerbouzt",
    "lat": 36.418,
    "lng": 4.3428
  },
  {
    "city": "Moudjbara",
    "lat": 34.5037,
    "lng": 3.4704
  },
  {
    "city": "Afir",
    "lat": 36.7676,
    "lng": 3.7029
  },
  {
    "city": "Mechtras",
    "lat": 36.5448,
    "lng": 4.0049
  },
  {
    "city": "Sali",
    "lat": 26.9833,
    "lng": -0.0333
  },
  {
    "city": "El Marsa",
    "lat": 36.8111,
    "lng": 3.2556
  },
  {
    "city": "Arhribs",
    "lat": 36.8022,
    "lng": 4.3227
  },
  {
    "city": "Si Mustapha",
    "lat": 36.7247,
    "lng": 3.6153
  },
  {
    "city": "Iferhounene",
    "lat": 36.5338,
    "lng": 4.3701
  },
  {
    "city": "El Adjiba",
    "lat": 36.3333,
    "lng": 4.15
  },
  {
    "city": "Yakouren",
    "lat": 36.7348,
    "lng": 4.4386
  },
  {
    "city": "Tigzirt",
    "lat": 36.8931,
    "lng": 4.1225
  },
  {
    "city": "Bechloul",
    "lat": 36.3167,
    "lng": 4.0667
  },
  {
    "city": "El Ancor",
    "lat": 35.6833,
    "lng": -0.8667
  },
  {
    "city": "'Ain Roua",
    "lat": 36.3344,
    "lng": 5.1806
  },
  {
    "city": "Charouine",
    "lat": 29.0167,
    "lng": -0.2667
  },
  {
    "city": "Bir Ghbalou",
    "lat": 36.2642,
    "lng": 3.5836
  },
  {
    "city": "Sidi Namane",
    "lat": 36.7581,
    "lng": 3.9839
  },
  {
    "city": "Sidi Brahim",
    "lat": 35.2606,
    "lng": -0.5675
  },
  {
    "city": "Ben N'Choud",
    "lat": 36.8624,
    "lng": 3.8806
  },
  {
    "city": "Bordj Okhriss",
    "lat": 36.0833,
    "lng": 3.9667
  },
  {
    "city": "Ben Nasseur",
    "lat": 33.1107,
    "lng": 6.441
  },
  {
    "city": "Souama",
    "lat": 36.6417,
    "lng": 4.3416
  },
  {
    "city": "Bou Nouh",
    "lat": 36.5,
    "lng": 3.9333
  },
  {
    "city": "Toudja",
    "lat": 36.7586,
    "lng": 4.8933
  },
  {
    "city": "Ifigha",
    "lat": 36.6667,
    "lng": 4.4167
  },
  {
    "city": "Ouled Rached",
    "lat": 36.2119,
    "lng": 4.1106
  },
  {
    "city": "Seddouk Oufella",
    "lat": 36.6061,
    "lng": 4.6389
  },
  {
    "city": "I-n-Amenas",
    "lat": 28.05,
    "lng": 9.55
  },
  {
    "city": "Abalessa",
    "lat": 22.89,
    "lng": 4.8472
  },
  {
    "city": "Boukhralfa",
    "lat": 36.6144,
    "lng": 5.0872
  },
  {
    "city": "Tifra",
    "lat": 36.6664,
    "lng": 4.6972
  },
  {
    "city": "Amalou",
    "lat": 36.4778,
    "lng": 4.6333
  },
  {
    "city": "Beni Ounif",
    "lat": 32.05,
    "lng": -1.25
  },
  {
    "city": "I-n-Amguel",
    "lat": 23.6936,
    "lng": 5.1647
  }
 ]


 export default cities;
