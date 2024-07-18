import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from './firebase'
import { Persona } from "@/interfaces/iPersonas";
import { doc, getDoc } from "firebase/firestore";


export const registrarPersona =async(personas:Persona)=>{
    const docRef= await addDoc(collection(db,'personas'), personas)
}

export const obtenerPersonas = async()=>{
    let personas:Persona[] = []
    const querySnapshot = await getDocs(collection(db, 'personas'));
    querySnapshot.forEach((doc)=>{
        let persona:Persona={
            rut:doc.data().rut,
            apellido:doc.data().rut,
            correo:doc.data().correo,
            edad: doc.data().edad,
            fechaNacimiento:doc.data().fechaNacimiento,
            nombre:doc.data().nombre,
            key:doc.id
        }
        personas.push(persona)
    })
    return personas
}

export const obtenerPersona= async(key:string)=>{
    const docRef = doc(db, "personas", key);
    const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  let persona:Persona={
    rut:docSnap.data().rut,
    apellido:docSnap.data().apellido,
    correo:docSnap.data().correo,
    edad:docSnap.data().edad,
    fechaNacimiento:docSnap.data().fechaNacimiento,
    nombre:docSnap.data().nombre,
    key:docSnap.id
  }
  return persona
} else {
  return undefined
}
}