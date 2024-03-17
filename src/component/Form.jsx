import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";

export const Form = ({ handleList, items }) => {
    const [item, setItem] = useState("");
    const [itemList, setItemList] = useState(items);
    console.log(itemList);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (item.length > 0) {
            setItemList((prevItems) => {
                const newItems = [
                    ...items,
                    { id: nanoid(), name: item, isChecked: false },
                ];
                return newItems;
            });
            toast.success("Item Added Successfully");
        } else {
            toast.error("Please enter an item");
        }
        setItem("");
    };
    useEffect(() => {
        handleList(itemList);
    }, [itemList]);
    return (
        <section>
            <h2>Grocery Bud</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                        setItem(e.target.value);
                    }}
                    placeholder="add item.."
                ></input>
                <button type="submit" onClick={() => {}}>
                    Add Item
                </button>
            </form>
        </section>
    );
};
