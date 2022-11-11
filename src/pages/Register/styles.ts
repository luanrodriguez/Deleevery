import styled from "styled-components";

interface StatusMessageType {
    success: boolean
}

export const RegisterContainer = styled.div`
    display: flex;
    height: 100%;
    @media screen and (max-width: 680px) {
        flex-direction: column;
        height: auto;
    }
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    background-color: #315e8f;
    border-radius: 8px;
    justify-content: center;
    padding: 1rem 0;
    @media screen and (max-width: 680px) {
        width: 100%
    }
`

export const GoogleMapContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 680px) {
        width: 100%;
        height: 20rem;
    }
`
export const InputLabel = styled.label`
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    @media screen and (max-width: 560px) {
        font-size: 1.2rem;
    }
`

export const TextInput = styled.input`
    margin-bottom: 2rem;
    border-radius: 8px;
    border: 0;
    width: 50%;
    height: 2rem;

`

export const DateInput = styled.input`
    margin-bottom: 2rem;
    border-radius: 8px;
    height: 2rem;
    border: 0;
`

export const FormButtonsContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        align-items: center;
    }
`

export const FormButton = styled.button`
    width: 9rem;
    height: 2rem;
    border-radius: 8px;
    border: 0;
    margin: 0.5rem;
    margin-bottom: 0;
`

export const StatusMessage = styled.span<StatusMessageType>`
    display: flex;
    background-color: ${({success}) => success? 'green': 'red'};
    height: 2rem;
    border-radius: 8px;
    border: 0;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    padding: 0.3rem;
`