export interface AuthState {
  user: {
    accessKeyId: string;
    authenticated: boolean;
    identityId: string;
    secretAccessKey: string;
    sessionToken: string;
  };
}

export default {
  user: null
} as AuthState;
