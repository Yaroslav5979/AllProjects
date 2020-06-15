const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      name: "Hinata",
      message: state.newPostText,
      likeCount: 50,
      avaImg:
        "https://pa1.narvii.com/6761/5348bbf496e5a0a9f417b49092510042d1a930b9_hq.gif",
    };

    state.posts.push(newPost);
    state.newPostText = "";
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.text;
  }

  return state;
};

export default profileReducer;
