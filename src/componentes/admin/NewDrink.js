import React, { useState } from 'react'
import ColorPicker, { useColor } from "react-color-palette";
import { useDispatch, useSelector } from 'react-redux';
import { removeErrorAction, setErrorAction } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

import { DragNdrop } from '../../utilsComponents/DragNdrop';
import { PaletColor } from '../../utilsComponents/PaletColor';


export const NewDrink = ({history}) => {
    const dispatch = useDispatch();
    const [archivos, setArchivos] = useState([]);
    const [color, setColor] = useColor("hex", "#3fe22d");
    const [fields, handledInputChange, resetFields] = useForm(
        {
            idDrink: '',
            nameDrink: '',
            categoryDrink: '',
            descriptionDrink: '',
            priceDrink: 0,
            quantityDrink: 0,
        }
    );
    const {idDrink, nameDrink, categoryDrink, descriptionDrink, priceDrink, quantityDrink} = fields;
    const state = useSelector(state => state);
    const {ui} = state
    

    const handleForm = (e) =>{
        e.preventDefault();        
        if (isFormValid()) {
            fields['color'] = JSON.stringify(color);
            fields['archivo'] = archivos[0];
            console.log(fields);
            
        }
    }

    const isFormValid = () => {
        console.log(444);
        if (nameDrink === '') {            
            dispatch(setErrorAction('El nombre de la bebida es requerido'));
            return false;
        }
        if (categoryDrink === ''){
            dispatch(setErrorAction('La categoría de la bebida es requerido'));
            return false;
        }
        if (descriptionDrink === ''){
            dispatch(setErrorAction('La descripción de la bebida es requerido'));
            return false;
        }
        if (priceDrink < 1){
            dispatch(setErrorAction('El precio de la bebida es requerido'));
            return false;
        }
        if (quantityDrink < 1){
            dispatch(setErrorAction('La cantidad de bebidas es requerida'));
            return false;
        }
        if (archivos.length ===  0){
            dispatch(setErrorAction('La imagen de la bebida es requerida y opcional el color de fondo'));
            return false;
        }
        dispatch(removeErrorAction());        
        return true
    }

    const regresar = () => {
        history.push('/owner/admin/addDrinks');
    }
    
    return (
        <div style={{'marginTop': '60px'}}>          
              
            <button onClick={regresar} type="button" className="btn btn-dark btn-small btn-block " style={{"marginTop": "-30px"}} >                
                <i className="fa fa-arrow-left"></i>    Return                
            </button>

            <div style={{"marginTop": "60px"}}>    
            
            <form onSubmit={handleForm} className="sign-in-form">
                    <div className="form-group">
                        <label style={{"marginTop": "45px"}}>ID by Firebase</label>
                        <input type="text" className="form-control" placeholder="Firebase ID" disabled
                            name="idDrink" value={idDrink}/>
                        <small className="form-text ">this field is auto generated</small>
                    </div>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control" placeholder="Drink name" required name="nameDrink" value={nameDrink} onChange={handledInputChange}/>
                    </div>
                    <div className="form-group">
                        <label >Category</label>
                        <input type="text" className="form-control" placeholder="Drink category" required name="categoryDrink" value={categoryDrink} onChange={handledInputChange}/>
                    </div>
                    <div className="form-group">
                        <label >Description</label>
                        <input type="text" className="form-control" placeholder="Drink Description" required name="descriptionDrink" value={descriptionDrink} onChange={handledInputChange}/>
                    </div>
                    <div className="form-group">
                        <label >Price</label>
                        <input type="number" className="form-control" placeholder="Drink Price" required name="priceDrink" value={priceDrink}  onChange={handledInputChange}/>
                    </div>
                    <div className="form-group">
                        <label >Quantity</label>
                        <input type="number" className="form-control" placeholder="Drink Quantity" required name="quantityDrink" value={quantityDrink} onChange={handledInputChange}/>
                    </div>
                    <div className="col-md-4" style={{"padding": "0px"}}>                                                      
                        <DragNdrop color={color} archivos={archivos} setArchivos={setArchivos}/>
                        <PaletColor ColorPicker={ColorPicker} setColor={setColor} color={color}/>
                        
                    </div>
                    
                    {//alert para los mensajes de validacion
                        ui.msgError && 
                            (
                                <>
                                    
                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Nota!</strong> {ui.msgError}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>                                    
                            </>
                            )
                    } 

                    <div className="form-group text-center mt-3 mb-5 pb-3">
                        <button className="btn btn-dark" type="submit">
                            <i className="fa fa-save"></i>
                            Save
                        </button>
                    </div>
            </form>
            </div>
        </div>
    )
}
