import GET_CHARACTERS_INFO_REQUEST_SUCCESS from './actions'

const initialState = {
    id: '',
    name: '',
    status: '',
    species: '',
    gender: '',
    image: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_INFO_REQUEST_SUCCESS: {
      const {id, name, status, species, gender, image} = action.payload;

      return {
        id,
        name,
        status,
        species,
        gender,
        image,
      };
    }
    default: 
        return state;
  }
};

export {reducer};
