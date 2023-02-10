interface ImportMetaEnv {
  readonly VITE_msbCognitoIdentityPoolId: string;
  readonly VITE_msbCognitoUserPoolId: string;
  readonly VITE_msbCognitoAppClientId: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
