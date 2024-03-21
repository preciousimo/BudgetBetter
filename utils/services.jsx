import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.error("Error storing data:", e);
        // Handle error
    }
};

const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value || ""; // Return an empty string if value is null
    } catch (e) {
        console.error("Error getting data:", e);
        // Handle error
    }
};

export default {
    storeData,
    getData
};
