const FeatureCard = ({ title, icon, desc }) => {
  return (
    <>
      <div data-aos="fade-up" className="flex gap-2 bg-gray-100 px-4 py-6">
        {icon}
        <div>
          <h2 className="font-medium text-xl text-heading">{title}</h2>
          <p className="text-gray-600">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
