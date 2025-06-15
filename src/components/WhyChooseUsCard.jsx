import Reveal from "../animation/Reveal";

const WhyChooseUsCard = ({ item }) => {
  const { title, description, image } = item;
  return (
    <Reveal>
      <div className="bg-base-200 rounded-md px-5  py-3">
        <img src={image} alt="item image" className="w-[60px] mb-4" />
        <h4 className="font-semibold text-xl mb-2">{title}</h4>
        <p>{description}</p>
      </div>
    </Reveal>
  );
};

export default WhyChooseUsCard;
