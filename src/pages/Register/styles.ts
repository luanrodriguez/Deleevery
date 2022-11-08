import styled from "styled-components";

export const RegisterContainer = styled.div`
    display: flex;
    height: 100%;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    background-color: #315e8f;
    border-radius: 8px;
    justify-content: center;
`

export const GoogleMapContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
`
export const InputLabel = styled.label`
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
`

export const TextInput = styled.input`
    margin-bottom: 2rem;
    border-radius: 8px;
    border: 0;
    width: 20rem;
    height: 2rem;
`

export const DateInput = styled.input`
    margin-bottom: 2rem;
    border-radius: 8px;
    border: 0;
`

export const FormButtonsContainer = styled.div`
    display: flex;
    width: 20rem;
    justify-content: space-between;
`

export const FormButton = styled.button`
    width: 8rem;
    height: 2rem;
    border-radius: 8px;
    border: 0;
`