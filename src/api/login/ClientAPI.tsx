import apiClient from '../../lib/AxiosConfig';

export const submitLogin = async (empId: string, password: string) => {
  try {
    const response: any = await apiClient.post('', { empId, password });
    return response.data;
  } catch (error) {
    console.error('Error trying submit login', error);
    throw error;
  }
};

export const submitLogout = async (empId: string, password: string) => {
  try {
    const response: any = await apiClient.post('', { empId, password });
    return response.data;
  } catch (error) {
    console.error('Error trying submit logout', error);
    throw error;
  }
};
