import educationImg from "../../assets/denmark-map-with-flag.png";
import highSchoolImg from "../../assets/bulgaria-map.png";

export default function Education({
  header,
  title,
  periodLocation,
  descriptions,
}) {
  let isHighSchool;
  let educationStyling;

  if (header === "High school education") {
    isHighSchool = true;
  }
  return (
    <div className="bg-white py-12 px-8 lg:px-28 shadow-lg rounded-lg mb-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Text section - 2/3 width */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-8">
            {header}
          </h2>
          <div className="text-lg text-gray-700 mb-4">
            <p className="font-semibold text-blue-900">{title}</p>
            <p className="italic mt-1">{periodLocation}</p>
          </div>
          <ul className="list-disc text-gray-700 space-y-2 ml-6 lg:ml-8">
            {descriptions.map((description, index) => {
              return <li key={index}>{description}</li>;
            })}
          </ul>
        </div>
        {/* Image section - 1/4 width */}
        <div className="w-full lg:w-1/4">
          <img
            src={isHighSchool ? highSchoolImg : educationImg}
            className="w-full rounded-lg shadow-md object-cover"
            alt="Education"
          />
        </div>
      </div>
    </div>
  );
}
