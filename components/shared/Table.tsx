import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableData } from '@/utils/MockData/detailsPageGraphData';
import { PRIMARY_LIGHT_COLOR } from '@/utils/variableConstants';


export default function TableComponent({ headersArr, headersTitle, data, rowTitleArr }: { headersArr: string[], headersTitle: string, data: TableData[], rowTitleArr: string[] }) {
    return (
        <TableContainer component={Paper} className='overflow-x-scroll w-inherit'>
            <Table
                className='bg-primary'
                stickyHeader
                size="small" aria-label="a dense table"
                sx={{}}>
                <TableHead>
                    <TableRow >

                        <TableCell sx={{ backgroundColor: PRIMARY_LIGHT_COLOR, color: "lightgray" }}>{headersTitle}</TableCell>
                        {
                            headersArr.map((headerName, index) => (
                                <TableCell key={index} align="right" sx={{ backgroundColor: PRIMARY_LIGHT_COLOR, color: "lightgray" }}>{headerName}</TableCell>
                            ))
                        }

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowTitleArr.map((rowTitle) => (
                        <TableRow
                            key={rowTitle}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                        >
                            <TableCell component="th" scope="row" sx={{ color: "lightgray", fontSize: "12px", fontWeight: "bold" }}>
                                {rowTitle.replace(/_/g, ' ')}
                            </TableCell>
                            {data.map((row) => (
                                <TableCell key={row.quarter} align="right" sx={{ color: "white", fontSize: "12px" }}>{row[rowTitle as keyof TableData] && row[rowTitle as keyof TableData]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
