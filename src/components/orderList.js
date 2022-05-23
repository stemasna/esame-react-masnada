import '../App.css';
import { useEffect,useState} from 'react';
import {  getOrderList } from '../api';
import React from 'react';
//import {UserRow} from './userRow';

export const  OrderList=()=> {

  const [order, setOrder]= useState([]);
  useEffect(()=>{
    refreshData();
    //getCoinList();
  }, [])

  const refreshData =async()=>{
    const orderList = await getOrderList()
    setOrder(orderList);
  }
  console.log({order})
  return (
    <div className="coin-list">
       {order.map(order => (
        <React.Fragment key={order.id}>
        {/* <dt>acronym clientType displayName </dt> */}
        <dt>
            {order.acronym ? order.acronym : " acronimo "} 
            {order.clientType ? order.clientType : "tipo cliente" } 
            {order.displayName ? order.displayName : "display name"} 
        </dt>
      </React.Fragment>
      ))} 
    </div>
  );
}