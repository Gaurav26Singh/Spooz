import { View, Text, Image, ScrollView,RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import News from "../components/News";
import Carouselrn from "../components/Carouselrn";
const home = () => {

  const [refreshing, setRefreshing] = React.useState(false);
 
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  
  return (

      <ScrollView style={{backgroundColor:'#e9ecee', minHeight:'auto', paddingBottom:15}} refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View
        style={{
          height: 125,
          marginTop: 0,
          backgroundColor: "#b497d6",
        }}
      >
        <Image
          source={require("../../assets/images/spoozlogoo.png")}
          style={{ height: 55, width: 130, marginTop: 65, marginLeft: 10 }}
        />
      </View>
      <Text style={{fontSize:16, marginTop:25, marginLeft:15, marginBottom:10, fontWeight:'500'}}>Live Matches</Text>
      <Carouselrn/>
      <Text style={{fontSize:16, marginTop:15, marginLeft:15, marginBottom:10, fontWeight:'500'}}>Recent News</Text>
      <News/>
      </ScrollView>
  
  );
};

export default home;
