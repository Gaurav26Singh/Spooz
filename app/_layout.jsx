import { Stack } from "expo-router";
import {StatusBar} from 'expo-status-bar'
import { useState, useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import { Alert } from "react-native";
export default function RootLayout() {
  const requestUserPermission = async()=>{
    const authStatus = await messaging().requestPermission();
    const enabled = 
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if(enabled){
        console.log('Authorization status:', authStatus);
      }
  };

  useEffect(()=>{
    if(requestUserPermission()){
      messaging()
      .getToken()
      .then((token)=>{
        console.log(token);
      })
    }else{
      console.log("Permission not granted", authStatus);
    }
    messaging()
      .getInitialNotification()
      .then(async (remoteMessage)=>{
        if(remoteMessage){
          console.log(
            "Notification caused app to open from quit state:",
             remoteMessage.notification
          );
        }
      });
      
      messaging().onNotificationOpenedApp((remoteMessage)=>{
        console.log(
          "Notification caused app to open from background state:",
          remoteMessage.notification
        );
      });

      messaging().setBackgroundMessageHandler(async(remoteMessage)=>{
         console.log("Messaging handled in the background!", remoteMessage);
      });

      const unsubscribe = messaging().onMessage(async(remoteMessage)=>{
        Alert.alert("A new message arrived!",JSON.stringify(remoteMessage));
      });
      return unsubscribe;
  },[]);

  return (
       
       <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      
      
  );
}