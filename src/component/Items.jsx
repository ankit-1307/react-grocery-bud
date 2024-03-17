import { useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { SingleItem } from "./SingleItem";

export const Items = (props) => {
    const { items, handleRemovalItems, handleCheckedItems } = props;
    // const [isBoxChecked, setIsBoxChecked] = useState(items.isChecked);
    const handleRemoval = (removeId) => {
        const newGroceryItems = items.filter((items, id) => {
            if (removeId !== items.id) {
                return items;
            }
        });
        handleRemovalItems(newGroceryItems);
    };

    return (
        <section className="section-item">
            {items.map((eachGroceryItems, index) => {
                const { name, id, isChecked } = eachGroceryItems;
                return (
                    <div key={id} className="list-item">
                        <SingleItem
                            {...eachGroceryItems}
                            handleCheckedItems={handleCheckedItems}
                        />
                        <button
                            className="remove-item"
                            onClick={() => {
                                handleRemoval(id);
                            }}
                        >
                            remove
                        </button>
                    </div>
                );
            })}
        </section>
    );
};
