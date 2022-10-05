import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import estilos from './main.module.css';
import Cart from '../Cart/Cart';

const Main = () => {
    return (
        <main className={estilos.main}>
            <Routes>
                <Route
                    path="/"
                    element={<ItemListContainer saludo="Bienvenido a nuestra tienda" />}
                />
                <Route
                    path="/category/:categoryName"
                    element={<ItemListContainer />}
                />
                <Route
                    path="/detail/:idProd"
                    element={<ItemDetailContainer />}
                />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </main>
    );
};

export default Main;
