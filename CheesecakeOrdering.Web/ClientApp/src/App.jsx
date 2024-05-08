import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Order from './Pages/Order';
import ViewOrders from './Pages/ViewOrders';
import OrderDetails from './Pages/OrderDetails';
import Success from './Pages/Success';
import Invalid from './Pages/Invalid';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/order' element={<Order />} />
                <Route path='/view-orders' element={<ViewOrders />} />
                <Route path='/order-details/:orderId' element={<OrderDetails />} />
                <Route path='/success' element={<Success/>}/>
                <Route path='/invalid' element={<Invalid/>}/>
            </Routes>
        </Layout>
    );
}

export default App;