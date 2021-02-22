import React, {useEffect} from 'react';

import {
  Container,
  Separator,
  Content,
  List,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Body,
} from 'native-base';

// Styles
import globalStyles from '../styles/global'

import {connect} from 'react-redux';
import {GET_CHARACTER_INFO_REQUEST} from '../models/character/actions';

const mapStateToProps = (state, props) => {
  const {character} = state.character;
  return {
    character};
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

  const {id, name, status, species, gender, image} = character

  return (
    <Container style={globalStyles.container}>
      <Content style={globalStyles.content}>
        <Card>      
            <CardItem key={id} style={globalStyles.card}>
              <Body>
              <Thumbnail style={globalStyles.image} source={{uri: image}} />
                <Text style={globalStyles.name}>{name}</Text>
                <Text>{status}</Text>
                <Text>{species}</Text>
                <Text>{gender}</Text>
              </Body>
            </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const Character = connect(mapStateToProps, mapDispatchToProps)(CharacterDetailView);

export default Character;
