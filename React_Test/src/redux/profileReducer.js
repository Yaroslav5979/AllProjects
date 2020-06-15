const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    {
      name: "BSuzy",
      message: "Hi guys",
      likeCount: 15,
      avaImg: "https://pbs.twimg.com/media/EK1PvdOU8AARgn5.jpg",
    },
    {
      name: "Suzy",
      message: "Hello)",
      likeCount: 20,
      avaImg: "https://pbs.twimg.com/media/EK1PvdOU8AARgn5.jpg",
    },
    {
      name: "Suzy",
      message: "Yo ....",
      likeCount: 8,
      avaImg: "https://pbs.twimg.com/media/EK1PvdOU8AARgn5.jpg",
    },
  ],
  newPostText: "I here guys",
};

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      name: "Sem",
      message: state.newPostText,
      likeCount: 50,
      avaImg:
        "https://static.tvtropes.org/pmwiki/pub/images/samwinchester_581.jpg",
    };

    state.posts.push(newPost);
    state.newPostText = "";
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.text;
  }

  return state;
};

export default profileReducer;
