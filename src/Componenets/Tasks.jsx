import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { filterItems } from "../Utils/Utils";
import { TaskItem } from "./TaskItem";

export const Tasks = () => {
    const [filtered, setFiltered] = useState([])
    const { search_status, search_query, tasks } = useSelector((state) => state);

    useEffect(() => {
        setFiltered(tasks)
    }, [tasks])

    useEffect(() => {
        let filter = filterItems(tasks, search_status)
        setFiltered(filter)
    }, [search_status])

    useEffect(() => {
        setFiltered(tasks.filter((item) => item.title.includes(search_query)))
    }, [search_query])

    const editItem = (name, value, id) => {
        let temp = [...filtered]
        let index = filtered.findIndex((item) => item.id === id)
        temp[index][name] = [value]
        setFiltered(temp)
    }
    return (
        <>
            {filtered.map((task, idx) => {
                return (
                    <TaskItem key={idx} task={task} tasks={filtered} editItem={editItem} />
                )
            })}
        </>
    )
}