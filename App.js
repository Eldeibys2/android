import { StyleSheet,Text,View } from 'react-native';
//import { styles1 } from './assets/Mystyles';


 //const App =() => {
  export default function App() {
    
  
  return (
    <View style={[styles1.container,{borderRadius:10,flexDirection:'colum'}]}>
      <View style={[viewChilds.view,{flex:1,backgroundColor:'yellow'}]}>
        <Text> Bannner</Text>
        
      </View>

         <View style={[viewChilds.view,{flex:1,backgroundColor:'yellowgreen'}]}>

          <Text>
            Barra de navegacion
          </Text>

         </View> 

         <View style={[viewChilds.view,{flex:5,backgroundColor:'gray',}]}>

          <Text>
            Cuerpo
          </Text>

         </View> 
         <View style={[viewChilds.view,{flex:1,backgroundColor:'pink',}]}>

          <Text>
            Barra de navegacion
          </Text>

         </View> 
    </View>
  );
}


const styles1 = StyleSheet.create({
container: {
  flex: 2,
  backgroundColor: 'green',
  alignItems: 'center',
  justifyContent: 'center',
},
Texts:{
  fontSize:18,  
  fontWeight:'bold',
  color:'red'
}
});

const viewChilds = StyleSheet.create({
  view:{
    width:'80%',
    marginLeft:'5%',
    marginTop:10
  }
})
//export default App

