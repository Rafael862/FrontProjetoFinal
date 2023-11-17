import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border: solid 1px;
    border-color: ${({ theme }) => theme.COLORS.DARK_300};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    
    padding: 2.4rem;
    width: 21rem;
    height: 30rem;
    position: relative;
    border-radius: .8rem;
    text-align: center;
    .svgIconEdit{
        position: absolute;
        right: 1.6rem;
        top: 1.6rem;
    }
    > h2{
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        margin-bottom: 1.2rem;
        margin-top: 1.2rem;

    }
    > h1{
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        margin-bottom: 1.2rem;
    }
    > img{
        width: 8.8rem;
        height: 8.8rem;
        
    }
    > div{
        > button{
        font-family: 'Poppins', sans-serif;
        font-weight: medium;
    }
    }
    .addOrRemoveItem {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        > span{
            margin-left:1.4rem;
            margin-right:1.4rem;
        }
    }
`;