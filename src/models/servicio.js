import mongoose, { Schema } from "mongoose";

const servicioSchema = new Schema({
  nombreServicio: {
    type: String,
    maxlenght: 150,
    required: true,
    unique: true,
  },
  precioServicio: {
    type: Number,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
});

const Servicio = mongoose.model("Servicio", servicioSchema);

export default Servicio;
