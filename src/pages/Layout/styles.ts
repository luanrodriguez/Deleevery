import styled from 'styled-components'

export const LayoutNavBar = styled.div`
    display: flex;
    justify-content: end;
    gap: 3rem;
    border-radius: 8px 8px 0 0;
    padding: 0.5rem;
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
    padding: 0.5rem;
    border-radius: 8px;

    :hover {
        background-color: #2b517a;
    }
`

export const LayoutContainer = styled.div`
    background-color: #333333;
    height: calc(100vh - 10rem);
    max-width: 74rem;
    margin: 5rem auto;
    border-radius: 8px;
`