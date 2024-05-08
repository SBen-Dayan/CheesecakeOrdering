export default function Preview({ baseFlavor, toppings, requests, quantity, deliveryDate, total }) {
    return <>
        <div className="ms-5">
            <h2 className="mb-4">Live Preview</h2>
            <div className="card" style={{ width: '18rem' }}>
                <img src="/cheesecake.jpg" className="card-img-top" alt="Cheesecake" />
                <div className="card-body">
                    <h5 className="card-title">Your Custom Cheesecake</h5>
                    <p className="card-text">Base: {baseFlavor}</p>
                    <p className="card-text">Toppings: {toppings} </p>
                    <p className="card-text">Special Requests: {requests}</p>
                    <p className="card-text">Quantity: {quantity}</p>
                    <p className="card-text">Delivery Date: {deliveryDate}</p>
                    <p className="card-text fw-bold">Total: {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        }).format(total)}</p>
                </div>
            </div>
        </div>
    </>
}
