import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

// AppSync(GraphQL)
import { API } from 'aws-amplify';
import { listEnvtests } from '../graphql/queries';
// import awsconfig from '../aws-exports';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

// function createData(id, name, description) {
//     return { id, name, description };
// }

async function fetchListEnvtests(setRowList) {
    const apiData = await API.graphql({ query: listEnvtests });
    setRowList(apiData.data.listEnvtests.items);
}


function addRow(rowList, setRowList) {
    fetchListEnvtests(setRowList)

    // setRowList([
    //     createData("1", "testname1", "testdesc1"),
    //     createData("2", "testname2", "testdesc2"),
    //     createData("3", "testname3", "testdesc3"),
    // ]);
}

export default function BasicTable() {
    const [rowList, setRowList] = useState([]);

    const classes = useStyles();

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowList.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box display="flex" p={1} bgcolor="background.paper">
                <Button variant="contained" onClick={() => addRow(rowList, setRowList)}>読み込み</Button>
            </Box>
        </div>
    );
}