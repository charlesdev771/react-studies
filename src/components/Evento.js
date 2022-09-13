import Button from "./Button";
export default function Evento(numero)
{

    function event()
    {
        alert({numero});
    }


    return (
        <>
        
            <p>Evento</p>
            <button text='Primeiro' />
            <button onClick={event}>Ativar</button>
            <Button text='JOOJ' />
        
        </>
    );
}