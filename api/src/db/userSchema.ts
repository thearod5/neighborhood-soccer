import { DataTypes } from "sequelize";
import { DB } from "./connect";

export const UserSchema = DB.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, // Automatically generate unique ids
    },
    firstName: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensure usernames are unique
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, // Default non-admin users
    },
    bio: {
      type: DataTypes.TEXT,
      // allowNull defaults to true, allowing it to be optional
    },
    profileImage: {
      type: DataTypes.STRING,
      // allowNull defaults to true, making it optional
      // This field can store the URL to the image
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true, // Making email optional based on your interface
      unique: true, // Optional but ensures that emails are unique if provided
      validate: {
        isEmail: true, // Validates that the string is an email
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true, // Making phone optional based on your interface
      // You can add validation for phone numbers if required
    },
    // Add other fields as needed
  },
  {
    // Other model options go here
    // Example: timestamps: true, to automatically add createdAt and updatedAt fields
  }
);
