import { Plugins } from '@capacitor/core';
import { DEFAULT_AUTH_TOKEN, MODES, THEMES } from '../enums';
import { LocalStorageModel } from '../global/init/types';

const { Storage } = Plugins;

const STORE_ID = 'storeId';
const USER_ID = 'userId';
const DEVICE_ID = 'deviceId';
const AUTH_TOKEN = 'authToken';
const MODE = 'mode'; // Light or Dark theme
const THEME = 'theme';

export const getStorageData = async (): Promise<LocalStorageModel> => {
  const response = await Promise.all([
    Storage.get({ key: STORE_ID }),
    Storage.get({ key: USER_ID }),
    Storage.get({ key: DEVICE_ID }),
    Storage.get({ key: AUTH_TOKEN }),
    Storage.get({ key: MODE }),
    Storage.get({ key: THEME }),
  ]);

  const storeId = await Number(response[0].value) || 1;
  const userId = await Number(response[1].value) || null;
  const deviceId = await response[2].value || null;
  const authToken = await response[3].value || null;
  const mode = await response[4].value as MODES.types || null;
  const theme = await response[5].value as THEMES.types || null;

  return {
    storeId,
    userId,
    deviceId,
    authToken: DEFAULT_AUTH_TOKEN || authToken,
    mode,
    theme,
  }
}

export const setStoreId = async (storeId: number) => {
  await Storage.set({ key: STORE_ID, value: storeId.toString()});
}

export const setUserId = async (userId: number) => {
  await Storage.set({ key: USER_ID, value: userId.toString()});
}

export const setAuthToken = async (authToken: string) => {
  await Storage.set({ key: AUTH_TOKEN, value: authToken });
}

export const getStorageItem = async(key: string) => {
  await Storage.get({ key });
}

export const setStorageItem = async(key: string, item: string) => {
  await Storage.set({ key, value: item });
}

export const clearAuth = async () => {
  await Storage.remove({ key: USER_ID });
  await Storage.remove({ key: AUTH_TOKEN });
}
