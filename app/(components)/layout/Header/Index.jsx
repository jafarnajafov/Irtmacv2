import { Suspense } from "react";
import HeaderInner from "./HeaderInner";

const Header = ({ params, data_translate, data_footer }) => {
  return (
    <Suspense fallback={null}>
      <HeaderInner
        params={params}
        data_translate={data_translate}
        data_footer={data_footer}
      />
    </Suspense>
  );
};

export default Header;
