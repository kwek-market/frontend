export const PRODUCT_REVIEW = /*GRAPHQL*/ `
mutation review(
    $productId: String
    $rating: Int
    $review: String
    $reviewId: String
    $token: String
    $vote: String
) {
    review(
        productId: $productId
        rating: $rating
        review: $review
        reviewId: $reviewId
        token: $token
        vote: $vote
    ) {
        status
        message
    }
}
`;

export const GET_PRODUCT_REVIEW = /* GRAPHQL */ `
   query review($reviewId: String!) {
       review(reviewId: $reviewId) {
           id
           product
           rating
           review
           parent
           user
           likes
           dislikes
           ratedAt
           comment
       }
   }
`;
