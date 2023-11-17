import { Container } from './style';
import pngegg from '../../assets/pngegg.png';

export function Banner(){
    return (
        <Container>
            <div>
                <img src={pngegg} alt="" />
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
        </Container>
    )
}