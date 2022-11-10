import styled from "styled-components";

export const ListContainer =  styled.div`
    flex: 1;
    overflow: auto;

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th {
        background-color: #315e8f;
        padding: 1rem;
        text-align: left;
    }

    td {
        background-color: #4a4a4a;
        border-top: 4px solid #333333;
        padding: 1rem;
    }

    .map-modal {
        background-color: black;
    }
    
`