import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addProject } from '../Service/Api';
import { useNavigate } from 'react-router-dom';


const initialValue = {
    name: '',
    email: '',
    employee_id: '',
    Designation:''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddProject = () => {
    const [project, setProject] = useState(initialValue);
    const { name, email, id } = project;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setProject({...project, [e.target.name]: e.target.value})
    }

    const addProjectDetails = async() => {
        await addProject(project);
        navigate('/all');
    }

    return (
        <Container data-testid= "create">
            <Typography variant="h4">Add Employee</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input" data-testid = 'name'>Employee Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" data-testid = 'email'>email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" data-testid = 'id'>employee_id</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='employee_id' value={id} id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input" data-testid = 'Des'>Designation</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Designation' value={id} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" data-testid = 'btn' onClick={() => addProjectDetails()}>Add Employee</Button>
            </FormControl>
        </Container>
    )
}
//added
export default AddProject;