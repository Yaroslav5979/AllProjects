let initialState = {
  dialogs: [
    {
      name: "Bae Suzy",
      avaImg: "https://pbs.twimg.com/media/EK1PvdOU8AARgn5.jpg",
    },
    {
      name: "Sem",
      avaImg:
        "https://static.tvtropes.org/pmwiki/pub/images/samwinchester_581.jpg",
    },
    {
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
  ///Повідомлення
  if (action.type === "SEND-MESSAGE") {
    let newMessage = { id: 4, message: state.newMessage };
    state.message.push(newMessage);
    state.newMessage = "";
  } else if (action.type === "UPDATE-NEW-MESSAGE") {
    state.newMessage = action.text;
  }

  return state;
};

export default messageReducer;
