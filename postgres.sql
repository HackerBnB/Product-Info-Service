DROP DATABASE IF EXISTS roominfodb;
CREATE DATABASE roominfodb;

DROP TABLE IF EXISTS rooms;
CREATE TABLE rooms
(
  room_id integer NOT NULL,
  roomName character varying(100),
  city character varying(100),
  type character varying(100),
  title character varying(100),
  max_guest integer NOT NULL,
  subtype integer NOT NULL,
  beds integer NOT NULL,
  baths integer NOT NULL,
  host_username character varying(100),
  avatar character varying(100),
  highlights text,
  short_description character varying(255),
  main_description text,
  house_rules text,
  house_rules_description text,
  cancellations text,
  sleeping_arrangements text
);

CREATE TABLE amenities
(
  room_id integer NOT NULL,
  amenity_id integer NOT NULL,
  amenityType character varying(50),
  name character varying(100),
  icon character varying(100),
  explanation text
);

COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data1.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data2.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data3.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data4.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data5.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data6.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data7.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data8.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data9.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data10.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data11.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data12.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data13.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data14.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data15.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data16.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data17.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data18.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data19.csv' WITH (FORMAT csv);
COPY rooms FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/roomsData/data20.csv' WITH (FORMAT csv);
COPY amenities FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/amenitiesData/amenities1.csv' WITH (FORMAT csv);
COPY amenities FROM '/Users/ricardo/Desktop/HackReactor/hr99/sdc/productInfo/Product-Info-Service/dataStorage/amenitiesData/amenities2.csv' WITH (FORMAT csv);
