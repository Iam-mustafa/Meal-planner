import backgroundImg from '../app/images/piza.jpg';
export default function Hero() {
  return (
    <div className="relative h-[300px] md:h-[400px] w-full">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg.src})`
        }}
      />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Optimized Your Meal
        </h1>
        <p className="text-lg text-white/90 max-w-2xl">
          Select Meal to Add in Week. You will be able to edit, modify and change the Meal Weeks.
        </p>
      </div>
    </div>
  )
}

