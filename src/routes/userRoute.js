import {
  registerUser,
  loginUser,
  getAllUsers,
  updateProfileURL
} from "../controllers/userController.js";

const user = (app) => {
  app.route("/auth/register").post(registerUser);
  app.route("/auth/login").post(loginUser);
  app.route("/users").get(getAllUsers);
  app.route("/picture").put(updateProfileURL)
};

export default user;
