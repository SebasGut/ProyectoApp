import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomImput from '../../components/CustomImput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SelectList from 'react-native-dropdown-select-list';

const DROPDOWN_OPTIONS_CARRERA = [
  {key: 'Actuaría', value: 'Actuaría '},
  {key: 'Administración', value: 'Administración '},
  {key: 'AdministraciónAgropecuaria', value: 'Administración Agropecuaria '},
  {
    key: 'AdministracióndeArchivosyGestiónDocumental',
    value: 'Administración de Archivos y Gestión Documental ',
  },
  {key: 'Antropología', value: 'Antropología '},
  {key: 'Arquitectura', value: 'Arquitectura '},
  {key: 'ArquitecturadePaisaje', value: 'Arquitectura de Paisaje '},
  {key: 'ArteyDiseño', value: 'Arte y Diseño '},
  {key: 'ArtesVisuales', value: 'Artes Visuales '},
  {
    key: 'BibliotecologíayEstudiosdelaInformación',
    value: 'Bibliotecología y Estudios de la Información ',
  },
  {key: 'Biología', value: 'Biología '},
  {key: 'BioquímicaDiagnóstica', value: 'Bioquímica Diagnóstica '},
  {key: 'Canto', value: 'Canto '},
  {key: 'CienciasAgroforestales', value: 'Ciencias Agroforestales '},
  {key: 'CienciasAgrogenómicas', value: 'Ciencias Agrogenómicas '},
  {key: 'CienciasAmbientales', value: 'Ciencias Ambientales '},
  {key: 'CienciadeDatos', value: 'Ciencia de Datos '},
  {key: 'CienciasdelaComputación', value: 'Ciencias de la Computación '},
  {key: 'CienciasdelaComunicación', value: 'Ciencias de la Comunicación '},
  {key: 'CienciadelaNutriciónHumana', value: 'Ciencia de la Nutrición Humana '},
  {key: 'CienciasdelaTierra', value: 'Ciencias de la Tierra '},
  {
    key: 'CienciadeMaterialesSustentables',
    value: 'Ciencia de Materiales Sustentables ',
  },
  {key: 'CienciaForense', value: 'Ciencia Forense '},
  {key: 'CienciasGenómicas', value: 'Ciencias Genómicas '},
  {
    key: 'CienciasPolíticasyAdministraciónPública',
    value: 'Ciencias Políticas y Administración Pública ',
  },
  {key: 'Cinematografía', value: 'Cinematografía '},
  {key: 'CirujanoDentista', value: 'Cirujano Dentista '},
  {key: 'Composición', value: 'Composición '},
  {key: 'Comunicación', value: 'Comunicación '},
  {key: 'ComunicaciónyPeriodismo', value: 'Comunicación y Periodismo '},
  {key: 'Contaduría', value: 'Contaduría '},
  {key: 'Derecho', value: 'Derecho '},
  {
    key: 'DesarrolloComunitarioparaelEnvejecimiento',
    value: 'Desarrollo Comunitario para el Envejecimiento ',
  },
  {key: 'DesarrolloTerritorial', value: 'Desarrollo Territorial '},
  {
    key: 'DesarrolloyGestiónInterculturales',
    value: 'Desarrollo y Gestión Interculturales ',
  },
  {key: 'DiseñoGráfico', value: 'Diseño Gráfico '},
  {key: 'DiseñoIndustrial', value: 'Diseño Industrial '},
  {key: 'DiseñoyComunicaciónVisual', value: 'Diseño y Comunicación Visual '},
  {key: 'Ecología', value: 'Ecología '},
  {key: 'Economía', value: 'Economía '},
  {key: 'EconomíaIndustrial', value: 'Economía Industrial '},
  {key: 'EducaciónMusical', value: 'Educación Musical '},
  {key: 'Enfermería', value: 'Enfermería '},
  {key: 'EnfermeríayObstetricia', value: 'Enfermería y Obstetricia '},
  {key: 'EnseñanzadeInglés', value: 'Enseñanza de Inglés '},
  {
    key: 'EnseñanzadeAlemáncomoLenguaExtranjera',
    value: 'Enseñanza de Alemán como Lengua Extranjera ',
  },
  {
    key: 'EnseñanzadeEspañolcomoLenguaExtranjera',
    value: 'Enseñanza de Español como Lengua Extranjera ',
  },
  {
    key: 'EnseñanzadeFrancéscomoLenguaExtranjera',
    value: 'Enseñanza de Francés como Lengua Extranjera ',
  },
  {
    key: 'EnseñanzadeIngléscomoLenguaExtranjera',
    value: 'Enseñanza de Inglés como Lengua Extranjera ',
  },
  {
    key: 'EnseñanzadeItalianocomoLenguaExtranjera',
    value: 'Enseñanza de Italiano como Lengua Extranjera ',
  },
  {key: 'EstudiosLatinoamericanos', value: 'Estudios Latinoamericanos '},
  {
    key: 'EstudiosSocialesyGestiónLocal',
    value: 'Estudios Sociales y Gestión Local ',
  },
  {key: 'Etnomusicología', value: 'Etnomusicología '},
  {key: 'Farmacia', value: 'Farmacia '},
  {key: 'Filosofía', value: 'Filosofía '},
  {key: 'Física', value: 'Física '},
  {key: 'FísicaBiomédica', value: 'Física Biomédica '},
  {key: 'Fisioterapia', value: 'Fisioterapia '},
  {key: 'Geociencias', value: 'Geociencias '},
  {key: 'Geografía', value: 'Geografía '},
  {key: 'GeografíaAplicada', value: 'Geografía Aplicada '},
  {key: 'Geohistoria', value: 'Geohistoria '},
  {key: 'Historia', value: 'Historia '},
  {key: 'HistoriadelArte', value: 'Historia del Arte '},
  {key: 'Informática', value: 'Informática '},
  {key: 'IngenieríaAeroespacial', value: 'Ingeniería Aeroespacial '},
  {key: 'IngenieríaAgrícola', value: 'Ingeniería Agrícola '},
  {key: 'IngenieríaAmbiental', value: 'Ingeniería Ambiental '},
  {key: 'IngenieríaCivil', value: 'Ingeniería Civil '},
  {
    key: 'IngenieríadeMinasyMetalurgia',
    value: 'Ingeniería de Minas y Metalurgia ',
  },
  {
    key: 'IngenieríaEléctricaElectrónica',
    value: 'Ingeniería Eléctrica Electrónica ',
  },
  {key: 'IngenieríaenAlimentos', value: 'Ingeniería en Alimentos '},
  {key: 'IngenieríaenComputación', value: 'Ingeniería en Computación '},
  {
    key: 'IngenieríaenEnergíasRenovables',
    value: 'Ingeniería en Energías Renovables ',
  },
  {
    key: 'IngenieríaenSistemasBiomédicos',
    value: 'Ingeniería en Sistemas Biomédicos ',
  },
  {
    key: 'IngenieríaenTelecomunicaciones',
    value: 'Ingeniería en Telecomunicaciones ',
  },
  {
    key: 'IngenieríaenTelecomunicaciones,SistemasyElectrónica',
    value: 'Ingeniería en Telecomunicaciones, Sistemas y Electrónica ',
  },
  {key: 'IngenieríaGeofísica', value: 'Ingeniería Geofísica '},
  {key: 'IngenieríaGeológica', value: 'Ingeniería Geológica '},
  {key: 'IngenieríaGeomática', value: 'Ingeniería Geomática '},
  {key: 'IngenieríaIndustrial', value: 'Ingeniería Industrial '},
  {key: 'IngenieríaMecánica', value: 'Ingeniería Mecánica '},
  {key: 'IngenieríaMecánicaEléctrica', value: 'Ingeniería Mecánica Eléctrica '},
  {key: 'IngenieríaMecatrónica', value: 'Ingeniería Mecatrónica '},
  {key: 'IngenieríaPetrolera', value: 'Ingeniería Petrolera '},
  {key: 'IngenieríaQuímica', value: 'Ingeniería Química '},
  {
    key: 'IngenieríaQuímicaMetalúrgica',
    value: 'Ingeniería Química Metalúrgica ',
  },
  {key: 'Instrumentista', value: 'Instrumentista '},
  {
    key: 'InvestigaciónBiomédicaBásica',
    value: 'Investigación Biomédica Básica ',
  },
  {
    key: 'LenguayLiteraturasHispánicas',
    value: 'Lengua y Literaturas Hispánicas ',
  },
  {
    key: 'LenguayLiteraturasModernas(LetrasAlemanas)',
    value: 'Lengua y Literaturas Modernas (Letras Alemanas) ',
  },
  {
    key: 'LenguayLiteraturasModernas(LetrasFrancesas)',
    value: 'Lengua y Literaturas Modernas (Letras Francesas) ',
  },
  {
    key: 'LenguayLiteraturasModernas(LetrasInglesas)',
    value: 'Lengua y Literaturas Modernas (Letras Inglesas) ',
  },
  {
    key: 'LenguayLiteraturasModernas(LetrasItalianas)',
    value: 'Lengua y Literaturas Modernas (Letras Italianas) ',
  },
  {
    key: 'LenguayLiteraturasModernas(LetrasPortuguesas)',
    value: 'Lengua y Literaturas Modernas (Letras Portuguesas) ',
  },
  {key: 'LetrasClásicas', value: 'Letras Clásicas '},
  {key: 'LingüísticaAplicada', value: 'Lingüística Aplicada '},
  {key: 'LiteraturaDramáticayTeatro', value: 'Literatura Dramática y Teatro '},
  {key: 'LiteraturaIntercultural', value: 'Literatura Intercultural '},
  {
    key: 'ManejoSustentabledeZonasCosteras',
    value: 'Manejo Sustentable de Zonas Costeras ',
  },
  {key: 'Matemáticas', value: 'Matemáticas '},
  {key: 'MatemáticasAplicadas', value: 'Matemáticas Aplicadas '},
  {
    key: 'MatemáticasAplicadasyComputación',
    value: 'Matemáticas Aplicadas y Computación ',
  },
  {
    key: 'MedicinaVeterinariayZootecnia',
    value: 'Medicina Veterinaria y Zootecnia ',
  },
  {key: 'MédicoCirujano', value: 'Médico Cirujano '},
  {key: 'MúsicayTecnologíaArtística', value: 'Música y Tecnología Artística '},
  {key: 'Nanotecnología', value: 'Nanotecnología '},
  {key: 'NegociosInternacionales', value: 'Negocios Internacionales '},
  {key: 'Neurociencias', value: 'Neurociencias '},
  {key: 'Nutriología', value: 'Nutriología '},
  {key: 'Odontología', value: 'Odontología '},
  {key: 'Optometría', value: 'Optometría '},
  {key: 'ÓrtesisyPrótesis', value: 'Órtesis y Prótesis '},
  {key: 'Pedagogía', value: 'Pedagogía '},
  {key: 'Piano', value: 'Piano '},
  {
    key: 'PlanificaciónparaelDesarrolloAgropecuario',
    value: 'Planificación para el Desarrollo Agropecuario ',
  },
  {key: 'Psicología', value: 'Psicología '},
  {key: 'Química', value: 'Química '},
  {key: 'QuímicadeAlimentos', value: 'Química de Alimentos '},
  {
    key: 'QuímicaeIngenieríaenMateriales',
    value: 'Química e Ingeniería en Materiales ',
  },
  {
    key: 'QuímicaFarmacéuticoBiológica',
    value: 'Química Farmacéutico Biológica ',
  },
  {key: 'QuímicaIndustrial', value: 'Química Industrial '},
  {key: 'RelacionesInternacionales', value: 'Relaciones Internacionales '},
  {key: 'Sociología', value: 'Sociología '},
  {
    key: 'TurismoyDesarrolloSostenible',
    value: 'Turismo y Desarrollo Sostenible ',
  },
  {key: 'TeatroyActuación', value: 'Teatro y Actuación '},
  {key: 'Tecnología', value: 'Tecnología '},
  {
    key: 'TecnologíasparalaInformaciónenCiencias',
    value: 'Tecnologías para la Información en Ciencias ',
  },
  {key: 'TrabajoSocial', value: 'Trabajo Social '},
  {key: 'Traducción', value: 'Traducción '},
  {key: 'Urbanismo', value: 'Urbanismo '},
];

const DROPDOWN_OPTIONS_SEMESTRE = [
  {key: '1', value: '1'},
  {key: '2', value: '2'},
  {key: '3', value: '3'},
  {key: '4', value: '4'},
  {key: '5', value: '5'},
  {key: '6', value: '6'},
  {key: '7', value: '7'},
  {key: '8', value: '8'},
  {key: '9', value: '9'},
  {key: '10', value: '10'},
];

const AlumnoScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Alumno</Text>
        <SelectList
          placeholder="Carrera"
          value={carrera}
          setSelected={setCarrera}
          data={DROPDOWN_OPTIONS_CARRERA}
          search={true}
        />
        <SelectList
          placeholder="Semestre"
          value={semestre}
          setSelected={setSemestre}
          data={DROPDOWN_OPTIONS_SEMESTRE}
          search={false}
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
        <CustomButton text="Siguiente" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
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

export default AlumnoScreen;
