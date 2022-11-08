import styled from 'styled-components'

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #333333;
    height: calc(100vh - 10rem);
    max-width: 74rem;
    margin: 5rem auto;
    border-radius: 8px;
    padding: 1rem;
`
export const LayoutHeader = styled.div`
    display: flex;
    margin-bottom: 1rem;
`

export const LayoutTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    font-style: italic;
`

export const LayoutNavBar = styled.div`
    display: flex;
    flex: 1;
    justify-content: end;
    gap: 3rem;
    border-radius: 8px 8px 0 0;
    margin-left: 0.5rem;
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

    :hover {
        background-color: #2b517a;
    }
`