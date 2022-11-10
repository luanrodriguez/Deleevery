import axios from 'axios'
import Modal from "react-modal"
import { InputsType } from "../Register"
import { ListContainer } from "./styles"
import { useEffect, useState} from "react"
import { GoogleMap, useJsApiLoader, DirectionsRenderer } from "@react-google-maps/api"

export function List() {
    const {isLoaded} = useJsApiLoader({'googleMapsApiKey': import.meta.env.VITE_GOOGLEMAPSKEY as string})
    const [isMapOpen, setIsMapOpen] = useState<boolean>(false)
    const [mapDirections, setMapDirections] = useState<google.maps.DirectionsResult>()
    const [listContent, setListContent] = useState<InputsType[]>([])

    useEffect(() => {
        axios.get('https://deleeveryapi.herokuapp.com/delivery').then((res) => {
            console.log(res.data)
            setListContent(res.data)
        })
    }, [])

    async function requestRoutes(origin: string, destination: string) {
        const directionsService = new google.maps.DirectionsService()
        return await directionsService.route({
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING
        })
    }

    function handleOpenMap(origin: string, destination: string) {
        requestRoutes(origin, destination).then((result)=>{
            setMapDirections(result)
            setIsMapOpen(true)
        })
        
    }

    function handleCloseMap() {
        setIsMapOpen(false)
    }

    return (
        <ListContainer>
            <Modal 
                isOpen={isMapOpen}
                onRequestClose={handleCloseMap}
            >
                {isLoaded && <GoogleMap 
                    zoom={6} 
                    center={{lat: -20, lng: -45}}
                    mapContainerStyle={{width: '100%', height: '100%'}}
                >
                {mapDirections && <DirectionsRenderer directions={mapDirections}/>}
                </GoogleMap>}
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
                            <tr key={delivery.id}>
                                <td>{delivery.clientName}</td>
                                <td>{delivery.deliveryDate}</td>
                                <td>{delivery.origin}</td>
                                <td>{delivery.destination}</td>
                                <td><button onClick={()=>handleOpenMap(delivery.origin, delivery.destination)}>Mapa</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </ListContainer>
    )
}