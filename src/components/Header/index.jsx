import { Container } from './style';
import { HiOutlineMenu } from "react-icons/hi";
import { PiReceiptBold } from "react-icons/pi";


export function Header(){
    return(
        <Container>
            
            <HiOutlineMenu />
            
            <span>
            <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2304 0L21.8881 6.15327V18.4598L11.2304 24.6131L0.572592 18.4598V6.15327L11.2304 0Z" fill="#065E7C"/>
            </svg> food explorer
            </span>
            <PiReceiptBold />
        </Container>
    );
}
