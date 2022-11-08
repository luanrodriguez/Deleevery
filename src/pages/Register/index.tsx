import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { GoogleMap, useJsApiLoader, DirectionsRenderer } from "@react-google-maps/api"

import { 
    FormContainer, 
    GoogleMapContainer,
    RegisterContainer, 
    InputLabel, 
    TextInput, 
    DateInput,
    FormButtonsContainer,
    FormButton
} from './styles'

export function Register() {
    const [directions, setDirections] = useState<google.maps.DirectionsResult>()
    const {isLoaded} = useJsApiLoader({'googleMapsApiKey': ""})
    const {register, handleSubmit, reset } = useForm()
    const today = new Date()

    function handleTestRoute(data: any){
        const directionsService = new google.maps.DirectionsService()
        directionsService.route({
            origin: data.origin,
            destination: data.destination,
            travelMode: google.maps.TravelMode.DRIVING
        }).then(result => {
            setDirections(result)
        }).catch(error => {
            console.log(error)
        })
    }

    function handleSaveDelivery(data: any) {
        console.log(data['client-name'])
        console.log(data['delivery-date'])
        console.log(data.destination)
        console.log(data.origin)
        reset()
    }

    return ( 
        <RegisterContainer>
            <FormContainer onSubmit={handleSubmit(handleSaveDelivery)}>
                <InputLabel htmlFor='client-name'>Nome do cliente:</InputLabel>
                <TextInput 
                    type='text' 
                    id='client-name' 
                    placeholder='Digite o nome do cliente'
                    minLength={2}
                    {...register('client-name')}
                />

                <InputLabel htmlFor='delivery-date'>Data de entrega:</InputLabel>
                <DateInput 
                    type='date' 
                    id='delivery-date'
                    min={
                        `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() < 10? `0${today.getDate()}` : today.getDate()}`
                    }
                    {...register('delivery-date')}
                />

                <InputLabel htmlFor='origin'>Origem:</InputLabel>
                <TextInput 
                    type='text'
                    id='origin'
                    placeholder='Digite o endereço ou coordenada'
                    minLength={2}
                    {...register('origin')}
                />
                
                <InputLabel htmlFor='destination'>Destino:</InputLabel>
                <TextInput 
                    type='text'
                    id='destination'
                    placeholder='Digite o endereço ou coordenada'
                    minLength={2}
                    {...register('destination')}
                />

                <FormButtonsContainer>
                    <FormButton type='button' onClick={handleSubmit(handleTestRoute)}>Testar rota</FormButton>
                    <FormButton type='submit'>Cadastrar rota</FormButton>
                </FormButtonsContainer>
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