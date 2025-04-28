/* Domain contracts that BOTH the client and server import */

export interface MemberCredentials {
    username: string;
    password: string;
  }
  
  export interface MemberProfile {
    fullName: string;
    membershipNumber: number;
  }
  
  export interface ErrorResponse {
    message: string;
  }
  