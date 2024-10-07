import styled from "styled-components";

export const SelectStyle = styled.select`
    width: 110px;
    height: 35px;
    padding: 0 5px;
    border-radius: 8px;
    background-color: var(--white);
    border: none;
    color: var(--blue-dark);
    &:focus {
        outline: none;
    }
`