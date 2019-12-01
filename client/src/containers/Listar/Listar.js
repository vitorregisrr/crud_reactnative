import React, {useState, useEffect} from 'react';
import axios from '../../../axios.instance';
import {StyleSheet, View} from 'react-native';
import {Snackbar, DataTable, IconButton, Colors} from 'react-native-paper';
import EditModal from '../../components/EditModal/EditModal';

const Listar = () => {
    const [carros,
        setCarros] = useState([]);

    const [hasAlert,
        setAlert] = useState(false);

    const [isEditing,
        setIsEditing] = useState(false);

    const updateList = () => {
        axios
            .get('/api/public/getAll')
            .then(res => {
                setCarros(res.data.carros);
            })
            .catch(err => {
                setAlert(err.response.data)
            })
    }

    const deleteCarro = (id) => {
        axios
            .post('/api/public/delete', {id})
            .then(res => {
                setAlert('Deletado com sucesso');
                updateList();
            })
            .catch(err => {
                setAlert('Deletado com sucesso');
            })
    }

    useEffect(updateList, []);

    return (
        <View style={styles.container}>
            <View style={{height: 30, flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10}}>
                <IconButton icon="update" size={20} onPress={updateList} color="#3F51B5"></IconButton>
            </View>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Modelo</DataTable.Title>
                    <DataTable.Title>Marca</DataTable.Title>
                    <DataTable.Title>Ano</DataTable.Title>
                    <DataTable.Title>Kilometragem</DataTable.Title>
                    <DataTable.Title></DataTable.Title>
                </DataTable.Header>

                {carros.map(data => <DataTable.Row key={data._id}>
                    <DataTable.Cell>{data.modelo}</DataTable.Cell>
                    <DataTable.Cell>{data.marca}</DataTable.Cell>
                    <DataTable.Cell>{data.ano}</DataTable.Cell>
                    <DataTable.Cell>{data.kilometragem}km</DataTable.Cell>
                    <View
                        style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end'
                    }}>
                        <IconButton
                            icon="delete"
                            color={Colors.red500}
                            size={20}
                            onPress={() => deleteCarro(data._id)}/>

                        <IconButton
                            icon="edit"
                            color={Colors.blue500}
                            size={20}
                            style={{
                            marginLeft: -5
                        }}
                            onPress={() => setIsEditing(data)}/>
                    </View>
                </DataTable.Row>)
            }
            </DataTable>

            <Snackbar
                visible={hasAlert}
                onDismiss={() => setAlert(false)}
                action={{
                label: 'Ok',
                onPress: () => setAlert(false)
            }}>
                {hasAlert}
            </Snackbar>

           { isEditing ?  
            <EditModal
                isEditing={!!isEditing}
                data={isEditing}
                hideModal={() => setIsEditing(false)}
                updateList={updateList}/>
                 : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 30,
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});

export default Listar;