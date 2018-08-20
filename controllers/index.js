// const db = require("../models");
// const Room = require("../models/Room.js");
const models = require("../models/PostgresModel");





// Create:
const postRoomInfo = (data, callback) => {
  data.highlights = JSON.stringify(data.highlights).replace(new RegExp(',', 'g'), '*'); 
  data.house_rules = JSON.stringify(data.house_rules).replace(new RegExp(',', 'g'), '*');
  data.cancellations = JSON.stringify(data.cancellations).replace(new RegExp(',', 'g'), '*');
  data.sleeping_arrangements = JSON.stringify(data.sleeping_arrangements).replace(new RegExp(',', 'g'), '*');
  let query = `INSERT into rooms (room_id, roomname, city, type, title, max_guest, subtype, beds, baths, host_username, avatar, highlights, short_description, main_description, house_rules, house_rules_description, cancellations, sleeping_arrangements) VALUES ('${data.room_id}', '${data.roomname}', '${data.city}', '${data.type}', '${data.title}', '${data.max_guest}', '${data.subtype}', '${data.beds}', '${data.baths}', '${data.host_username}', '${data.avatar}', '${data.highlights}', '${data.short_description}', '${data.main_description}', '${data.house_rules}', '${data.house_rules_description}', '${data.cancellations}', '${data.sleeping_arrangements}')`;
  models.pool.query(query, (err, res) => {
    if (err) {
      callback('Error in inserting data: ', err);
    } else {
      callback(null, res);
    }
  });
};

const postAmenity = (data, callback) => {
  let queryAmenity = `INSERT into amenities (room_id, amenity_id, amenitytype, name, icon, explanation) VALUES ('${data.room_id}', '${data.amenity_id}', '${data.amenitytype}', '${data.name}', '${data.icon}', '${data.explanation}')`;
  models.pool.query(queryAmenity, (error, result) => {
    if (error) {
      callback('Error in inserting amenity: ', error)
    } else {
      callback(null, result);
    }
  })
}

// Read:
const getRoom = (roomId, callback) => {
  let query = `select * from rooms inner join amenities on rooms.room_id = amenities.room_id where amenities.room_id = ${roomId}`;
  models.pool.query(query, (err, res) => {
    if (err) {
      callback('Error executing query', err.stack);
    }
    let dataWithFormattedAmenities = res.rows.reduce((acc, elem, i) => {
      if (!acc.amenities) {
        acc.amenities = [];
      }
      if (elem.icon === null) {
        elem.icon = '';
      }
      if (elem.explanation === null) {
        elem.explanation = '';
      }
      acc.amenities.push({
        amenityType: elem.amenitytype,
        name: elem.name,
        icon: elem.icon,
        explanation: elem.explanation,
      });
      return acc;
    }, res.rows[0]);
    dataWithFormattedAmenities.highlights = JSON.parse("[\"" + dataWithFormattedAmenities.highlights.replace(/\*/g ,"\",\"").slice(1,-1) + "\"]");
    dataWithFormattedAmenities.house_rules = JSON.parse("[\"" + dataWithFormattedAmenities.house_rules.replace(/\*/g ,"\",\"").slice(1,-1) + "\"]");
    dataWithFormattedAmenities.cancellations = JSON.parse("[\"" + dataWithFormattedAmenities.cancellations.replace(/\*/g ,"\",\"").slice(1,-1) + "\"]");
    dataWithFormattedAmenities.sleeping_arrangements = JSON.parse("[\"" + dataWithFormattedAmenities.sleeping_arrangements.replace(/\*/g ,"\",\"").slice(1,-1) + "\"]");
    callback(null, dataWithFormattedAmenities);
    // pool.end()
  })
}

// Update:
// const updateRoomInfo = (roomId, updatedBody, callback) => {
//   Room.update({ room_id: roomId }, { $set: updatedBody}, callback);
// };

// //Delete:
// const deleteRoomInfo = (roomId, callback) => {
//   Room.deleteOne({ room_id: roomId }, function (err) {
//     if (err) {
//       callback(err);
//     }
//     callback(null)
//   });
// };

module.exports = {
  getRoom,
  postRoomInfo,
  postAmenity,
  // updateRoomInfo,
  // deleteRoomInfo,
};
