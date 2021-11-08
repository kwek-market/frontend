export type FormDataType = {
  email: string;
  fullName: string;
  password1: string;
  password2: string;
};

export type ErrorType = {
  status: string;
  success: boolean;
  message: string;
};

export type UserUpdate = {
  newFirstName: string;
  newLastName: string;
  newEmail: string;
  newPhoneNumber: number;
  token: string;
};

export interface Fields {
  name: string;
  placeholder: string;
  type: string;
  className?: string;
  sub?: any;
}

export interface Type {
  title: string;
  isLoading: boolean;
  subtitle?: string;
  fields: Fields[];
  submit?: {
    text: string;
    action: (data: any) => void;
  };
  extra?: {
    text: string;
    linkText: string;
    linkUrl: string;
  };
  userId?: {
    id: string;
    message: string;
  };
  // message: string;
}

export type UserError = {
  status: boolean;
  message: string;
};

export type UserLogin = {
  email: string;
  password: string;
};
