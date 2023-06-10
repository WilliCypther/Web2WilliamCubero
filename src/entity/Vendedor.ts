import { Column, Entity, PrimaryColumn, OneToMany} from "typeorm";
import { CabeceraFacturacion } from "./CabeceraFacturacion";




@Entity()
export class Vendedor{



    @OneToMany(()=>CabeceraFacturacion, (cabecerafacturacion)=>cabecerafacturacion.vendedor)
    cabecerafacturacion:CabeceraFacturacion[]



    @PrimaryColumn()
    Codigo_Vendedor:number;
    @Column()
    Nombre_Vendedor:string;
    @Column()
    Apellidos_Vendedor:string;
    @Column()
    Direccion_proveedor:string;
    @Column()
    Telefono_Vendedor:string;
}