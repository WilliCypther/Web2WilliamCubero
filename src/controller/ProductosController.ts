import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Producto } from "../entity/Producto";

class ProductosController {
  static getAll = async (req: Request, resp: Response) => {
    try {
      const productosRepo = AppDataSource.getRepository(Producto);

      const listaProductos = await productosRepo.find({
        where: { estado: true },
      });

      if (listaProductos.length == 0) {
        return resp.status(404).json({ mensaje: "No se encontró resultados." });
      }
      return resp.status(200).json(listaProductos);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
  static getById = async (req: Request, resp: Response) => {
    const productosRepo = AppDataSource.getRepository(Producto);

    const id = parseInt(req.params["id"]);
    if (!id) {
      return resp.status(404).json({ mensaje: "No se indica el id" });
    }

    const producto = await productosRepo.find({ where: { id } });

    if (!producto) {
      return resp.status(404).json({ mensaje: "No se encuentra el producto" });
    }

    try {
      const id = parseInt(req.params["id"]);
      if (!id) {
        return resp.status(404).json({ mensaje: "No sé indica el ID" });
      }
      const productosRep = AppDataSource.getRepository(Producto);
      const producto = await productosRep.findOne({ where: { id } });

      if (!producto) {
        return resp.status(404).json({ mensaje: "No se encuentra el id" });
      }
      return resp.status(200).json(producto);
    } catch (error) {
      return resp.status(400).json({ mensaje: "Error" });
    }
  };

  static add = async (req: Request, resp: Response) => {
    try {
      //destructurando
      const { id, nombre, precio, stock, fechaIngreso } = req.body;

      //validar datos de entrada
      if (!id) {
        return resp.status(404).json({ mensaje: "No se encuentra el id" });
      }

      if (!nombre) {
        return resp.status(404).json({ mensaje: "Debe indicar el nombre" });
      }

      if (!precio) {
        return resp.status(404).json({ mensaje: "Debe indicar el precio" });
      }

      if (precio < 0) {
        return resp
          .status(404)
          .json({ mensaje: "El precio debe ser mayor a 0" });
      }

      if (!stock) {
        return resp.status(404).json({ mensaje: "Debe indicar el stock" });
      }

      if (stock < 0) {
        return resp
          .status(404)
          .json({ mensaje: "El stock debe ser mayor a 0" });
      }

      //validar reglas de negocio
      const productosRep = AppDataSource.getRepository(Producto);
      const pro = await productosRep.findOne({ where: { id } });
      if (pro) {
        return resp.status(404).json({ mensaje: "El producto ya existe" });
      }

      const fecha = new Date();
      let producto = new Producto;
      producto.id = id;
      producto.descripcion = nombre;
      producto.precio = precio;
      producto.stock_Maximo_Producto = stock;
      producto.fecha_ingreso = fecha;
      producto.estado = true;

      await productosRep.save(producto)

      return resp.status(201).json({ mensaje: "Producto Creado" });


    } catch (error) {
      return resp.status(404).json({ mensaje: "Errorr" });
    }
  };
  static update = async (req: Request, resp: Response) => {};
  static delete = async (req: Request, resp: Response) => {};
}

export default ProductosController;
