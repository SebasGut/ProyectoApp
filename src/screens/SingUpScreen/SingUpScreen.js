import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomImput from '../../components/CustomImput';
import SelectList from 'react-native-dropdown-select-list';

const SingUpScreen = () => {
  const data = [
    {key: '0', value: 'Alumno'},
    {key: '1', value: 'Exalumno'},
    {key: '2', value: 'Comunidad UNAM'},
    {key: '3', value: 'Externo'},
  ];

  const [estado, setEstado] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [selected, setSelected] = useState('');
  const [estatus, setEstatus] = useState(true);

  const cambioEstatus = () => {
    if (selected == 3) {
      setEstatus(!estatus);
    }
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Registrate</Text>

        <SelectList
          placeholder="Estatus en la UNAM"
          setSelected={setSelected}
          onSelect={cambioEstatus}
          data={data}
          search={false}
        />
        <CustomImput
          placeholder="Numero de cuenta"
          value={username}
          setValue={setUsername}
          editable={estatus}
        />
        <CustomImput
          placeholder="Contraseña"
          value={password}
          setValue={setPassword}
        />
        <CustomImput
          placeholder="Repita contraseña"
          value={confirmPassword}
          setValue={setConfirmPassword}
        />
        <CustomImput placeholder="Nombre" value={nombre} setValue={setNombre} />
        <CustomImput
          placeholder="Apellido paterno"
          value={apellido1}
          setValue={setApellido1}
        />
        <CustomImput
          placeholder="Apellido materno"
          value={apellido2}
          setValue={setApellido2}
        />
        <CustomImput placeholder="Carrera" editable={estatus} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 50,
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'black',
  },

  dropdown1BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#d8d8d8',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
});

export default SingUpScreen;
