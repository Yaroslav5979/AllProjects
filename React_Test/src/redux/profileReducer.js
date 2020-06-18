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
  //Make a copy if the Object
  let stateCopy = { ...state };
  //Make a copy if the Arr in Obj
  stateCopy.posts = [...state.posts];

  if (action.type === ADD_POST) {
    let newPost = {
      name: "Sem",
      message: state.newPostText,
      likeCount: 50,
      avaImg:
        "https://static.tvtropes.org/pmwiki/pub/images/samwinchester_581.jpg",
    };

    stateCopy.posts.push(newPost);

    stateCopy.newPostText = "";

    return stateCopy;
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    stateCopy.newPostText = action.text;

    return stateCopy;
  }

  return state;
};

export default profileReducer;
