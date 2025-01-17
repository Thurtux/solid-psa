const Navbar = () => {
  return (
    <nav class="bg-white shadow flex items-center justify-between px-6 py-4">
      <div class="font-bold text-lg">SolidPSA</div>
      <ul class="hidden md:flex space-x-8 text-gray-700">
        <li><a href="#" class="hover:text-blue-600">Products</a></li>
        <li><a href="#" class="hover:text-blue-600">Lens Store</a></li>
        <li><a href="#" class="hover:text-blue-600">Company</a></li>
        <li><a href="#" class="hover:text-blue-600">Resources</a></li>
      </ul>
      <button class="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white">
        Log In
      </button>
    </nav>
  );
};
export default Navbar;
