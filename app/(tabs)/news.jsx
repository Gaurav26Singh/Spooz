import { NavigationContainer } from '@react-navigation/native';
import CompNews from '../components/CompNews';
import NewsDetails from '../components/NewsDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function news() {
    return (
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen
                    name="CompNews"
                    component={CompNews}
                />
               
                <Stack.Screen
                    name="NewsDeatils"
                    component={NewsDetails}
                />
            </Stack.Navigator>
    );
}