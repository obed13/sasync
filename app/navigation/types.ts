// navigation/types.ts
export type RootStackParamList = {
  "Login": undefined; // no recibe parámetros
  "(tabs)": undefined;
  "+not-found": undefined;
};

  // extiende los tipos por defecto de React Navigation
  declare global {
    namespace ReactNavigation {
      interface IRootParamList extends RootStackParamList {}
    }
  }