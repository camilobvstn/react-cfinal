import React , { useEffect, useState }from 'react'
import { Persona } from '@/interfaces/iPersonas';
import { obtenerPersonas } from '@/Firebase/promesas';
import { Button, Table } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Link from 'next/link';




export const pagina4 = () => {
    const [personas, setpersonas] = useState<Persona[]>([])
    useEffect(()=>{
        //traer listado de personas desde las promesas
        obtenerPersonas().then((personas)=>{
            setpersonas(personas)
        }).catch((e)=>{
            console.log(e),
            alert('algo ocurrio')
        })

    }, [])

  return (
    <>
        <Table>
            <thead>
                <tr>
                    <th>Nombre:</th>
                    <th>Apellido:</th>
                    <th>Rut:</th>
                    <th>Correo:</th>
                    <th>Fecha Nacimiento:</th>
                    <th>Edad:</th>
                    <th>Accion:</th>
                </tr>
            </thead>
            <tbody>
                {
                    personas.map((p)=>{
                        return(
                            <tr>
                                <td>{p.nombre}</td>
                                <td>{p.apellido}</td>
                                <td>{p.rut}</td>
                                <td>{p.correo}</td>
                                <td>{p.fechaNacimiento}</td>
                                <td>{p.edad}</td>
                                <td><Link href={{pathname:"pagina5",query:{key:p.key}}}></Link></td>
                                <td><Button variant="warning"> <MdEdit />Editar</Button></td>
                                <td><Button variant="danger"> <MdDelete /> Eliminar</Button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    </>
  )
}
export default pagina4

