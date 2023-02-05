import { authenCallApi, ROOT_BASE_URL } from '../BaseUrl';
import { authenCallApi1 } from '../URL';

const getAllUsers = async (token: string) => {
  return authenCallApi(token).get('/User/UserInfos');
};

const getUserByUserId = async (userId: string, token: string) => {
  return authenCallApi(token).get(`/User/${userId}`);
};

const updateUserStatus = async (userId: string, status: boolean, token: string) => {
  return authenCallApi(token).put(`/User/${userId}/${status}`);
};
const getAllReponsive = async (token: string) => {
  return authenCallApi1(token).get(`/taipham2000/repos`);
};
const UserApi = {
  getAllUsers,
  getAllReponsive,
  getUserByUserId,
  updateUserStatus,
};

export default UserApi;
