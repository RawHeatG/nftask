export function Loader() {
  return (
    <div className="loader flex space-x-3">
      <div className="w-6 h-6 rounded-full animate-bounce bg-gradient-to-r from-green-400 to-blue-500 delay-100"></div>
      <div className="w-6 h-6 rounded-full animate-bounce bg-gradient-to-r from-green-400 to-blue-500"></div>
      <div className="w-6 h-6 rounded-full animate-bounce bg-gradient-to-r from-green-400 to-blue-500"></div>
    </div>
  );
}
