import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../constants/ActionsType";


export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;

        case CREATE:
            return [...posts, action.payload];
        case UPDATE:

            console.log("acupdate ")
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE:
            console.log("actio ")
            return posts.filter((post) => post._id !== action.payload);

        default:
            return posts;
    }
};
