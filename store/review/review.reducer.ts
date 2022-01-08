import reviewTypes  from "./review.types"; 


const initialState = {
    id: null,
    loading: false,
    error: null,
    email: "",
    status: false,
    message: null,
    productReview: {
        id: null,
        product: "",
        rating: "",
        review: null,
        token: null,
        vote: null,
        email: null,
        name: null,
        comment: null
    }

};

export default function reviewReducer(
    state: typeof initialState = initialState,
    action: { type: any; payload: any}
) {
    switch (action.type) {
        case reviewTypes.REVIEW_PRODUCT: 
        return{
            ...state,
            loading: false,
            email :action.payload.email,
            error: null,
        };
        case reviewTypes.PRODUCT_RATING:
            return {
                ...state,
                loading: false,
                error: null,
                rating: action.payload.rating
            };
        case reviewTypes.REVIEW_LOADING:
            return{
                  ...state,
                  loading: true,
            };
            case reviewTypes.REVIEW_LOADING:
            return{
                  ...state,
                  loading: true,
                  error: null,
                  name: action.payload.name
            };
            case reviewTypes.REVIEW_COMMENT:
                return {
                    ...state,
                    loading: false,
                    error: null,
                    comment: action.payload.comment
                };
                case reviewTypes.ERROR:
                    return {
                      ...state,
                      loading: false,
                      error: action.payload,
                    };
        default:
         return state;
    };
   
}