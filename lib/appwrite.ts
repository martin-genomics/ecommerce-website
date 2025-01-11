import { Account, Client, ID, OAuthProvider } from 'appwrite';

const client = new Client();

client.setEndpoint(process.env!.NEXT_PUBLIC_APPWRITE_ENDPOINT as string);
client.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);


export const account = new Account(client);
export { ID };




export const login = async (email: string, password: string) => {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  };



export const logout = async () => {
    try {
        await account.deleteSession('current');
    } catch (error) {
        throw error;
    }
};


export const register = async (name: string, email: string, password: string) => {
    try {
        const user = await account.create(ID.unique(), email, password, name);
        return user;
    } catch (error) {
        throw error;
    }
};


export const loginWithGoogle = async () => {
    try {
        const session = await account.createOAuth2Session(OAuthProvider.Google);
        return session;
    } catch (error) {
        throw error;
    }
};


export const getUser = async () => {
    try {
        const user = await account.get();
        return user;
    } catch (error) {
        throw error;
    }
};