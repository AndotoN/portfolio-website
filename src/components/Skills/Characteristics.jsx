export default function Characteristics() {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-lg ">
      {/* Heading (centered) */}
      <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-8 text-center w-full">
        Characteristics
      </h2>

      {/* Bullet points */}
      <ul className="space-y-6 w-full">
        {/* Focused */}
        <li>
          <h3 className="font-semibold text-xl text-blue-900 text-left mb-2">
            Focused
          </h3>
          <p className="text-gray-700 text-left">
            I remain fully dedicated to completing tasks efficiently and
            effectively, with minimal distractions.
          </p>
        </li>

        {/* Reliable */}
        <li>
          <h3 className="font-semibold text-xl text-blue-900 text-left mb-2">
            Reliable
          </h3>
          <p className="text-gray-700 text-left">
            I consistently deliver quality results and can be trusted to meet
            deadlines and project expectations.
          </p>
        </li>

        {/* Adaptable */}
        <li>
          <h3 className="font-semibold text-xl text-blue-900 text-left mb-2">
            Adaptable
          </h3>
          <p className="text-gray-700 text-left">
            I quickly adjust to changing circumstances and am always open to
            learning new skills or technologies.
          </p>
        </li>
      </ul>
    </div>
  );
}
