import Mensaje from "../models/servicio";

const lavaderoCtrl = {};

lavaderoCtrl.getPrueba = (req, res) => {
  res.send("prueba desde el controlador");
};


//a esta fn la cambie para que se adapte al mail
lavaderoCtrl.guardarMail = async (req, res) => {
  console.log(req.body);
  try {
    const { email, servicio } = req.body;

    const mailNuevo = new Mensaje({
        email: email,
        servicio: servicio
    });

    await mailNuevo.save();

    res.status(201).json({
      mensaje: "Mail enviado correctamente",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      mensaje: "Ocurrio un error al intentar mandar el mail",
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
