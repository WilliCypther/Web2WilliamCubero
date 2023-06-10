import "reflect-metadata"
import { DataSource } from "typeorm"
import { Producto } from "./entity/Producto"
import { Proveedor } from "./entity/proveedor"
import { Vendedor } from "./entity/Vendedor"
import { Cliente } from "./entity/Cliente"
import { DetalledeFactura } from "./entity/DetalleFactura";



import { CabeceraFacturacion} from "./entity/CabeceraFacturacion"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "pruebautn",
    synchronize: true,
    logging: false,
    entities: [Producto, Proveedor,Vendedor,Cliente,DetalledeFactura,CabeceraFacturacion],
    migrations: [],
    subscribers: [],
})
