import { POST, GET } from '@/utils/http';

export const login = data => POST('/api/login', data);
export const getUser = () => GET('/api/getUser');
export const logout = () => GET('/api/logout');
