import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import axios from '../../../axios.instance';
import {
    Modal,
    Portal,
    Text,
    Button,
    Provider,
    Colors,
    TextInput
} from 'react-native-paper';

const EditModal = props => {

    const [formData,
        setFormData] = useState({marca: props.data.marca || '', modelo: props.data.modelo || '', kilometragem: props.data.kilometragem || '', ano: props.data.ano || ''});

    const [hasError,
        setHasError] = useState(false);

    const [showResult,
        setShowResult] = useState(false);

    const [errorData,
        setErrorData] = useState(false);

    const onInputChange = (label, value) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [label]: value
            }
        });
    }

    const editCarro = () => {
        axios
            .post('/api/public/edit', {
            id: props.data._id,
            ...formData
        })
            .then(res => {
                setHasError(false);
                setShowResult(true);
                props.updateList();
            })
            .catch(err => {
                setHasError(true);
                setErrorData(err.response.data);
            })
    }

    return (
        <Modal
            visible={true}
            onDismiss={props.hideModal}
            contentContainerStyle={styles.container}>
            <View>
                {/* SUCCESS TEXT */}
                {showResult
                    ? <Text
                            style={{
                            color: Colors.green500
                        }}>
                            Editado com sucesso!
                        </Text>
                    : null}

                {/* ERROR TEXT */}
                {hasError
                    ? <Text
                            style={{
                            color: Colors.red500
                        }}>
                            {errorData.message}
                        </Text>
                    : null}

            </View>
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
                <Button mode="contained" onPress={editCarro}>Editar</Button>
            </View>

        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 0,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: '#fff',
        margin: 40
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

export default EditModal;