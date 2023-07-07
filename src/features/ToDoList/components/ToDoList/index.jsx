import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.scss";

const ToDoList = ({ toDoList, onToDoClick }) => {
    const handleToDoClick = (toDo, idx) => {
        if (!onToDoClick) return;

        onToDoClick(toDo, idx);
    };
    return (
        <ul className={classnames({ "todo-list": true })}>
            {toDoList?.map((toDo, idx) => (
                <li
                    key={toDo.id}
                    className={classnames({
                        "todo-item": true,
                        completed: toDo.status === "completed",
                    })}
                    onClick={() => handleToDoClick(toDo, idx)}>
                    {toDo.title}
                </li>
            ))}
        </ul>
    );
};

ToDoList.propTypes = {
    toDoList: PropTypes.array,
    onToDoClick: PropTypes.func,
};

ToDoList.defaultProps = {
    toDoList: [],
    onToDoClick: null,
};

export default ToDoList;
