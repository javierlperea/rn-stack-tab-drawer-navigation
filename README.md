# Combinando Stack + Tab + Drawer Navigator de React Navigation 

**Esta aplicación tiene la implementación de lo Stack, Tab y Drawer Navigator**

*Podrás navegar en las diferentes pantallas de esta aplicación de una manera mas cómoda y efectiva*

*Se implementa el framework React Native Paper y react-native-vector-icons para mejorar la interfaz de la App.*

*Genera tu propio API gracias a [json-server](https://github.com/typicode/json-server).*

### Implementacion de React Navigation

1. Instalar react-navigation/native <br/>
``npm install @react-navigation/native``

2. Instalar todas las dependencias <br/>
``npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view``

3. Instalar navegación de tipo Stack <br/>
``npm i @react-navigation/stack``

4. Instalar navegación de tipo Bottom Tab persozalizada con: <br/>
``npm i @react-navigation/material-bottom-tabs``

5. Instalar navegación de tipo Drawer <br/>
``npm i @react-navigation/stack``

6. Para usar correctamente los iconos <br/>
``npm i react-native-vector-icons`` <br/>
*Luego debes ejecutar el siguiente comando para que sean aceptados los iconos* <br/>
``react-native link react-native-vector-icons``

7. Por ultimo dependiendo si desarrollas para android, ios o ambos: <br/>

**Si desarrollas una app para iOS**
- DESDE LA CONSOLA ``cd ios/``
- LUEGO ``pod install`` para instalar correctamente las dependencias

**Si desarrollas en Android ve a la ruta android/app/build.gradle**
- Agregar debajo de los implementation, las siguientes lineas: <br/>
*implementation 'androidx.appcompat:appcompat:1.1.0-rc01'*<br/>
*implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'*

8. Para finalizar en el archivo App.js agregar la siguiente dependencia al inicio del todo el código <br/>
- import 'react-native-gesture-handler';

### Implementacion de React Native Paper

1. Instalar las dependencias:   <br/> 
``npm i react-native-paper``    <br/> 
``npm i react-native-vector-icons`` <br/>


Recuerda para ejecutar esta apliacion debes:
1. utilizar ```npm install``` para instalar todas las dependencias
2. Luego ```npx react-native run-android``` o ```npx react-native run-ios``` para lanzar la aplicacion, según el dispositivo o emulador que utilices