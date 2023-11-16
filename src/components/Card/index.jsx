import { Container } from './style';
import  imagem  from './Maskgroup-2.png';
export function Card(){
    return(
        <Container>
            <img src={imagem}alt="" />

            <h2>Torradas de Parma </h2>
            <h1>25,97</h1>
        </Container>
    );
}