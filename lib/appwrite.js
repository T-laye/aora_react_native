import { Client, Account, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.aora",
  projectId: "6645df230014645cf0b3",
  databaseId: "6645e0670039fc8fcfcf",
  userCollectionId: "6645e085002513f3d687",
  videoCollectionId: "6645e09f0020ceede43d",
  storageId: "6645e237002fdf43d65c",
};

const client = new Client();
client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
//   register();
};

async function login(email, password) {
  await account.createEmailSession(email, password);
  setLoggedInUser(await account.get());
}

async function register(email, password, name) {
  await account.create(ID.unique(), "me@example.com", "testing", "laye");
  await login("me@example.com", "testing");
  setLoggedInUser(await account.get());
}
