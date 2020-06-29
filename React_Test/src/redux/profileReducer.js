import { act } from "react-dom/test-utils";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    {
      id: 1,
      name: "BSuzy",
      message: "Hi guys",
      likeCount: 15,
      avaImg: "https://pbs.twimg.com/media/EK1PvdOU8AARgn5.jpg",
    },
    {
      id: 2,
      name: "Suzy",
      message: "Hello)",
      likeCount: 20,
      avaImg: "https://pbs.twimg.com/media/EK1PvdOU8AARgn5.jpg",
    },
    {
      id: 3,
      name: "Suzy",
      message: "Yo ....",
      likeCount: 8,
      avaImg: "https://pbs.twimg.com/media/EK1PvdOU8AARgn5.jpg",
    },
  ],
  newPostText: "I here guys",

  profile: null,
};

const profileReducer = (state = initialState, action) => {
  //Make a copy if the Object
  let stateCopy = { ...state };
  //Make a copy if the Arr in Obj
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        name: "Sem",
        message: state.newPostText,
        likeCount: 50,
        avaImg:
          "https://static.tvtropes.org/pmwiki/pub/images/samwinchester_581.jpg",
      };

      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;

    case UPDATE_NEW_POST_TEXT:
      stateCopy.posts = [...state.posts];
      stateCopy.newPostText = action.text;
      return stateCopy;

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
  }

  return state;
};

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export default profileReducer;
