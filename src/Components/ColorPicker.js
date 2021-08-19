import React, {useState} from 'react';
import "./css/ColorPicker.css";

function ColorPicker() {
    const [color, setColor] = useState();

    return(
        <div className="contenedor" style={{backgroundColor: `${color}`}}>
            <div className="centro">
            <h1>Color Picker</h1>   
            <input type="color" onChange={(e)=> setColor(e.target.value)} />
            <input type="text" placeholder={color} />
            </div>  
        </div>
    )
}

export default ColorPicker;