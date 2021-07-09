"use strict";

const fs = require("fs"),
  file = "./assets/countries.txt",
  newFile = "./assets/country-ES6.txt",
  promise = new Promise((resolve, reject) => {
    fs.access(file, fs.F_OK, (err) => {
      return err ? reject(new Error("El archivo no existe")) : resolve(true);
    });
  });

promise
  .then((resolved, rejected) => {
    console.log("El archivo existe");

    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {
        return err
          ? reject(new Error("El archivo no se pudo leer"))
          : resolve(data);
      });
    });
  })
  .then((resolved, rejected) => {
    console.log("El archivo se ha leído exitosamente");

    return new Promise((resolve, reject) => {
      fs.writeFile(newFile, resolved, (err) => {
        return err
          ? reject(new Error("El archivo no se pudo copiar."))
          : resolve("El archivo se ha copiado con éxito.");
      });
    });
  })
  .then((resolve, reject) => console.log(resolve))
  .catch((err) => console.log(err.message));
