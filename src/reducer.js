export const initialState = {
  user: { email: "guest" },
  bookGenre: "all",
};

const getLocalData = (state) => {
  let localData = [];
  if (state.user) {
    let localDataString = localStorage.getItem(state.user.email);
    if (localDataString) localData = JSON.parse(localDataString);
  } else {
    let localDataString = localStorage.getItem("guest");
    if (localDataString) localData = JSON.parse(localDataString);
  }
  return localData;
};
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "UNSET_USER":
      return {
        ...state,
        user: { email: "guest" },
      };
    case "SET_GENRE":
      return {
        ...state,
        bookGenre: action.genre,
      };
  }
}
export default reducer;
