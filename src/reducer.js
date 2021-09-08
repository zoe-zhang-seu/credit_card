function reducer(state: CardState, action: ReducerAction): CardState 
{
  switch (action.type) {
    case "updateCardNumber":
      return { ...state, cardNumber: updateCardNumber(action.payload) };
    case "updateCardHolder":
      return { ...state, cardHolder: action.payload };
    case "updateCardExpirationMonth":
      return {
        ...state,
        cardExpirationMonth: ("0" + action.payload).slice(-2),
      };
    case "updateCardExpirationYear":
      return { ...state, cardExpirationYear: action.payload.slice(2) };
    case "updateCardCVV":
      return { ...state, cardCVV: action.payload };
    default:
      throw new Error();
  }
}

const Paycard = () => {
  const initialCardState: CardState = {
    cardNumber: "",
    cardHolder: "",
    cardExpirationMonth: "",
    cardExpirationYear: "",
    cardCVV: "",
  };
  const [cardState, dispatch] = React.useReducer(reducer, initialCardState);
 
}

export default reducer