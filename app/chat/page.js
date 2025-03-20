import Link from 'next/link';

const subjects = [
  {
    id: 'vlsi',
    title: 'VLSI: The Microscopic Marvel',
    description: 'Venture into the realm of Very Large Scale Integration, where millions of transistors converge on a single chip, orchestrating the symphony of modern electronics.',
    future: 'Anticipate the dawn of nanotechnology-infused chips and AI-driven design, ushering in an era of unprecedented computational efficiency and performance.',
    icon: 'chip', // Placeholder for an icon, e.g., using a library like react-icons
    gradient: 'bg-gradient-to-r from-purple-800 to-indigo-700',
  },
  {
    id: 'aiml',
    title: 'AI & ML: The Architects of Intelligence',
    description: 'Witness the transformative power of Artificial Intelligence and Machine Learning, sculpting industries with intelligent automation, profound data analytics, and predictive foresight.',
    future: 'Envision a future where ethical AI reigns, self-evolving systems emerge, and AI-driven healthcare revolutionizes patient care.',
    icon: 'brain', // Placeholder icon
    gradient: 'bg-gradient-to-r from-blue-700 to-cyan-600',
  },
  {
    id: 'datascience',
    title: 'Data Science: The Alchemist of Insights',
    description: 'Embark on a journey through Data Science, where statistical acumen, machine learning prowess, and big data mastery converge to distill invaluable insights from the digital deluge.',
    future: 'Prepare for the ascent of AI-augmented analytics and real-time, data-informed decision-making, reshaping the contours of industry.',
    icon: 'chart-bar', // Placeholder icon
    gradient: 'bg-gradient-to-r from-green-700 to-lime-600',
  },
  {
    id: 'cloudcomputing',
    title: 'Cloud Computing: The Ethereal Infrastructure',
    description: 'Experience the boundless scalability and on-demand agility of Cloud Computing, the bedrock of digital transformation, empowering innovation across the globe.',
    future: 'Await the advent of edge computing, serverless architectures, and the enigmatic potential of quantum cloud computing, redefining the paradigms of distributed systems.',
    icon: 'cloud', // Placeholder icon
    gradient: 'bg-gradient-to-r from-red-700 to-orange-600',
  },
];

function SubjectSection({ subject }) {
  return (
    <section id={subject.id} className={`py-20 px-6 text-white ${subject.gradient} transition-transform transform hover:scale-105 duration-300`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 flex items-center">
          {subject.icon && <span className="mr-4">{/* Replace with actual icon component */}</span>}
          {subject.title}
        </h2>
        <p className="text-lg mb-6 leading-relaxed">{subject.description}</p>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Future Horizons</h3>
          <p className="leading-relaxed">{subject.future}</p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-6 px-6 text-center text-4xl font-extrabold border-b border-gray-800">
        Technological Frontiers
      </header>
      <section className="py-32 px-6 text-center bg-gray-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Unveiling the Future of Innovation
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Delve into the core concepts and visionary trajectories of groundbreaking technological domains.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
            Embark on Your Discovery
          </button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-transparent opacity-20 pointer-events-none"></div>
      </section>
      {subjects.map((subject) => (
        <SubjectSection key={subject.id} subject={subject} />
      ))}
      <footer className="py-10 px-6 text-center bg-gray-800 border-t border-gray-700">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Luminary Innovations. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          {/* Add social media icons or links here */}
        </div>
      </footer>
    </div>
  );
}