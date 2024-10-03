export default function Skill({ name, description }) {
  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-lg border border-gray-300 transform transition-transform hover:scale-105 hover:shadow-xl">
      {/* Skill Name */}
      <h3 className="text-2xl font-bold text-blue-900 mb-4">{name}</h3>

      {/* Description */}
      <p className="text-lg text-gray-700">{description}</p>
    </div>
  );
}
