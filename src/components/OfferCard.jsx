import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const OfferCard = ({ offer }) => {
  // eslint-disable-next-line react/prop-types
  const { uid, img, des, price, priceDis } = offer;
  const router = useNavigate();
  const handleClick = () => {
    router(`/offer/${uid}`);
  };
  return (
    <div
      onClick={handleClick}
      className=" w-full p-2 bg-white text-black rounded"
    >
      <img src={img} alt="img-offer" className="w-[70px] ma m-auto" />
      <p className="text-[10px]">{des}</p>
      <div className="text-[11px] gap-2 flex mt-1 font-bold">
        <del className="text-[10px] mt-[1px] text-gray-600">{price}</del>
        <b>{priceDis} EGP </b>
      </div>
    </div>
  );
};

export default OfferCard;