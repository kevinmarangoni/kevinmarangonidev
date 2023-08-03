import { createGlobalStyle } from "styled-components";
import { IGlobalStyleProps } from "@/types/theme";

const GlobalStyle = createGlobalStyle<IGlobalStyleProps>`

*{
        padding: 0;
        margin: 0;
        font-family: 'Doboto', sans-serif;
        font-size: 25px;
        color: ${(props) => props.theme.font};
        border: 1px dashed red;
        box-sizing: border-box;
    }
    
    html{
        background: ${(props) => props.theme.background.primary};
        background: linear-gradient(180deg, ${(props) => props.theme.background.primary} 0%, ${(props) => props.theme.background.secondary} 100%);
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        min-height: 100vh;
    }
`;

export default GlobalStyle;
