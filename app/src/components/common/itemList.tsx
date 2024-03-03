import React from "react";
import { ScrollView, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamList } from "stack/screenConfigurations";
import { useAppTheme } from "theme/appThemeProvider";
import { commonStyles } from "theme/commonStyles";
import { AppTheme } from "theme/types";

interface ListScreenProps<T> {
  navigation: StackNavigationProp<AppStackParamList>;
  title: string;
  items: T[];
  renderItem: (item: T, navigation: StackNavigationProp<AppStackParamList>) => JSX.Element;
}

export const ItemList = <T,>({
  navigation,
  title,
  items,
  renderItem,
}: ListScreenProps<T>) => {
  const theme: AppTheme = useAppTheme();

  return (
    <View style={commonStyles.pageContainer}>
      <Text style={[theme.title]}>{title}</Text>
      <ScrollView
        style={[commonStyles.fullHeight, { width: theme.largeWidth }]}
      >
        {items.map((item) => renderItem(item, navigation))}
      </ScrollView>
    </View>
  );
};
