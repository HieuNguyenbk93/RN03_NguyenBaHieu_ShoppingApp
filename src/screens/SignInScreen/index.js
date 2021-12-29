import React, { Component, useState } from 'react';
import { Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import  {BackgroundView}  from '../../components';
import { ScreenName } from '../../utils/constant';
import { backgroudimage, facebook, google } from '../../assets/images'
import { COLORS } from '../../themes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getRequestLoginSelector } from '../../redux/selectors/authenSelector';
import { getRequestLogin } from '../../redux/thunk/authenThunkAction';

const loginValidationSchema = yup.object().shape({
    Username: yup
      .string()
      //.email("Please enter valid email")
      .required('Email Address is Required'),
    Password: yup
      .string()
      .required('Password is required'),
  })

const SignInScreen = ({navigation}) => {

    const [securePass, setsecurePass] = useState(true);
    const dispatch = useDispatch();
    const authen = useSelector(getRequestLoginSelector);

    const passShowButton = () => {
        if (securePass) {
            return (<Feather name="eye-off" size={30} color="#d6dbdf" />)
        }
        else {
            return (<Feather name="eye" size={30} color="#d6dbdf" />)
        }
    }

    return (
        <BackgroundView>
            <View style={{flex:1}}>
                <View style={styles.header}>
                    <Image source={backgroudimage}></Image>
                </View>

                <View style={styles.container}>
                    <Formik
                        validationSchema={loginValidationSchema}
                        initialValues={{ Username: '', Password: '' }}
                        onSubmit={values => {
                            console.log(values);
                            dispatch(getRequestLogin(values));
                            }}
                    >
                    { ({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
                        <View style={styles.containerForm}>
                            <View style={styles.user_input}>
                                <AntDesign name="user" size={30} color={COLORS.gray}/>
                                <TextInput
                                    style={styles.text_input}
                                    placeholder="User name"
                                    autoCapitalize="none"
                                    keyboardAppearance={'light'}
                                    name = 'Username'
                                    onChangeText={handleChange('Username')}
                                    onBlur={handleBlur('Username')}
                                    value={values.Username}
                                    
                                />
                            </View>
                            {errors.Username &&
                                <Text style={{ fontSize: 12, color: 'red', marginHorizontal:30 }}>* {errors.Username}</Text>
                            }
                            <View style={styles.user_input}>
                                <Feather name="lock" size={30} color={COLORS.gray}/>
                                <TextInput
                                    style={styles.text_input}
                                    placeholder="Password"
                                    autoCapitalize="none"
                                    name='Password'
                                    onChangeText={handleChange('Password')}
                                    onBlur={handleBlur('Password')}
                                    value={values.Password}
                                    secureTextEntry={securePass}
                                />
                                <TouchableOpacity
                                    onPress={ () => setsecurePass(!securePass) }
                                >
                                    {!errors.Password && passShowButton()}
                                </TouchableOpacity>
                            </View>
                            {(errors.Password && touched.email) && 
                                <Text style={{ fontSize: 12, color: 'red', marginHorizontal:30 }}>{errors.Password}</Text>
                            }
                            <TouchableOpacity style={styles.button}
                                onPress={handleSubmit} disabled={!isValid}
                            >
                                <ImageBackground source={backgroudimage} imageStyle={{borderRadius:20, alignItems:'center'}}>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={{fontSize:26,marginVertical: 10, color:COLORS.white}}>Login</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    )}
                    </Formik>
                    
                    <View style={styles.containerFooter}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{color:COLORS.darkgray}}>____ Social Login ___</Text>
                            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                <TouchableOpacity>
                                    <Image source={facebook} style={{width:50, height:50}}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={google} style={{width:70, height:70}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{marginHorizontal: 30,flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontWeight:'500'}}>don't have account?</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate(ScreenName.signup)}
                            >
                                <Text style={{color:COLORS.darkblue, fontSize:16, fontWeight:'bold'}}> Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </BackgroundView>
    )
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    header: {
        flex: 2,
    },
    containerForm: {
        flex: 3,
        // borderBottomWidth: 2,
        // borderBottomColor:'blue',
        justifyContent: 'space-evenly',
    },
    containerFooter: {
        flex: 2,
        justifyContent:'space-between'
    },
    user_input: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: COLORS.gray,
        paddingVertical: 10,
        marginHorizontal: 30,
    },
    text_input: {
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 16,
        width: '80%',
    },
    button: {
        marginHorizontal: 20,
        marginVertical: 20
    }
})

