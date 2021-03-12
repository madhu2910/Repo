import React , {Component} from 'react';
import { Text, TextInput, Button, View, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';


export class login extends Component {
    render () {
        return (
            <View style = {style.container}>
                <View style = {styleSheet.textfields}>
                 <TextInput style = {styles.input} 
                     placeholder = "username"
                     returnKeyType = "next"
                     onSubmitEditing = {() => this.passwordInput.focus()}
                     keyboardType = "email-address"
                     autoCapitalize = "none"
                     autoCorrect = {false}
                     />
                     
                     <TextInput style = {styles.input}
                         placeholder = "password"
                         returnKeyType = "go"
                         secureTextEntry
                         ref = {(input) => this.passwordInput = input}
                
                     />
                     
                     <TouchableOpacity style = { styles.buttoncontainer }>
                         <Text style = { stylesbuttontext}>Login</Text>
                        </TouchableOpacity>
                        <Button
                        title = "Register Here"
                        color = "#labc9c"
                        onPress = {() => this.props.navigation('Home')}
                        />
                </View>
                </View>

        );
    }
}
export default class App extends Component {
    render() {
        return (
            <AppStackNavigator />
        );

    }
}
const AppStackNavigator = createStackNavigator (
    {
        Login : loginPage,
        Register : RegisterPage,
        Home : HomePage
    });
    const styles = {
        container : {
            padding : 20,
            flex : 1,
            backgroundColor : '#ecf0f1',
            justifyContent : 'center',
            alignItems : 'stretch'
        },
        input : {
            paddingLeft : 20,
            borderRadius : 50,
            height : 50,
            fontSize : 25,
            backgroundColor : 'white',
            borderWidth : 1,
            marginBottom : 20,
            color : '#34495e'
        },
        
    }

