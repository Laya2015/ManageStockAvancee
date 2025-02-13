import Image from "next/image";

const CarteAvantage = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
      <Image src={imageSrc} alt={title} width={60} height={60} />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default CarteAvantage;
