import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn,OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Producto } from "./Producto";

@Entity()
export class Proveedor{

    

    @OneToMany(()=>Producto,(producto)=>producto.proveedor)
    producto:Producto[]



    @PrimaryColumn()
    Codigo_Provedor:number;
    @Column()
    nombre_proveedor:string;
    @Column()
    apellidos_proveedor:string;
    @Column()
    direccion_proveedor:string;
    @Column()
    provincia_proveedor:string;
    @Column()
    telefono_proveedor:string;
}