import {Wrapper, Container, FlexCenter } from "../Offices/Offices.style"
import {
    ContainerForContacts,
    Form,
} from "../RegisterCompany/RegisterCompany.style";

function Offices() {

    return (
        <Wrapper>
            <Container>
                <Form>
                    <ContainerForContacts>

                        <FlexCenter>
                            <p className="addNewOffice">Добавить новый офис</p>
                            <button></button>
                        </FlexCenter>


                    </ContainerForContacts>

                </Form>
            </Container>
        </Wrapper>
    )
}

export default Offices;



