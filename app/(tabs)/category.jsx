import React from 'react';
import { ImageBackground,StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export default function category() {
  const [items, setItems] = React.useState([
    { name: 'Cricket', url: require('../../assets/images/Cricket.jpg') },
    { name: 'Basketball',url: require('../../assets/images/Basketball.jpg') },
    { name: 'Badminton', url: require('../../assets/images/Badminton.jpg') },
    { name: 'Football', url: require('../../assets/images/Football.jpg') },
    { name: 'Kabaddi', url: require('../../assets/images/Kabaddi.png') },
    { name: 'Vollyball', url: require('../../assets/images/Vollyball.jpg') },
    { name: 'Table Tennis', url: require('../../assets/images/TableTennis.png') },
    { name: 'Tennis', url: require('../../assets/images/Tennis.jpeg') },
  
  ]);

  return (
    <View  style={{flexDirection: "column",flex: 1, }}>
      <View>
        <Text style={{fontSize:16, marginTop:10, marginLeft:15, fontWeight:'500'}}>Select Category</Text>
      </View>
      <View style={{ flex: 10}}>
      <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer]}>
          <ImageBackground source={item.url} style={{height:'100%',width:'100%'}}>
          <Text style={styles.itemName}>{item.name}</Text>
          </ImageBackground>
         
        </View>
      )}
    />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 5,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    height: 160,
  },
  itemName: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '600',
    paddingLeft:7,
    paddingTop:2
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});