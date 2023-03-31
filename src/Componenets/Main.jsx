import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { NewTask } from './NewTask';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCompletedTasks } from '../Utils/Utils';
import { NavbarComp } from './Navbar';
import { Tasks } from './Tasks';


export const Main = () => {
    const [showNewTask, setShowNewTask] = useState(false)
    const dispatch = useDispatch()
    const { tasks } = useSelector((state) => state);

    const handleClick = () => {
        setShowNewTask(!showNewTask)
    }
    const handleRemoveClick = () => {
        dispatch(DeleteCompletedTasks(tasks))
    }

    return (
        <div>
            <NavbarComp />
            <Container className='add-new-btn-container'>
                <Container >
                    <div  >
                        <Button variant="dark" className='add-btn' onClick={handleClick}>Add New Task</Button>
                        <Button variant="dark" className='add-btn' onClick={handleRemoveClick}>Clear Completed</Button>
                    </div>
                    {showNewTask && <NewTask setShowNewTask={(data) => { setShowNewTask(data) }} />}

                    <div >
                        <Tasks />
                    </div>
                </Container>
            </Container>

        </div>
    )
}