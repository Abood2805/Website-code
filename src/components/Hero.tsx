import {
  ArrowRight,
  Users,
  Award,
  Cpu,
  Computer,
  Sparkles,
  Code,
  BookOpen,
  Zap,
  Database,
  Wifi,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="home"
      className="relative py-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://media.collegedekho.com/media/img/institute/crawled_images/15490/mita.jpg?width=640')`,
        }}
      />

      {/* Enhanced Background Overlays for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-black/20 to-purple-900/40" />

      {/* Decorative Light Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center items-center min-h-[80vh]">
          {/* Main Content */}
          <div className="space-y-8 text-center max-w-4xl">
            <div className="space-y-6">
              {/* Tagline Badge */}
              <div className="inline-flex items-center justify-center mx-auto">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-60 group-hover:opacity-100 blur transition duration-300"></div>
                  <div className="relative px-6 py-2 bg-gray-900/90 backdrop-blur-sm rounded-full border border-blue-500/30">
                    <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-blue-400" />
                      Innovation • Technology • Excellence
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                  <span className="block text-gray-100 mb-2">Welcome to</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Maharashtra Institute Of Technology
                  </span>
                </h1>
              </div>

              {/* Description Card */}
              <div className="relative group max-w-3xl mx-auto">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>
                
                {/* Content Card */}
                <div className="relative backdrop-blur-md bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl px-6 sm:px-8 py-5 sm:py-6 border border-gray-700/50 shadow-2xl">
                  <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                    Where cutting-edge technology meets academic excellence. Experience our state-of-the-art computer laboratory featuring{" "}
                    <span className="text-blue-400 font-semibold">
                      high-performance systems
                    </span>,{" "}
                    <span className="text-purple-400 font-semibold">
                      advanced software
                    </span>, and{" "}
                    <span className="text-cyan-400 font-semibold">
                      unlimited possibilities
                    </span>{" "}
                    for innovation and learning.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Lab
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                onClick={() => {
                  const timetableSection = document.getElementById('timetable');
                  if (timetableSection) {
                    timetableSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Code className="mr-2 h-5 w-5" />
                View Programs
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Enhanced Tech Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8 justify-items-center">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 floating-animation glow-effect">
                  <Cpu className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white group-hover:text-blue-300 transition-colors drop-shadow-lg">
                  20+
                </div>
                <div className="text-sm text-gray-200 font-medium drop-shadow-md">
                  High-Performance PCs
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 floating-animation delay-200 glow-effect">
                  <Database className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white group-hover:text-green-300 transition-colors drop-shadow-lg">
                  24/7
                </div>
                <div className="text-sm text-gray-200 font-medium drop-shadow-md">
                  Server Uptime
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-500 to-violet-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 floating-animation delay-400 glow-effect">
                  <Wifi className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white group-hover:text-purple-300 transition-colors drop-shadow-lg">
                  1Gbps
                </div>
                <div className="text-sm text-gray-200 font-medium drop-shadow-md">
                  Internet Speed
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 floating-animation delay-600 glow-effect">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white group-hover:text-orange-300 transition-colors drop-shadow-lg">
                  50+
                </div>
                <div className="text-sm text-gray-200 font-medium drop-shadow-md">
                  Software Packages
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}