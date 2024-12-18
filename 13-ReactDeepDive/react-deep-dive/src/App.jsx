export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Tailwind CSS Showcase</h1>
          <p className="text-gray-400">Learning the power of utility-first CSS</p>
        </header>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature Card 1 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-sky-400 text-2xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-white mb-2">Beautiful Design</h3>
            <p className="text-gray-400">Craft stunning interfaces with ease using Tailwind's utility classes</p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-emerald-400 text-2xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-2">Responsive</h3>
            <p className="text-gray-400">Build fully responsive designs with intuitive breakpoint prefixes</p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-purple-400 text-2xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
            <p className="text-gray-400">Optimized for production with minimal CSS output</p>
          </div>
        </div>

        {/* Interactive Button Section */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium transition-colors duration-300">
            Get Started
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-sky-500 text-sky-400 hover:bg-sky-500/10 rounded-lg font-medium transition-colors duration-300">
            Learn More
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/5 rounded-xl p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-400">100+</div>
            <div className="text-gray-400 text-sm">Components</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">50k+</div>
            <div className="text-gray-400 text-sm">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">99%</div>
            <div className="text-gray-400 text-sm">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400">24/7</div>
            <div className="text-gray-400 text-sm">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}