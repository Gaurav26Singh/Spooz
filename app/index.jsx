import { Redirect } from "expo-router";
import { useEffect } from "react";
import SystemNavigationBar from 'react-native-system-navigation-bar';
export default function Index() {
 
  return <Redirect href={'/home'}/>
}
