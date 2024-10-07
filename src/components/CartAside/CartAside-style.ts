import styled from "styled-components";

export const DivBackground = styled.div`
    position: fixed;
    width: 30%;
    min-height: 100vh;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.6);
    z-index: 20;
`

export const AsideCart = styled.div`
    position: fixed;
    width: 70%;
    min-height: 100vh;
    right: 0;
    top: 0;
    background-color: var(--white);
    z-index: 20;
    padding: 30px 20px;
`
export const AsideCartH1 = styled.h1`
    font-size: 24px;
    color:var(--blue-dark);
    margin-bottom: 30px;
`
export const AsideCartSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const CloseButton = styled.button`
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`