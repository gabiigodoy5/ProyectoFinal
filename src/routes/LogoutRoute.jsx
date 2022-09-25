import { Component } from "react";
import React from "react";
import { Redirect, Route } from "react-router-dom";



const LogoutRoute = ({ component: Component, ..moreData}) => {
    return(
        <Route
        {...moreData}
        render={() =>{
            localStorage.clear();
            return <Redirect to="/home" />; 
        }}
        />
    );
};

export default LogoutRoute;