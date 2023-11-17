import {createGlobalStyle} from 'styled-components';
export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root {
    font-size: 62.5%;
}
body{
    background-color: ${({theme}) => theme.COLORS.DARK_100};
    -webkit-font-smoothing: antialiased;
    text-align: center;
}
body, input, button, textarea{
//font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;
font-size: 16px;
outline: none;
}
a{
    text-decoration: none;
}
button, a{
    cursor: pointer;
    transition: filter 0.2s;
}
button:hover, a:hover{
    filter: brightness(0.9);
}
`;