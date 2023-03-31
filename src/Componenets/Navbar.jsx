import { useState } from 'react';
import { Dropdown, DropdownButton, Form, FormControl } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { onSerachQuery, onSerachStatus } from '../Utils/Utils';


export const NavbarComp = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('Filter Status')


    const handleSelect = async (eventKey, event) => {
        setTitle(event.target.innerText);
        await dispatch(onSerachStatus(event.target.innerText))
    };
    const handleSearch = async (event) => {
        setTitle('Filter Status')
        await dispatch(onSerachQuery(event.target.value))
    };

    return (
        <div className="App">
            <div className='navbar-margin-btm'>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
                        <Form className="d-flex">
                            <Navbar.Brand variant="outline-secondary" >Filter</Navbar.Brand>
                            <div className='margin-right'>
                                <FormControl
                                    type="search"
                                    placeholder="Type to search"
                                    className="mr-2 text-input"
                                    aria-label="Search"
                                    onChange={(event) => { handleSearch(event) }}
                                />
                            </div>
                            <DropdownButton variant="outline-secondary" title={title} onSelect={handleSelect}>
                                <Dropdown.Item href="#All" >All Items</Dropdown.Item>
                                <Dropdown.Item href="#Incomplete">Incomplete</Dropdown.Item>
                                <Dropdown.Item href="#Completed">Completed</Dropdown.Item>
                            </DropdownButton>
                        </Form>
                    </Container>
                </Navbar>
            </div>
        </div>

    )
}