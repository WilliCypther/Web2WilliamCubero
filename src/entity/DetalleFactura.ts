import { Entity, Column, PrimaryColumn,PrimaryGeneratedColumn,OneToMany, ManyToOne,JoinColumn} from "typeorm";
import { CabeceraFacturacion } from "./CabeceraFacturacion";
import { Producto } from "./Producto";


@Entity()
export class DetalledeFactura {


  // @OneToMany(type => CabeceraFacturacion, cabecera => cabecera.cabeceraFacturacion)
  //cabeceraFacturacion:CabeceraFacturacion[]; 


  @OneToMany(() =>CabeceraFacturacion, (cabecerafacturacion)=>cabecerafacturacion.detallefactura)
  cabecerafacturacion: CabeceraFacturacion[]



  @ManyToOne(()=>Producto, (producto)=>producto.detallefacturacion)
  @JoinColumn({name:"id"})
  producto:Producto

 
 
 


  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  NumeroFactura:number;


  

  @Column()
  Cantidad_Producto: string;
}