// types/auth.ts
export interface LoginResponse {
    token: string;
    user: {
      username: string;
      email: string;
    };
  }
  
  export interface LoginError {
    message: string;
  }
  