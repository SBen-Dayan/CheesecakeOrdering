import axios from "axios";
import { componentDidMount } from "../assets/componentDidMount"
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import dayjs from "dayjs";

export default function ViewOrders() {
    const [cheesecakeOrders, setCheesecakeOrders] = useState([]);

    componentDidMount(async () => {
        const { data } = await axios.get('/api/cheescakeorder/getall');
        setCheesecakeOrders(data);
    })

    return <>
        <div className="d-flex justify-content-center">
            <table className="table text-center shadow-lg table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Base Flavor</th>
                        <th>Toppings</th>
                        <th>Special Requests</th>
                        <th>Quantity</th>
                        <th>Delivery Date</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cheesecakeOrders.map(({ id, name, email, baseFlavor, toppings, requests, quantity, deliveryDate, total }) =>
                        <Fragment key={id}>
                            <tr>
                                <td><Link to={`/order-details/${id}`}>{name}</Link></td>
                                <td><Link to={`/order-details/${id}`}>{email}</Link></td>
                                <td>{baseFlavor}</td>
                                <td>{toppings}</td>
                                <td>{requests}</td>
                                <td>{quantity}</td>
                                <td>{dayjs(deliveryDate).format('MM/DD/YYYY')}</td>
                                <td>{new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    }).format(total)}</td>
                            </tr>
                        </Fragment>)}
                </tbody>
            </table>
        </div>

    </>
}