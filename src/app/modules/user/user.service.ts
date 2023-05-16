import exp from "constants";
import User from "./user.model";
import { IUser } from "./user.interface";

// create a new user
export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();
  console.log(user.fullName());
  return user;
};

// get all user from db
export const getUserFromDb = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

// get a user from db
export const getUserByIdFromDb = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne(
    { id: payload },
    {
      name: 1,
      contactNo: 1,
    }
  );
  return user;
};

export const getAllAdminUsers = async () => {
  const admin = await User.getAdminUsers();
  return admin;
};
