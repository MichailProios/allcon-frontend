// import cacheImages from "./cacheImages";

import axios from "axios";

export const getImageList = async (path) => {
  const response = await axios.get(
    "https://allconcontracting.com:2096/files/getFileList" + path
  );
  return response.data;
};

export default getImageList;
