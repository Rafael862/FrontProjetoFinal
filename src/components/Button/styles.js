import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme}) => theme.COLORS.TOMATO_100};
    color: ${({ theme}) => theme.COLORS.LIGHT_100};
    height: 5.6rem;
    border: 0;
    padding: 0 16;
    margin-top: 1.6rem;
    border-radius: 10px;
    font-weight: 500;

    &:disabled{
        opacity: 0.5;
    }

`;