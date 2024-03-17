import React, { useState } from "react";

export const SingleItem = (props) => {
    const { name, id, isChecked, handleCheckedItems } = props;

    const [isBoxChecked, setIsBoxChecked] = useState(isChecked);
    const handleClick = () => {
        handleCheckedItems(id);
    };

    return (
        <div>
            <div className="list-item-container">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleClick}
                ></input>
                <span className={isChecked ? "list-name checked" : "list-name"}>
                    {name}
                </span>
            </div>
        </div>
    );
};
