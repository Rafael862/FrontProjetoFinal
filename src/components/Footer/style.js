import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: space-between;
background-color: ${({ theme }) => theme.COLORS.DARK_600};
height: 7.7rem;
width: 100%;
padding: 3rem 2.7rem;
font-weight: bold;

> span{
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    > svg{
    margin-right: .8rem;
    }
}
> p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
}
`;