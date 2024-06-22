import { GetServerSideProps } from "next";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Load from "../../../components/Loader/Loader";
import { Container } from "../../../components/seller/content/Content";
import { userFetcher } from "../../../helpers";
import { Header } from "../../../shared";
import { SellerHero } from "../../../shared/sellerStore/SellerHero";
import { SellerProduct } from "../../../shared/sellerStore/SellerProducts";
import { GET_SELLER_STORE } from "../../../store/seller/seller.queries";

const SellerStore = ({ seller }) => {
  const dispatch = useDispatch();
  const [showNavBar, setShowNavBar] = useState<boolean>(false);
  const [userNav, setUserNav] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState<boolean>(false);

  function openMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div>
      <Header
        setUserNav={setUserNav}
        userNav={userNav}
        showMenu={showMenu}
        openMenu={openMenu}
        search={search}
        setSearch={setSearch}
        check={check}
        setCheck={setCheck}
      />
      {seller ? <SellerHero seller={seller} /> : <Load />}
      <Container>
        {seller ? <SellerProduct products={seller?.user?.productSet} /> : <Load />}
      </Container>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const storeUrl = context.params?.url;

    const storeData = await userFetcher(GET_SELLER_STORE, { shopUrl: storeUrl });
    const store = storeData?.seller;

    return { props: { seller: store } };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
};

export default SellerStore;
