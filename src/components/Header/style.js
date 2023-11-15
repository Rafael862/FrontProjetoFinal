import styled from 'styled-components';

export const Container = styled.header`
    font-family: 'Roboto', sans-serif;
    size: 2.1rem;
    font-weight: bold;
    grid-area: header;
    height: 11.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5.6rem 2.8rem 2.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    > span{
        display: flex;
        align-items: center;
    > svg{
        margin-right: .8rem;
    }
    }
    
`;