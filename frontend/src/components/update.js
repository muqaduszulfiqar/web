import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getProject, updateProject } from '../Service/Api';

const initialValue = {
    name: '',
    email: '',
    id: '',
   // Designation:''
   //ddrrr

    
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const UpdateProject = () => {
    const [project, setProject] = useState(initialValue);
    const { name, email, E_id} = project;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getProject(id);
        setProject(response.data);
    }

    const editUserDetails = async() => {
        const response = await updateProject(id, project);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setProject({...project, [e.target.name]: e.target.value})
    }

    return (
        <Container data-testid= "update" injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input" data-testid= "uname">Employee Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" data-testid= "Email">email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" data-testid= "uid">E_id</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={E_id} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            {/* <FormControl>
                <InputLabel htmlFor="my-input" data-testid= "Des">Designation</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Designation' value={Desigation} id="my-input" aria-describedby="my-helper-text" />
            </FormControl> */}
            <FormControl>
                <Button variant="contained" color="primary" data-testid= "ubtn" onClick={() => editUserDetails()}>Update Project</Button>
            </FormControl>
        </Container>
    )
}

export default UpdateProject