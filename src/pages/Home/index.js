import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import { Marker } from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PORT } from '@env';
import Feather from 'react-native-vector-icons/Feather';
import { 
  Background, 
  StyledMapView, 
  BorderTab, 
  Btn, 
  ButtonIcon, 
  BorderLogo, 
  BtnText 
} from './styles';

const Home = () => {
  const navigation = useNavigation();
  const [riskPointLocations, setRiskPointLocations] = useState([]);

  const fetchRiskPoints = async () => {

    try {
      const token = await AsyncStorage.getItem('token');

      const response = await axios.get(`http://192.168.1.8:3000/getlocations`, {
        headers: {
          Authorization: `Bearer ${token}`  
        }
      });  

      if(response.data){
        setRiskPointLocations(response.data)

      } else {
        console.log('Chamada HOME falhou: ', response.data.message);
      }          

    } catch (error) {
      console.log('Erro ao buscar pontos de risco:', error);
    }
  };
   
  useEffect(() => {
    fetchRiskPoints();
  }, []);
   
  return (
    <Background>
      <StatusBar backgroundColor='rgb(250, 250, 250)' />
      <StyledMapView
        initialRegion={{
          latitude:-8.0525654,
          longitude:-34.8877599,
          latitudeDelta:0.02,
          longitudeDelta:0.02,
        }} >
      
        {riskPointLocations.map((loc) => (
          <Marker
            key={loc._id}
            coordinate={{
              latitude: loc.location.latitude,
              longitude: loc.location.longitude,
            }}
          />
        ))}
      </StyledMapView>

      <BorderTab>
        <Btn
          activeOpacity={0.7}
          onPress={() => navigation.navigate('RiskPointList')}>
            <ButtonIcon>
              <Feather name="list" color='#FFFFFF' size={44} />
            </ButtonIcon>
            <BtnText>Listar PR</BtnText>
        </Btn>
        
        <BorderLogo source={require('../../assets/logo.png')}/>

        <Btn
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Register')}>
            <ButtonIcon>
              <Feather name="folder-plus" color='#FFFFFF' size={44} />
            </ButtonIcon>
            <BtnText>Cadastrar PR</BtnText>
        </Btn>
      </BorderTab>
    </Background>
  )
}

export default Home;