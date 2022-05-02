import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { baseDato } from "../../Firebase/firebaseConfig"
import { typesPokemones } from "../types/types"

//---------------------Edit-----------//
export const editAsync = (codigo, pokemon)=>{
   // console.log(codigo, planta)
    return async (dispatch)=>{
        const  colleccionTraer = collection(baseDato, "crudPokemon")
        const q = query(colleccionTraer, where("codigo", "==", codigo))
        const traerDatosQ = await getDocs(q)
        let id
        traerDatosQ.forEach( async (docu)=>{
            id= docu.id
        })
        console.log(id)
        const documenRef = doc(baseDato, "crudPokemon", id)
       await updateDoc(documenRef, pokemon)
        .then(resp => {
            dispatch(editSync(pokemon))
         
            console.log(resp)
         })       
        .catch((err) => console.log(err))
        dispatch(listAsyn())
    }
}


export const editSync = (pokemon)=>{
    return{
        type: typesPokemones.editSync,
        payload: pokemon
    }
   
}

//-------------------delete--------------------//
export const deleteAsync = (codigo)=>{
  
    return async (dispatch)=>{
        const  colleccionTraer = collection(baseDato , "crudPokemon")
        const q = query(colleccionTraer, where("codigo", "==", codigo))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum =>{
            deleteDoc(doc(baseDato, "crudPokemon", docum.id))
        }))
        dispatch(deleteSync(codigo))
        dispatch(listAsyn())
    } 
}

export const deleteSync = (codigo)=>{
    return{
        type: typesPokemones.delete,
        payload: codigo
    }
   
}

//---------------listar----------------//
export const listAsyn =()=>{
    return async (dispatch)=>{
        const  colleccionTraer = await getDocs(collection(baseDato , "crudPokemon"))
        const pokemones = []
        colleccionTraer.forEach((doc)=>{
            pokemones.push({
                ...doc.data()
                

            })
        })
        dispatch(listSync(pokemones))
        
    }
}

export const listSync = (pokemon)=>{
    return{
        type: typesPokemones.list ,
        payload: pokemon 
    }
   
}

//-------------agregar---------------//
export const addAsync =(pokemon)=>{
    return(dispatch)=>{
        addDoc(collection(baseDato, "crudPokemon"), pokemon)
        .then(resp =>{
            dispatch(addSync(pokemon))
          //  dispatch(listAsyn())
        })
        .catch(error=>{
            console.warn(error);
        })
}
}

export const addSync =(pokemon) => {
    return{
        type: typesPokemones.add,
        payload: pokemon,
    }
}

//--------------Agregar desde formik---------------------//

export const addFormikAsync=(user)=>{
    return(dispatch)=>{
        addDoc(collection(baseDato, "User"), user)
        .then(resp =>{
            dispatch(addFormikSync(user))
          //  dispatch(listAsyn())
        })
        .catch(error=>{
            console.warn(error);
        })
}
}

export const addFormikSync =(user)=>{
    return{
        type: typesPokemones.addFormik,
        payload: user,
    }
}