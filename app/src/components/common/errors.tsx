import SnackBar from "react-native-snackbar-component";

export const showError = (text: string) => {
  <SnackBar
    visible={true}
    textMessage={text}
    actionHandler={() => {
      console.log("snackbar button clicked!");
    }}
    actionText="let's go"
  />;
};
