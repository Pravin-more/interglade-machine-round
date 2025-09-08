const Localstorage = {
  clear: function () {
    // Clear all Local Storage
    localStorage.clear();
  },

  USERData: {
    set: function (data) {
      localStorage.setItem("USER_DATA", JSON.stringify(data));
    },
    get: function () {
      return JSON.parse(localStorage.getItem("USER_DATA"));
    },
    remove: function () {
      localStorage.removeItem("USER_DATA");
    },
  },
};

export default Localstorage;
export { Localstorage };
