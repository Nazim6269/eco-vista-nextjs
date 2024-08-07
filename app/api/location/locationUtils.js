const data = [
  {
    location: 'London',
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: 'Kolkata',
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: 'Dhaka',
    latitude: 23.777176,
    longitude: 90.399452,
  },
  {
    location: 'Singapore',
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: 'New York',
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: 'Toronto',
    latitude: 43.6534817,
    longitude: -79.3839347,
  },

  {
    location: 'Paris',
    latitude: 48.8566969,
    longitude: 2.3514616,
  },
  {
    location: 'Berlin',
    latitude: 52.5170365,
    longitude: 13.3888599,
  },
  {
    location: 'Tokyo',
    latitude: 35.682839,
    longitude: 139.759455,
  },
  {
    location: 'Beijing',
    latitude: 39.9041999,
    longitude: 116.4073963,
  },
  {
    location: 'Moscow',
    latitude: 55.755826,
    longitude: 37.6173,
  },
  {
    location: 'Rio de Janeiro',
    latitude: -22.9068467,
    longitude: -43.1728965,
  },
  {
    location: 'Cairo',
    latitude: 30.0444196,
    longitude: 31.2357116,
  },
  {
    location: 'Sydney',
    latitude: -33.8688197,
    longitude: 151.2092955,
  },
  {
    location: 'Mumbai',
    latitude: 19.0759837,
    longitude: 72.8776559,
  },
  {
    location: 'Buenos Aires',
    latitude: -34.6036844,
    longitude: -58.3815591,
  },
  {
    location: 'Cape Town',
    latitude: -33.9248685,
    longitude: 18.4240553,
  },
  {
    location: 'Los Angeles',
    latitude: 34.0522342,
    longitude: -118.2436849,
  },
  {
    location: 'Mexico City',
    latitude: 19.4326077,
    longitude: -99.133208,
  },
  {
    location: 'Bangkok',
    latitude: 13.7563309,
    longitude: 100.5017651,
  },
  {
    location: 'Dubai',
    latitude: 25.276987,
    longitude: 55.296249,
  },
  {
    location: 'Jakarta',
    latitude: -6.2087634,
    longitude: 106.845599,
  },
  {
    location: 'Istanbul',
    latitude: 41.0082376,
    longitude: 28.9783589,
  },
  {
    location: 'Seoul',
    latitude: 37.566535,
    longitude: 126.9779692,
  },
  {
    location: 'Lagos',
    latitude: 6.5243793,
    longitude: 3.3792057,
  },
  {
    location: 'Santiago',
    latitude: -33.4488897,
    longitude: -70.6692655,
  },
  {
    location: 'Lima',
    latitude: -12.0463731,
    longitude: -77.042754,
  },
  {
    location: 'Karachi',
    latitude: 24.8607343,
    longitude: 67.0011364,
  },
  {
    location: 'Manila',
    latitude: 14.5995124,
    longitude: 120.9842195,
  },
  {
    location: 'Tehran',
    latitude: 35.6891975,
    longitude: 51.3889736,
  },
  {
    location: 'Nairobi',
    latitude: -1.2920659,
    longitude: 36.8219462,
  },
  {
    location: 'Vienna',
    latitude: 48.2081743,
    longitude: 16.3738189,
  },
  {
    location: 'Madrid',
    latitude: 40.4167754,
    longitude: -3.7037902,
  },
  {
    location: 'Rome',
    latitude: 41.9027835,
    longitude: 12.4963655,
  },
  {
    location: 'Buenos Aires',
    latitude: -34.6036844,
    longitude: -58.3815591,
  },
  {
    location: 'Athens',
    latitude: 37.9838096,
    longitude: 23.7275388,
  },
  {
    location: 'Hanoi',
    latitude: 21.028511,
    longitude: 105.804817,
  },
  {
    location: 'Hong Kong',
    latitude: 22.3193039,
    longitude: 114.1693611,
  },
  {
    location: 'Kuala Lumpur',
    latitude: 3.139003,
    longitude: 101.686855,
  },
  {
    location: 'Sao Paulo',
    latitude: -23.5505199,
    longitude: -46.6333094,
  },
  {
    location: 'Lahore',
    latitude: 31.5497,
    longitude: 74.3436,
  },
  {
    location: 'Baghdad',
    latitude: 33.315241,
    longitude: 44.366066,
  },
  {
    location: 'Kabul',
    latitude: 34.5553494,
    longitude: 69.207486,
  },
  {
    location: 'Colombo',
    latitude: 6.9270786,
    longitude: 79.861243,
  },
  {
    location: 'Riyadh',
    latitude: 24.7135517,
    longitude: 46.6752957,
  },
  {
    location: 'Islamabad',
    latitude: 33.6844202,
    longitude: 73.0478848,
  },
  {
    location: 'Kathmandu',
    latitude: 27.7172453,
    longitude: 85.3239605,
  },
  {
    location: 'Addis Ababa',
    latitude: 9.030969,
    longitude: 38.7612525,
  },
  {
    location: 'Algiers',
    latitude: 36.737232,
    longitude: 3.086472,
  },
  {
    location: 'Casablanca',
    latitude: 33.5731104,
    longitude: -7.5898434,
  },
  {
    location: 'Accra',
    latitude: 5.6037168,
    longitude: -0.187016,
  },
  {
    location: 'Doha',
    latitude: 25.276987,
    longitude: 51.520008,
  },
  {
    location: 'Luanda',
    latitude: -8.8399876,
    longitude: 13.2894368,
  },
  {
    location: 'Tripoli',
    latitude: 32.8872094,
    longitude: 13.1913383,
  },
  {
    location: 'Muscat',
    latitude: 23.5880135,
    longitude: 58.3828717,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const found = data.find(
    (item) => item.location.toLowerCase() === location.toLowerCase(),
  );

  return found || {};
}

export { getLocationByName, getLocations };
