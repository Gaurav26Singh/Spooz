import React from 'react'
import {Text, View} from 'react-native'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {Colors} from '../../constants/Colors'
import * as NavigationBar from 'expo-navigation-bar';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  NavigationBar.setBackgroundColorAsync('black')
  return (
    <Tabs  screenOptions={{ headerStyle:{
      height:100,
      backgroundColor:'#b497d6',
    },
    headerTitleStyle:{
      color:'white',
      fontSize:28,
      paddingLeft:10,
      fontWeight: 700,
      letterSpacing:1.5

    },
    tabBarActiveTintColor:Colors.Primary,tabBarStyle:{
      height:60,
      paddingBottom:10,
      paddingTop:10,
      
    }}}>
      <Tabs.Screen name='home' options={{
        headerShown:false,
        tabBarLabel:'Home',
        tabBarLabelStyle:{fontSize:11},
        tabBarIcon:({color})=><Ionicons name="home-sharp" size={23} color={color} />
      }}/>
      <Tabs.Screen name='category' options={{
        headerTitle:'Category',
        headerTitleStyle:{fontSize:21, color:'white', paddingLeft:10, marginTop:7},
        tabBarLabel:'Category',
        tabBarLabelStyle:{fontSize:11},
        tabBarIcon:({color})=><MaterialIcons name="sports-basketball" size={23} color={color} />
      }}/>
      <Tabs.Screen name='live' options={{
        headerTitle:'Live',
        headerTitleStyle:{fontSize:22, color:'white', paddingLeft:10, marginTop:10},
        tabBarLabel:'Live',
        tabBarLabelStyle:{fontSize:11},
        tabBarIcon:({color})=><MaterialIcons name="online-prediction" size={23} color={color} />
      }}/>
      <Tabs.Screen name='news' options={{
        headerTitle:'News',
        headerTitleStyle:{fontSize:22, color:'white', paddingLeft:10, marginTop:10},
        tabBarLabel:'News',
        tabBarLabelStyle:{fontSize:11},
        tabBarIcon:({color})=><Entypo name="news" size={23} color={color} />
      }}/>
      <Tabs.Screen name='profile' options={{
        headerTitle:()=><View style={{display:'flex', flexDirection:'row',gap:3}}><Text style={{fontSize:21, color:'white', marginTop:10, paddingLeft:10, fontWeight:500}}>Social</Text>
         <AntDesign name="rest" size={22} color="white" style={{ marginTop:11,fontWeight:'bold'}} />
        </View>,
        tabBarLabel:'Social',
        tabBarLabelStyle:{fontSize:11},
        tabBarIcon:({color})=><AntDesign name="rocket1" size={23} color={color} />
      }}/>
    </Tabs>
  )
}