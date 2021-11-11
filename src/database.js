import mongoose from "mongoose";

const url = "mongodb+srv://tigre:tigretigre@cluster0.zoxcs.mongodb.net/lavadero?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Coneccion a la base de datos exitosa :)");
});
