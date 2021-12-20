import {Wrapper, Container, FlexCenter, ContainerForTable, DeleteAndModify} from "../Offices/Offices.style"
import {
    ContainerForContacts,
    Form, Flex
} from "../RegisterCompany/RegisterCompany.style";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
}

function Offices() {

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
    ];

    return (
        <Wrapper>
            <Container>
                <Form>
                    <ContainerForContacts>
                        <FlexCenter class="flex">
                            <p className="addNewOffice">Добавить новый офис</p>
                            <button></button>
                        </FlexCenter>
                    </ContainerForContacts>
                    <Flex>
                        <ContainerForTable>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 1120 }} aria-label="caption table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Название</TableCell>
                                            <TableCell align="right">Адрес</TableCell>
                                            <TableCell align="right">Время работы</TableCell>
                                            <TableCell align="right">Телефон</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </ContainerForTable>

                    </Flex>
                    <DeleteAndModify>
                            <div className="delete">
                            <img src="/assets/icons/trash.svg" alt=""/>
                            <button>Удалить</button>
                        </div>
                        <div className="modify">
                            <img src="/assets/icons/Pen.svg" alt=""/>
                            <button>Редактировать</button>
                        </div>
                    </DeleteAndModify>
                </Form>
            </Container>
        </Wrapper>
    )
}

export default Offices;



