import React, { useState } from "react";
// import PropTypes from "prop-types";
import ToDoList from "./components/ToDoList";

const ToDoFeature = (props) => {
    const initToDoList = [
        {
            id: 1,
            title: "Eat",
            status: "new",
        },
        {
            id: 2,
            title: "Sleep",
            status: "completed",
        },
        {
            id: 3,
            title: "Code",
            status: "new",
        },
    ];

    const [toDoList, setToDoList] = useState(initToDoList);

    const [filteredStatus, setFilterdStatus] = useState("all");

    const handleToDoClick = (toDo, idx) => {
        // clone array
        const newToDoList = [...toDoList];

        console.log(toDo, idx);
        // toggle state
        newToDoList[idx] = {
            ...newToDoList[idx],
            status: newToDoList[idx].status === "new" ? "completed" : "new",
        };

        setToDoList(newToDoList);
    };

    const handleShowAllClick = () => {
        setFilterdStatus("all");
    };

    const handleShowCompletedClick = () => {
        setFilterdStatus("completed");
    };

    const handleShowNewClick = () => {
        setFilterdStatus("new");
    };

    const renderedToDoList = toDoList.filter(
        (toDo) => filteredStatus === "all" || filteredStatus === toDo.status
    );

    console.log(renderedToDoList);

    return (
        <>
            <h3>Todo List</h3>
            <ToDoList toDoList={renderedToDoList} onToDoClick={handleToDoClick} />

            <button onClick={handleShowAllClick}>Show All</button>
            <button onClick={handleShowCompletedClick}>Show Completed</button>
            <button onClick={handleShowNewClick}>Show New</button>
        </>
    );
};

ToDoFeature.propTypes = {};

export default ToDoFeature;
