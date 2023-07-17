import React from 'react';
import loader from "../../../assets/img/Spinner-1s-200px.svg";

const Preloader = () => {
    return (
        <div>
            <img src={loader} alt="#"/>
        </div>
    );
};

export default Preloader;