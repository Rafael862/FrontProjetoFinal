import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    padding: 2.4rem;
    width: 21rem;
    height: 29.2rem;
    > img{
        width: 8.8rem;
        height: 8.8rem;
        
    }
`;