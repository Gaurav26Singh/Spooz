import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

const News = ({ navigation }) => {
  const [allnews, setallnews] = useState([]);
  useEffect(() => {
    getnews();
  }, []);
  const getnews = async () => {
    const url = 'https://sportsdaily.p.rapidapi.com/api/sports/news/?page=1&page_size=10';
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
     <ScrollView>
     {allnews.map((val,idx)=>(
       <View key={idx} style={{width:'95%', margin:'auto', padding:20, height:'fit-content', marginBottom:10, backgroundColor:'white', borderRadius:10}}>
         <Image
         style={{width:'100%', height: 200, objectFit:'cover',borderRadius:10}}
         source={{uri:val.image_url}}
        />
         <Text style={{fontWeight:'bold',fontSize:17, marginTop:15}}>{val.title}</Text>
        </View>
     
     ))}
     </ScrollView>
    </View>
  );
};

export default News;
