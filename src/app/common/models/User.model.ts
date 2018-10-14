
export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  profile: any; // Add custom type
  cart: any; // Add custom type
  createdOn: Date;
}
