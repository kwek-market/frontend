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
  comment?: string;
  review?: string;
  rating: number;
  productId: string;
  email?: string;
  name?: string;
  token: string;
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
  submitDetails: UploadProductType & Record<any, any>;
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
    sellerProfile: {
      shopName: string;
      storeBannerUrl: string;
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
      username: string;
    };
    ratedAt: string;
  }[];
};

export type AddToCartPayload = {
  productOptionId: string;
  token?: string;
  quantity: number;
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
  couponIds?: string[];
  deliveryMethod: string;
  paymentMethod: string;
  paymentRef?: string;
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
  paymentRef: string;
};

export type Order = {
  id: string;
  closed: boolean;
  orderId: string;
  orderPrice: number;
  orderPriceTotal: number;
  user: {
    username: string;
  };
  cartItems: {
    id: string;
    ordered: boolean;
    price: number;
    productOptionId: string;
  }[];
  doorStep: {
    fullName: string;
    address: string;
    state: string;
    city: string;
  };
  pickup: {
    name: string;
  };
  paid: boolean;
  coupon: any;
  paymentMethod: string;
  deliveryMethod: string;
  deliveryStatus: string;
  dateCreated: Date;
};

export type CartItemType = {
  id: string;
  quantity: number;
  price: number;
  ordered: boolean;
  product: {
    productTitle: string;
    image: {
      id: string;
      imageUrl: string;
    }[];
  };
  cart: {
    createdAt: Date;
  }[];
};

export type SubCategoriesType = {
  id: string;
  name: string;
  categories: any[];
  child: [
    {
      id: string;
      name: string;
    }
  ];
};

// fix
export type OrderList = {
  created: string;
  customer: {
    fullName: string;
  };
  order: {
    id: string;
    orderId: string;
    deliveryStatus: string;
  };
  total: number;
  profit: number;
  status: string;
  paid: boolean;
};

export type SellerWallet = {
  id: string;
  balance: number;
  owner: {
    firstName: string;
    lastName: string;
  };
  transaction: {
    amount: number;
    date: string;
    remark: string;
  };
};

export type CouponType = {
  id: string;
  code: string;
  value: number;
  createdAt: string;
  validUntil: string;
  userList?: string[];
};

export type UserNotificationType = {
  id: string;
  notification: {
    id: string;
  };
  message: string;
  subject: string;
  read: boolean;
  createdAt: Date;
};

export type ReadNotificationType = {
  messageId: string;
  notificationId: string;
  token: string;
};

export type InvoiceDetails = {
  customerAddress: string;
  customerEmail: string;
  customerName: string;
  deliveryFee: number;
  note: string;
  purchasedItem: string[];
  subtotal: number;
  token: string;
  total: number;
};

export type InvoiceProps = {
  invoice: InvoiceDetails;
  setInvoice: React.Dispatch<React.SetStateAction<InvoiceDetails>>;
};

export type PagePayload = {
  page?: number;
  pageSize?: number;
  token: string;
  search?: string;
  sortBy?: string;
  priceRange?: number[];
  sizes?: string[];
  keyword?: string[];
  rating?: number;
  thisMonth?: boolean;
};

export type SellerReview = {
  id: string;
  product: ProductType;
  rating: number;
  review: String;
  user: {
    firstName: string;
    lastName: string;
  };
  likes: number;
  dislikes: number;
  ratedAt: Date;
  comment: {
    id: number;
  };
};

export type ContactUs = {
  name: string;
  email: string;
  message: string;
};

export type ClicksPayload = {
  productId: string;
  token: string;
};

export type WalletHistory = {
  id: string;
  remark: string;
  amount: string;
  date: Date;
  status: boolean;
  wallet: {
    balance: number;
  };
};

export type InvoiceResult = {
  id: string;
  customerName: string;
  customerEmail: string;
  invoiceNumber: string;
  issueDate: Date;
};

export type Filtering = {
  priceRange: number[];
  sizes: string[];
  keyword: string[];
  rating: number;
};

export type SidebarProps = {
  filtering: Filtering;
  setFiltering: React.Dispatch<React.SetStateAction<Filtering>>;
};

export interface IdAndTokenPayload {
  id: string;
  token: string;
}
