// src/screens/FormScreen.js

import React from 'react';
import { View, TextInput, Button, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const FormScreen = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
           <View style={{ 
              borderColor: errors.email && touched.email ? 'red' : 'gray',
            ...styles.inputContainer}}>
          <TextInput
            placeholder="Email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            style={{
            //  borderWidth: 1,
             

            }}
          />
          </View>
          {errors.email &&  (
            <Text style={{ color: 'red' }}>{errors.email}</Text>
          )}
           <View style={
            { 
              borderColor: errors.password && touched.password ? 'red' : 'gray',
            ...styles.inputContainer}}>
          <TextInput
            placeholder="Password"
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            secureTextEntry
            autoCompleteType="password"
            textContentType="password"
            style={{
            
            }}
              />
              </View>
 {errors.password &&  (
            <Text style={{ color: 'red' }}>{errors.password}</Text>
          )}
      
      <TouchableOpacity style={styles.button} onPress={()=>{}}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
              </View>)
}

</Formik>)

   

}      

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  inputContainer: {
    width: '80%',
    height: 50,
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    justifyContent: 'center',
    borderWidth:1, 
   // padding: 20,
  paddingHorizontal:20
  },
  input: {
    fontSize: 16,
    color: '#333333',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#3b5998',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
  },
});

      

      export default FormScreen;














