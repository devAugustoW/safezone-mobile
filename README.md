# SafeZone: Gerenciamento de Pontos de Risco 📱

![Demonstração do Aplicativo](./src/assets/SafeZone_github.png)
<br>

https://github.com/user-attachments/assets/4c125ad6-bcb9-410d-a860-bb6d7b8ddb37


## Descrição 📋

SafeZone é um aplicativo mobile desenvolvido para auxiliar no gerenciamento de pontos de risco em obras e indústrias.
Feito em React Native, O SafeZone permite registrar, atualizar e visualizar facilmente áreas que requerem atenção especial em um mapa interativo. Além de trabalhar com API que faz criptografia de senhas e autenticação JWT para usuários logados.

<br>
<br>

## Tecnologias 💎

- **React Native:** <br>
- **React Navigation** <br>
- **Cloudinary** <br>
- **Expo Image Picker** <br>
- **Expo Location** <br>
- **React Native Maps** <br>

<br>
<br>

## Funcionalidades 🔧

1. **Cadastro de pontos de risco**
2. **Edição e remoção de pontos de risco**
3. **Registro e captura de geolocalização**
4. **Captura de imagens com a câmera do smartphone**
5. **Visualização de pontos de risco em mapa interativo**
6. **Login com autenticação de usuário**

<br>
<br>

## Seguraça e Autenticação 🔒

O SafeZone agora oferece recursos de segurança aprimorados com:

1. **Criptografia de senha Bcrypt:** As senhas dos usuários são armazenadas com segurança usando criptografia Bcrypt, protegendo-as contra acessos não autorizados. <br>
2. **Autenticação JWT:** A autenticação JWT é usada para controlar o acesso aos recursos do aplicativo, garantindo que apenas usuários autorizados possam acessá-los.

<br>

## Pré-requisitos 📦

- React Native <br>
- npm (gerenciador de pacotes) <br>
- Um dispositivo mobile com Android ou iOS. <br>
- Uma conta gratuita na https://expo.dev/ <br>
- Uma conta gratuita no Cloudinary https://cloudinary.com/ <br>

<br>
<br>

## Instalação 🛠️

1. Clone este repositório para a sua máquina local:

```bash
git clone https://github.com/devAugustoW/safezone-mobile.git
```

<br>

2. Acesse o diretório do projeto:

```bash
cd safezone-frontend
```

<br>

3. Instale as dependências do projeto:

```bash
npm install
```

<br>

4. Rodar o comando

```bash
npm expo start
```

<br>

5. Ler o QRCode gerado no console com o app Expo Go.

## Configuração ⚙️

1. Crie um arquivo `.env` na raiz do projeto. <br>
2. Crie as variáveis de ambiente com as chaves do cloudinary e a Cloudinary URL <br>
3. Crie as variáveis de ambiente com as chaves da API <br>
4. Insira no código as variáveis de ambiente no projeto. <br>
5. Link repositório API: https://github.com/devAugustoW/api_safezone.git

<br>
<br>

## Contribuição 🤝

Suas contribuições para este projeto são muitob bem-vindas! Se você encontrar algum bug ou tiver sugestões de melhorias, por favor, envie um issue no GitHub.

<br>
<br>

## Licença 📚

Este projeto está licenciado sob a MIT License.
