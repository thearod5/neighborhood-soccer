import { DataTypes } from "sequelize";
import { DB } from "./connect";

// Define the User model
export const UserSchema = DB.define(
  "User",
  {
    // Assuming a simple user model for demonstration
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add other fields as needed
  },
  {
    // Other model options go here
  }
);
