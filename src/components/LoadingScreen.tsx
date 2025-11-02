import { useEffect, useState } from 'react';
import { Computer, Code, Cpu, Wifi } from 'lucide-react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  const icons = [Computer, Code, Cpu, Wifi];

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 flex items-center justify-center">
      <div className="text-center text-white">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {icons.map((Icon, index) => (
              <div
                key={index}
                className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center animate-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
            ))}
          </div>
          
          <div className="absolute inset-0 bg-white/10 rounded-full blur-xl animate-ping" />
        </div>

        {/* College Name */}
        <h1 className="text-4xl font-bold mb-2 animate-fade-in-up">
          Maharashtra Institute Of Technology
        </h1>
        <p className="text-xl text-blue-100 mb-8 animate-fade-in-up delay-200">
          Computer Lab
        </p>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="flex justify-between text-sm text-blue-100 mb-2">
            <span>Loading Amazing Experience...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-6 text-blue-100">
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100" />
            <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200" />
          </div>
        </div>
      </div>
    </div>
  );
}