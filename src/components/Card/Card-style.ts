import styled from "styled-components";

export const CardContainer = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    width: 260px;
    min-height: 290px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
    position: relative;
`
export const ImgCardContainer = styled.div`
    height: 190px;
`
export const ImgCard = styled.img`
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    height: 100%;
    width: 100%;
`
export const InfoCardContainer = styled.div`
    width: 100%;
    padding: 15px 10px;
 `
export const TitleCard = styled.h2`
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 18px;
 `
export const AddButton = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey);
    font-weight: bold;
    font-size: 18px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`