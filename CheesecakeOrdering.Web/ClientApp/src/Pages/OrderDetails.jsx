//to do
import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { componentDidMount } from "../assets/componentDidMount"
import dayjs from "dayjs"

export default function OrderDetails() {
    const [cheescakeOrder, setCheesecakeOrder] = useState({});
    const { orderId } = useParams();

    componentDidMount(async () => {
        const { data } = await axios.get(`/api/cheescakeOrder/getorder?id=${orderId}`);
        setCheesecakeOrder(data);
    })

    const { name, email, baseFlavor, toppings, requests, quantity, deliveryDate, total } = cheescakeOrder;
    return <>
        <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
            <div className="card text-center lg-light shadow p-3 mb-5 bg-body rounded" style={{ width: '30rem' }}>
                <div className="card-body">
                    <h3 className="card-title fw-bold">{name}</h3>
                    <p className="card-text fs-5">{email}</p>
                    <p className="card-text fs-5">{baseFlavor}</p>
                    <p className="card-text fs-5">{toppings}</p>
                    <p className="card-text fs-5">{requests ? requests : 'no requests'}</p>
                    <p className="card-text fs-5">{quantity}</p>
                    <p className="card-text fs-5">{dayjs(deliveryDate).format('MM/DD/YYYY')}</p>
                    <p className="card-text fs-5">{new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(total)}</p>
                </div>
                <Link to="/view-orders" className="btn btn-primary w-100">Back to Orders</Link>
            </div>
        </div>
    </>
}