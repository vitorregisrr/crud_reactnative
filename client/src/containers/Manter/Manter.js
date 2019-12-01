import React, {useState} from 'react';
import {StyleSheet, View, Picker, Text} from 'react-native';
import axios from '../../../axios.instance';
import {TextInput, Button, Portal, Dialog, Snackbar} from 'react-native-paper';

const Manter = () => {
    const [formData,
        setFormData] = useState({marca: '', modelo: '', kilometragem: '', ano: ''});

    const [hasAlert,
        setAlert] = useState(false);

    const addCarro = () => {
        axios
            .post('/api/public/add', {
            marca: formData.marca || '',
            modelo: formData.modelo || '',
            ano: formData.ano || '',
            kilometragem: formData.kilometragem || ''
        })
            .then(res => {
                setAlert('Adicionado com sucesso');
                setFormData({marca: '', modelo: '', kilometragem: '', ano: ''});
            })
            .catch(err => {
                setAlert(err.response.data.message);
            })
    }

    const onInputChange = (label, value) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [label]: value
            }
        });
    }

    return (
        <View style={styles.container}>

            <View style={styles.formContainer}>
                <TextInput
                    onChangeText={text => onInputChange('marca', text)}
                    value={formData
                    .marca
                    .toString()}
                    style={{
                    height: 55,
                    flex: 1,
                    marginBottom: 10
                }}
                    label="Marca"
                    mode="outlined"/>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    onChangeText={text => onInputChange('modelo', text)}
                    value={formData
                    .modelo
                    .toString()}
                    style={{
                    height: 55,
                    flex: 1,
                    marginBottom: 10
                }}
                    label="Modelo"
                    mode="outlined"/>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    onChangeText={text => onInputChange('ano', text)}
                    value={formData
                    .ano
                    .toString()}
                    keyboardType="numeric"
                    style={{
                    height: 55,
                    flex: 1,
                    marginBottom: 10
                }}
                    label="Ano"
                    mode="outlined"/>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    onChangeText={text => onInputChange('kilometragem', text)}
                    value={formData
                    .kilometragem
                    .toString()}
                    keyboardType="numeric"
                    style={{
                    height: 55,
                    flex: 1,
                    marginBottom: 10
                }}
                    label="Kilometragem"
                    mode="outlined"/>
            </View>

            <View style={styles.sendContainer}>
                <Button mode="contained" onPress={addCarro}>Adicionar</Button>
            </View>

            <Snackbar
                visible={hasAlert}
                onDismiss={() => setAlert(false)}
                action={{
                label: 'Ok',
                onPress: () => setAlert(false)
            }}>
                {hasAlert}
            </Snackbar>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    colorPrimary: {
        color: 'rgb(98,0,238)'
    },

    colorLight: {
        color: '#a6a6a6'
    },

    formContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    sendContainer: {
        marginVertical: 30
    }
});

export default Manter;