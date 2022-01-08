const initialState = {
  loading: false,
  error: null,
  categories: [{}],
  subCategories: [{}],
  message: "",
  status: false,
};

export function productReducer(
  state: typeof initialState = initialState,
  action: any
) {
  switch (action.type) {
    default:
      return state;
  }
}
