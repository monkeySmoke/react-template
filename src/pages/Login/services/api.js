import { POST } from '@/utils/http';

export const login = data => POST('/api/login', data);
