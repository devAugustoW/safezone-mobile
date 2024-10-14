import styled from "styled-components/native";

export const EditRiskPointContainer = styled.SafeAreaView`
   flex: 1;
   background-color: #ffffff;
   align-items: center;
   padding-top: 35px;
`;

export const Titulo = styled.Text`
   width: 100%;
   text-align: center;
   color: #959595;
   font-size: 24px;
   margin-top: 10px;
   margin-bottom: 15px;
`;
export const ScrollView = styled.ScrollView`
   flex: 1;
   height: 100%;
`;
export const View = styled.View`
   flex: 1;
   width: 100%;
   align-items: center;
   justify-content: center;
`;

export const AreaInput = styled.View`
   flex-direction: row;
`;

export const Input = styled.TextInput`
   background-color: #fafafa;
   border: 1px solid #d3d3d3;
   width: 95%;
   font-size: 17px;
   padding: 10px;
   border-radius: 8px;
   color: #121212;
   margin-bottom: 15px;
   elevation: 2;
`;

export const DescriptionInput = styled.TextInput`
   background-color: #fafafa;
   border: 1px solid #d3d3d3;
   width: 95%;
   font-size: 17px;
   padding: 10px;
   border-radius: 8px;
   color: #121212;
   margin-bottom: 15px;
   text-align-vertical: top;
   elevation: 2;
`;


export const AreaBtnStatus = styled.View`
   width: 95%;
   flex-direction: row;
   justify-content: center;
   border-radius: 8px;
   margin-bottom: 10px;
`;

export const BtnReleased = styled.TouchableOpacity`
   width: 50%;
   padding: 17px;
   border-top-left-radius: 8px;
   border-bottom-left-radius: 8px;
   border-width: 3px;
   border-right-width: 1.5px;  
   border-color: rgba(244, 134, 4, 1);
   background-color: ${props => props.active ? 'rgba(244, 134, 4, 1)' : '#d9d9d9'};
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
   border-left-width: 1.5px;  
   border-color: rgba(244, 134, 4, 1);
   background-color: ${props => props.active ? 'rgba(244, 134, 4, 1)' : '#d9d9d9'};
`;
export const TextNotReleased = styled.Text`
   text-align: center;
   font-size: 16px;
   font-weight: bold;
   letter-spacing: .5px;
   color: ${props => props.active ? '#a9a9a9' : '#fff'};
`;
export const AreaStatusDescription = styled.View`
   width: 95%;
   margin-bottom: 10px;
`;
export const StatusDescriptionInput = styled.TextInput`
   background-color: #fafafa;
   border: 1px solid #d3d3d3;
   width: 100%;
   font-size: 17px;
   padding: 10px;
   border-radius: 8px;
   color: #121212;
   margin-bottom: 15px;
   text-align-vertical: top;
   elevation: 2;
`;

export const BtnAndImageView = styled.View`
  flex-direction: row;
  justify-content: space-between;   
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
`;

export const BtnCamera = styled.TouchableOpacity`
   background-color: #f48604;
   padding: 15px 25px;
   border-radius: 8px;
   align-self: flex-start;
   justify-content: center;

   margin-bottom: 10px;
   elevation: 2;
`;

export const CameraText = styled.Text`
 color: #fff;
`;

export const BtnView = styled.View`
   justify-content: space-between;
`;


export const BtnDelete = styled.TouchableOpacity`
   background-color: #f48604;
   padding: 15px 25px;
   border-radius: 8px;
   align-self: flex-start;
   justify-content: center;

   margin-bottom: 10px;
   elevation: 2;

`;

export const DeleteText = styled.Text`
   color: #fff;
`;

export const ImageView = styled.Image`
  width: 46%;
  height: 260px;
  objectFit: contain;
  text-align: right;
  border-radius: 6px;
`

export const ButtonSubmit = styled.TouchableOpacity`
   width: 95%;
   align-items: center;
   background-color: #f48604;
   padding: 10px;
   margin-bottom: 10px;
   border-radius: 8px;
`;


export const BtnText = styled.Text`
   font-size: 24px;
   color: #fff;
`;