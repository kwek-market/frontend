import React from "react";

const ProductsIcon = ({ fill }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.484 7.59824V12.7428C11.0621 12.5178 10.6355 12.2928 10.209 12.0678C9.14023 11.5029 8.07148 10.9381 7.00039 10.3732C6.8457 10.2912 6.70273 10.2068 6.53867 10.1271V4.98496C6.58555 5.01309 6.64883 5.04121 6.70273 5.06934C6.70508 5.07168 6.70742 5.07168 6.70977 5.07402C6.86914 5.1584 7.02617 5.24043 7.18555 5.3248C7.23711 5.35293 7.29102 5.38105 7.34258 5.40918C7.39648 5.4373 7.44805 5.46543 7.50195 5.49355C7.60742 5.5498 7.71523 5.60606 7.8207 5.6623C8.88945 6.22715 9.96055 6.78731 11.0293 7.35215C11.034 7.35449 11.0363 7.35215 11.041 7.35449C11.0668 7.36855 11.0926 7.38496 11.1184 7.38496C11.123 7.4084 11.1277 7.39902 11.1301 7.40137C11.191 7.43418 11.2496 7.46934 11.3105 7.50215C11.3457 7.5209 11.3762 7.54199 11.4113 7.56074C11.4371 7.57012 11.4605 7.58652 11.484 7.59824ZM17.4605 4.99434V10.1318H17.4582C17.3832 10.167 17.327 10.1998 17.2613 10.235C16.2418 10.774 15.2223 11.3107 14.2027 11.8498C14.184 11.8592 14.1676 11.8709 14.1465 11.8803C13.6027 12.1662 13.0543 12.4475 12.5152 12.7357V7.59824C12.5621 7.56309 12.6418 7.53027 12.7074 7.49512C13.727 6.95605 14.7465 6.41699 15.766 5.88027C16.3309 5.58262 16.898 5.29199 17.4605 4.99434ZM16.8793 4.14355C16.4809 4.35449 16.0848 4.56309 15.6863 4.77402C14.6176 5.33887 13.5488 5.90371 12.4777 6.46855C12.3184 6.55293 12.159 6.6373 11.9996 6.72168C11.4113 6.40996 10.823 6.10059 10.2348 5.78887C9.19648 5.24043 8.16055 4.69199 7.12227 4.14355C7.5207 3.93262 7.9168 3.72402 8.31523 3.51309C9.38398 2.94824 10.4527 2.3834 11.5215 1.81855C11.6809 1.73418 11.8402 1.6498 11.9996 1.56543C12.5879 1.87715 13.1762 2.18652 13.7668 2.49824C14.8027 3.04668 15.841 3.59512 16.8793 4.14355ZM5.53086 17.0482V22.1857C5.08555 21.9654 4.68945 21.7428 4.27227 21.5225C3.20352 20.9576 2.13711 20.3928 1.06836 19.8303C0.906641 19.7459 0.728516 19.6592 0.587891 19.5748V14.4326C0.658203 14.4818 0.770703 14.5311 0.864453 14.5779C0.878516 14.585 0.890234 14.592 0.901953 14.599C1.06133 14.6834 1.2207 14.7725 1.38242 14.8568C1.5418 14.9412 1.70117 15.0209 1.86055 15.1147C2.92227 15.6772 3.98398 16.2326 5.0457 16.7928C5.04805 16.7928 5.05039 16.7928 5.05273 16.7928C5.05508 16.7928 5.05742 16.7928 5.05742 16.7951C5.06211 16.7975 5.06445 16.7975 5.06914 16.7998C5.09961 16.8162 5.12773 16.8303 5.1582 16.8467C5.28008 16.9123 5.39961 16.9779 5.52383 17.0436C5.52383 17.0459 5.52617 17.0482 5.53086 17.0482ZM11.484 14.4373V19.5748C10.898 19.8865 10.3051 20.1982 9.71445 20.51C8.65508 21.0701 7.6168 21.6279 6.53867 22.1881V17.0459C6.53867 17.0412 6.55508 17.0389 6.56211 17.0342C6.6207 17.0037 6.6793 16.9732 6.73555 16.9428C7.18086 16.7061 7.62852 16.4717 8.07383 16.235C8.64805 15.9326 9.22227 15.6279 9.79414 15.3256C10.0051 15.2131 10.216 15.1029 10.4293 14.9928C10.4809 14.967 10.5301 14.9389 10.5816 14.9131C10.823 14.7865 11.0621 14.6623 11.3035 14.5334C11.3668 14.5006 11.4371 14.4701 11.484 14.4373ZM10.898 13.5865C10.523 13.7975 10.1105 14.0084 9.71211 14.217C8.64336 14.7818 7.57695 15.3467 6.5082 15.9139C6.42852 15.9561 6.35117 15.9982 6.27148 16.0404C6.1918 16.0826 6.11211 16.1248 6.03242 16.167L4.26992 15.2342C3.23164 14.6857 2.1957 14.1373 1.15977 13.5889C1.5582 13.3779 1.9543 13.1693 2.35273 12.9584C3.42148 12.3936 4.49023 11.8311 5.55898 11.2662C5.71836 11.1818 5.87773 11.0857 6.03711 11.0154C6.18477 11.0857 6.33008 11.1678 6.47773 11.2451C6.91836 11.4795 7.3543 11.7092 7.79492 11.9436C8.83086 12.492 9.8668 13.0381 10.898 13.5865ZM17.4605 17.0482V22.1857C17.0152 21.9654 16.6191 21.7428 16.1996 21.5225C15.1309 20.9576 14.0645 20.3928 12.9957 19.8303C12.834 19.7459 12.6793 19.6592 12.5152 19.5748V14.4279C12.9371 14.6529 13.3637 14.8779 13.7902 15.1053C14.859 15.6701 15.9277 16.2373 16.9988 16.8022C17.0293 16.8186 17.0574 16.8326 17.0879 16.849C17.2121 16.9147 17.3199 16.9826 17.4605 17.0482ZM23.416 14.4396C22.9379 14.6928 22.4574 14.9412 21.977 15.1943C21.9746 15.1967 21.9723 15.1967 21.9699 15.199C21.9348 15.2178 21.902 15.2342 21.8668 15.2529C21.8316 15.2717 21.7988 15.2881 21.766 15.3068C21.7543 15.3139 21.7402 15.3209 21.7285 15.3256C21.7355 15.3232 21.7402 15.3186 21.7473 15.3162C21.7449 15.3186 21.7402 15.3186 21.7379 15.3209C21.7355 15.3232 21.7309 15.3232 21.7285 15.3256C20.709 15.8647 19.6895 16.4014 18.6723 16.9404C18.6652 16.9451 18.6559 16.9475 18.6488 16.9521C18.5949 16.9826 18.5434 17.0107 18.4777 17.0412L18.4754 17.0389H18.4684V22.1857C19.5465 21.6279 20.5848 21.0678 21.6441 20.5076C22.2348 20.1959 22.8277 19.8842 23.4137 19.5725L23.416 14.4396C23.416 14.4396 23.4137 14.4396 23.416 14.4396ZM18.4754 17.0436C18.5316 17.0131 18.5879 16.9826 18.6465 16.9545C18.5902 16.985 18.541 17.0154 18.4754 17.0436ZM22.8418 13.5889C22.4434 13.7998 22.0473 14.0084 21.6488 14.2193C20.5801 14.7842 19.5113 15.349 18.4426 15.9139C18.384 15.9443 18.323 15.9771 18.2645 16.0076C18.2621 16.0076 18.2598 16.01 18.2598 16.01C18.1965 16.0428 18.1332 16.0779 18.0676 16.1131C18.0324 16.1318 17.9996 16.1459 17.9668 16.1693C17.3785 15.8412 16.7902 15.5436 16.1996 15.2318C15.6816 14.9576 15.1613 14.6811 14.6434 14.4068C14.3832 14.2686 14.1254 14.1326 13.8652 13.9967C13.7996 13.9615 13.7363 13.9287 13.6707 13.8936C13.4762 13.7904 13.284 13.6873 13.0895 13.5842C13.4855 13.3756 13.884 13.1646 14.2801 12.9561C15.3488 12.3912 16.4176 11.8264 17.4887 11.2615C17.648 11.1771 17.8074 11.0928 17.9668 11.0084C18.5551 11.3201 19.1434 11.6318 19.7316 11.9412C20.7676 12.492 21.8035 13.0404 22.8418 13.5889Z"
        fill={fill}
      />
    </svg>
  );
};

export default ProductsIcon;