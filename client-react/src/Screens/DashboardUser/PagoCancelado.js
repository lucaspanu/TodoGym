import React from 'react'
import './Pago.css'
import { Link } from 'react-router-dom';

function PagoCancelado() {
    return (
        <>
            <div class="error-rescue-modal servidor">
                <div class="error-rescue-modal-centralizer">
                    <div class="error-rescue-modal-mensagem">
                    <div class="error-rescue-modal-cabecalho"><span class="error-rescue-modal-titulo">Pago Cancelado...</span></div>
                        <span class="error-rescue-modal-icon"></span>
                            Se ha cancelado el pago de la suscripcion...
                        <div class="error-rescue-modal-rodape">
                        <Link to='/private'>
                            <button class="btn btn-danger" >OK</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PagoCancelado
