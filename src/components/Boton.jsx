import { useState } from "react";

const Boton = () => {
    const [Texto,setTexto] = useState('');
    return (
        <div className="text-center">
            <h1>Hello my friend {Texto} </h1>
           <button className="btn btn-primary my-4" onClick={() =>{
             setTexto('(from changed state)');
           }}>Click my</button>
        </div>
    );
};

export default Boton;