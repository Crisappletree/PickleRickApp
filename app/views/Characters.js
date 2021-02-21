import React, {useEffect, useState} from 'react';

import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Body,
} from 'native-base';

import {useNavigation} from '@react-navigation/native';

// Styles
import globalStyles from '../styles/global';

import {connect} from 'react-redux';
import {GET_ALL_CHARACTER_INFO_REQUEST, GET_CHARACTER_ID} from '../models/character/actions';

const mapStateToProps = (state, props) => {
  const {characters} = state.characters;
  return {characters};
};

const mapDispatchToProps = (dispatch, props) => ({
  getAllCharacterInfo: () => {
    dispatch({
      type: GET_ALL_CHARACTER_INFO_REQUEST,
      payload: {},
    });
  },
  getCarachterId: (id) => {
    dispatch({
      type: GET_CHARACTER_ID,
      payload: {
        characterId: id
      },
    });
  },
});


const CharactersView = ({characters, getAllCharacterInfo, getCarachterId}) => {
  const navigation = useNavigation();


  useEffect(() => {
    getAllCharacterInfo();
  }, [getAllCharacterInfo]);

  return (
    <Container style={globalStyles.container}>
      <Content style={globalStyles.content}>
        <Card>
          {characters.map((character, i) => {
            const {id, name, status, species, gender, image} = character;

            return (
              <CardItem key={id} style={globalStyles.card}>
                <Body>
                  <Thumbnail style={globalStyles.image} source={{uri: image}} />
                  <Text 
                   onPress={() => {
                    getCarachterId(id) 
                    navigation.navigate('CharactersDetail')}}
                  style={globalStyles.name}>{name}</Text>
                  {/* <Text>{status}</Text>
                    <Text>{species}</Text>
                    <Text>{gender}</Text> */}
                </Body>
              </CardItem>
            );
          })}
        </Card>
      </Content>
    </Container>
  );
};

const Characters = connect(mapStateToProps, mapDispatchToProps)(CharactersView);

export default Characters;
