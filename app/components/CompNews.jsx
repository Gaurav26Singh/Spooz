import { View, Text, Image, ScrollView, RefreshControl, } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import moment from "moment";

const CompNews = ({ navigation }) => {
  const [allnews, setallnews] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getnews();
      console.log('refreshed');
      setRefreshing(false);
    }, 2000);
  }, []);
  useEffect(() => {
    getnews();
  }, []);
  const getnews = async () => {
    const url = 'https://sportsdaily.p.rapidapi.com/api/sports/news/?page=1&page_size=20';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '634de930c2mshb304f4b1693e91ep1a029ajsn44c4d1240a77',
        'x-rapidapi-host': 'sportsdaily.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result.results);
      setallnews(result.results);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
     <ScrollView refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
     <Text style={{fontSize:17, marginTop:15, marginBottom:15, marginLeft:15, fontWeight:'500' }}>Recent News</Text>
     {allnews.map((val,idx)=>(
     <TouchableOpacity onPress={() => navigation.navigate("NewsDeatils",{item:val})} key={idx} >
       <View style={{width:'95%', margin:'auto', padding:20, height:'fit-content', marginBottom:10, backgroundColor:'white', borderRadius:10}}>
         <Image
         style={{width:'100%', height: 200, objectFit:'cover',borderRadius:10}}
         source={{uri:val.image_url}}
        />
         <Text style={{fontWeight:'bold',fontSize:17, marginTop:15}}>{val.title}</Text>
         <Text style={{fontSize:13, marginTop:10, textAlign:'right', color:'grey'}}>{moment(val.published).fromNow()}</Text>
        </View>
     </TouchableOpacity>
     
     ))}
     </ScrollView>
    </View>
  );
};

export default CompNews;
