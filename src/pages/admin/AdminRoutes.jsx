import React from 'react'
import { Route, Routes } from "react-router-dom";
// import AdminDashboard from "../AdminPanelPages/AdminDashboard/Index";
import CardList from './CardList';
import Carousel from './Carousel';
import AdminLayout from '../../components/Layout/AdminLayout';
import ProductList from './ProductList';
import CategoryList from './CategoryList';

const AdminRoutes = () => {
    return (
        <Routes>
            <Route
                path="/cardList"
                element={
                    <AdminLayout title="Card">
                        <CardList />
                    </AdminLayout>
                }
            />
            <Route
                path="/carousel"
                element={
                    <AdminLayout title="Carousel">
                        <Carousel />
                    </AdminLayout>  
                }
            />
            <Route
                path="/products"
                element={
                    <AdminLayout title="Products">
                        <ProductList/>
                    </AdminLayout>  
                }
            />
            <Route
                path="/category"
                element={
                    <AdminLayout title="Category">
                        <CategoryList/>
                    </AdminLayout>  
                }
            />
        </Routes>
    )
}

export default AdminRoutes