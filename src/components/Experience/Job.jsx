// Job.jsx
export default function Job({
  title,
  period,
  company,
  location,
  description,
  logo,
}) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white shadow-lg rounded-lg p-6 mb-8 w-full lg:w-3/4 mx-auto border-l-4 border-blue-900 transform transition-transform hover:scale-105 hover:shadow-2xl">
      {/* Job Title */}
      <h2 className="text-2xl font-bold text-blue-900 mb-2">{title}</h2>

      {/* Job Period */}
      <p className="text-gray-600 italic mb-2">
        {period} / {location}
      </p>

      {/* Company and Location Section */}
      <div className="flex items-center gap-4 mb-4">
        {/* Company Logo */}
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-12 h-12 object-contain"
        />

        {/* Company Name and Location */}
        <p className="text-gray-800">
          <span className="font-semibold">{company}</span>
        </p>
      </div>

      {/* Job Description with Bullet Points */}
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
