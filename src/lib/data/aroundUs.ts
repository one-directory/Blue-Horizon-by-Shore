export interface AroundUsItem {
  id: string;
  name: string;
  description: string;
  category: "Beach" | "Heritage" | "Spirituality" | "Nature" | "Food" | "Culture";
  distance?: string;
  travelTime?: string;
  highlights: string[];
  image?: string;
}

export const aroundUsPlaces: AroundUsItem[] = [
  // BEACH
  {
    id: "malpe-beach",
    name: "Malpe Beach",
    description: "One of Karnataka's finest beaches, celebrated for its golden sands, active water sports, and stunning sunsets over the Arabian Sea.",
    category: "Beach",
    distance: "8.5 km",
    travelTime: "15 min drive",
    highlights: ["Water sports", "Golden sands", "Sunset views", "Safe swimming"],
    image: "/beach/malpe beach/malpe main.webp"
  },
  {
    id: "malpe-sea-walk",
    name: "Malpe Sea Walk",
    description: "A scenic pedestrian pathway stretching into the ocean, offering panoramic views of the water, passing boats, and St. Mary's Island.",
    category: "Beach",
    distance: "9.5 km",
    travelTime: "18 min drive",
    highlights: ["Ocean breeze", "Scenic pathway", "Ferry point views", "Sunset strolls"],
    image: "/beach/malpe sea walk/malpe sea walk main.webp"
  },
  {
    id: "malpe-fishing-harbour",
    name: "Malpe Fishing Harbour",
    description: "One of the largest fishing ports on the coast. Visit at dawn to witness the vibrant, authentic spectacle of fish markets and colorful trawlers.",
    category: "Beach",
    distance: "7.5 km",
    travelTime: "14 min drive",
    highlights: ["Dawn auctions", "Traditional boats", "Fresh local catch", "Vibrant trade"],
    image: "/beach/malpe fishing harbour/malpe fishing main.webp"
  },
  {
    id: "delta-beach",
    name: "Delta Beach (Kodi Bengre)",
    description: "A serene, narrow strip of land where the Suvarna River merges with the Arabian Sea, featuring quiet backwaters and dense mangrove fringes.",
    category: "Beach",
    distance: "17 km",
    travelTime: "30 min drive",
    highlights: ["River-sea estuary", "Silent shores", "Local toddy shops", "Peaceful sunset"],
    image: "/beach/delta beach bengre/delta main.webp"
  },
  {
    id: "padubidri-beach",
    name: "Padubidri Blue Flag Beach",
    description: "An internationally certified eco-beach known for its high safety standards, pristine cleanliness, solar lighting, and play parks.",
    category: "Beach",
    distance: "20 km",
    travelTime: "28 min drive",
    highlights: ["Blue Flag certified", "Eco-friendly park", "Showers & lockers", "Family friendly"],
    image: "/beach/padubidri blue flag/padubidri main.webp"
  },
  {
    id: "mattu-beach",
    name: "Mattu Beach (Udyavara)",
    description: "A quiet, secluded beach famous for its coconut groves and bioluminescent plankton that occasionally light up the shoreline at night.",
    category: "Beach",
    distance: "3.5 km",
    travelTime: "6 min drive",
    highlights: ["Bioluminescence", "Coconut groves", "Secluded shores", "Scenic drive"],
    image: "/beach/mattu beach/mattu main.webp"
  },
  {
    id: "marvanthe-beach",
    name: "Maravanthe Beach",
    description: "A unique geographical marvel where the National Highway runs between the blue waves of the Arabian Sea on one side and the calm Suparnika River on the other.",
    category: "Beach",
    distance: "60 km",
    travelTime: "1 hr 10 min drive",
    highlights: ["Highway coastal drive", "Estuary views", "Scenic photography", "Calm river banks"],
    image: "/beach/marvanthe beach/marvanthe main.webp"
  },
  {
    id: "kapu-beach",
    name: "Kapu Beach (Kaup)",
    description: "A dramatic beach famous for its 100-year-old operational lighthouse standing on a black basalt rocky outcrop.",
    category: "Beach",
    distance: "11 km",
    travelTime: "18 min drive",
    highlights: ["Historic lighthouse", "Rocky viewpoints", "Panoramic climb", "Violent surf"],
    image: "/beach/kaup beach/kaup main.webp"
  },
  {
    id: "st-marys-island",
    name: "St. Mary's Island",
    description: "A geological marvel off the coast of Malpe, famous for its unique hexagonal basalt rock columns and pristine shell-lined beaches.",
    category: "Beach",
    distance: "8.5 km to boat point",
    travelTime: "15 min drive + 20 min ferry",
    highlights: ["Geological marvel", "Basalt formations", "Shell-lined shores", "Vasco da Gama stop"],
    image: "/beach/st.marys island/st marys main.webp"
  },

  // HERITAGE
  {
    id: "hasta-shilpa",
    name: "Hasta Shilpa Heritage Village",
    description: "An open-air museum in Manipal featuring meticulously restored traditional houses, shrines, and artifacts from all over coastal Karnataka.",
    category: "Heritage",
    distance: "13 km",
    travelTime: "22 min drive",
    highlights: ["Heritage architecture", "Restored homes", "Traditional crafts", "Manipal hills"],
    image: "/heritage/hasta shilpa/hasta main.webp"
  },
  {
    id: "coin-museum",
    name: "Coin Museum Udupi",
    description: "A specialized museum established by Corporation Bank showcasing a vast collection of coins dating back to ancient Indian empires and dynasties.",
    category: "Heritage",
    distance: "7.5 km",
    travelTime: "15 min drive",
    highlights: ["Ancient Indian coins", "Trade history info", "Numismatic archives", "Udupi town center"],
    image: "/heritage/coin museum/coin main.webp"
  },

  // NATURE
  {
    id: "saligrama-mangrove",
    name: "Saligrama Backwater Mangrove Forest",
    description: "A thriving wetland ecosystem of dense mangroves. Best explored via quiet kayaking or slow boat rides through narrow green canopy channels.",
    category: "Nature",
    distance: "28 km",
    travelTime: "40 min drive",
    highlights: ["Mangrove kayaking", "Bird watching", "Estuary boating", "Quiet eco-tourism"],
    image: "/nature/saligrama backwater/saligrama main.webp"
  },
  {
    id: "hanging-bridge",
    name: "Kemmannu Hanging Bridge",
    description: "A rustic suspension bridge spanning across a calm river channel, surrounded by coconut plantations and offering beautiful green views.",
    category: "Nature",
    distance: "14 km",
    travelTime: "25 min drive",
    highlights: ["Kemmannu bridge", "Suspension walkway", "Scenic photography", "Quiet surroundings"],
    image: "/nature/hanging bridge/hanging bridge main.webp"
  },

  // SPIRITUALITY
  {
    id: "sri-krishna-temple",
    name: "Sri Krishna Temple, Udupi",
    description: "The Sri Krishna Temple in Udupi is not just a place of worship but a cultural and historical landmark that embodies the region’s rich heritage. From its architectural splendor to its deep-rooted spiritual practices, the temple offers a soul-stirring experience for devotees and visitors alike.",
    category: "Spirituality",
    distance: "7 km",
    travelTime: "15 min drive",
    highlights: ["Kanakana Kindi", "Madhvacharya Saint", "Rathotsava Festival", "Annadanam Feast"],
    image: "/spirituality/sri krishna temple/sri krishna main.webp"
  },
  {
    id: "kollur-mookambika",
    name: "Sri Mookambika Temple, Kollur",
    description: "Immerse yourself in the sacred embrace of Sri Mookambika Temple, a revered pilgrimage site situated at the foothills of Kodachadri hills, known for its deep spiritual energy and peaceful atmosphere.",
    category: "Spirituality",
    distance: "80 km",
    travelTime: "1 hr 45 min drive",
    highlights: ["Goddess Mookambika", "Kodachadri Hills", "Sankara Peetham", "Souparnika River"],
    image: "/spirituality/kollur mookambika/kollur main.webp"
  },
  {
    id: "attur-church",
    name: "St. Lawrence Basilica, Attur",
    description: "A historic Roman Catholic church in Karkala, renowned for its architectural beauty, peaceful shrine, and miracle-attributed history that draws people of all faiths.",
    category: "Spirituality",
    distance: "35 km",
    travelTime: "45 min drive",
    highlights: ["St. Lawrence Shrine", "Historic Basilica", "Annual Feast", "Scenic Karkala hills"],
    image: "/spirituality/attur church/attur main.webp"
  },
  {
    id: "varanga-jain",
    name: "Varanga Jain Basadi",
    description: "A spectacular Jain temple complex set in a peaceful lake, featuring the unique Kere Basadi (lake temple) that can only be reached by wooden boat.",
    category: "Spirituality",
    distance: "36 km",
    travelTime: "50 min drive",
    highlights: ["Kere Basadi (Lake Temple)", "Boat Ride Access", "12th Century Heritage", "Serene surroundings"],
    image: "/spirituality/varanga jain/varanga main.webp"
  },

  // FOOD
  {
    id: "kori-rotti",
    name: "Kori Rotti",
    description: "Kori Rotti is among the most favourite traditional delicacies of Tulunadu region. “Kori” means Chicken in Tulu and “Rotti” is crispy rice wafers easily available in local stores in Udupi. To enjoy this dish, the chicken gravy is poured on rotti and rice wafers are soaked and eaten while still crispy. The flavorful chicken gravy with rich coconut mixed with rotti makes it a delightful combination.",
    category: "Food",
    highlights: ["Crispy rice wafers", "Spicy chicken gravy", "Traditional Tulu feast", "Signature dish"],
    image: "/food/kori rotti/kori rotti.webp"
  },
  {
    id: "masala-dosa",
    name: "Masala Dosa",
    description: "Masala dosa is a dish of South India. It is a type of dosa originating in the town of Udupi, Karnataka. While there is variation in the recipe from town to town the basic recipe typically starts with a fermented batter of parboiled rice, poha, and various legumes (black gram, pigeon peas, chickpeas), and incorporates various spices for flavour, such as fenugreek and dry red chilli. Traditionally served with potato curry, chutneys, and sambar, it is a common breakfast item in South India, though it can also be found in many other parts of the country and overseas. One common variant is the paper masala dosa, which is made with a thinner batter, resulting in a crisper, almost paper-thin final product.",
    category: "Food",
    highlights: ["Ghee roasted", "Potato masala", "Udupi filter coffee", "Chutney & sambar"],
    image: "/food/masala dosa/masala dosa.webp"
  },
  {
    id: "ghee-roast",
    name: "Ghee Roast",
    description: "Ghee Roast is popular Udupi dish made by slow-cooking meat (like chicken or lamb) or vegetables in ghee (clarified butter) with aromatic spices. The spices typically include red chili, coriander, cumin, and garam masala, which are enhanced by the richness of ghee. The dish is known for its deep, caramelized flavor and is often served with rice, naan, or chapati. Popular variations include chicken ghee roast and seafood ghee roast, especially in coastal regions. Ghee adds a unique richness and is considered a healthy fat in traditional cooking.",
    category: "Food",
    highlights: ["Kundapur masala", "Fiery & rich", "Chicken or Paneer", "Highly aromatic"],
    image: "/food/ghee roast/ghee roast.webp"
  },
  {
    id: "kori-sukka",
    name: "Kori Sukka / Chicken Sukka",
    description: "Kori Sukka, also known as Chicken Sukka, is a popular Udupi dish celebrated for its rich flavors and unique preparation. Made with tender chicken cooked in a blend of roasted coconut, aromatic spices, and traditional masala, it offers a burst of coastal Karnataka flavors. Often served with neer dosa or rice, this dish is a must-try for food lovers exploring Udupi's culinary heritage.",
    category: "Food",
    highlights: ["Grated coconut", "Dry spice blend", "Pairs with Neer Dosa", "Coastal favorite"],
    image: "/food/Kori Sukka/Kori Sukka.webp"
  },
  {
    id: "marwai-sukka",
    name: "Marwai Sukka / Clam Sukka",
    description: "Marwai Sukka, also known as Clam Sukka, is a beloved seafood delicacy from Udupi district. This dish features fresh clams cooked with grated coconut, aromatic spices, and a hint of tamarind, creating a perfect balance of flavors. Often enjoyed with neer dosa or rice, Marwai Sukka highlights Udupi’s coastal cuisine and its mastery of blending traditional spices with fresh seafood.",
    category: "Food",
    highlights: ["Fresh backwater clams", "Dry coconut masala", "Seafood specialty", "Local comfort food"],
    image: "/food/Marwai Sukka/Marwai Sukka.webp"
  },
  {
    id: "neer-dosa",
    name: "Neer Dosa",
    description: "Neer Dose is a coastal Karnataka delicacy. Neer Dose translates to ‘Water Dosa’. Neer Dose is a dosa variant made out of batter made from soaked rice (no fermentation unlike regular Dosa or Idli). After a few hours of soaking, rice is ground to make Neer Dose batter. A bit of salt is added for taste. Neer dose is often served with Jaggery + Coconut Gratings or vegetable curries and chutney. Non-vegetarian dishes such as Chicken Gravy can be opted as a great accompaniment with Neer dose.",
    category: "Food",
    highlights: ["Gluten-free rice crepe", "Pairs with fish curry", "Served with coconut milk", "Super light texture"],
    image: "/food/Neer Dosa/Neer Dosa.webp"
  },
  {
    id: "golibaje",
    name: "Golibaje",
    description: "Golibaje is a beloved snack from the coastal region of Karnataka, especially Udupi and Mangalore. Made from urad dal (black gram) batter, it is seasoned with spices like green chilies, ginger, curry leaves, and sometimes coconut. The batter is soaked, ground, and fermented to enhance its flavor. To prepare Golibaje, small portions of the batter are deep-fried until golden and crispy on the outside, while staying soft and fluffy on the inside. This delicious treat is typically served with coconut chutney or sambar, making it a popular snack for tea time or as an appetizer.",
    category: "Food",
    highlights: ["Evening snack", "Yogurt batter fritters", "Spicy coconut chutney", "Soft & spongy"],
    image: "/food/goli baje/goli baje.webp"
  },
  {
    id: "buns",
    name: "Buns (Mangalore Buns)",
    description: "Udupi-Mangalore Buns is a deep-fried bread originating from the Udupi-Mangalore region of Karnataka, India, and part of Udupi cuisine. The buns are mild sweet, soft fluffy puris with all purpose flour and banana being the main ingredients. Usually served with a spicy coconut chutney and sambar, they are also eaten without any accompaniment. Variations of this dish also incorporate finger millet and Sorghum.",
    category: "Food",
    highlights: ["Banana-infused dough", "Fluffy fried bread", "Sweet-spicy contrast", "Traditional snack"],
    image: "/food/buns/buns.webp"
  },
  {
    id: "rice-balls",
    name: "Rice Balls (Pundi)",
    description: "Rice Balls / Akki Pundi is one of the healthy delicacies from the Udupi and Mangalore region made specifically for the morning breakfast. It is typically served with coconut chutney but tastes great when served with spicy chutney or any veg / nonveg curry. It requires little effort in making the food which can be served later. So it makes its entry to the top list of easy breakfast items. There are various methods of preparing this particular dish and it can be done with either white or boiled rice.",
    category: "Food",
    highlights: ["Steamed rice dumplings", "Hearty breakfast", "Served with chicken curry", "Tulu home style"],
    image: "/food/Rice Balls/Rice Balls.webp"
  },
  {
    id: "moode",
    name: "Moode",
    description: "Moode (Rice Pancake) is a traditional dish from the Udupi. It is a type of savory steamed rice cake, often prepared using rice flour, grated coconut, and spices. The dough is shaped into small discs and steamed, resulting in a soft, spongy texture. Moode is typically served with chutney or sambar and is commonly enjoyed for breakfast or as a snack. It's similar to other regional steamed rice cakes like idli but has its own unique preparation and flavor profile.",
    category: "Food",
    highlights: ["Screwpine leaf wrapper", "Steamed rice cake", "Traditional festivals", "Fragrant aroma"],
    image: "/food/moode/moode.webp"
  },
  {
    id: "patrode",
    name: "Patrode",
    description: "Patrode is a traditional dish from Coastal Karnataka made using colocasia leaves (Kesuvina Ele). The leaves, grown near water streams, are carefully selected for their ideal ripeness and then layered with a mixture of rice flour, urad dal, spices, tamarind, and jaggery. These layers are rolled and steamed to create a flavorful, unique dish. Although colocasia leaves can cause itchiness when consumed raw, Patrode minimizes this by incorporating coconut oil and jaggery. The dish has a naturally sour taste, which is balanced with the sweetness of jaggery.",
    category: "Food",
    highlights: ["Colocasia leaves", "Spicy-sweet-sour paste", "Monsoon delicacy", "Pan-fried crispy"],
    image: "/food/patrode/6790ff8cea0bc63691339537_Patrode.webp"
  },

  // CULTURE
  {
    id: "naga-aradhane",
    name: "Naga Aradhane (Nagamandala)",
    description: "Naga Aradhane, or Nagamandala, is a deeply spiritual and culturally significant ritual in the Tulunadu region of Karnataka. This elaborate serpent worship ceremony is held in honor of the Naga (serpent god), who is believed to bring blessings, fertility, and protection. The event is celebrated from December to April, marking a sacred period in the region's calendar.",
    category: "Culture",
    highlights: ["Serpent worship ritual", "Intricate floor art", "Traditional music", "Sacred Tulu lore"],
    image: "/culture/naga aradhane/naga.webp"
  },
  {
    id: "yakshagana",
    name: "Traditional Yakshagana Performances",
    description: "Yakshagana is a vibrant and captivating folk art form from Coastal Karnataka, known for its energetic performances that combine dance, music, drama, and striking costumes. Rooted in ancient traditions, Yakshagana performances (called Prasangas) are inspired by episodes from Hindu epics like the Ramayana and Mahabharata. It is a unique experience that immerses audiences in a world of celestial storytelling.",
    category: "Culture",
    highlights: ["Dance-drama theatre", "Epic mythology tales", "Ornate costumes", "All-night shows"],
    image: "/culture/yakshagana/yakshagana.webp"
  },
  {
    id: "kambala",
    name: "Kambala Buffalo Race",
    description: "Kambala is a traditional sport and cultural event deeply rooted in Tulunadu's agricultural heritage. Taking place between October and March, this buffalo race transforms slushy fields into arenas of celebration and competition. Originating as a ritual to honor land and nature, Kambala has evolved into a community event that attracts locals, tourists, and photographers alike.",
    category: "Culture",
    highlights: ["Muddy track racing", "Traditional winter sport", "Harvest thanksgiving", "High-energy spectacle"],
    image: "/culture/kambala/kambala.webp"
  },
  {
    id: "bhoota-kola",
    name: "Bhoota Kola Ceremony",
    description: "Bhootha Aradhane, also known as Bhootada Kola, is a distinctive form of deity worship practiced in Tulunadu. This tradition integrates social, economic, and religious aspects, creating a unique spiritual experience for the community. It is an elaborate ritual where performers embody spirits or deities (known as Bhootas), delivering divine justice and blessings to the devotees.",
    category: "Culture",
    highlights: ["Spirit worship dance", "Nocturnal ceremony", "Medium channeling", "Ancestral deities"],
    image: "/culture/bhoota kola/bhoota kola.webp"
  }
];
