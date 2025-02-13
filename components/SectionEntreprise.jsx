import Image from "next/image";

const entreprises = [
  { name: "RBC Financial Group", src: "/rbc-logo.png" },
  { name: "National Bank", src: "/nationalBank-logo.png" },
  { name: "Nestlé", src: "/nestle-logo.png" },
  { name: "Hershey's", src: "/hersheys-logo.png" },
  { name: "Burger King", src: "/burgerKing-logo.png" },
];

const SectionEntreprises = () => {
  return (
    <section className="py-10 bg-gray-100 text-center">
      <h2 className="text-gray-600 text-lg font-semibold">
        Approuvé par +20 entreprises leaders dans le monde entier
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
        {entreprises.map((entreprise, index) => (
          <Image
            key={index}
            src={entreprise.src}
            alt={entreprise.name}
            width={120}
            height={60}
            className="grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  );
};

export default SectionEntreprises;
