//Importo los modulos necesarios
import { Column, Entity, PrimaryColumn,OneToMany , JoinColumn,ManyToOne } from "typeorm";
import { DetalledeFactura } from "./DetalleFactura";
import { Proveedor } from "./proveedor";
////////////////////////////////////////////////////////////////////////////////////////////



//Realizo la entidad producto
@Entity()
export class Producto{

   //Las relaciones se hacen automaticamente ejecutando el codigo
   //teniendo todo correcto con la conection de la base de datos respectiva

  //Este decorador es de Facturacion.
    @OneToMany(() =>DetalledeFactura,(detallefacturacion)=>detallefacturacion.producto)
    detallefacturacion: DetalledeFactura[]

    //@OneToMany(()=>Proveedor,(proveedor)=>proveedor.producto)
    //proveedor: Proveedor[]

   //Este decorador es de Proveedor.
    @ManyToOne(() => Proveedor, (proveedor) => proveedor.producto)
    @JoinColumn({ name: "proveedor_id" })
    proveedor: Proveedor;

 ////////////////////////////////////////

 //Declaro las propiedades de la columna, estan decoradas con column para indicar que son columnas
    @PrimaryColumn()
    id:number;
    @Column()
    descripcion:string;
    @Column()
    precio:number;
    @Column()
    stock_Maximo_Producto:number;
    @Column()
    stock_Minimo_Producto:number;
    @Column()
    estado:boolean;
    @Column()
    codigo_Proveedor:number;
    @Column()
    fecha_ingreso:Date;
}