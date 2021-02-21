import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
      marginHorizontal: '2.5%',
      flex: 1,
  },
  button: {
    backgroundColor: '#FFDA00',
  },
  textButton: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#000',
  },
  name: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF'
  },
  image: {
    height: 250,
    width: '100%'
  },
  cantidad: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: '#3c3f44',
    marginVertical: 10,
    borderRadius: 20
  } 
});

export default globalStyles;
