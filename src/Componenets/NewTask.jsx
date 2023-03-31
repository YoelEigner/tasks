import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Container, Form, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { SaveNewTask } from '../Utils/Utils';
import { FaTasks, FaRegCalendarAlt } from 'react-icons/fa';

export const NewTask = ({ setShowNewTask }) => {
    const dispatch = useDispatch()
    const [task, setTask] = useState(() => {
        return {
            id: '',
            title: '',
            date: '',
            status: false
        }
    })
    const handleEdit = (e) => {
        let name = e.currentTarget.title
        setTask((prevState) => ({ ...prevState, [name]: e.target.value }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(SaveNewTask(task))
        setShowNewTask(false)
    }


    return (
        <>
            <Container>
                <Card className='mx-auto newTaskCard tasks-container'>
                    <Card.Header as="h5" className='nonStrikethrough'>Add new task</Card.Header>
                    <Card.Body>
                        <Form >
                            <Container style={{ textAlign: "left" }}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1"><FaTasks /></InputGroup.Text>
                                    <Form.Control
                                        className='new-text-input'
                                        placeholder="My task"
                                        aria-label="Title"
                                        title={'title'}
                                        aria-describedby="basic-addon1"
                                        value={task.title}
                                        onChange={(e) => { handleEdit(e) }}
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1"><FaRegCalendarAlt /></InputGroup.Text>
                                    <Form.Control
                                        className='new-text-input'
                                        type="date"
                                        title={'date'}
                                        placeholder="Due Date"
                                        value={task.date}
                                        onChange={(e) => { handleEdit(e) }}
                                    />
                                </InputGroup>
                            </Container>
                            <Button onClick={onSubmit} className='add-btn' variant="dark">Save</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}