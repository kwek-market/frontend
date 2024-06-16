import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../components/seller/content/Content";
import { Header } from "../../../shared";
import { SellerHero } from "../../../shared/sellerStore/SellerHero";
import { SellerProduct } from "../../../shared/sellerStore/SellerProducts";
import { RootState } from "../../../store/rootReducer";

const SellerStore = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state);
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
      <SellerHero />
      <Container>
        <SellerProduct />
      </Container>
    </div>
  );
};

export default SellerStore;
