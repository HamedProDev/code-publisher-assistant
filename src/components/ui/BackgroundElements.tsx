const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div 
        className="absolute w-[300px] h-[300px] top-[10%] left-[5%] rounded-full opacity-30 animate-bg-float"
        style={{
          background: 'radial-gradient(circle, hsl(199 100% 50% / 0.4) 0%, transparent 70%)',
          animationDelay: '0s',
        }}
      />
      <div 
        className="absolute w-[200px] h-[200px] top-[60%] right-[10%] rounded-full opacity-20 animate-bg-float"
        style={{
          background: 'radial-gradient(circle, hsl(199 100% 50% / 0.4) 0%, transparent 70%)',
          animationDelay: '-5s',
          animationDirection: 'reverse',
        }}
      />
      <div 
        className="absolute w-[150px] h-[150px] bottom-[20%] left-[15%] rounded-full opacity-25 animate-bg-float"
        style={{
          background: 'radial-gradient(circle, hsl(199 100% 50% / 0.4) 0%, transparent 70%)',
          animationDelay: '-10s',
        }}
      />
    </div>
  );
};

export default BackgroundElements;
