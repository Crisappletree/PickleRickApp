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

import {FlatList} from 'react-native';

import {useNavigation} from '@react-navigation/native';

// Styles
import globalStyles from '../styles/global';

import {connect} from 'react-redux';
import {
  GET_ALL_CHARACTER_INFO_REQUEST,
  GET_CHARACTER_ID,
  GET_MORE_CHARACTER_INFO_REQUEST,
} from '../models/character/actions';

const mapStateToProps = (state, props) => {
  const {characters} = state.characters.characters;
  const {info} = state.characters.info;
  console.log(state)
  return {characters, info};
};

const mapDispatchToProps = (dispatch, props) => ({
  getAllCharacterInfo: () => {
    dispatch({
      type: GET_ALL_CHARACTER_INFO_REQUEST,
      payload: {},
    });
  },
  getMoreCharacterInfo: (info) => {
    dispatch({
      type: GET_MORE_CHARACTER_INFO_REQUEST,
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
  getMoreCharacterInfo
}) => {
  const navigation = useNavigation();

  useEffect(() => {
    getAllCharacterInfo();
  }, [getAllCharacterInfo]);

  return (
    <Container style={globalStyles.container}>
      <FlatList
        data={characters}
        // onEndReachedThreshold={0.5}
        onEndReached={console.log('end reached')}
        onEndReachedThreshold={0.5}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          if (item) {
            return (
              <CardItem key={item.id} style={globalStyles.card}>
                <Body>
                  <Thumbnail
                    style={globalStyles.image}
                    source={{uri: item.image}}
                  />
                  <Text
                    onPress={() => {
                      getCarachterId(item.id);
                      navigation.navigate('CharactersDetail');
                    }}
                    style={globalStyles.name}>
                    {item.name}
                  </Text>
                </Body>
              </CardItem>
            );
          }
        }}
        
        onEndReachedThreshold={0.5}
        onEndReached={() => {getMoreCharacterInfo(info)}}
      />
    </Container>
  );
};

const Characters = connect(mapStateToProps, mapDispatchToProps)(CharactersView);

export default Characters;
