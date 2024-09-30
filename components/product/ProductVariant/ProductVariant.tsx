import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getIp } from "../../../helpers";
import {
  AddToCartPayload,
  DeleteFromCartPayload,
  ProductType,
} from "../../../interfaces/commonTypes";
import {
  addToCartFunc,
  deleteCartItem,
  deleteItemInCart,
  getCartFunc,
} from "../../../store/cart/cart.actions";
import { RootState } from "../../../store/rootReducer";
import { Naira } from "../../UI/NairaSymbol";

const ProductVariant = ({ product }: { product: ProductType }) => {
  const cart = useSelector((state: RootState) => state.cart);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  function deleteItemFromCart(itemId: string, cartId: string) {
    const payload = {
      itemId,
      cartId,
      token: user.token,
    };
    deleteCartItem(payload)(dispatch);
    getCartFunc(user.token)(dispatch);
  }

  async function decreaseQuantity(itemId: string, cartId: string) {
    const payload: DeleteFromCartPayload = {
      itemId,
      cartId,
    };
    user.token ? (payload["token"] = user.token) : (payload["ip"] = await getIp());
    deleteItemInCart(payload)(dispatch);
    getCartFunc(user.token)(dispatch);
  }

  async function addToCart(id: string) {
    const payload: AddToCartPayload = {
      ipAddress: await getIp(),
      productOptionId: id,
      quantity: 1,
      token: user.token,
    };
    addToCartFunc(payload, user.token)(dispatch);
    getCartFunc(user.token)(dispatch);
  }

  const getParticularProductInCart = optionId => {
    const cartProduct = cart?.cart?.find(cartItem => cartItem?.product?.id === product.id);

    return cartProduct;
  };

  return (
    <div className='tw-py-4'>
      {product?.options?.map((option, index) => (
        <div
          key={option.id}
          className='tw-flex tw-justify-between tw-items-center tw-space-y-4 tw-border-b tw-py-3'
        >
          <div className=''>
            <h2 className='tw-text-xl'>
              {option.size} {option.color ? `(${option.color})` : null}
            </h2>

            <p className='tw-mt-1'>
              <span>
                <Naira /> {option.discountedPrice ? option.discountedPrice : option.price}
              </span>

              {option.discountedPrice ? (
                <span className='tw-ml-3 tw-text-gray-500 tw-line-through tw-italic'>
                  {" "}
                  <Naira /> {option.price}
                </span>
              ) : null}

              <p className='tw-text-red-kwek100 tw-italic tw-text-sm'>
                {option.quantity} Units left
              </p>
            </p>
          </div>

          <div className='tw-flex tw-items-center tw-space-x-4'>
            <button
              disabled={Number(option.quantity) === 0}
              className='tw-p-1.5 tw-bg-red-kwek100 disabled:tw-bg-red-kwek100/50'
              onClick={() => {
                const cart = getParticularProductInCart(option.id);
                if (!cart) {
                  message.error("No Product Found");
                  return;
                }
                decreaseQuantity(option.id, cart.id);
              }}
            >
              <MinusIcon className='tw-text-white-100 tw-w-6 tw-h-5' />
            </button>

            <p className=''>{getParticularProductInCart(option.id)?.quantity || 0}</p>

            <button
              // disabled={Number(option.quantity) === "hello"}
              className='tw-p-1.5 tw-bg-red-kwek100 disabled:tw-bg-red-kwek100/50'
              onClick={() => {
                addToCart(option.id);
              }}
            >
              <PlusIcon className='tw-text-white-100 tw-w-6 tw-h-5' />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductVariant;
