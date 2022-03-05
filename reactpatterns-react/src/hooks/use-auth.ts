import { useContext } from 'react';
//import { AuthContext } from '../contexts/auth0-context';
import { AuthContext } from '../contexts/jwt-context';

export const useAuth = () => useContext(AuthContext) as any;
