import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell,TableRow, TableBody, Button, styled } from '@mui/material'
import { getProject, deleteProject } from '../Service/Api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
    
        background: #a599ea;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllProject = () => {
    const [project, setProject] = useState([]);
    
    useEffect(() => {
        getAllProjects();
    }, []);

    const deleteUserData = async (id) => {
        await deleteProject(id);
        getAllProjects();
    }

    const getAllProjects = async () => {
        let response = await getProject();
        setProject(response.data);
    }

    return (
        <StyledTable data-testid= "read">
            <TableHead data-testid= "head">
                <THead>
                    <TableCell data-testid= "c1">Id</TableCell>
                    <TableCell data-testid= "c2">Employee Name</TableCell>
                    <TableCell data-testid= "c31">email</TableCell>
                    <TableCell data-testid= "c42">Designation</TableCell>
                    
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {project.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user._id}</TableCell> 
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.Designation}</TableCell>
                        
                        <TableCell>
                            <Button type= 'button' color="primary" variant="contained" data-testid= "btn1" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> 
                            <Button color="secondary" variant="contained" data-testid= "btn2" onClick={() => deleteUserData(user._id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllProject;