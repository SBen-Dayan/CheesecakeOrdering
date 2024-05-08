//not complete - do onSubmitClick..
import OrderForm from "../components/OrderForm";
import Preview from "../components/Preview";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const baseFlavors = ['Classic', 'Chocolate', 'Red Velvet', 'Brownie'];
const toppings = [
    'Chocolate Chips', 'Caramel Drizzle', 'Whipped Cream', 'Pecans', 'Almonds',
    'Toasted Coconut', 'Graham Cracker Crumble', 'Cookie Dough', 'Mint Chocolate Chips',
    'Caramelized Bananas', 'Rainbow Sprinkles', 'Powdered Sugar', 'White Chocolate Shavings',
    'Peanut Butter Drizzle', 'Dark Chocolate Drizzle'];

export default function Order() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedFlavor, setFlavor] = useState('');
    const [selectedToppings, setToppings] = useState('');
    const [requests, setRequests] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [date, setDate] = useState('');
    const [price, setPrice] = useState(0);

    const navigate = useNavigate();

    const onSubmitClick = async () => {
        if (!name || !selectedFlavor || !date || !price * quantity) {
            navigate('/invalid');
        } else {
            await axios.post('/api/Cheescakeorder/addorder',
            { name, email, baseFlavor: selectedFlavor, toppings: selectedToppings, deliveryDate : date, requests, quantity, total: price * quantity });
            navigate('/success');
        }
    }

    return <>
        <h1 className="text-center my-4 bg-light py-2">Cheesecake Factory Order Form</h1>
        <div className="row mt-5">
            <div className="col-md-6">
                <OrderForm
                    onSubmitClick={onSubmitClick}
                    name={name} setName={setName}
                    email={email} setEmail={setEmail}
                    flavors={baseFlavors} selectedFlavor={selectedFlavor} setFlavor={setFlavor}
                    toppings={toppings} selectedToppings={selectedToppings} setSelectedToppings={setToppings}
                    request={requests} setRequest={setRequests}
                    quantity={quantity} setQuantity={setQuantity}
                    date={date} setDate={setDate}
                    price={price} setPrice={setPrice} />
            </div>
            <div className="col-md-6 position-sticky" style={{ top: '2rem' }}>
                <Preview baseFlavor={selectedFlavor} toppings={selectedToppings} requests={requests}
                    quantity={quantity} deliveryDate={date} total={price * quantity} />
            </div>
        </div>
    </>
}