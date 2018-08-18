const faker = require('faker');
const fs = require('fs');

const PROPERTY_TYPE = [
  'Apartment',
  'Castle',
  'Cabin',
  'Apartment',
  'Entire Home',
  'Private Room',
  'Shared Space',
  'Mill',
  'Dome House'
];
const BED_TYPE = ['single', 'queen', 'double', 'king'];

const AMENITY_DATA = [
  {
    amenity_id: 1,
    amenityType: 'Basic',
    name: 'Air conditioning',
    icon: '',
    explanation: '',
  },

  {
    amenity_id: 2,
    amenityType: 'Basic',
    name: 'Private entrance',
    icon: '',
    explanation: 'Separate street or building entrance',
  },

  {
    amenity_id: 3,
    amenityType: 'Basic',
    name: 'Heating',
    icon: '',
    explanation: 'Central heating or a heater in the listing',
  },

  { amenity_id: 4,
    amenityType: 'Dining',
    name: 'Breakfast',
    icon: '',
    explanation: '',
  },

  {
    amenity_id: 5,
    amenityType: 'Bed and bath',
    name: 'Hair dryer',
    icon: '',
    explanation: '',
  },

  { amenity_id: 6,
    amenityType: 'Bed and bath',
    name: 'Shampoo',
    icon: '',
    explanation: '',
  },

  { amenity_id: 7,
    amenityType: 'Bed and bath',
    name: 'Hangers',
    icon: '',
    explanation: '',
  },

  {
    amenity_id: 8,
    amenityType: 'Bed and bath',
    name: 'Bed linens',
    icon: '',
    explanation: '',
  },

  { amenity_id: 9,
    amenityType: 'Bed and bath',
    name: 'Washer',
    icon: '',
    explanation: '',
  },
  
  {
    amenity_id: 10,
    amenityType: 'Safety features',
    name: 'Smoke detector',
    icon: '',
    explanation: '',
  },

  {
    amenity_id: 11,
    amenityType: 'Safety features',
    name: 'Carbon monoxide detector',
    icon: '',
    explanation: '',
  }
];

const defaultAmenities = [
  { amenity_id: 12,
    amenityType: 'Basic',
    name: 'Wifi',
    icon: 'fa fa-wifi',
    explanation: '',
  },

  {
    amenity_id: 13,
    amenityType: 'Basic',
    name: 'TV',
    icon: 'fa fa-television',
    explanation: '',
  },

  {
    amenity_id: 14,
    amenityType: 'Basic',
    name: 'Hot water',
    icon: 'fa fa-shower',
    explanation: '',
  },

  {
    amenity_id: 15,
    amenityType: 'Dining',
    name: 'Kitchen',
    icon: 'fa fa-cutlery',
    explanation: 'Space where guests can cook their own meals',
  },

  {
    amenity_id: 16,
    amenityType: 'Facilities',
    name: 'Free parking on premises',
    icon: 'fa fa-car',
    explanation: '',
  },

  {
    amenity_id: 17,
    amenityType: 'Basic',
    name: 'Laptop friendly workspace',
    icon: 'fa fa-laptop',
    explanation: 'A table or desk with space for a laptop and a chair',
  }
];

const populateRandomAmenities = num => {
  let newAmenity = defaultAmenities.slice();
  let allAmenities = AMENITY_DATA.slice();
  for (let i = 0; i < num; i++) {
    let index = Math.floor(Math.random() * allAmenities.length);
    newAmenity.push(allAmenities[index]);
    allAmenities.splice(index, 1);
  }
  return newAmenity;
};

const createAmenityCsv = () => {
  for (let i = 1; i <= 10000000; i++) {
    let randomAmenities = populateRandomAmenities(faker.random.number({ min: 2, max: 6 }));
    for (let x = 0; x < randomAmenities.length; x++) {
      let amenity = randomAmenities[x];
      console.log(`${i},${amenity.amenity_id},${amenity.amenityType},${amenity.name},${amenity.icon},${amenity.explanation}`);
    }
  }
}

createAmenityCsv();

const createRooms = () => {
  const data = [];
  for (let i = 1; i <= 10000000; i++) {
    const sentenceLength = faker.random.number({ min: 2, max: 4 });

    const noOfRules = faker.random.number({ min: 2, max: 4 });
    const rules = [];
    for (let j = 0; j < noOfRules; j++) {
      rules.push(faker.lorem.words(faker.random.number({ min: 1, max: 2 })));
    }

    const cancellationsLength = faker.random.number({ min: 2, max: 4 });
    const cancelationRules = [];
    for (let j = 0; j < cancellationsLength; j++) {
      cancelationRules.push(
        faker.lorem.words(faker.random.number({ min: 3, max: 5 }))
      );
    }

    const dataItem = {};
    dataItem.room_id = i;
    dataItem.roomName= `room${i.toString()}`;
    dataItem.city = faker.address.city();
    dataItem.type =
      PROPERTY_TYPE[Math.floor(Math.random() * PROPERTY_TYPE.length)];
    dataItem.title = faker.lorem.words(faker.random.number({ min: 2, max: 4 }));
    dataItem.max_guest = faker.random.number({ min: 1, max: 4 });
    dataItem.subtype = faker.random.number({ min: 1, max: 4 });
    dataItem.beds = faker.random.number({ min: 1, max: 4 });
    dataItem.baths = faker.random.number({ min: 1, max: 2 });
    dataItem.host_username = faker.name.findName();
    dataItem.avatar = faker.image.avatar();
    dataItem.highlights = [
      faker.lorem.words(faker.random.number({ min: 1, max: 2 })),
      faker.lorem.sentences(faker.random.number({ min: 2, max: 4 }))
    ];
    dataItem.short_description = faker.lorem.sentences(
      faker.random.number({ min: 1, max: 2 })
    );
    dataItem.main_description = faker.lorem.sentences(
      faker.random.number({ min: 2, max: 5 })
    );
    dataItem.house_rules = rules;
    dataItem.house_rules_description = faker.lorem.sentences(
      faker.random.number({ min: 2, max: 4 })
    );
    dataItem.cancellations = cancelationRules;
    dataItem.sleeping_arrangements = [];

    for (let x = 0; x < dataItem.beds; x++) {
      let bedDetails = '';
      const noOfBed = faker.random.number({ min: 1, max: 2 });
      const typeOfBEd = BED_TYPE[Math.floor(Math.random() * BED_TYPE.length)];
      if (noOfBed === 1) {
        bedDetails = `${noOfBed} ${typeOfBEd} ` + 'bed';
      } else {
        bedDetails = `${noOfBed} ${typeOfBEd} ` + 'beds';
      }
      dataItem.sleeping_arrangements.push(bedDetails);
    }

    let dataCategories = [dataItem.room_id, dataItem.roomName, dataItem.city, dataItem.type, dataItem.title, dataItem.max_guest, dataItem.subtype, dataItem.beds, dataItem.baths, dataItem.host_username, dataItem.avatar, JSON.stringify(dataItem.highlights).replace(new RegExp(',', 'g'), '*'), dataItem.short_description, dataItem.main_description, JSON.stringify(dataItem.house_rules).replace(new RegExp(',', 'g'), '*'), dataItem.house_rules_description, JSON.stringify(dataItem.cancellations).replace(new RegExp(',', 'g'), '*'), JSON.stringify(dataItem.sleeping_arrangements).replace(new RegExp(',', 'g'), '*')];
    let csvFormatData = dataCategories.join();
    console.log(csvFormatData)
  }
  return data;

};

  let rooms = createRooms();
