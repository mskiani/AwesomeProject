// src/screens/ListScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList,Image, TouchableOpacity,StyleSheet, } from 'react-native';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const ListScreen = () => {
  const [data, setData] = useState([]);
  const [selected, setSelcted] = useState("")

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
   
      const getItem = async () => {
        try {
          const p =await AsyncStorage.getItem("id")
          console.log("selected",p)
          setSelcted(p)
        } catch (error){
          console.log("getitem error",error)
        }
      }
     getItem()
  }, []);

  const handleSelectItem = async (id) => {
    // Save the selected item id in local storage
    // For simplicity, we use `id` as the key and the selected status as the value
    const value = JSON.stringify(id);
  
    console.log(id,"value",value)
    AsyncStorage.setItem("id", value).catch(error => console.error(error));
  
    setSelcted(id)
    console.log("selected  is ", selected)

  };

  const renderItem = ({ item }) => (
   
    <TouchableOpacity onPress={() => handleSelectItem(item.id)}>
  <View style={{
 
    ...styles.itemContainer,
    backgroundColor:  selected == item.id ?  "#3b5998" :"white",
    }}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={{...styles.name,
        color: selected == item.id ? "black" : '#666'
        }}>{item.name}</Text>
        <Text style={styles.username}>@{item.username}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});

export default ListScreen;
