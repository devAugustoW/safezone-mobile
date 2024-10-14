import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Cloudinary } from "@cloudinary/url-gen";
import { 
  CLOUDINARY_CLOUD_NAME, 
  CLOUDINARY_UPLOAD_PRESET,
  IP_CALL, 
  PORT
} from '@env';
import Feather from 'react-native-vector-icons/Feather';
import { Alert, Image } from 'react-native';
import * as Location from 'expo-location';
import { 
  EditRiskPointContainer,
  Titulo,
  ScrollView,
  View,
  AreaInput,
  BtnAndImageView,
  Input,
  DescriptionInput,
  AreaBtnStatus,
  BtnReleased,
  TextReleased,
  BtnNotReleased,
  TextNotReleased,
  AreaStatusDescription,
  StatusDescriptionInput,
  BtnView,
  BtnCamera,
  BtnDelete,
  DeleteText,
  ImageView,
  BtnText,
  ButtonSubmit,
  CameraText 
} from './styles.js';

const EditRiskPoint = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const { id, refValue, title, description, status, statusDescription, image, location, onDelete } = route.params;

  const [newRefValue, setNewRefValue] = useState(refValue);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newStatus, setNewStatus] = useState(status);
  const [newStatusDescription, setNewStatusDescription] = useState(statusDescription);
  const [newImage, setNewImage] = useState(image);
  const [newLocation, setNewLocation] = useState(location);

  
  //fazer upload de imagem
  const photoUpload = async (newImage) => {

    const dataImage = new FormData();
    dataImage.append('file', newImage);
    dataImage.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    dataImage.append('cloud_name', CLOUDINARY_CLOUD_NAME);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'post',
        body: dataImage,
      });
      const resultImage = await res.json();

      setNewImage(resultImage.url);

      return resultImage.url;

    } catch (err) {
      console.log('Erro na requisição fetch ', err);
      return null;
    }
  }

  const pickImage  = async() => {
    // Solicitar permissão para a câmera
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraPermission.status !== 'granted') {
      Alert.alert('Permissão necessária', 'Desculpe, precisamos da permissão para acessar a câmera!');
      return;
    }

    // Solicitar permissão para a galeria de fotos (escrita e leitura)
    const mediaLibraryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (mediaLibraryPermission.status !== 'granted') {
      Alert.alert('Permissão necessária', 'Desculpe, precisamos da permissão para salvar fotos no álbum!');
      return;
    }

    // Abrir a câmera
    const photo = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (photo) {
      setNewImage(photo.uri);
  
      // Criar um novo arquivo para upload
      let newFile = {
        uri: photo.assets[0].uri,
        type: photo.assets[0].mimeType,
        name: photo.assets[0].fileName,
      };
  
      // Enviar a nova foto para upload
      photoUpload(newFile);

    } else{
      console.log('Foto deu Ruim.')

    }
  }

  // Pegar a Geolocalização
  const getLocation = async() => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão de Geolocalização negada!');
        return;
      }

      let locationPoint = await Location.getCurrentPositionAsync({});

      const locationData = {
        latitude: locationPoint.coords.latitude,
        longitude: locationPoint.coords.longitude,
      };

      setNewLocation(locationData);
      return locationData;

    } catch (err) {
      Alert.alert('Erro ao obter localização!');
      return;

    }
  }

  // Setar Status como True
  const setStatusTrue = () => {
    setNewStatus(true);
  }

  // Setar Status como False
  const setStatusFalse = () => {
    setNewStatus( false);
    setNewStatusDescription('');
  }

  // Editar Ponto de risco
  const handleEditRiskPoint = async() => {
    let riskPoint = {};

    // Montar o objeto
    try{
      const locationData = await getLocation();

      if (locationData){
        const { latitude, longitude } = locationData;
      }

      riskPoint = {
        id: id,
        ref: newRefValue,
        title: newTitle,
        location: {
          latitude: locationData.latitude,
          longitude: locationData.longitude
        },
        description: newDescription,
        status: newStatus,
        statusDescription: newStatusDescription,
        image: newImage,
      }

    } catch(err) {
      console.log('Erro na requisição handleRegister', err)

    } 

    try{
      const token = await AsyncStorage.getItem('token');
      const response = await axios.put(`http://192.168.1.8:3000/update/${id}`,
        riskPoint,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data){
        Alert.alert('Ponto de Risco atualizado com sucesso!');
      }

      // Zerar estados
      setNewImage(null);
      setNewLocation({ latitude: null, longitude: null });
      setNewRefValue('');
      setNewTitle('');
      setNewDescription('');
      setStatusFalse(false);
      setNewStatusDescription('');

      navigation.navigate('Home');      

    } catch(error){
      console.log('Erro na requisição para API', error);

    }   
  }

  // Deletar Ponto de risco
  const deleteRiskPoint = async () => {
    try {
      // Adiciona uma mensagem de confirmação antes de deletar
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
                navigation.navigate('RiskPointList');
              }
            },
          },
        ]
      );
      
    } catch (error) {
      Alert.alert('Erro ao deletar ponto de risco');
    } 
  } 

  return (
    <EditRiskPointContainer>
      <Titulo>Editar Ponto de Risco</Titulo>
      <ScrollView>
        <View>
          <AreaInput>
            <Input 
              value={newRefValue}
              onChangeText={setNewRefValue} />
          </AreaInput>

          <AreaInput>
            <Input v
              value={newTitle}
              onChangeText={setNewTitle} />
          </AreaInput>

          <AreaInput>
            <DescriptionInput
              placeholder="Descrição do PR"
              multiline={true}
              numberOfLines={6}
              value={newDescription}
              onChangeText={setNewDescription} />
          </AreaInput>

          <AreaBtnStatus>
          <BtnReleased onPress={setStatusTrue} active={newStatus}>
            <TextReleased active={newStatus}>Liberado</TextReleased>
          </BtnReleased>
            
          <BtnNotReleased onPress={setStatusFalse} active={!newStatus}>
          <TextNotReleased active={!newStatus}>Não Liberado</TextNotReleased>
          </BtnNotReleased>  
        </AreaBtnStatus>

          <AreaStatusDescription>
          {newStatus && (
            <StatusDescriptionInput 
              placeholder='Descrição do Status:'
              multiline={true}
              numberOfLines={2}
              value={newStatusDescription}              
              onChangeText={setNewStatusDescription} />
          )}
        </AreaStatusDescription>

          <BtnAndImageView>
            <BtnView>
              <BtnCamera onPress={pickImage}>
                <Feather name='camera' color='#fff' size={45} />
                <CameraText>
                  Anexar
                </CameraText>
              </BtnCamera>

              <BtnDelete onPress={deleteRiskPoint}>
                <Feather name='trash-2' color='#fff' size={45} />
                <DeleteText>
                  Deletar
                </DeleteText>
              </BtnDelete>
            </BtnView>

            {newImage && (
              <ImageView source={{ uri: newImage  }} />
            )}
          </BtnAndImageView>
      
          <ButtonSubmit>
            <BtnText onPress={handleEditRiskPoint}>Cadastrar</BtnText>
          </ButtonSubmit>
        </View>
      </ScrollView>
    </EditRiskPointContainer>
  )
}
  
export default EditRiskPoint;