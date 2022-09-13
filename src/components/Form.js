import React from 'react';
import {useState} from 'react';
export default function Form()
{

    function cadastrar(e)
    {
        e.preventDefault();
        console.log('cadastro');
        console.log(name);
    }

    const [name, setName] = useState('Charles');
    return (


        <>
        
            <form onSubmit={cadastrar}>
                <div>
                    <input value={name} type="text" id='name' name="nome" placeholder='nome' onChange={(e) => setName(e.target.value)}/>
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
        
        </>

    );
}