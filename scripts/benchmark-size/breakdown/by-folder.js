const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..", "..");
const clients = path.join(root, "clients");

const clientsDir = fs.readdirSync(clients);

for (const client of clientsDir) {
  console.log(client);
}

const getAllFiles = function (dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, file));
    }
  });

  return arrayOfFiles;
};

const getTotalSize = function (directoryPath) {
  const arrayOfFiles = getAllFiles(directoryPath);

  let totalSize = 0;

  arrayOfFiles.forEach(function (filePath) {
    totalSize += fs.statSync(filePath).size;
  });

  return totalSize;
};
