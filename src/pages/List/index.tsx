import { useEffect, useState} from "react"
import Modal from "react-modal"
import { InputsType } from "../Register"
import { ListContainer } from "./styles"

export function List() {
    const [isMapOpen, setIsMapOpen] = useState<boolean>(false)
    const [listContent, setListContent] = useState<InputsType[]>([])
    useEffect(() => {
        setListContent([
            {
                origin: 'rua benedito edson correia laranjeira, 31',
                destination: 'rua hum caragua',
                clientName: 'Luan',
                deliveryDate:'09/11/2022'
            },
            {
                origin: 'rua benedito edson correia laranjeira, 31',
                destination: 'rua hum caragua',
                clientName: 'Luan',
                deliveryDate:'09/11/2022'
            }
        ])
    }, [])

    function handleOpenMap() {
        setIsMapOpen(true)
    }

    function handleCloseMap() {
        setIsMapOpen(false)
    }

    return (
        <ListContainer>
            <Modal 
                isOpen={isMapOpen}
                onRequestClose={handleCloseMap}
                className="map-modal"
            >
                <h1>Olá</h1>
            </Modal>
            <table>
                <thead>
                    <tr>
                        <th>Nome do cliente</th>
                        <th>Data de entrega</th>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Rota</th>
                    </tr>
                </thead>
                <tbody>
                    {listContent.map((delivery) => {
                        return (
                            <tr>
                                <td>{delivery.clientName}</td>
                                <td>{delivery.deliveryDate}</td>
                                <td>{delivery.origin}</td>
                                <td>{delivery.destination}</td>
                                <td><button onClick={handleOpenMap}>Mapa</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </ListContainer>
    )
}