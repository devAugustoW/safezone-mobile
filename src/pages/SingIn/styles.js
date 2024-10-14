import styled from 'styled-components/native';

export const Background = styled.View`
   flex:1;
   background-color: #ffffff;
   padding-top: 35px;
`;

export const Container = styled.KeyboardAvoidingView`
   flex: 1;
   align-items: center;
   justify-content: center;
   
`;

export const Logo = styled.Image`
   width: 150px;
   height: 150px;
   margin-bottom: 20px;
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
   color: #121212;
   margin-bottom: 15px;
   elevation: 1;   
`;

export const SubmitButton = styled.TouchableOpacity`
   width: 90%;
   height: 45px;
   border-radius: 8px;
   background-color: #f48604;
   margin-top: 10px;
   align-items: center;
   justify-content: center;
   elevation: 2;
`;

export const SubmitText = styled.Text`
   font-size: 20px;
   color: #fff;
`

export const Link = styled.TouchableOpacity`
   margin-top: 10px;
   margin-bottom: 10px;
`;

export const LinkText = styled.Text`
   color: #171717
`;
