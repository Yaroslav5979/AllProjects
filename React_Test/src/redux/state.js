import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";

const store = {
  _state: {
    profilePost: {
      posts: [
        {
          name: "Naruto",
          message: "Hi guys",
          likeCount: 15,
          avaImg:
            "https://i.pinimg.com/originals/35/43/7c/35437c2b0d5713fa1ccd23bb8ac68dc5.jpg",
        },
        {
          name: "Sakura",
          message: "Hello)",
          likeCount: 20,
          avaImg:
            "https://i.pinimg.com/736x/67/23/d1/6723d198ae6cc8d847c700fe344b1d1d.jpg",
        },
        {
          name: "Saske",
          message: "Yo ....",
          likeCount: 8,
          avaImg:
            "https://pm1.narvii.com/6489/aa426a50d20fcd874e3ba8110e415cca53976a0f_00.jpg",
        },
      ],
      newPostText: "I go to Korea",
    },
    messagePage: {
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
    },
  },
  renderTree() {
    console.log("State change");
  },
  subscribe(callback) {
    this.renderTree = callback;
  },
  getState() {
    ////Вертаєм  _state для index.js
    //і передаєм параметром в функцію
    //renderTree(store.getState())
    return this._state;
  },

  //action приймає в себе обєкти type і text
  dispatch(action) {
    console.log(this);
    this._state.profilePost = profileReducer(this._state.profilePost, action);
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    this.renderTree(this._state);
  },
};

//При кліку вертаєм  в if (action.type === ADD_POST)

export default store;
