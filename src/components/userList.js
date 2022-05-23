import '../App.css';
import { useEffect,useState} from 'react';
import {  getUserList } from '../api';
import React from 'react';
//import {UserRow} from './userRow';

export const  UserList=()=> {

  const [user, setUser]= useState([]);
  useEffect(()=>{
    refreshData();
    //getCoinList();
  }, [])

  const refreshData =async()=>{
    const UserList = await getUserList()
    setUser(UserList);
  }
  console.log({user})
  return (
    <div className="coin-list">
      {user.map(user => (
        <React.Fragment key={user.id}>
        <dt>
          {user.role ? user.role : " ruolo "} 
          {user.name ? user.name : " name "} 
          {user.surname ? user.surname : " surname "} 
          {user.email ? user.email : " email "}
          </dt>
      </React.Fragment>
      ))}
    </div>
  );
}