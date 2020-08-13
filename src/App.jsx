import React from 'react';
import './global.scss';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import ProductList from './pages/product-list/product-list';
import ProductDetails from './pages/product-details/product-details';

export default function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/product-list">
                    <ProductList/>
                </Route>
                <Route path="/product-details">
                    <ProductDetails />
                </Route>
                <Route exact path="/">
                    <Redirect to="/product-list"/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}