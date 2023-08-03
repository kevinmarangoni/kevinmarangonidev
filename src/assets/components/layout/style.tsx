import styled from "styled-components";

export const Container = styled.main`
    min-height: 90vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
`

export const Content = styled.section`
    width: 90%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`