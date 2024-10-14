import styled from 'styled-components/native';
import MapView from 'react-native-maps'; 

export const Background = styled.View`
   flex:1;

   padding-top: 35px;
   align-items: center;
`;

export const StyledMapView = styled(MapView)`
   flex: 1;
   width: 100%;
`;


export const BorderTab = styled.View`
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   z-index: 10;
   

   background-color: rgb(250, 250, 250);
   border-top-left-radius: 30px;
   border-top-right-radius: 30px;
   padding-top: 15px;
   padding-bottom: 10px;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
`;

export const Btn = styled.TouchableOpacity`
   width: 100px;
   height: 85px;
   background-color: #f48604;
   border-radius: 16px;
   justify-content: center;
   align-items: center;
`;

export const ButtonIcon =styled.Text``;

export const BorderLogo  = styled.Image`
   width: 70px;
   height: 100px;
   resizeMode: contain;
`;

export const BtnText = styled.Text`
   color: #FFFFFF; /* Cor do texto do botão */
   margin-top: 5px; /* Espaçamento entre o ícone e o texto */
`;
