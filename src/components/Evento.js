export default function Evento(numero)
{

    function event()
    {
        alert({numero});
    }


    return (
        <>
        
            <p>Evento</p>
            <button onClick={event}>Ativar</button>
        
        </>
    );
}