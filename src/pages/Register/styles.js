import styled from "styled-components/native";

export const RegisterContainer = styled.ScrollView`
   flex: 1;
   height: 100%;
   padding-top: 35px;
   background-color: #ffffff;
   
`;
export const ScrollArea = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;
`;

export const Titulo = styled.Text`
   width: 90%;
   color: #959595;
   font-size: 24px;
   margin-top: 10px;
   margin-bottom: 15px;
`;

export const AreaInput = styled.View`
   flex-direction: row;
`;

export const Input = styled.TextInput`
   background-color: #fafafa;
   border: 1px solid #d3d3d3;
   width: 90%;
   font-size: 17px;
   padding: 10px;
   border-radius: 8px;
   color: #000;
   margin-bottom: 15px;
   elevation: 2;
`;

export const DescriptionInput = styled.TextInput`
   background-color: #fafafa;
   border: 1px solid #d3d3d3;
   width: 90%;
   font-size: 17px;
   padding: 10px;
   border-radius: 8px;
   color: #000;
   margin-bottom: 10px;
   text-align-vertical: top;
   elevation: 2;
`;

export const AreaBtnStatus = styled.View`
   width: 90%;
   flex-direction: row;
   justify-content: center;
   border-radius: 8px;
   margin-bottom: 0px;
`;

export const BtnReleased = styled.TouchableOpacity`
   width: 50%;
   padding: 17px;
   border-top-left-radius: 8px;
   border-bottom-left-radius: 8px;
   border-width: 3px;
   border-right-width: 1.5px;  /* Borda direita com 1px */
   border-color: #f48604;
   background-color: ${props => props.active ? '#f48604' : '#d9d9d9'};
`;

export const TextReleased = styled.Text`
   text-align: center;
   font-size: 16px;
   font-weight: bold;
   letter-spacing: .5px;

   color: ${props => props.active ? '#fff' : '#a9a9a9'};
`;

export const BtnNotReleased = styled.TouchableOpacity`
   width: 50%;
   padding: 17px;
   border-top-right-radius: 8px;
   border-bottom-right-radius: 8px;
   border-width: 3px;
   border-left-width: 1.5px;  /* Borda direita com 1px */
   border-color: #f48604;
   background-color: ${props => props.active ? '#f48604' : '#d9d9d9'};
`;

export const TextNotReleased = styled.Text`
   text-align: center;
   font-size: 16px;
   font-weight: bold;
   letter-spacing: .5px;
   color: ${props => props.active ? '#fff' : '#a9a9a9'};
`;

export const AreaStatusDescription = styled.View`
   width: 90%;
   margin-bottom: 10px;
`;

export const StatusDescriptionInput = styled.TextInput`
   width: 100%;
   background-color: #fafafa;
   color: #000;
   padding: 10px;
   font-size: 17px;
   border: 1px solid #d3d3d3;
   border-radius: 5px;
   margin-top: 10px;
   text-align-vertical: top;
   elevation: 2;
`;

export const BtnAndImageView = styled.View`
   flex-direction: row;
   justify-content: space-between;   
   width: 100%;
   min-height: 250px;
   padding-left: 20px;
   padding-right: 20px;
   margin-bottom: 10px;
`;

export const BtnCamera = styled.TouchableOpacity`
   background-color: #f48604;
   padding: 15px 25px;
   border-radius: 8px;
   align-self: flex-start;
   
   elevation: 2;
`;

export const CameraText = styled.Text`
 color: #fff;
`;

export const ImageView = styled.Image`
  width: 55%;
  height: 320px;
  objectFit: contain;
  text-align: right;
  border-radius: 6px;
`
export const BtnView = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;

`;
export const Button = styled.TouchableOpacity`
   width: 90%;
   align-items: center;
   background-color: #f48604;
   padding: 10px;
   margin-bottom: 50px;
   border-radius: 8px;

   
`;

export const BtnText = styled.Text`
   font-size: 24px;
   color: #fff;
`;