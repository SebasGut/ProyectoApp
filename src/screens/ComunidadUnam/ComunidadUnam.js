import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomImput from '../../components/CustomImput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SelectList from 'react-native-dropdown-select-list';

const DROPDOWN_OPTIONS = [
  {key: 'FacultaddeArquitectura ', value: 'Facultad de Arquitectura '},
  {key: 'FacultaddeArtesyDiseño ', value: 'Facultad de Artes y Diseño '},
  {key: 'FacultaddeCiencias ', value: 'Facultad de Ciencias '},
  {
    key: 'FacultaddeCienciasPolíticasySociales ',
    value: 'Facultad de Ciencias Políticas y Sociales ',
  },
  {
    key: 'FacultaddeContaduríayAdministración ',
    value: 'Facultad de Contaduría y Administración ',
  },
  {key: 'FacultaddeDerecho ', value: 'Facultad de Derecho '},
  {key: 'FacultaddeEconomía ', value: 'Facultad de Economía '},
  {
    key: 'FacultaddeEstudiosSuperiores(FES)Acatlán ',
    value: 'Facultad de Estudios Superiores (FES) Acatlán ',
  },
  {
    key: 'FacultaddeEstudiosSuperiores(FES)Aragón ',
    value: 'Facultad de Estudios Superiores (FES) Aragón ',
  },
  {
    key: 'FacultaddeEstudiosSuperiores(FES)Cuautitlán ',
    value: 'Facultad de Estudios Superiores (FES) Cuautitlán ',
  },
  {
    key: 'FacultaddeEstudiosSuperiores(FES)Iztacala ',
    value: 'Facultad de Estudios Superiores (FES) Iztacala ',
  },
  {
    key: 'FacultaddeEstudiosSuperiores(FES)Zaragoza ',
    value: 'Facultad de Estudios Superiores (FES) Zaragoza ',
  },
  {
    key: 'FacultaddeFilosofíayLetras ',
    value: 'Facultad de Filosofía y Letras ',
  },
  {key: 'FacultaddeIngeniería ', value: 'Facultad de Ingeniería '},
  {key: 'FacultaddeMedicina ', value: 'Facultad de Medicina '},
  {
    key: 'FacultaddeMedicinaVeterinariayZootecnia ',
    value: 'Facultad de Medicina Veterinaria y Zootecnia ',
  },
  {key: 'FacultaddeMúsica ', value: 'Facultad de Música '},
  {key: 'FacultaddeOdontología ', value: 'Facultad de Odontología '},
  {key: 'FacultaddePsicología ', value: 'Facultad de Psicología '},
  {key: 'FacultaddeQuímica ', value: 'Facultad de Química '},
  {
    key: 'EscuelaNacionaldeArtesCinematográficas(ENAC) ',
    value: 'Escuela Nacional de Artes Cinematográficas (ENAC) ',
  },
  {
    key: 'EscuelaNacionaldeCienciasdelaTierra(ENCiT) ',
    value: 'Escuela Nacional de Ciencias de la Tierra (ENCiT) ',
  },
  {
    key: 'EscuelaNacionaldeEnfermeríayObstetricia(ENEO) ',
    value: 'Escuela Nacional de Enfermería y Obstetricia (ENEO) ',
  },
  {
    key: 'EscuelaNacionaldeEstudiosSuperioresUnidadJuriquilla(ENESJuriquilla) ',
    value:
      'Escuela Nacional de Estudios Superiores Unidad Juriquilla (ENES Juriquilla) ',
  },
  {
    key: 'EscuelaNacionaldeEstudiosSuperioresUnidadLeón(ENESLeón) ',
    value: 'Escuela Nacional de Estudios Superiores Unidad León (ENES León) ',
  },
  {
    key: 'EscuelaNacionaldeEstudiosSuperioresUnidadMérida(ENESMérida) ',
    value:
      'Escuela Nacional de Estudios Superiores Unidad Mérida (ENES Mérida) ',
  },
  {
    key: 'EscuelaNacionaldeEstudiosSuperioresUnidadMorelia(ENESMorelia) ',
    value:
      'Escuela Nacional de Estudios Superiores Unidad Morelia (ENES Morelia) ',
  },
  {
    key: 'EscuelaNacionaldeLenguas,LingüísticayTraducción(ENALLT) ',
    value: 'Escuela Nacional de Lenguas, Lingüística y Traducción (ENALLT) ',
  },
  {
    key: 'EscuelaNacionaldeTrabajoSocial ',
    value: 'Escuela Nacional de Trabajo Social ',
  },
  {
    key: 'EscuelaNacionalPreparatoriaPlantel1"GabinoBarreda" ',
    value: 'Escuela Nacional Preparatoria Plantel 1 "Gabino Barreda" ',
  },
  {
    key: 'EscuelaNacionalPreparatoriaPlantel2"ErasmoCastellanosQuinto" ',
    value:
      'Escuela Nacional Preparatoria Plantel 2 "Erasmo Castellanos Quinto" ',
  },
  {
    key: 'EscuelaNacionalPreparatoriaPlantel3"JustoSierra" ',
    value: 'Escuela Nacional Preparatoria Plantel 3 "Justo Sierra" ',
  },
  {
    key: 'EscuelaNacionalPreparatoriaPlantel4"VidalCastañedayNájera" ',
    value:
      'Escuela Nacional Preparatoria Plantel 4 "Vidal Castañeda y Nájera" ',
  },
  {
    key: 'EscuelaNacionalPreparatoriaPlantel5"JoséVasconcelos" ',
    value: 'Escuela Nacional Preparatoria Plantel 5 "José Vasconcelos" ',
  },
  {
    key: 'EscuelaNacionalPreparatoriaPlantel6"AntonioCaso" ',
    value: 'Escuela Nacional Preparatoria Plantel 6 "Antonio Caso" ',
  },
  {
    key: 'EscuelaNacionalPreparatoriaPlantel7"EzequielA.Chávez" ',
    value: 'Escuela Nacional Preparatoria Plantel 7 "Ezequiel A. Chávez" ',
  },
  {
    key: 'EscuelaNacionalPreparatoriaPlantel8"MiguelE.Schulz" ',
    value: 'Escuela Nacional Preparatoria Plantel 8 "Miguel E. Schulz" ',
  },
  {
    key: 'EscuelaNacionalPreparatoriaPlantel9"PedrodeAlba" ',
    value: 'Escuela Nacional Preparatoria Plantel 9 "Pedro de Alba" ',
  },
  {
    key: 'ColegiodeCienciasyHumanidadesPlantelAzcapotzalco ',
    value: 'Colegio de Ciencias y Humanidades Plantel Azcapotzalco ',
  },
  {
    key: 'ColegiodeCienciasyHumanidadesPlantelNaucalpan ',
    value: 'Colegio de Ciencias y Humanidades Plantel Naucalpan ',
  },
  {
    key: 'ColegiodeCienciasyHumanidadesPlantelOriente ',
    value: 'Colegio de Ciencias y Humanidades Plantel Oriente ',
  },
  {
    key: 'ColegiodeCienciasyHumanidadesPlantelSur ',
    value: 'Colegio de Ciencias y Humanidades Plantel Sur ',
  },
  {
    key: 'ColegiodeCienciasyHumanidadesPlantelVallejo ',
    value: 'Colegio de Ciencias y Humanidades Plantel Vallejo ',
  },
  {key: 'UNAMCampusMorelos ', value: 'UNAM Campus Morelos '},
  {
    key: 'CoordinacióndeEstudiosdePosgrado ',
    value: 'Coordinación de Estudios de Posgrado ',
  },
];

const ComunidadUNAM = () => {
  const [unamProd, setunamProd] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Comunidad UNAM</Text>
        <SelectList
          placeholder="Facultad/Escuela/Colegio"
          setSelected={setunamProd}
          data={DROPDOWN_OPTIONS}
          value={unamProd}
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
        <CustomImput
          placeholder="Numero de cuenta"
          value={username}
          setValue={setUsername}
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
        <CustomButton text="Siguiente" />
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
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'black',
  },
});

export default ComunidadUNAM;
