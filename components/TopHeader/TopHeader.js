import {Wrapper, MainHeader, Container, SubHeader} from "../TopHeader/TopHeader.style"

function TopHeader() {
    return (
        <Wrapper>
                <Container>
                <MainHeader>Настройка профиля компании</MainHeader>
                <ul>
                    <li><a>Компания</a></li> <span>/</span>
                    <li><a>Мои компании</a></li> <span>/</span>
                    <li><a>Данные о компании </a></li>
                </ul>
                <SubHeader>
                    <li><a>Данные о компании</a></li> <span></span>
                    <li><a>Руководители</a></li><span></span>
                    <li><a>Реквизиты </a></li><span></span>
                    <li><a>Офисы </a></li>
                </SubHeader>
                </Container>
        </Wrapper>
    )
}

export default TopHeader;



