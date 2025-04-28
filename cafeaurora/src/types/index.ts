// src/types/index.ts
export interface Member {
    username: string;
    password?: string; // Avoid sending to frontend in real apps
    fullName: string;
    membershipNumber: number;
  }

  export interface LoginCredentials {
    username: string;
    password: string; // Changed to required to match backend expectations
  }

  export interface LoginSuccessResponse {
    fullName: string;
    membershipNumber: number;
  }

  export interface LoginErrorResponse {
    message: string;
  }