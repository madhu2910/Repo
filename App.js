import React from "react";
import { StyleSheet, Text, View ,TouchableOpacity, Image, StatusBar,ScrollView, Button, Alert, FlatList} from "react-native";
import demodata from '.demodata/';
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      isLoading:false,
      demodata:[
        {name: 'Michael'},
    {name: 'Lindsay'},
    {name: 'Tobias'},
    {name: 'Byron'},
    {name:'George'},
    {name: 'Rachel'}
      ]
    };
  }
  componentDidMount(){
   let arr= this.state.demodata.map((item, index)=>{
     item.isSelect = false
     return {...item};

   })
   this.setState({demodata : arr});
   console.log('arr data ==>', arr);
  }

  goToLoad = () => {
    this.setState({isLoading: true});

  };
  selectionHandler=()=> {
    isSelect : false

  }
  
render(){
  const {isLoading, demodata} = this.state;

  
        
  return (
    <View style= {{flex: 1}}>
      <StatusBar barStyle="dark-content"/>
      
        <View
        style={{
          flex:1,
          justifyContent:'center',
          alignItems: 'center',
        
        
        }}/>
        
          {demodata.map((item, index)=> {
            return(
              <TouchableOpacity
              onPress={()=> this.selectionHandler()}
              style={{
                marginTop: 20,
                height: 50,
                width: '80%',
                borderRadius: 12,
                backgroundColor: 'green',
                justifyContent:'space-between',
                flexDirection:'row',
                paddingHorizontal: 25,
                alignItems: 'center',
              }}>
                <Text style={{color: 'white', fontSize: 18}}>
                  {item.name}
                  </Text>
                  <Text style={{color: 'white', fontSize: 18}}>
                    
                </Text>
              </TouchableOpacity>
          
          
            

              
            );
            })}</View>

