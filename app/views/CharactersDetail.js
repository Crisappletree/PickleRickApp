import React, {useEffect} from 'react';

import {
  Container,
  Content,
  View,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Body,
} from 'native-base';

// Styles
import globalStyles from '../styles/global';

// REDUX
import {connect} from 'react-redux';
import {GET_CHARACTER_INFO_REQUEST} from '../models/character/actions';

const mapStateToProps = (state, props) => {
  const {character} = state.character;
  return {
    character,
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  getCharacterInfo: () => {
    dispatch({
      type: GET_CHARACTER_INFO_REQUEST,
      payload: {},
    });
  },
});

const CharacterDetailView = ({character, getCharacterInfo}) => {
  useEffect(() => {
    getCharacterInfo();
  }, [getCharacterInfo]);

  const {id, name, status, species, gender, image} = character;

  return (
    <Container style={globalStyles.container}>
      <Content style={globalStyles.content}>
        <Card style={globalStyles.card}>
          <CardItem key={id} style={globalStyles.card}>
            <Body>
              <Thumbnail style={globalStyles.image} source={{uri: image}} />
              <Text style={globalStyles.name}>{name}</Text>
              <View style={globalStyles.detailInfoContainer}>
                <View style={globalStyles.detailInfoContainers}>
                  <Text style={globalStyles.detailInfoTitles}>Status: </Text>
                  <Text style={globalStyles.detailInfoText}>{status}</Text>
                </View>
                <View style={globalStyles.detailInfoContainers}>
                  <Text style={globalStyles.detailInfoTitles}>Specie: </Text>
                  <Text style={globalStyles.detailInfoText}>{species}</Text>
                </View>
                <View style={globalStyles.detailInfoContainers}>
                  <Text style={globalStyles.detailInfoTitles}>Gender: </Text>
                  <Text style={globalStyles.detailInfoText}>{gender}</Text>
                </View>
              </View>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const Character = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CharacterDetailView);

export default Character;
