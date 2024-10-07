// Project.jsx
export default function Project({
  title,
  technologyStack,
  shortDescription,
  image,
  onClick, // Use onClick instead of onChange
}) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
      {/* Project Title */}
      <h2 className="text-2xl font-semibold text-center text-blue-900 mb-4">
        {title}
      </h2>

      {/* Project Image */}
      <img
        src={image[0]}
        alt={`${title} screenshot`}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      {/* Project Technology Stack */}
      <div className="mb-4">
        <h3 className="text-blue-900 font-bold mb-2">Tech Stack:</h3>
        <ul className="flex space-x-2">
          {technologyStack.map((tech, index) => (
            <li
              key={index}
              className="bg-blue-100 text-blue-900 px-2 py-1 rounded-lg text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Short Description */}
      <p className="text-gray-700 mb-4">{shortDescription}</p>

      {/* View More Button */}
      <div className="text-center">
        <button
          onClick={onClick} // This should be passed as a valid function
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          View More
        </button>
      </div>
    </div>
  );
}
