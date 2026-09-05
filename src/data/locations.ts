export type Location = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  imageUrl: string;
};

export const LOCATIONS: Location[] = [
  {
    id: 'eiffel-tower',
    name: 'Eiffel Tower, Paris, France',
    lat: 48.8584,
    lng: 2.2945,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/1280px-Tour_Eiffel_Wikimedia_Commons.jpg',
  },
  {
    id: 'statue-of-liberty',
    name: 'Statue of Liberty, New York, USA',
    lat: 40.6892,
    lng: -74.0445,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg/1280px-Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg',
  },
  {
    id: 'colosseum',
    name: 'Colosseum, Rome, Italy',
    lat: 41.8902,
    lng: 12.4922,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1280px-Colosseo_2020.jpg',
  },
  {
    id: 'taj-mahal',
    name: 'Taj Mahal, Agra, India',
    lat: 27.1751,
    lng: 78.0421,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg',
  },
  {
    id: 'sydney-opera',
    name: 'Sydney Opera House, Australia',
    lat: -33.8568,
    lng: 151.2153,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/1280px-Sydney_Opera_House_-_Dec_2008.jpg',
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu, Peru',
    lat: -13.1631,
    lng: -72.545,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1280px-Machu_Picchu%2C_Peru.jpg',
  },
  {
    id: 'great-wall',
    name: 'Great Wall of China, Beijing area',
    lat: 40.4319,
    lng: 116.5704,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1280px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg',
  },
  {
    id: 'christ-redeemer',
    name: 'Christ the Redeemer, Rio de Janeiro, Brazil',
    lat: -22.9519,
    lng: -43.2105,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg/1280px-Christ_the_Redeemer_-_Cristo_Redentor.jpg',
  },
  {
    id: 'pyramids-giza',
    name: 'Pyramids of Giza, Egypt',
    lat: 29.9792,
    lng: 31.1342,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1280px-All_Gizah_Pyramids.jpg',
  },
  {
    id: 'big-ben',
    name: 'Big Ben / Elizabeth Tower, London, UK',
    lat: 51.4994,
    lng: -0.1245,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Elizabeth_Tower_and_the_north_front_of_the_Palace_of_Westminster%2C_London.jpg/1280px-Elizabeth_Tower_and_the_north_front_of_the_Palace_of_Westminster%2C_London.jpg',
  },
  {
    id: 'sagrada-familia',
    name: 'Sagrada Familia, Barcelona, Spain',
    lat: 41.4036,
    lng: 2.1744,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sagrada_Familia_01.jpg/1280px-Sagrada_Familia_01.jpg',
  },
  {
    id: 'mount-fuji',
    name: 'Mount Fuji, Japan',
    lat: 35.3606,
    lng: 138.7274,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/080103_hakkai_fuji.jpg/1280px-080103_hakkai_fuji.jpg',
  },
  {
    id: 'golden-gate',
    name: 'Golden Gate Bridge, San Francisco, USA',
    lat: 37.8199,
    lng: -122.4783,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1280px-GoldenGateBridge-001.jpg',
  },
  {
    id: 'petra',
    name: 'Petra Treasury, Jordan',
    lat: 30.3285,
    lng: 35.4444,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Treasury_petra_crop.jpeg/1280px-Treasury_petra_crop.jpeg',
  },
  {
    id: 'angkor-wat',
    name: 'Angkor Wat, Cambodia',
    lat: 13.4125,
    lng: 103.8667,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ankor_Wat_temple.jpg/1280px-Ankor_Wat_temple.jpg',
  },
  {
    id: 'table-mountain',
    name: 'Table Mountain, Cape Town, South Africa',
    lat: -33.9628,
    lng: 18.4098,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Table_Mountain_DanieVDM.jpg/1280px-Table_Mountain_DanieVDM.jpg',
  },
  {
    id: 'neuschwanstein',
    name: 'Neuschwanstein Castle, Bavaria, Germany',
    lat: 47.5576,
    lng: 10.7498,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Schloss_Neuschwanstein_2013.jpg/1280px-Schloss_Neuschwanstein_2013.jpg',
  },
  {
    id: 'burj-khalifa',
    name: 'Burj Khalifa, Dubai, UAE',
    lat: 25.1972,
    lng: 55.2744,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Dubai_Skyline_mit_Burj_Khalifa_%2818241030269%29.jpg/1280px-Dubai_Skyline_mit_Burj_Khalifa_%2818241030269%29.jpg',
  },
  {
    id: 'niagara-falls',
    name: 'Niagara Falls, Canada/USA',
    lat: 43.0828,
    lng: -79.0742,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/3Falls_Niagara.jpg/1280px-3Falls_Niagara.jpg',
  },
  {
    id: 'santorini',
    name: 'Oia, Santorini, Greece',
    lat: 36.4618,
    lng: 25.3753,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Oia_Santorini.jpg/1280px-Oia_Santorini.jpg',
  },
  {
    id: 'times-square',
    name: 'Times Square, New York, USA',
    lat: 40.758,
    lng: -73.9855,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1280px-New_york_times_square-terabass.jpg',
  },
  {
    id: 'grand-canyon',
    name: 'Grand Canyon, Arizona, USA',
    lat: 36.0544,
    lng: -112.1401,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Canyon_River_Tree_%28165872763%29.jpeg/1280px-Canyon_River_Tree_%28165872763%29.jpeg',
  },
  {
    id: 'hagia-sophia',
    name: 'Hagia Sophia, Istanbul, Turkey',
    lat: 41.0086,
    lng: 28.9802,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/1280px-Hagia_Sophia_Mars_2013.jpg',
  },
  {
    id: 'chichen-itza',
    name: 'Chichen Itza, Yucatan, Mexico',
    lat: 20.6843,
    lng: -88.5678,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/1280px-Chichen_Itza_3.jpg',
  },
  {
    id: 'banff',
    name: 'Moraine Lake, Banff, Canada',
    lat: 51.4254,
    lng: -116.1773,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Moraine_Lake.jpg/1280px-Moraine_Lake.jpg',
  },
  {
    id: 'moai-easter',
    name: 'Moai, Easter Island, Chile',
    lat: -27.1257,
    lng: -109.2768,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/AhuTongariki.JPG/1280px-AhuTongariki.JPG',
  },
  {
    id: 'venice-canal',
    name: 'Grand Canal, Venice, Italy',
    lat: 45.4371,
    lng: 12.3326,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Venezia_aerial_view.jpg/1280px-Venezia_aerial_view.jpg',
  },
  {
    id: 'uluru',
    name: 'Uluru, Northern Territory, Australia',
    lat: -25.3444,
    lng: 131.0369,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/ULURU.jpg/1280px-ULURU.jpg',
  },
  {
    id: 'matterhorn',
    name: 'Matterhorn, Swiss Alps',
    lat: 45.9763,
    lng: 7.6586,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Matterhorn.jpg/1280px-Matterhorn.jpg',
  },
  {
    id: 'singapore-marina',
    name: 'Marina Bay Sands, Singapore',
    lat: 1.2834,
    lng: 103.8607,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Marina_Bay_Sands_%28I%29.jpg/1280px-Marina_Bay_Sands_%28I%29.jpg',
  },
];

export const ROUNDS_PER_GAME = 5;

export function shuffleLocations(count: number = ROUNDS_PER_GAME): Location[] {
  const copy = [...LOCATIONS];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(count, copy.length));
}
