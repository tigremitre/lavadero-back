import Servicio from "../models/servicio";

const lavaderoCtrl = {};

lavaderoCtrl.getPrueba = (req, res) => {
  res.send("prueba desde el controlador");
};

lavaderoCtrl.crearServicio = async (req, res) => {
  console.log(req.body);
  try {
    const { nombreServicio, precioServicio, categoria } = req.body;

    const servicioNuevo = new Servicio({
      nombreServicio: nombreServicio,
      precioServicio: precioServicio,
      categoria: categoria,
    });

    await servicioNuevo.save();

    res.status(201).json({
      mensaje: "Servicio agregado a la BD",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      mensaje: "Ocurrio un error al intentar guardar los datos",
    });
  }
};

lavaderoCtrl.listarServicio = async (req, res) => {
  try {
    const arregloServicios = await Servicio.find();
    res.status(200).json(arregloServicio);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Error al obtener la lista de usuarios",
    });
  }
};

lavaderoCtrl.eliminarServicio = async (req, res) => {
  try {
    console.log(req.params.id);
    await Servicio.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El servicio fue eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "No se pudo elimiar el servicio",
    });
  }
};

lavaderoCtrl.obtenerServicio = async (req, res) => {
  try {
    // console.log(req.params.id);
    const servicioBuscado = await Servicio.findById(req.params.id);
    res.status(200).json(servicioBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "El servicio seleccionado no fue encontrado",
    });
  }
};

lavaderoCtrl.editarServicio = async (req, res) => {
  try {
    console.log(req.body);
    // validar
    await Servicio.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El servicio fue modificado",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo actualiar el servicio",
    });
  }
};

export default lavaderoCtrl;
