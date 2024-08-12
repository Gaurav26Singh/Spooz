import { View, Text,Image } from 'react-native'
import React from 'react'
import moment from 'moment';
import { ScrollView } from 'react-native';

const NewsDetails = ({ route, navigation }) => {
  const {title, content,published,image_url} = route.params.item;
  // console.log(route.params.item);
  return (
    <ScrollView style={{backgroundColor:'white'}} >
       <Image
         style={{width:'100%', height:250, objectFit:'cover',}}
         source={{uri:image_url}}
        />
        <Text style={{fontSize:21, width:'99%', paddingLeft:7, marginTop:15, lineHeight:25,fontWeight:'600'}}>{title}</Text>
        <Text style={{fontSize:14.5 , marginTop:15, color:'grey',paddingLeft:10,fontWeight:'500'}}>{moment(published).fromNow()}</Text>
        <Text style={{width:'95%', margin:'auto', lineHeight:26,fontSize:15,textAlign:'justify', marginTop:25}}>{content}</Text>
    </ScrollView>
  )
}

export default NewsDetails