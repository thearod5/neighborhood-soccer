import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useTheme} from "../config/themeProvider";

const LoadingPage = () => {
    const theme = useTheme()
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color={theme.loading}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});

export default LoadingPage;