import React, {useState} from "react";
import "./style.css";

export default function PaginaInicial(){
    const[numeroAleatorio, setNumeroAleatorio] = useState(0);

    function gerarNumero(){
        const novoNumero = Math.floor(Math.random() * (100-1) + 1);
        setNumeroAleatorio(novoNumero);
    }

    function limparNumero(){
        setNumeroAleatorio(0);
    }

    return(
        <div className="div-principal">
            <div className="conteudo-centralizado">
                <h3>Número aleatório:</h3>
                <h1>{numeroAleatorio}</h1>

                <div className="area-botao">
                    <label>
                        Clique no botão abaixo para gerar um número aleatório:
                    </label>

                    <button onClick={gerarNumero}>
                        Gerar Número
                    </button>

                    <label className="label-reset">
                        Resetar:
                    </label>

                    <button onClick={limparNumero}>
                        Limpar Número    
                    </button>
                </div>
            </div>
        </div> 
    );
}

