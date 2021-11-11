import mongoose, { Schema } from "mongoose";


// esto tambien lo adapte al mail
const mailSchema = new Schema({
  email: {
    type: String,
    maxlenght: 40,
    required: true,
  },
  servicio: {
    type: String,
    required: true,
  },
});

const Mensaje = mongoose.model("Mensaje", mailSchema);

export default Mensaje;
