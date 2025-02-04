const fileParamsConfig = {
  logo: { ext: "png", size: "400x100", filesize: "150KB" },
  icons: { ext: "png", size: "64x64", filesize: "50KB" },
  avatar: { ext: "png", size: "400x400", filesize: "300KB" },
  blog: { ext: "webp", size: "1200x800", filesize: "400KB" },
  image: { ext: "jpeg", size: "2000x2000", filesize: "700KB" },
  wallpaper: { ext: "jpeg", size: "1920x1080", filesize: "1.5MB" },
  linkedIn: { ext: "jpeg", size: "1584x396", filesize: "1MB" },
};

function getFormattedLocalTime(req) {
  const localTime = new Date();

  const year = localTime.getFullYear();
  const month = String(localTime.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so we add 1
  const day = String(localTime.getDate()).padStart(2, "0");

  const hours = String(localTime.getHours()).padStart(2, "0");
  const minutes = String(localTime.getMinutes()).padStart(2, "0");
  const seconds = String(localTime.getSeconds()).padStart(2, "0");

  // Format the time without spaces
  const data = `${year}-${month}-${day}-${hours}${minutes}${seconds}-${req.files?.avatar[0].fieldname}`;
  return data;
}

const addQuery = (req) => {
  const fileData = fileParamsConfig[req.files?.avatar[0].fieldname];
  req.files.avatar[0].originalname = `${req.files?.avatar[0].fieldname}?ext=${fileData.ext}&size=${fileData.size}&filesize=${fileData.filesize}`;
  return;
};

export const fileValidation = (req) => {
  const maxSize = 10 * 1024 * 1024; // 10 MB

  // Check file size
  if (req.files.avatar[0] > maxSize) {
    return res.status(400).json({ message: "File size exceeds 10MB" });
  }

  // Extract file extension
  const extname = req.files.avatar[0].originalname
    .split(".")
    .pop()
    .toLowerCase();

  // Rename the file with the formatted local time and keep the extension
  const newFileName = `${getFormattedLocalTime(req)}.${extname}`;
  req.files.avatar[0].originalname = newFileName;
  addQuery(req);
  return;
};
