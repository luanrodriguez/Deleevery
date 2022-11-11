import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { isFuture, isToday, parseISO} from 'date-fns'
import { GoogleMap, useJsApiLoader, DirectionsRenderer } from "@react-google-maps/api"

import { 
    FormContainer, 
    GoogleMapContainer,
    RegisterContainer, 
    InputLabel, 
    TextInput, 
    DateInput,
    FormButtonsContainer,
    FormButton,
    StatusMessage
} from './styles'

export interface InputsType {
    id: number,
    origin: string,
    destination: string,
    deliveryDate: string,
    clientName: string
}

export function Register() {
    const [directions, setDirections] = useState<google.maps.DirectionsResult>()
    const [statusMessage, setStatusMessage] = useState<string>('')
    const {isLoaded} = useJsApiLoader({'googleMapsApiKey': import.meta.env.VITE_GOOGLEMAPSKEY as string})
    const {register, handleSubmit, reset } = useForm<InputsType>()
    const [success, setSuccess] = useState<boolean>(false)

    function validateInputs(data: InputsType): [boolean, string] {
        const deliveryDate = parseISO(data.deliveryDate)
        if( 
            data.clientName.length < 1 ||
            data.destination.length < 1 ||
            data.origin.length < 1
        ) {
            return [false, 'Os campos não podem ficar vazios']
        } else if(!data.deliveryDate || !isToday(deliveryDate)) {
            if(!isFuture(deliveryDate)){
                return [false, 'A data não pode ser antes de hoje']
            }     
        }
        return [true, '']
    }

    async function requestRoutes(origin: string, destination: string) {
        const directionsService = new google.maps.DirectionsService()
        return await directionsService.route({
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING
        })
    }

    function handleTestRoute(data: InputsType){
        const routes = requestRoutes(data.origin, data.destination)
        routes.then(result => {
            setSuccess(true)
            setStatusMessage('Rota encontrada!')
            setDirections(result)
        }).catch(() => {
            setSuccess(false)
            setStatusMessage('Rota não encontrada!')
        })
    }

    function handleSaveDelivery(data: InputsType) {
        const [areInputsValid, errorMessage] = validateInputs(data)
        
        if(!areInputsValid) {
            setSuccess(false)
            setStatusMessage(errorMessage)
            return
        }

        const routes = requestRoutes(data.origin, data.destination)
        routes.then(() => {
            axios.post('https://deleeveryapi.herokuapp.com/delivery', data).then((res) => {
                setSuccess(true)
                setStatusMessage('Entrega cadastrada!')
                reset()
            }).catch(() => {
                setSuccess(false)
                setStatusMessage('Erro interno do servidor')
            })

        }).catch(() => {
            setSuccess(false)
            setStatusMessage('Rota não encontrada!')
        })
    }

    return ( 
        <RegisterContainer>
            <FormContainer onSubmit={handleSubmit(handleSaveDelivery)}>
                <InputLabel htmlFor='clientName'>Nome do cliente:</InputLabel>
                <TextInput 
                    type='text' 
                    id='clientName' 
                    placeholder='Digite o nome do cliente'
                    {...register('clientName')}
                />

                <InputLabel htmlFor='origin'>Origem:</InputLabel>
                <TextInput 
                    type='text'
                    id='origin'
                    placeholder='Digite o endereço ou coordenada'
                    {...register('origin')}
                />
                
                <InputLabel htmlFor='destination'>Destino:</InputLabel>
                <TextInput 
                    type='text'
                    id='destination'
                    placeholder='Digite o endereço ou coordenada'
                    {...register('destination')}
                />

                <InputLabel htmlFor='deliveryDate'>Data de entrega:</InputLabel>
                <DateInput 
                    type='date' 
                    id='deliveryDate'
                    {...register('deliveryDate')}
                />
                <FormButtonsContainer>
                    <FormButton type='button' onClick={handleSubmit(handleTestRoute)}>Testar rota</FormButton>
                    <FormButton type='submit'>Cadastrar entrega</FormButton>
                </FormButtonsContainer>
                {statusMessage && <StatusMessage success={success}>{statusMessage}</StatusMessage>}
            </FormContainer>
            <GoogleMapContainer>
                {isLoaded && <GoogleMap 
                    zoom={6} 
                    center={{lat: -20, lng: -45}}
                    mapContainerStyle={{width: '75%', height: '75%'}}
                >
                {directions && <DirectionsRenderer directions={directions}/>}
                </GoogleMap>}
            </GoogleMapContainer>
        </RegisterContainer>     
    )
}