import React from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IP_CALL } from '@env';
import {
  Tag,
  IdentifyView,
  Identify,
  TitleView,
  IdentView,
  ViewCol1,
  DesciptionText,
  ButtonView,
  ButtonArea,
  ButtonAreaWithBorders,
  StatusText
} from './styles'


const PointRiskTag = ({ id, refValue, title, description, status, statusDescription, image, location, onDelete }) => {
  const navigation = useNavigation();

  const deleteRiskPoint = async () => {
    try {
      Alert.alert(
        'Confirmação',
        'Tem certeza de que deseja deletar este ponto de risco?',
        [
          {
            text: 'Cancelar',
            onPress: () => console.log('Cancelado o delete'),
            style: 'cancel',
          },
          {
            text: 'Deletar',
            onPress: async () => {
              const token = await AsyncStorage.getItem('token');
              const response = await axios.delete(`http://192.168.1.8:3000/delete/${id}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                }
              );
  
              if (response.data) {
                Alert.alert('Ponto de risco deletado com sucesso!');
                onDelete(id); // Chama a função de deleção passada como prop
              }
            },
          },
        ]
      );
    } catch (error) {
      console.log('Erro na requisição para deletar ponto de risco', error);
      Alert.alert('Erro ao deletar ponto de risco');
    }     
  }  
  

  return (
   <Tag>
      <IdentifyView>
        <Identify>{refValue}</Identify>
        
        <Feather name='map-pin' color='#fff' size={20} />
      </IdentifyView>

      <TitleView>{title}</TitleView>
      

      <IdentView>
        <ViewCol1>
          <DesciptionText>{description}</DesciptionText>
          <StatusText>Status: {status ? 'Liberado' : 'Não Liberado'}</StatusText>
        </ViewCol1>

        <ButtonView>
          <ButtonArea onPress={deleteRiskPoint}>
            <Feather name='trash-2' color='#fff' size={35} />
          </ButtonArea>

          <ButtonAreaWithBorders onPress={() => navigation.navigate('ViewRiskPoint', { id, refValue, title, description, status, statusDescription, image, location })}>
            <Feather name='search' color='#000' size={30} />
          </ButtonAreaWithBorders>
        </ButtonView>
      </IdentView>
    </Tag>
  )
}

export default PointRiskTag;