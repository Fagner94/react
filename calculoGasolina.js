import React,{useState} from 'react';
import {Text,StyleSheet,View, TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';


const styles = StyleSheet.create({
texto1:{
fontSize:30,
textAlign:"center",
justifyContent:"center",
color:"#74797f",
margin:10

},
subtitulo:{
fontSize:20,
textAlign:"center"


},
titulo:{
backgroundColor:"#1dcc85"


},
conteinar:{
  flex:1,
  alignItems:"center",
  justifyContent:"center"
},

});
const AreaInput = styled.View`
margin-top:20px;
flex-direction:row;
justify-content:center;

`;

const AreaBotao = styled.View`
justify-content:center;
align-items:center;

`;
const Input = styled.TextInput`
width:40%;
heigth:40px;
background-color:#EEE;
margin:15px;
border-radius:20px;

`;

const Botao = styled.TouchableOpacity`
margin-top:40px;
background-color:#1dcc85;
width:80%;
height:40px;
borderRadius:20px;

`;
const TextoBotao = styled.Text`
font-size:20px;
color:blue;
text-align:center;
margin:5px;
`;


export default ()=>{
// funcao calcular

const [gasolina,setGasolina] = useState("");
const [alcool,setAlcool]     = useState("");


const calc = ()=>{
  let nGasolina = parseFloat(gasolina);
  let nAlcool   = parseFloat(alcool);

  valor = (nAlcool*100)/nGasolina;
  nValor = valor.toFixed(2);
  if(nValor>70){
    alert(" gasolina mais cara  " + nValor + "% " + " nao compensa abastecer alcool")

  }else{

    alert(" gasolina mais cara  " + nValor + "% " + " compensa abastecer alcool")    
  }
  

}
return(
  <View>
 <View style={styles.titulo}><Text style={styles.texto1}> Calculadora de Gasolina</Text></View>
 <Text style={styles.subtitulo}> Calcule se é melhor abastecer com gasolina ou alcool</Text>
 
 <AreaInput>
 <Input
 placeholder=" valor  da gasolina"
 placeholderTextColor="000"
 keyboardType = "numeric"
 value ={gasolina}
 onChangeText = {g=>setGasolina(g)}
 
 />
  <Input
 placeholder=" valor de alcool"
 placeholderTextColor="000"
 keyboardType = "numeric"
 value = {alcool}
 onChangeText = {a=>setAlcool(a)}
 
 />
</AreaInput>
 
 <AreaBotao>
 <Botao onPress={calc}>
<TextoBotao> Calcular</TextoBotao>
  
 </Botao>
 </AreaBotao>
 </View>
);

}
