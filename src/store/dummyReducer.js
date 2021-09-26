import { addBook} from '../action/bookAction'

console.log(addBook.toString())
console.log(addBook())
console.log(addBook("Test"))
export default (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
