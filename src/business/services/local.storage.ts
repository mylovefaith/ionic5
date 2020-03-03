import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

const STORE_ID = 'storeId';
const USER_ID = 'userId';
const DEVICE_ID = 'deviceId';
const AUTH_TOKEN = 'authToken';

export const getStorageData = async () => {
  const response = await Promise.all([
    Storage.get({ key: STORE_ID }),
    Storage.get({ key: USER_ID }),
    Storage.get({ key: DEVICE_ID }),
    Storage.get({ key: AUTH_TOKEN }),
  ]);

  const storeId = await response[0].value || 1;
  const userId = await response[1].value || null;
  const deviceId = await response[2].value || null;
  const authToken = await response[3].value || null;

  return {
    storeId,
    userId,
    deviceId,
    authToken,
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

export const clearAuth = async () => {
  await Storage.remove({ key: USER_ID });
  await Storage.remove({ key: AUTH_TOKEN });
}
