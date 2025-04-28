// src/lib/authService.ts
import axios, { AxiosError } from 'axios';
import {
  LoginCredentials,
  LoginSuccessResponse,
  LoginErrorResponse,
} from '@/types'; // Use the alias configured in root tsconfig.json

// Hardcoded API URL instead of using environment variable
const API_URL = 'http://localhost:4000';

console.log('Using API URL:', API_URL);

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (
  credentials: LoginCredentials
): Promise<LoginSuccessResponse> => {
  try {
    // Add console logging to debug the API URL and credentials
    console.log('API URL:', API_URL);
    console.log('Login credentials:', credentials);

    // Use the appropriate API endpoint
    const endpoint = '/api/members/login';

    console.log('Using endpoint:', endpoint);

    const response = await apiClient.post<LoginSuccessResponse>(
      endpoint,
      credentials
    );

    console.log('Login response:', response.data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<LoginErrorResponse>;
    const errorMessage =
      axiosError.response?.data?.message ||
      'Login failed. Please check your credentials or try again later.';
    console.error('Login API Error:', axiosError.response?.data || axiosError.message);
    console.error('Full error details:', {
      status: axiosError.response?.status,
      statusText: axiosError.response?.statusText,
      headers: axiosError.response?.headers,
      config: axiosError.config
    });
    throw new Error(errorMessage);
  }
};
