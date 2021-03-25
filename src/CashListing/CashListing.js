import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const CashListing = (props) => {

    let cashlist = (
            <TableBody>            
                {props.entries.map((entries, index) => {
                    return <TableRow key={index} id={index}>
                                <TableCell >{entries.description}</TableCell>
                                <TableCell>{entries.amount}</TableCell>
                                <TableCell>{entries.date}</TableCell>
                                <TableCell>{entries.type.title}</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="expand row" size="small" onClick={() => props.remove(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow> 
                })}
             </TableBody>
    )

    
    
    
    return (
        <TableContainer component={Paper} >
            <Table stickyHeader aria-label="sticky table" id="expensesTable">
                <TableHead>
                    <TableRow>
                        <TableCell width="65%">Description</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                {cashlist}
            </Table>
        </TableContainer>
    )
};

export default CashListing;