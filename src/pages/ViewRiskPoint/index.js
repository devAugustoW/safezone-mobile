import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import { 
  ViewRiskPointContainer,
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
  BtnEdit,
  ImageView,
  BtnText,
  ButtonSubmit,
  CameraEdit 
} from './styles.js';

const ViewRiskPoint = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id, refValue, title, description, status, statusDescription, image, location } = route.params;
    
  return (
    <ViewRiskPointContainer>
      <Titulo>Visualizar Ponto de Risco</Titulo>
      <ScrollView>
        <View>
        <AreaInput>
          <Input value={refValue} editable={false} />
        </AreaInput>

        <AreaInput>
          <Input value={title} editable={false} />
        </AreaInput>

        <AreaInput>
          <DescriptionInput
            multiline={true}
            numberOfLines={6}
            value={description}
            editable={false} />
        </AreaInput>

        <AreaBtnStatus>
          <BtnReleased active={status}>
            <TextReleased active={status}>Liberado</TextReleased>
          </BtnReleased>
            
          <BtnNotReleased active={!status}>
          <TextNotReleased active={!status}>Não Liberado</TextNotReleased>
          </BtnNotReleased>  
        </AreaBtnStatus>

        <AreaStatusDescription>
          {status && (
            <StatusDescriptionInput 
              value={statusDescription}
              editable={false}
              multiline={true}
              numberOfLines={2} />
          )}
        </AreaStatusDescription>


        <BtnAndImageView>
          {image && (
            <ImageView source={{ uri: image }} />
          )}
        </BtnAndImageView>

        <ButtonSubmit onPress={() => navigation.navigate('EditRiskPoint', { id, refValue, title, description, status, statusDescription, image })}>
          <BtnText>Editar</BtnText>
        </ButtonSubmit>
        </View>
      </ScrollView>
    </ViewRiskPointContainer>
  )
}

export default ViewRiskPoint;
