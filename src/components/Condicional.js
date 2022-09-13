import { useState } from "react";

export default function Condicional()
{

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();
    setUserEmail(email);
    console.log(userEmail);
    function enviarEmail(e)
    {
        e.preventDefault();
        setUserEmail(email);
    }

    return (
        <div>
            <h2>Cadastro de email</h2>
            <form>
                <input type="email" placeholder="Email:" />
                <button type="submit" onClick={enviarEmail} onChange={(e) => setEmail(e.target.value)}>
                    Enviar
                </button>
                {userEmail && (
                    <div>
                        <p>Email: {userEmail}</p>
                    </div>
                )}
            </form>
        </div>
    );
}