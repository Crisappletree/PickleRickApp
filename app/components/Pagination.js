import React, {useEffect} from 'react';

import {
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base';

// Styles
import globalStyles from '../styles/global';

import {connect} from 'react-redux';
import {
  GET_CHARACTER_PAGE,
} from '../models/character/actions';

const mapDispatchToProps = (dispatch, props) => ({
  getCarachterPage: ({prev, next}) => {
    dispatch({
      type: GET_CHARACTER_PAGE,
      payload: {
        prevPage: prev,
        nextPage: next
      },
    });
  },
});

const PaginationView = ({pageInfo, getCarachterPage}) => {


  // console.log(next)
  return (
    <Footer>
      <FooterTab>
        <Button
          style={[globalStyles.button, {marginTop: 30}]}
          full
          onPress={() => {
            const prev = pageInfo.prev
            if(prev){
            getCarachterPage(prev)}
          }}>
          <Text style={globalStyles.textButton}>Prev</Text>
        </Button>
        <Button
          style={[globalStyles.button, {marginTop: 30}]}
          full
          onPress={() => {
            const next = pageInfo.next
            console.log(next)
            getCarachterPage(next)
          }}
          >
          <Text style={globalStyles.textButton}>Start</Text>
        </Button>
        <Button
          style={[globalStyles.button, {marginTop: 30}]}
          full
          onPress={() => {}}>
          <Text style={globalStyles.textButton}>Next</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

const Pagination = connect(mapDispatchToProps)(PaginationView);

export default Pagination;
