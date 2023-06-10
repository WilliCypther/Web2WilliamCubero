import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { DetalledeFactura } from "./DetalleFactura";
import { Cliente } from "./Cliente";
import { Vendedor } from "./Vendedor";
//import { Cliente } from "./Cliente";




@Entity()
export class CabeceraFacturacion{
    

 //@OneToMany(type => CabeceraFacturacion, cabecera => cabecera.cabeceraFacturacion)
 //cabeceraFacturacion:CabeceraFacturacion[]; 

  @ManyToOne( ()=> DetalledeFactura,(detallefactura)=>detallefactura.cabecerafacturacion)
  detallefactura: DetalledeFactura


  @ManyToOne(()=>Cliente,(cleinte)=>cleinte.cabecerafacturacion)
  cliente: Cliente

  @ManyToOne(()=>Vendedor,(vendedor)=>vendedor.cabecerafacturacion)
  vendedor: Vendedor

    @PrimaryColumn()
    Ruc_Cliente:number;
    @PrimaryColumn()
    Codigo_Vendedor:number;
    @Column()
    fecha_ingreso:Date;

}
