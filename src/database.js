import mongoose from "mongoose";

const url = "mongodb://localhost:27017/lavadero";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Coneccion a la base de datos exitosa :)");
});
