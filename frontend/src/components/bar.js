
import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: #a599ea;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const bar = () => {
    return (
        
        <Header data-testid='hehe' position="static">
            <Toolbar>
                <Tabs to="./" exact>EMS</Tabs>
                <Tabs to="all" exact> View All </Tabs>
                <Tabs to="add" exact>Add Employee</Tabs>
            </Toolbar>
        </Header>
        
    )
}

export default bar;