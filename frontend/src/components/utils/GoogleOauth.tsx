import { GoogleOAuthProvider } from 'google-oauth-gsi';

export const googleProvider = new GoogleOAuthProvider({
    clientId: "551543058830-vpmo0845raec1behgs83l7v36ctsf590.apps.googleusercontent.com",
    onScriptLoadError: () => console.log('onScriptLoadError'),
    onScriptLoadSuccess: () => console.log('onScriptLoadSuccess'),
});