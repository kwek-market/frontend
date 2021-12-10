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

export type UserData = {
  id: string;
  lastLogin: Date;
  username: string;
  firstName: string;
  lastName: string;
  isStaff: boolean;
  isActive: boolean;
  dateJoined: Date;
  email: string;
  fullName: string;
  phoneNumber: string;
  isVerified: boolean;
  isSeller: boolean;
  password: string;
  isSuperuser: boolean;
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

export type StartSelling = {
  acceptedPolicy: boolean;
  firstname: string;
  howYouHeardAboutUs: string;
  landmark: string;
  lastname: string;
  lga: string;
  phoneNumber: string;
  shopAddress: string;
  shopName: string;
  shopUrl: string;
  state: string;
  token: string;
};

export type SellerVerification = {
  acceptedVendorPolicy: boolean;
  accountName: string;
  accountNumber: string;
  bankName: string;
  bankSortCode: string;
  bvn: string;
  preferedId: string;
  preferedIdUrl: string;
  token: string;
};

export type SellerData = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  shopName: string;
  shopUrl: string;
  shopAddress: string;
  state: string;
  city: string;
  lga: string;
  landmark: string;
  howYouHeardAboutUs: string;
  acceptedPolicy: boolean;
  storeBannerUrl: string;
  storeDescription: string;
  preferedId: string;
  preferedIdUrl: string;
  bvn: string;
  bankName: string;
  bankSortCode: string;
  bankAccountNumber: string;
  bankAccountName: string;
  sellerIsVerified: boolean;
  bankAccountIsVerified: boolean;
  acceptedVendorPolicy: boolean;
};
