import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";

const store = {
  _state: {
    profilePost: {
      posts: [
        {
          id: 1,
          name: "Bae Suzy",
          message: "Hi guys",
          likeCount: 15,
          avaImg: "https://pbs.twimg.com/media/EK1PvdOU8AARgn5.jpg",
        },
        {
          id: 2,
          name: "Bae Suzy",
          message: "Hello)",
          likeCount: 20,
          avaImg: "https://pbs.twimg.com/media/EK1PvdOU8AARgn5.jpg",
        },
        {
          id: 3,
          name: "Bae Suzy",
          message: "Yo ....",
          likeCount: 8,
          avaImg: "https://pbs.twimg.com/media/EK1PvdOU8AARgn5.jpg",
        },
      ],
      newPostText: "Hello) uuu)",
    },
    messagePage: {
      dialogs: [
        {
          id: 1,
          name: "Bae Suzy",
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
    this._state.profilePost = profileReducer(this._state.profilePost, action);
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    this.renderTree(this._state);
  },
};

//При кліку вертаєм  в if (action.type === ADD_POST)

export default store;
