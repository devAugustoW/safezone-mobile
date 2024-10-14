import styled from "styled-components/native";

export const Tag = styled.View`
  width: 95vw; 
  border-radius: 20px; 
  margin-bottom: 30px;  
  background-color: rgba(244, 134, 4, 0.1);
  border: 3px solid #f48604;  
  
`;

export const IdentifyView = styled.View`
  flex-direction: row;  
  justify-content: space-between;  
  align-items: center;    
  margin-bottom: 5px;
  padding: 5px 10px; 
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: #f48604;
  
  
`;

export const Identify = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;

export const TitleView = styled.Text`
  font-size: 16px; 
  margin-bottom: 5px; 
  padding-left: 10px;
  color: #000;
`;

export const IdentView = styled.View`
  flex-direction: row; 
  justify-content: space-between; 
  padding-left: 10px; 
  padding-right: 5px;
  column-gap: 10px;  
  height: 100px;
`;

export const ViewCol1 = styled.View`
  width: 60%;
  flex-direction: column;
  justify-content: space-between;
`;

export const DesciptionText = styled.Text`
  width: 100%;
  color: #000;
  line-height: 18px;
`;

export const StatusText = styled.Text`
  margin-top: 15px;
  font-weight: bold;
  padding-bottom: 5px;
`;


export const ButtonView = styled.View`
  flex-direction: row;
  justify-content: space-between; 
  width: 40%;
  align-items: flex-end;
  margin-bottom: 10px;
`

export const ButtonArea = styled.TouchableOpacity`
  background-color: #f48604; 
  border-radius: 10px; 
  padding: 10px; 
  elevation: 3; 
  align-items: center;
  justify-content: center;
`;

export const ButtonAreaWithBorders = styled.TouchableOpacity`
  background-color: #f2f2f2; 
  border-radius: 10px; 
  padding: 11px 10px;
  align-items: center;
  justify-content: center;
  border-width: 1px; 
  border-color: #f48604; 
  margin-right: 15px;
`;

