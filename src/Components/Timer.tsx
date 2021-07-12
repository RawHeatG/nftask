export function Timer({ timeLeft }: { timeLeft: number }) {
  return (
    <div className="flex justify-center items-center">
      <div className="relative border-8 border-green-400 rounded-full shadow-2xl font-mono text-9xl text-white">
        <div className="absolute inset-x-0 -bottom-5 mx-auto flex justify-center"></div>

        <div className="relative rounded-full bg-black p-8">
          <div className="absolute rounded-full inset-0 grid grid-rows-2">
            <div className=" rounded-t-full bg-gradient-to-br from-gray-800 to-black"></div>
            <div className=" rounded-b-full bg-gradient-to-br from-gray-700 to-black"></div>
          </div>

          <span className="relative">{timeLeft}</span>

          <div className="absolute rounded-full inset-0 flex items-center">
            <div className="h-px w-full bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
