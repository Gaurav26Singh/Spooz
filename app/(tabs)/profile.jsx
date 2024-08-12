import { View, Text, ScrollView,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment';

const profile = () => {
  const [post, setpost] = useState([]);
  const data = ["szocsbernadettecynthia","manikabatra.15","virat.kohli","leomessi","cristiano","rohitsharma45","neymarjr","mariasharapova","neeraj____chopra","bhakermanu","serenawilliams","usainbolt","m_phelps00","espn","smriti_mandhana","chetri_sunil11","senlakshya","tomevansultra","sophiehellyer","manpreetsingh07","davidbeckham","hardikpandya93","jaspritb1","sachin.tanwar.71868","pardeep_narwal9"];
  useEffect(()=>{
    getpost();
  },[])
  
const getpost = ()=>{
  data.forEach(async(val)=>{
    const url = `https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=${val}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'be68c49c50mshfee072ccc7099f5p1f44a9jsncb8f354c108e',
		'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
  const result = await response.json();
  // console.log(result.data);
  let len = result.data.items.length;
  for(let i=0;i<len;i++)
  {
    if(!result.data.items[i]["is_pinned"])
    {
      result.data.items[0] = result.data.items[i];
      if(result.data.items[0]["caption"]==null)
      {
        result.data.items[0]["caption"] = "text";
        result.data.items[0]["caption"]["text"] = ""
      }
      break;
    }
  }
  setpost(arr=>[...arr, result.data])
 
} catch (error) {
	console.error(error);
}
  })
}

  return (
    
    <View style={{paddingBottom:15,paddingTop:5}}>
      <ScrollView>
        {post.map((val,idx)=>(
          <View key={idx}>
           <View style={{marginTop:20,display:"flex", flexDirection:"row", height:40,alignItems:'center', gap:4,paddingLeft:7,paddingBottom:15}}>
           <Image
         style={{width:40, height: 40, objectFit:'cover',borderRadius:100}}
         source={{uri:val.user["profile_pic_url"]}}/>
            <Text style={{fontWeight:'600', fontSize:14}}>{val.user["username"]}</Text>
            <Image
         style={{width:25, height: 25,marginLeft:-5}}
         source={{uri:"https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-4.png"}}/>
           </View>
           <View style={{width:"100%", marginBottom:12}}>
           <Image
         style={{width:"100%",height:500,objectFit:'cover', objectPosition: "bottom right"}}
         source={{uri:val.items[0]["thumbnail_url"]}}/>
            <Text style={{paddingLeft:8, paddingRight:11,paddingTop:7, textAlign:'justify'}}>{val.items[0]["caption"]["text"]}</Text>
            <Text style={{paddingLeft:8, paddingRight:11, paddingTop:3,color:'grey',fontWeight:400}}>
            {moment(val.items[0]["taken_at"]*1000).fromNow()}
            </Text>
           </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default profile