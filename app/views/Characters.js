import React, {useEffect, useState} from 'react';

import {Container, CardItem, Thumbnail, Text, Body, Card} from 'native-base';

import {FlatList, TouchableHighlight} from 'react-native';

import {useNavigation} from '@react-navigation/native';

// Styles
import globalStyles from '../styles/global';

import {connect} from 'react-redux';
import {
  GET_ALL_CHARACTER_INFO_REQUEST,
  GET_CHARACTER_ID,
} from '../models/character/actions';

const mapStateToProps = (state, props) => {
  const {characters} = state.characters;
  const {info} = state.characters.info;
  return {characters, info};
};

const mapDispatchToProps = (dispatch, props) => ({
  getAllCharacterInfo: (info) => {
    dispatch({
      type: GET_ALL_CHARACTER_INFO_REQUEST,
      payload: {
        moreCharactersURL: info,
      },
    });
  },
  getCarachterId: (id) => {
    dispatch({
      type: GET_CHARACTER_ID,
      payload: {
        characterId: id,
      },
    });
  },
});

const CharactersView = ({
  characters,
  info,
  getAllCharacterInfo,
  getCarachterId,
}) => {
  const navigation = useNavigation();

  useEffect(() => {
    getAllCharacterInfo();
  }, [getAllCharacterInfo]);

  return (
    <Container style={globalStyles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          if (item) {
            return (
              <TouchableHighlight
                onPress={() => {
                  getCarachterId(item.id);
                  navigation.navigate('CharactersDetail');
                }}>
                <Card style={globalStyles.card}>
                  <CardItem style={globalStyles.card}>
                    <Body>
                      <Thumbnail
                        style={globalStyles.image}
                        source={{uri: item.image}}
                      />
                      <Text style={globalStyles.name}>{item.name}</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableHighlight>
            );
          }
        }}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          getAllCharacterInfo(info);
        }}
      />
    </Container>
  );
};

const Characters = connect(mapStateToProps, mapDispatchToProps)(CharactersView);

export default Characters;
