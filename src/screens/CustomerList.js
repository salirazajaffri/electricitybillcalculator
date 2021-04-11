import React,{useEffect, useState} from 'react';

import { Text, View, StyleSheet } from 'react-native';

import { Button, TextInput } from 'react-native-paper';



const CustomerList =()=>{

    const [ user,setUser ] =useState('')

    useEffect( ()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
         .then(data=>{
             setUser(data.id)
             console.log(data);

        })

    },[])

    return(
        <Text>
            {user}
        </Text>
    )

}

export default CustomerList;