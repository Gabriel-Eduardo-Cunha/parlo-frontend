import React from 'react';
import {BrowserRouter} from 'react-router-dom'

// Third party css librarys
import 'bootstrap-4-grid'
import '@fontsource/poppins'
import '@fontsource/poppins/300.css'
import '@fontsource/roboto'

import './App.scss';
import Header from '../page_layout/Header/Header';

const AppJsx = () =>
    <BrowserRouter>
        <div id="app">
            {/* <Logo /> */}
            <Header />
            {/* <Routes/> */}
            {/* <Footer /> */}
        </div>
    </BrowserRouter>


export default AppJsx