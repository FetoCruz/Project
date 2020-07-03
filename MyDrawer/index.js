// In App.js in a new project

import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import s from './style'
import { TouchableOpacity } from 'react-native-gesture-handler';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home!!</Text>
    </View>
  );
}

function PerfilScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Perfil!!</Text>
    </View>
  );
}

function Menu(props){
  return(
    <View style={s.container}>
      <View style={s.bgContainer}>
        <TouchableOpacity>
          <View style={s.userContainer}>
            <Image style={s.userImagen} source={require('./unan-mangua-escudo-png.png')}/>
          </View>
          <View style={s.userNombre}>
            <Text style={s.userTitulo}>Roberto Cruz</Text>
            <Text style={s.userSubTitulo}>Ver Perfil</Text>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props}/>
    </View>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props)=><Menu {...props}/>}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Perfil" component={PerfilScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;