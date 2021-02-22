import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7fa6c',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 10,
    borderColor: '#7cbc6c',
    borderRadius: 5,
  },
  card: {
    backgroundColor: '#3c3f44',
    marginTop: 20,
    marginVertical: 10,
    borderRadius: 20,
    marginHorizontal: '2.5%',
    shadowOpacity: .2,
    // shadow for android
    elevation: 4
  },
  image: {
    height: 250,
    width: '100%',
    resizeMode: 'stretch',
    borderRadius: 20,
  },
  name: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
    marginHorizontal: 20,
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Nunito-Bold',
    color: 'lightgray'
  },
  detailInfoContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  detailInfoContainers: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,

  },
  detailInfoTitles: {
    paddingHorizontal: 15,
    textAlign: 'center',
    
    fontSize: 24,
    fontFamily: 'Nunito-Bold',
    color: 'lightgray'
  },
  detailInfoText: {
    paddingHorizontal: 15,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Nunito-Regular',
    color: 'white'
  }

});

export default globalStyles;
