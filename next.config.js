module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      "mongodb+srv://eben:lmaohaveit@cluster0.celgl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",

    // production
    API_URI: "https://dotpostttt.vercel.app/api/notes",

    // DEVELOPMENT
    LOCAL_URI: "http://localhost:3000/api/notes",
  },
};
