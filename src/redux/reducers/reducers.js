import {email, token, userName} from '../constants/constants';

const Initial_State = {
  userName: '',
  email: '',
  token: ''
};
const Reducer = (state = Initial_State, action) => {
  switch (action.type) {
    case userName:
      return {
        ...state,
        userName: action.payload,
      };
    case email:
      return {
        ...state,
        email: action.payload,
      };
      case token:
        return {
        ...state,
        token: action.payload
      }
    default:
      return state;
  }
};

export default Reducer;
