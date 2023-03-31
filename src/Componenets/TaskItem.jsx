import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTask, UpdateTask } from "../Utils/Utils";

export const TaskItem = ({ task, tasks, editItem }) => {
    const [editable, setEditable] = useState(false)
    const dispatch = useDispatch()


    const onTglStatus = async (item) => {
        item.status = !item.status
        await dispatch(UpdateTask(tasks, item))
    };

    const handleEdit = (event, id) => {
        let name = event.currentTarget.title
        let value = event.target.value
        editItem(name, value, id)
    }
    const onDelete = async (item) => {
        await dispatch(DeleteTask(tasks, item))
        setEditable(false)
    }
    const onEdit = () => { setEditable(!editable) }
    return (
        <>
            <Container className="tasks-container">
                <Card className='mx-auto newTaskCard'>
                    <Card.Header as="h5" className={task?.status ? 'strikethrough' : 'nonStrikethrough'}>
                        ID: {task?.id?.toUpperCase()}
                    </Card.Header>
                    <Card.Body >
                        <div className="task-body">
                            <Col>
                                <Row>
                                    <Card.Text className={task?.status ? 'strikethrough' : 'nonStrikethrough'}>
                                        Title: {editable ? <InputGroup >
                                            <Form.Control
                                                className="text-input"
                                                placeholder="My task"
                                                aria-label="Title"
                                                title={'title'}
                                                aria-describedby="basic-addon1"
                                                value={task?.title}
                                                onChange={(e) => { handleEdit(e, task.id) }}
                                            />
                                        </InputGroup> : task.title}
                                    </Card.Text>
                                </Row>
                                <Row>
                                    <Card.Text className={task?.status ? 'strikethrough' : 'nonStrikethrough'}>
                                        Due: {task?.date}
                                    </Card.Text>
                                </Row>
                            </Col>


                            <button className="button icon-only clear" onClick={() => onTglStatus(task)}>
                                {task?.status && "✅"}
                                {!task?.status && "⬜"}
                            </button>
                        </div>
                    </Card.Body>
                    <Container>
                        {editable && <Button onClick={() => onDelete(task)} className="tasks-buttons delete-btn" variant="danger">Delete</Button>}
                        <Button onClick={() => onEdit()} disabled={task?.status} className="tasks-buttons add-btn" variant="dark">{!editable ? 'Edit' : 'Update'}</Button>
                    </Container>


                </Card>
            </Container>

        </>
    )
}