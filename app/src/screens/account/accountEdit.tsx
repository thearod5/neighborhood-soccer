import { api } from "api/baseApi"; // Assuming this is your API utility
import CustomButton from "components/common/customButton"; // Assuming you have this component
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import ImagePicker from "react-native-image-picker"; // Assuming you're using this library for image uploads
import { userState } from "state/userState";
import { useAppTheme } from "theme/appThemeProvider"; // For styling purposes

interface AccountEditScreenProps {}
export const AccountEditScreen: React.FC<AccountEditScreenProps> = () => {
  const { userId } = userState.user;
  const theme = useAppTheme();

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    profileImage: null, // For simplicity, handle the image as a base64 string
  });

  const handleChange = (name, value) => {
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Update user information in your backend
    api("updateUser", { userId, ...userInfo })
      .then(() => {
        Alert.alert("Success", "Profile updated successfully.");
        navigation.goBack(); // Or navigate to a different screen as needed
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Error", "An error occurred: " + error.message);
      });
  };

  const handleSelectImage = () => {
    // Options configuration for ImagePicker
    const options = {
      title: "Select Avatar",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.uri };
        // Assuming we're handling the image as a base64 string
        setUserInfo((prev) => ({ ...prev, profileImage: source }));
      }
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="First Name"
          value={userInfo.firstName}
          onChangeText={(value) => handleChange("firstName", value)}
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          value={userInfo.lastName}
          onChangeText={(value) => handleChange("lastName", value)}
          style={styles.input}
        />
        <TextInput
          placeholder="Bio"
          value={userInfo.bio}
          onChangeText={(value) => handleChange("bio", value)}
          style={styles.input}
          multiline
        />
        {userInfo.profileImage && (
          <Image source={userInfo.profileImage} style={styles.image} />
        )}
        <CustomButton
          title="Select Profile Image"
          onPress={handleSelectImage}
          buttonColor={theme.primary}
        />
        <CustomButton
          title="Save"
          onPress={handleSave}
          buttonColor={theme.primary}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});
