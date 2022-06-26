import cacheImages from "./cacheImages";

export const imagesImport = (r) => {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });

  // cacheImages(Object.values(images));


  return images;
};

export default imagesImport;
