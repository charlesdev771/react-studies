import Item from "./Item";
export default function List()
{
    return (
        <div>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="LEONOVO" ano_lancamento={19999}/>     
            </ul>
        </div>
    );
}