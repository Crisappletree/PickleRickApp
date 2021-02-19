import React, { useEffect } from 'react';

import { View, Text } from 'react-native';
import {connect} from 'react-redux';
import {GET_CHARACTERS_INFO_REQUEST} from '../models/characters/actions'

const mapStateToProps = (state, props) => {
    const {id, name, status, species, gender, image} = state.character;

    return {
        id,
        name,
        status,
        species,
        gender,
        image,
      };
}

const mapDispatchToProps = (dispatch, props) => ({
    getCharactersInfo: () => {
        dispatch({
            type: GET_CHARACTERS_INFO_REQUEST,
            payload: {},
        })
    }
})

const CharactersView = ({ id, name, status, species, gender, image, getCharactersInfo }) => {

    useEffect(() => {
        getCharactersInfo()
    }, [getCharactersInfo])

    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{status}</Text>
            <Text>{species}</Text>
            <Text>{gender}</Text>
        </View>
    );
}

const Characters = connect(
    mapStateToProps,
    mapDispatchToProps,

)(CharactersView)

export default Characters;