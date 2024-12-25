import { CloudinaryStorage } from 'multer-storage-cloudinary';

export const generateUniqueFileName = async (baseName, folder = '') => {
  let uniqueName = baseName;
  let counter = 1;

  while (true) {
    const result = await CloudinaryStorage.search
      .expression(`folder:${folder} AND public_id:${uniqueName}`)
      .execute();

    if (result.total_count === 0) {
      break;
    }

    uniqueName = `${baseName}-${counter}`;
    counter++;
  }

  return uniqueName;
};
