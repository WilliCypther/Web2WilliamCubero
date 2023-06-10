import { Column, Entity, PrimaryColumn,OneToMany, JoinColumn } from "typeorm";
import { CabeceraFacturacion } from "./CabeceraFacturacion";





@Entity()
export class Cliente{

   // @OneToMany(() =>CabeceraFacturacion, (cabecerafacturacion)=>cabecerafacturacion.detallefactura)
   // cabecerafacturacion: CabeceraFacturacion[]

    @OneToMany(()=>CabeceraFacturacion, (cabecerafacturacion)=>cabecerafacturacion.cliente)
    cabecerafacturacion:CabeceraFacturacion[]



    @PrimaryColumn()
    Ruc_Cliente:number;
    @Column()
    Nombre_Cliente:string;
    @Column()
    Apellido_Cliente:string;
    @Column()
    Direccion_Cliente:string;
    @Column()
    Telefono_Cliente:string;
    



}
