import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby";
const API_KEY = "AIzaSyCQy9x630YV2fAP_i5SaVPWp0fZDzXWnQg";

const config = {
  headers: {
    "content-type": "application/json",
    " X-Goog-Api-Key": API_KEY,
    "X-Goog-FieldMask": [
      "places.displayName",
      "places.fomattedAddress",
      "places.location",
      "places.evChargerOptions",
      "places.photos",
    ],
    // "places.fomattedAddress":
    //   "https://places.googleapis.com/v1/places:searchNearby",
  },
};

const NewNearByPlace = (data) => axios.post(BASE_URL, data, config);

export default {
  NewNearByPlace,
};
