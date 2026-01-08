import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const AddUserScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const API_URL = "http://192.168.1.111:8080/api/user"; 

    const handleSubmit = async () => {
        if (!name || !email) {
            Alert.alert("Error", "Please fill in all fields");
            return;
        }

        try {
            const response = await axios.post(API_URL, {
                name: name,
                email: email
            });

            if (response.status === 201) {
                Alert.alert("Success", "User saved to Database!");
                setName('');  // Clear the form
                setEmail('');
            }
        } catch (error) {
            console.log(error);
            Alert.alert("Error", "Failed to connect to Backend. Check IP and Wi-Fi.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Add New User</Text>

            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Name"
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none" 
            />

            <Button title="Save User" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
});

export default AddUserScreen;