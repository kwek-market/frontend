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

export type ReviewType = {
  comment: string;
  radio: any;
  email: string;
  name: string;
};

export type UploadProductType = {
  brand: string;
  category: string;
  subcategory: string;
  chargeFivePercentVat: boolean;
  color: string;
  gender: string;
  keyword: string[];
  productImageUrl: string[];
  productOptions: string[];
  productTitle: string;
  productWeight: string;
  returnPolicy: string;
  shortDescription: string;
  token: string;
  warranty: string;
};

export type UploadProductProps = {
  submitDetails: UploadProductType;
  setSubmitDetails: React.Dispatch<React.SetStateAction<UploadProductType>>;
};

export type ProductType = {
  id: string;
  productTitle: string;
  chargeFivePercentVat: boolean;
  productWeight: string;
  shortDescription: string;
  returnPolicy: string;
  warranty: string;
  gender: string;
  keyword: string[];
  clicks: number;
  promoted: boolean;
  productsWished: {
    id: string;
    product: {
      id: string;
      productTitle: string;
    };
  };
  user: {
    id: string;
    username: string;
    isSeller: boolean;
    sellerprofileSet: {
      shopName: string;
    }[];
  };
  category: {
    id: string;
    name: string;
  };
  subcategory: {
    id: string;
    name: string;
  };
  sales: string;
  options: {
    id: string;
    size: string;
    quantity: string;
    price: string;
    discountedPrice: string;
    optionTotalPrice: string;
  }[];
  dateCreated: string;
  brand: string;
  color: string;
  image: {
    id: string;
    imageUrl: string;
  }[];
  productRating: {
    id: string;
    rating: number;
    review: string;
    likes: number;
    dislikes: number;
    user: {
      id: string;
    };
    ratedAt: string;
  }[];
};

export type AddToCartPayload = {
  productOptionId: string;
  token?: string;
  ipAddress?: string;
};

export type DeleteFromCartPayload = {
  cartId: string;
  token?: string;
  ip?: string;
  itemId: string;
};

export type AddToWishlistPayload = {
  productId: string;
  token: string;
};

export type WishlistType = {
  id: string;
  product: {
    id: string;
    productTitle: string;
    dateCreated: Date;
    options: {
      id: string;
      size: string;
      quantity: string;
      price: string;
      discountedPrice: string;
      optionTotalPrice: string;
    }[];
    image: {
      id: string;
      imageUrl: string;
    }[];
  };
  wishlist: {
    id: string;
    createdAt: Date;
  };
};

export type BillingAddressType = {
  fullName: string;
  contact: string;
  address: string;
  city: string;
  state: string;
  token: string;
};

export type PlaceOrder = {
  addressId: string;
  cartId: string;
  couponId?: string;
  couponType?: string;
  deliveryMethod: string;
  paymentMethod: string;
  productOptionsId: string[];
  token: string;
};

export type PaymentLinkType = {
  amount: number;
  currency: string;
  description: string;
  redirectUrl: string;
  token: string;
};

export type VerifyPaymentType = {
  transactionId: string;
};
