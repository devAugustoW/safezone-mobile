import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Cloudinary } from "@cloudinary/url-gen";
import { 
  CLOUDINARY_CLOUD_NAME, 
  CLOUDINARY_UPLOAD_PRESET,
  NEW_API_CALL,
	NEW_PORT
} from '@env';
import Feather from 'react-native-vector-icons/Feather';
import { Alert, Image } from 'react-native';
import * as Location from 'expo-location';
import { 
  RegisterContainer,
  ScrollArea,
  Titulo,
  AreaInput,
  Input,
  DescriptionInput,
  AreaBtnStatus,
  BtnReleased,
  TextReleased,
  BtnNotReleased,
  TextNotReleased,
  AreaStatusDescription,
  StatusDescriptionInput,
  BtnCamera,
  BtnAndImageView,
  ImageView,
  BtnText,
  BtnView,
  Button,
  CameraText 
} from './styles.js';


const Register = () => {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState({latitude: null, longitude: null });
  const [ref, setRef] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);
  const [statusDescription, setstatusDescription] = useState('');

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const navigation = useNavigation();

  // Gerênciar teclado e botão de cadastrar
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  //fazer upload de imagem
  const photoUpload = async (image) => {

    console.log('Entrou função upload', image)

    const dataImage = new FormData();
    dataImage.append('file', image);
    dataImage.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    dataImage.append('cloud_name', CLOUDINARY_CLOUD_NAME);

    console.log('Console do data.append');

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'post',
        body: dataImage,
      });

      const resultImage = await res.json();
      setImage(resultImage.url);
      console.log('Imagem com url: ', resultImage.url);

      return image;

    } catch (err) {
      console.log('Erro na requisição fetch ', err);

    }
    return image;
  }

  // Tirar foto
  const pickImage  = async() => {
    // Solicitar permissão para a câmera
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraPermission.status !== 'granted') {
      HTMLFormControlsCollection.log('Permissão necessária', 'Desculpe, precisamos da permissão para acessar a câmera!');
      return;
    }

    console.log('Permissão OK.')

    // Abrir a câmera
    const photo = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [1, 1],
      quality: 0.5,
    });

    console.log('Salvou foto no CLoudinary', photo)

    let newFile = {
      uri: photo.assets[0].uri,
      type: photo.assets[0].mimeType,
      name: photo.assets[0].fileName,
    }

    console.log('Dados principais de photo:', newFile);

    photoUpload(newFile);
  }
  
  // Pegar a Geolocalização
  const getLocation = async() => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permissão de Geolocalização negada!');
        console.log('Permissão de Geolocalização negada!');
        return null;
      }

      let locationPoint = await Location.getCurrentPositionAsync({});
      const locationData = {
        latitude: locationPoint.coords.latitude,
        longitude: locationPoint.coords.longitude,
      };

      setLocation(locationData);
      return locationData;

    } catch (err) {
      setError('Erro ao obter localização!');
      console.log('Erro ao obter localização!', err);
      return null;
    }
  }

  // Setar Status como True
  const setStatusTrue = () => {
    setStatus(true);
    console.log(status);
    console.log(statusDescription)
  }

  // Setar Status como False
  const setStatusFalse = () => {
    setStatus(false);
    console.log(status);
  }

  // Cadastrar ponto de risco -> Montar o Objeto Ponto de Risco
  const handleRegister = async() => {
    let riskPoint = {};

    console.log('Entrou no Registrar Ponto de Risco.')

    // Montar o objeto
    try{
      const locationData = await getLocation();

      console.log('locationData: ', locationData);


      if (locationData){
        const { latitude, longitude } = locationData;
      }

      console.log('locationData OK!')

      riskPoint = {
        ref: ref,
        title: title,
        location: {
          latitude: locationData.latitude,
          longitude: locationData.longitude
        },
        description: description,
        status: status,
        statusDescription: statusDescription,
        image: image,
      }

      console.log('console do objeto riskPoint', riskPoint)

    } catch(err) {
      console.log('Erro na requisição handleRegister', err)

    } 

    console.log('CHAMADA API INSERIR PONTO DE RISCO')

    // Fazer a chamada para enviar o Objeto para API
    try{
      const token = await AsyncStorage.getItem('token');

      const response = await axios.post(`http://${NEW_API_CALL}:${NEW_PORT}/create`, 
        riskPoint,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data){
        Alert.alert('Ponto de Risco cadastrado com sucesso!');
        console.log('Ponto de Risco Cadastrado:', response.data);
      }

      console.log('Zerando os estdos');

      // Zerar estados
      setImage(null);
      setLocation({ latitude: null, longitude: null });
      setRef('');
      setTitle('');
      setDescription('');
      setStatus(false);
      setstatusDescription('');
      console.log('Inputs zerados, indo para Home');

      navigation.navigate('Home');      

    } catch(error){
      console.log('Erro na requisição para API', error);
    }   
  }

  return (
    <RegisterContainer>
      <ScrollArea>
        <Titulo>Cadastro de Ponto de Risco</Titulo>

        <AreaInput>
          <Input placeholder="Referência do PR"
            name={ref}
            value={ref}
            onChangeText={setRef} />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Título do PR"
            name={title}
            value={title}
            onChangeText={setTitle} />
        </AreaInput>

        <AreaInput>
          <DescriptionInput
            placeholder="Descrição do PR"
            multiline={true}
            numberOfLines={4}
            name={description}
            value={description}
            onChangeText={setDescription} />
        </AreaInput>
 

        <AreaBtnStatus>
          <BtnReleased onPress={setStatusTrue} active={status}>
            <TextReleased active={status}>Liberado</TextReleased>
          </BtnReleased>
            
          <BtnNotReleased onPress={setStatusFalse} active={!status}>
          <TextNotReleased active={!status}>Não Liberado</TextNotReleased>
          </BtnNotReleased>  
        </AreaBtnStatus>

        <AreaStatusDescription>
          {status && (
            <StatusDescriptionInput
              placeholder="Descrição da Liberação"
              numberOfLines={4}
              name={statusDescription}
              value={statusDescription}
              onChangeText={setstatusDescription} />
          )}
        </AreaStatusDescription>
  
        <BtnAndImageView>
          <BtnCamera onPress={pickImage}>
            <Feather name='camera' color='#fff' size={45} />
            <CameraText>
              Anexar
            </CameraText>
          </BtnCamera>

          {image && (
            <ImageView source={{ uri: image }} />
          )}
        </BtnAndImageView>
      </ScrollArea>

      <BtnView>
        {!isKeyboardVisible && (
          <Button onPress={handleRegister}>
            <BtnText>Cadastrar</BtnText>
          </Button>
        )}
      </BtnView>
    </RegisterContainer>
  )
}

export default Register;