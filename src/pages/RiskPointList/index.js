import React, { useState, useEffect, useCallback  } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useFocusEffect } from '@react-navigation/native';
import { 
  IP_CALL
} from '@env';
import {
  ListContainer,
  ScrollView,
  Titulo
} from './styles.js';

import PointRiskTag from '../../assets/component/PointRiskTag/index.js';

const RiskPointList = () => {
  const [riskPoints, setRiskPoints] = useState([]);

  const fetchRiskPoints = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.get(`http://192.168.1.8:3000/getriskpoints`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      ); 
      setRiskPoints(response.data);

    } catch (error) {
      Alert.alert('Erro ao buscar pontos de risco:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchRiskPoints();
    }, [])
  );
  
  const handleDeleteRiskPoint = (id) => {
    setRiskPoints(prevRiskPoints => prevRiskPoints.filter(point => point._id !== id));
  };

  return (
    <ListContainer>
      <StatusBar backgroundColor='rgba(244, 134, 4, 0.1)' />
      <Titulo>Lista de Pontos de Risco</Titulo>

      <ScrollView>
        {riskPoints.map((point) => (
          <PointRiskTag 
            key={point._id} 
            id={point._id}
            refValue={point.ref} 
            title={point.title} 
            description={point.description} 
            status={point.status}  
            statusDescription={point.statusDescription}
            image={point.image}
            location={point.location}
            onDelete={handleDeleteRiskPoint}
          />
        ))}
      </ScrollView>
    </ListContainer>
  )
}

export default RiskPointList;