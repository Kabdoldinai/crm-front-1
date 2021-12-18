import {Wrapper, Container } from "../CEOpage/CEOpage.style"
import {
    ContainerForContacts,
    Flex,
    Form,
    Label,
    SaveAndCancelBtn,
    SiteAdress
} from "../RegisterCompany/RegisterCompany.style";
import OutlinedInput from "@mui/material/OutlinedInput";
import * as React from "react";

function CEOpage() {

    return (
        <Wrapper>
            <Container>
                <Form>
                    <ContainerForContacts>
                <Flex class="no-margin">
                    <div className="block">
                        <Label>
                            Фамилия
                        </Label>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            variant="outlined"
                            placeholder="Введите данные..."
                            aria-describedby="outlined-weight-helper-text"
                        />
                    </div>
                    <div className="block ml">
                        <Label>
                            Имя
                        </Label>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            variant="outlined"
                            placeholder="Введите данные..."
                            aria-describedby="outlined-weight-helper-text"
                        />
                    </div>
                </Flex>
                        <Flex>
                            <div className="block">
                                <Label>
                                    Отчество
                                </Label>
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    variant="outlined"
                                    placeholder="Введите данные..."
                                    aria-describedby="outlined-weight-helper-text"
                                />
                            </div>
                            <div className="block ml">
                                <Label>
                                    Дата рождения
                                </Label>
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    variant="outlined"
                                    placeholder="Введите данные..."
                                    aria-describedby="outlined-weight-helper-text"
                                />
                            </div>
                        </Flex>

                            <Label>
                                Контактный телефон
                            </Label>
                            <div>
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    variant="outlined"
                                    placeholder="+7- (___) - ___-__-__"
                                    aria-describedby="outlined-weight-helper-text"
                                />
                                <button></button>
                            </div>
                        <Flex>
                            <div className="block">
                                <Label>
                                    E-mail
                                </Label>
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    variant="outlined"
                                    placeholder="Введите данные..."
                                    aria-describedby="outlined-weight-helper-text"
                                />
                            </div>
                        </Flex>
                        <Label>
                            Должность
                        </Label>
                        <OutlinedInput
                            className="extend"
                            id="outlined-adornment-weight"
                            variant="outlined"
                            placeholder="Введите данные..."
                            aria-describedby="outlined-weight-helper-text"
                        />
                        <Label>
                            ФИО руководителя компании в родительном падеже
                        </Label>
                        <OutlinedInput
                            className="extend"
                            id="outlined-adornment-weight"
                            variant="outlined"
                            placeholder="Введите данные..."
                            aria-describedby="outlined-weight-helper-text"
                        />
                        <Label>
                            Основание назначения на должность
                        </Label>
                        <OutlinedInput
                            className="extend"
                            id="outlined-adornment-weight"
                            variant="outlined"
                            placeholder="Введите данные..."
                            aria-describedby="outlined-weight-helper-text"
                        />

                    </ContainerForContacts>
                    <SaveAndCancelBtn className="mb">
                        <button className="save">Сохранить</button>
                        <button className="cancel">Отмена</button>
                    </SaveAndCancelBtn>
                </Form>
            </Container>
        </Wrapper>
    )
}

export default CEOpage;



