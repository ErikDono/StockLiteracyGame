import axios from "axios";

export default {
  // Gets all users
  loginUser: function (userData) {
    console.log(userData)
    return axios.post("/api/login", userData);
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/login/" + id);
  },

  signupUser: function (userData) {
    console.log(userData)
    return axios.post("/api/signup", userData);
  }
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
