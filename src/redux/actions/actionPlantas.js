import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { baseDato } from "../../Firebase/firebaseConfig"
import { typesPlantas } from "../types/types"




//-------------agregar Formik---------------//
/*export const formikAsync =(planta)=>{
    return(dispatch)=>{
        addDoc(collection(baseDato, "formulario"), planta)
        .then(resp =>{
            dispatch(formikSync(planta))
          //  dispatch(listAsyn())
        })
        .catch(error=>{
            console.warn(error);
        })
}
}

export const formikSync =(planta)=>{
    return{
        type: typesPlantas.addformik,
        payload: planta,
    }
}*/



//---------------------Edit-----------//
export const editAsync = (codigo, planta)=>{
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
       await updateDoc(documenRef, planta)
        .then(resp => {
            dispatch(editSync(planta))
         
            console.log(resp)
         })       
        .catch((err) => console.log(err))
        dispatch(listAsyn())
    }
}


export const editSync = (planta)=>{
    return{
        type: typesPlantas.editSync,
        payload: planta
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
        type: typesPlantas.delete,
        payload: codigo
    }
   
}

//---------------listar----------------//
export const listAsyn =()=>{
    return async (dispatch)=>{
        const  colleccionTraer = await getDocs(collection(baseDato , "crudPokemon"))
        const plantas = []
        colleccionTraer.forEach((doc)=>{
            plantas.push({
                ...doc.data()
                

            })
        })
        dispatch(listSync(plantas))
        
    }
}

export const listSync = (planta)=>{
    return{
        type: typesPlantas.list ,
        payload: planta 
    }
   
}

//-------------agregar---------------//
export const addAsync =(planta)=>{
    return(dispatch)=>{
        addDoc(collection(baseDato, "crudPokemon"), planta)
        .then(resp =>{
            dispatch(addSync(planta))
          //  dispatch(listAsyn())
        })
        .catch(error=>{
            console.warn(error);
        })
}
}

export const addSync =(planta)=>{
    return{
        type: typesPlantas.add,
        payload: planta,
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
        type: typesPlantas.addFormik,
        payload: user,
    }
}