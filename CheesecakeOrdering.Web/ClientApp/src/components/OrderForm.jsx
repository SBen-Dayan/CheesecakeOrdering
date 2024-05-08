import { v4 as guid } from 'uuid';

export default function OrderForm({ price, setPrice, name, setName, email, setEmail,
                        flavors, selectedFlavor, setFlavor,
                        toppings, selectedToppings, setSelectedToppings, request, setRequest,
                        quantity, setQuantity, date, setDate, onSubmitClick }) {
    selectedToppings = !selectedToppings ? [] : selectedToppings.split(',');

    const onFlavorChange = ({ target: { value } }) => {
        setFlavor(value);
        if (!selectedFlavor) {
            setPrice(price + 49.99);
        }
    }
    const onCheckChange = topping => {
        if (selectedToppings.includes(topping)) {
            price = price - 3.95;
            selectedToppings = selectedToppings.filter(t => t != topping);
        } else {
            price = price + 3.95;
            selectedToppings.push(topping);
        }
        setPrice(price);
        setSelectedToppings(selectedToppings.join());
    }
    return <>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control"
                value={name} onChange={({ target: { value } }) => setName(value)} />
        </div>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control"
                value={email} onChange={({ target: { value } }) => setEmail(value)} />
        </div>
        <div className="mb-3">
            <label className="form-label">Cheesecake Base Flavor ($49.99)</label>
            <select value={selectedFlavor}
                onChange={onFlavorChange}
                className="form-select">
                <option value={''} disabled>--------choose--------</option>
                {flavors.map(f => <option key={guid()}>{f}</option>)}
            </select>
        </div>
        <div className="mb-3">
            <label className="form-label">Toppings (each topping adds an additional $3.95)</label>
            {toppings.map(t => {
                return <div key={guid()} className="form-check">
                    <input className="form-check-input" type="checkbox"
                        checked={selectedToppings.includes(t)}
                        onChange={() => onCheckChange(t)} />
                    <label className="form-check-label">{t}</label>
                </div>
            })}
            <div className="mb-3">
                <label className="form-label">Special Requests</label>
                <textarea className="form-control" rows="3"
                    value={request} onChange={({ target: { value } }) => setRequest(value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Quantity</label>
                <input type="number" className="form-control" min="1"
                    value={quantity} onChange={({ target: { value } }) => setQuantity(value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Delivery Date</label>
                <input type="date" className="form-control"
                    value={date} onChange={({ target: { value } }) => setDate(value)} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={onSubmitClick}>Submit Order</button>
        </div>

    </>
}