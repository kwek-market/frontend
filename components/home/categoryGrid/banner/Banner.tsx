import { ProductType } from "@/interfaces/commonTypes";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import styles from "./Banner.module.scss";

const Banner = function ({ product }: { product: ProductType }) {
  const router = useRouter();
  return (
    <div className={styles.banner}>
      <div className={styles.textContainer}>
        <p className={styles.textSm}>New Products</p>
        <h3 className={styles.textLg}>{product?.subcategory.name}</h3>
        <button
          onClick={() => router.push(`/product/${product?.id}?id=${product?.productTitle}`)}
          className={`btn ${styles.btn}`}
        >
          Shop Now <span className='material-icons'>chevron_right</span>
        </button>
      </div>

      <div className={styles.imageContainer}>
        <div className='tw-full tw-relative'>
          <Image src={product?.image[0].imageUrl} className=' tw-object-cover' layout='fill' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
