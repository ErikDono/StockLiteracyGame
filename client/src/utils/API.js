import axios from "axios";

export default {
  // Login user
  loginUser: function (userData) {
    console.log(userData)
    return axios.post("/api/login", userData);
  },
  // Signup user
  signupUser: function (userData) {
    console.log(userData)
    return axios.post("/api/signup", userData);
  },

  // Logout user
  logoutUser: function () {
    return axios.get("/api/logout")
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
