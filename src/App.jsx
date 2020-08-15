import React from 'react';
import './global.scss';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import ProductList from './pages/product-list/product-list';
import ProductDetails from './pages/product-details/product-details';

export const ROUTES = {
    LIST: '/product-list',
    DETAILS: '/product-details'
}

export default function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path={ROUTES.LIST}>
                    <ProductList/>
                </Route>
                <Route path={`${ROUTES.DETAILS}/:id`}>
                    <ProductDetails />
                </Route>
                <Route exact path="/">
                    <Redirect to={ROUTES.LIST}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}