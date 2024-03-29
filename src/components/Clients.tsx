import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClientAction, ClientActionT, ClientI, CombinedStateI } from "../interface/Interfaces";
import Button from '@mui/material/Button';
import { Dispatch } from "redux";

const Clients: FC = () => {
    const clients = useSelector((state: CombinedStateI) => state.clientReducer.clients)
    const dispatch: Dispatch<ClientAction> = useDispatch();

    const add = () => { dispatch({ type: 'addClient', payload: Math.random() }) }

    const remove = (client: ClientI) => { dispatch({ type: 'removeClient', payload: client.id }) }

    return (
        <div className="clients">
            <Button variant='contained' onClick={add}>Add client</Button>
            {clients.map((client) => {
                return (
                    <Button key={client.id} className='client' onClick={() => { remove(client) }}>
                        id  = {client.id}
                    </Button>
                )
            })}
        </div>
    )
}

export default Clients