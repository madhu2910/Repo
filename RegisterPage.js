import React , {Component} from 'react';
import { Text, TextInput, Button, View, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export class RegisterPage extends Component {
    render () {
        return (
            <View style = {style.container}>
                <View style = {style.registerform}>
                 <TextInput style = {styles.input} >
                     placeholder = "Enter your name"
                     returnKeyType = "next"
                     onSubmitEditing = {() => this.passwordInput.focus()}
                    </TextInput>
                     <TextInput style = {styles.input}>
                         placeholder = "Enter your email"
                         returnKeyType = "next"
                         onSubmitEditing = {() => this.passwordInput.focus()}
                         keyboardType = "email-address"
                         autoCapitalize = "none"
                         autoCorrect = {false}
                         
                         ref = {(input) => this.passwordInput = input}
                
                     </TextInput>
                     <TextInput style = {styles.input}>
                         placeholder = "Enter password"
                         returnKeyType = "go"
                         secureTextEntry
                                
                         ref = {(input) => this.passwordInput = input}
                         </TextInput>

                     <TouchableOpacity style = { styles.buttoncontainer }onPress = {() => this.props.navigation.navigate('login')}>
                     <Text style = {styles.buttontext}> Sign Up </Text>
                         
                        </TouchableOpacity>
                        
                </View>
                </View>

        );

    }
}
