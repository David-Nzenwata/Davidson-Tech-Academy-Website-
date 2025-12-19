// src/App.js (or similar)
function App() {
   return (
      <div className="p-10 text-center min-h-screen">
         <h1 className="text-4xl font-bold mb-6 text-white">
            Davidson Tech Academy Website
         </h1>

         {/* TEST: bg-academy-accent uses the color you defined in tailwind.config.js */}
         <button className="bg-academy-accent text-gray-900 py-3 px-6 rounded-lg font-semibold text-xl hover:bg-opacity-80 transition duration-200">
            TAILWIND IS WORKING!
         </button>

         <p className="mt-4 text-lg">
            If this page is dark and the button is orange, you succeeded!
         </p>
      </div>
   );
}
// Don't forget: export default App; at the bottom of the file!
