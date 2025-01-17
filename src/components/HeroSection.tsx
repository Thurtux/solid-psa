const HeroSection = () => {
    return (
      <div class="bg-gradient-to-r from-blue-900 via-black to-blue-700 h-screen flex items-center">
        <div class="text-white px-8 md:w-1/2 space-y-6">
          <h1 class="text-5xl font-bold leading-tight">
          Automation and agility <span class="text-blue-300">SolidPSA</span>
          </h1>
          <p class="text-lg">
          SolidPsa offers a complete relational database service for your needs.
          </p>
          <button class="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600">
            Try Rhea
          </button>
        </div>
        <div class="hidden md:block md:w-1/2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" alt="Hero Illustration" class="mx-auto" />
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  