import styled from 'styled-components'

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 10rem);
    background-color: #333333;
    border-radius: 8px;
    padding: 1rem;
    overflow: auto;
    margin: 5rem;
`
export const LayoutHeader = styled.div`
    display: flex;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    @media screen and (max-width: 690px) {
        flex-direction: column;
        align-items: center;
    }
`

export const LayoutTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    font-style: italic;
    @media screen and (max-width: 690px) {
        margin-bottom: 0.5rem;
    }
`

export const LayoutNavBar = styled.div`
    display: flex;
    flex: 1;
    justify-content: end;

    @media screen and (max-width: 690px) {
        justify-content: center;
    }

    @media screen and (max-width: 560px) {
        flex-direction: column;
    }
`

export const LayoutNavBarOption = styled.a`
    display: flex;
    text-decoration: none;
    color: #d1d1d1;
    width: 8rem;
    height: 1.5rem;
    background-color: #315e8f;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 0.4rem;
    margin: 1rem;
    margin-top: 0;

    :hover {
        background-color: #2b517a;
    }
`