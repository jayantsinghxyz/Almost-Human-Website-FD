const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <p className="text-white font-pixel text-xs md:text-sm tracking-wider">
          Almosthuman.in
        </p>
      </div>
      
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-white font-pixel text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center px-4 leading-relaxed">
          Chill, it's generating
        </h1>
        <div className="w-3 h-3 bg-white animate-pulse" />
      </div>
    </div>
  );
};

export default LoadingScreen;
