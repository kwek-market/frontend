import SellerTypes from './seller.types';

const initialState = {
  loading: false,
  error: null,
  sellerCreated: {
    message: '',
    status: false,
  },
  sellerVerified: {
    message: '',
    status: false,
  },
  seller: {
    firstname: '',
    lastname: '',
    phoneNumber: '',
    shopName: '',
    shopUrl: '',
    shopAddress: '',
    state: '',
    city: '',
    lga: '',
    landmark: '',
    howYouHeardAboutUs: '',
    acceptedPolicy: false,
    storeBannerUrl: '',
    storeDescription: '',
    preferedId: '',
    preferedIdUrl: '',
    bvn: '',
    bankName: '',
    bankSortCode: '',
    bankAccountNumber: '',
    bankAccountName: '',
    sellerIsVerified: false,
    bankAccountIsVerified: false,
    acceptedVendorPolicy: false,
  },
};

export default function sellerReducer(state: typeof initialState = initialState, action: any) {
  switch (action.type) {
    case SellerTypes.START_SELLING:
      return {
        ...state,
        loading: false,
        error: null,
        sellerCreated: action.payload,
      };
    case SellerTypes.SELLER_VERIFICATION:
      return {
        ...state,
        loading: false,
        error: null,
        sellerVerified: action.payload,
      };
    case SellerTypes.GET_SELLER:
      return {
        ...state,
        loading: false,
        error: null,
        seller: action.payload,
      };
    case SellerTypes.SELLER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SellerTypes.SELLER_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
