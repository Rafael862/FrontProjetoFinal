import styled from 'styled-components';

export const Container = styled.div`
    div {
        font-family: 'Poppins', sans-serif;
        margin-top: 4.6rem;
        border-radius: 3px;
        background-color: ${({ theme }) => theme.COLORS.GRADIENTS_200};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        width: 37.5rem;
        height: 12rem;
        > h1{
            font-weight: 500;
            font-size: 1.8rem;
            margin-left: 15.3rem;
            margin-bottom: 3px;
        }
        > p {
            font-weight: 300;
            margin-left: 15.3rem;
            font-size: 1.2rem;
        }
    }
`;