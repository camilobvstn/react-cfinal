import React , { useEffect, useState }from 'react'
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';
import { Persona } from '@/interfaces/iPersonas';
import { obtenerPersona } from '@/Firebase/promesas';

const initialState:Persona = {
    apellido:"",
    correo:"",
    edad: 0,
    fechaNacimiento:"",
    nombre:"",
    rut:""

}

export const Pagina5 = () => {
    const router=useRouter()
    const [persona, setPersona] = useState<Persona>(initialState)

    const handlePersona = (name:string,value:string)=>{
        setPersona({...persona,[name]:value})
    }

    useEffect(()=>{
    const key =router.query.key;
    if (key!=undefined && typeof(key)=="string"){
        obtenerPersona(key).then((p)=>{
            if(p!=undefined){
                setPersona(p)
            }
            else{
                //volver a tabla
            }
        })
    
    }else{
        //volver a la tabla
    }
    
   
    },[])
    
    const modificar=()=>{

    }

    return (
        <>
        <Form>
        <Form.Group>
            <Form.Label>Nombre: </Form.Label>
            <Form.Control type='text'placeholder='Ingrese su nombre:' name='nombre'
            onChange={(e)=>{handlePersona(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Apellido: </Form.Label>
            <Form.Control type='text'placeholder='Ingrese su apellido:' name='apellido'
            onChange={(e)=>{handlePersona(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Rut: </Form.Label>
            <Form.Control type='text'placeholder='Ingrese su Rut:' name='rut'
            onChange={(e)=>{handlePersona(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Correo: </Form.Label>
            <Form.Control type='email'placeholder='Ingrese su correo:' name='correo'
            onChange={(e)=>{handlePersona(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Fecha de nacimiento: </Form.Label>
            <Form.Control type='date'placeholder='Ingrese su fecha de nacimiento:' name='fechaNacimiento'
            onChange={(e)=>{handlePersona(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Edad: </Form.Label>
            <Form.Control type='number'placeholder='Ingrese su edad:' name='edad'
            onChange={(e)=>{handlePersona(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>

        <Button type='button' variant='success' onClick={modificar}>Registrar</Button>

    </Form>
        </>
    )}
    export default Pagina5