import { KindeSDK } from '@kinde-oss/react-native-sdk-0-7x';
import Constants from 'expo-constants';

const {
  YOUR_KINDE_ISSUER,
  YOUR_KINDE_REDIRECT_URI,
  YOUR_KINDE_CLIENT_ID,
  YOUR_KINDE_LOGOUT_REDIRECT_URI,
} = Constants.expoConfig.extra;

export const client = new KindeSDK(
    YOUR_KINDE_ISSUER,
    YOUR_KINDE_REDIRECT_URI,
    YOUR_KINDE_CLIENT_ID,
    YOUR_KINDE_LOGOUT_REDIRECT_URI
);
