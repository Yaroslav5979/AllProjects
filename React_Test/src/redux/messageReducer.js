let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Suzy",
      avaImg: "https://pbs.twimg.com/media/EK1PvdOU8AARgn5.jpg",
    },
    {
      id: 2,
      name: "Sem",
      avaImg:
        "https://static.tvtropes.org/pmwiki/pub/images/samwinchester_581.jpg",
    },
    {
      id: 3,
      name: "Emma",
      avaImg:
        "https://hips.hearstapps.com/cosmouk.cdnds.net/cm/14/30/53d499198eb07_-_emma-watson-cannes-2013-kardashian-3fppja-lgn.jpg",
    },
  ],

  message: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello)" },
    { id: 3, message: "Hello all" },
  ],
  newMessage: "Hello my name Bae Syzy)",
};

export const messageReducer = (state = initialState, action) => {
  if (action.type === "SEND-MESSAGE") {
    //Return new state
    return {
      ...state,
      newMessage: "",
      message: [...state.message, { id: 4, message: state.newMessage }],
    };

    // let newMessage = { id: 4, message: copySate.newMessage };
    // copySate.message.push(newMessage);
    //copySate.newMessage = "";
    //return copySate;
  } else if (action.type === "UPDATE-NEW-MESSAGE") {
    //Return new state
    return { ...state, newMessage: action.newMessage };

    //copySate.newMessage = action.newMessage;
    // return copySate;
  }

  return state;
};

export default messageReducer;
