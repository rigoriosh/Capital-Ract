import React from 'react'
import noimages from '../assets/images/noImages.png';

export const DragNdrop = ({color, archivos, setArchivos}) => {

    const dropHandler = (event) => {
        event.preventDefault();        
        const file = event.dataTransfer.items[0].getAsFile(); 
        logicaImagen(file);
        event.dataTransfer.items.clear();
    }

    const dragOverHandler = (event) => {
        event.preventDefault();
    }

    const previewFile = () => {
        const file    = document.querySelector('input[type=file]').files[0];
        logicaImagen(file);                
    }

    const logicaImagen = (file) => {
        const reader  = new FileReader();
        reader.onloadend = function () {           
            setArchivos([reader.result]);
          }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            setArchivos([]);
        }
    }

    return (
        <>
            <div id="drop_zone" className="well drop-zone file-over" style={{"backgroundColor": color.hex}}
                onDrop={dropHandler}
                onDragOver={dragOverHandler}>
                <p>Drag and drop image</p>
                {
                    (archivos.length === 0) 
                    ? (
                        <img src={noimages} alt="No " />
                    )
                    :
                    (archivos.length !== 0) && (
                        <img height="200" src={archivos[0]} alt="anything"/>  
                    )
                }
                <input id="myimg" type="file" onChange={previewFile} className=""/>
                {/* <img src="" height="200" alt=" preview..."></img> */}
            </div>           
        </>
    )
}
