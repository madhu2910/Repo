import React from "react";
import { StyleSheet, Text, View ,TouchableNativeFeedback, Image, SafeAreaView, Button, Alert, FlatList} from "react-native";

class App extends React.Component {
  constructor()
  {
    super()
    this.state={
      data:[]
    }
  }
  componentDidMount()
  {
    this.apiCall()
  }
  async apiCall()
  {
let resp = await fetch("https://reqres.in/api/users?page=2")
let respjson= await resp.json()
console.log(respjson)
this.setState({data: resp.json.data})
  }
render(){
  return (
    <View>
      <Text style={{ fontSize: 100}}>API Call </Text>
      <FlatList
      data={this.state.data}
      renderItem={({item})=>
      <Text style = {{fontSize:40, backgroundColor:'skyblue', margin:15}}>{item.title}</Text>}
      />
                               
      </View>
  )
}
}
export default App
    
      
        
