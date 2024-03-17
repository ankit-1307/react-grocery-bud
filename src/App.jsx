import { useState, useEffect } from "react";
import "./App.css";
import { Items } from "./component/Items";
import { Form } from "./component/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
    const [totalItems, setTotalItems] = useState([]);
    const handleList = (values) => {
        setTotalItems(values);
    };
    const handleRemovalItems = (newList) => {
        console.log(newList);
        setTotalItems((prevList) => {
            // console.log(newItemList);
            return newList;
        });
        toast.error("Item removed successfully");
    };
    const handleCheckedItems = (checkedId) => {
        console.log(checkedId);
        setTotalItems((prevItems) => {
            const newItemsChecked = prevItems.map((eachItem) => {
                if (eachItem.id === checkedId) {
                    eachItem.isChecked = !eachItem.isChecked;
                }
                return eachItem;
            });
            return newItemsChecked;
        });
    };
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("items"));
        if (items) {
            setTotalItems(items);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(totalItems));
    }, [totalItems]);
    return (
        <main>
            <div className="container">
                <Form handleList={handleList} items={totalItems} />
                <Items
                    items={totalItems}
                    handleRemovalItems={handleRemovalItems}
                    handleCheckedItems={handleCheckedItems}
                />
                <ToastContainer position="bottom-right" />
            </div>
        </main>
    );
}

export default App;
