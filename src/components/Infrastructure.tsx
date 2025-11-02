import { Monitor, Wifi, Server, Zap, Shield, Thermometer, Cpu, Database, HardDrive, Globe, Lock, Activity, BarChart3, TrendingUp, Eye, Layers, Cloud, Code2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function Infrastructure() {
  const [activeTab, setActiveTab] = useState('hardware');
  const [hoveredFacility, setHoveredFacility] = useState<number | null>(null);

  const facilities = [
    {
      icon: Monitor,
      title: "Powerful Workstations",
      description: "Reliable high-performance systems for everyday lab use",
      specs: ["Intel Core i9 13th Gen", "16GB RAM", "512GB NVMe SSD", "24-inch 1080p monitors"],
      color: "from-blue-500 to-cyan-500",
      performance: 98,
      status: "Optimal"
    },
    {
      icon: Wifi,
      title: "Hyper-Speed Network",
      description: "Stable wired and wireless connectivity for all systems",
      specs: ["Gigabit fiber network backbone", "WiFi-enabled workstations", "Localized network nodes for efficient data flow"],
      color: "from-green-500 to-emerald-500",
      performance: 99,
      status: "Excellent"
    },
    {
      icon: Zap,
      title: "Power Grid",
      description: "Redundant power systems with smart energy management",
      specs: ["Triple UPS backup", "Solar integration", "Smart power monitoring", "99.9% uptime guarantee"],
      color: "from-yellow-500 to-orange-500",
      performance: 100,
      status: "Perfect"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Security is a priority in our lab. We use advanced security protocols and real-time monitoring to protect your work and personal data from cyber threats, ensuring a safe digital environment.",
      specs: ["CCTV monitored", "Real-time monitoring", "Strong encryption standards"],
      color: "from-red-500 to-pink-500",
      performance: 95,
      status: "Secure"
    },
    {
      icon: Thermometer,
      title: "Environment",
      description: "Precision environmental control for optimal performance",
      specs: ["Air-conditioned workspace", "Structured ventilation and air circulation", "Monitored temperature for equipment safety", "Energy Efficient"],
      color: "from-teal-500 to-cyan-500",
      performance: 96,
      status: "Optimal"
    }
  ];

  const softwareEcosystem = [
    { 
      category: "Development Environments", 
      usage: 95, 
      tools: ["VS Code", "IntelliJ IDEA", "Eclipse", "Xcode", "Android Studio"], 
      icon: Code2,
      color: "blue"
    },
    { 
      category: "Programming Languages", 
      usage: 98, 
      tools: ["Python", "Java", "C++", "JavaScript", "Go", "Rust"], 
      icon: Cpu,
      color: "green"
    },
    { 
      category: "Database Systems", 
      usage: 90, 
      tools: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Cassandra"], 
      icon: Database,
      color: "purple"
    },
    { 
      category: "Cloud Platforms", 
      usage: 85, 
      tools: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"], 
      icon: Cloud,
      color: "orange"
    },
    { 
      category: "Security Tools", 
      usage: 88, 
      tools: ["Wireshark", "Nmap", "Burp Suite", "OWASP ZAP", "Kali Linux"], 
      icon: Shield,
      color: "red"
    }
  ];

  const realTimeMetrics = [
    { label: "CPU Usage", value: 67, icon: Cpu, color: "blue" },
    { label: "Memory Usage", value: 45, icon: HardDrive, color: "green" },
    { label: "Network Load", value: 32, icon: Globe, color: "purple" },
    { label: "Security Score", value: 99, icon: Lock, color: "red" }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-100",
      green: "text-green-600 bg-green-100", 
      purple: "text-purple-600 bg-purple-100",
      orange: "text-orange-600 bg-orange-100",
      red: "text-red-600 bg-red-100"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="infrastructure" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 fade-in-up-scroll">
          <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-100 to-blue-100 px-6 py-3 rounded-full mb-6">
            <Server className="h-5 w-5 text-cyan-600" />
            <span className="text-cyan-700 font-semibold">Next-Gen Infrastructure</span>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-slate-900 via-cyan-800 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
            Future-Ready Computing Environment
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Step into tomorrow with our revolutionary infrastructure that combines quantum-ready processors, 
            AI-powered optimization, and enterprise-grade security to create the ultimate learning environment.
          </p>
        </div>

        {/* Real-time Metrics Dashboard */}
        <div className="mb-16 fade-in-up-scroll">
          <Card className="bg-gradient-to-r from-slate-900 via-gray-900 to-black text-white border-0 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Live Infrastructure Metrics</h3>
                  <p className="text-gray-300">Real-time performance monitoring</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">All Systems Operational</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                {realTimeMetrics.map((metric, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <metric.icon className="h-6 w-6 text-cyan-400" />
                      <Badge variant="outline" className="border-cyan-400 text-cyan-400">
                        {metric.value}%
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg font-semibold">{metric.label}</div>
                      <Progress value={metric.value} className="h-2" />
                      <div className="text-sm text-gray-400">
                        {metric.value > 90 ? 'Excellent' : metric.value > 70 ? 'Good' : 'Normal'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Facilities Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Core Infrastructure Components</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {facilities.map((facility, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-3xl scale-in-center-scroll"
                onMouseEnter={() => setHoveredFacility(index)}
                onMouseLeave={() => setHoveredFacility(null)}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Header with icon and status */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`bg-gradient-to-r ${facility.color} p-4 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <facility.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        {facility.status}
                      </Badge>
                      <div className="text-sm text-gray-500 mt-1">
                        {facility.performance}% efficiency
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {facility.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {facility.description}
                      </p>
                    </div>

                    {/* Performance bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Performance</span>
                        <span className="font-semibold text-gray-800">{facility.performance}%</span>
                      </div>
                      <Progress value={facility.performance} className="h-2" />
                    </div>

                    {/* Specifications */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-gray-700">Key Features:</h5>
                      <div className="grid grid-cols-1 gap-2">
                        {facility.specs.map((spec, specIndex) => (
                          <div 
                            key={specIndex} 
                            className="flex items-center text-sm group/spec hover:text-blue-600 transition-colors"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover/spec:scale-125 transition-transform"></div>
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover effect indicator */}
                  {hoveredFacility === index && (
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Software Ecosystem */}
        <div className="mb-16 fade-in-up-scroll">
          <Card className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-0 shadow-xl overflow-hidden">
            <CardContent className="p-10">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Complete Software Ecosystem
                </h3>
                <p className="text-xl text-gray-600">
                  Comprehensive toolchain supporting cutting-edge development and research
                </p>
              </div>

              <div className="space-y-8">
                {softwareEcosystem.map((category, index) => (
                  <div 
                    key={index} 
                    className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/90 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-2xl ${getColorClasses(category.color)} group-hover:scale-110 transition-transform duration-300`}>
                          <category.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800">{category.category}</h4>
                          <p className="text-gray-600">Enterprise-grade tools and platforms</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-800">{category.usage}%</div>
                        <div className="text-sm text-gray-500">Coverage</div>
                      </div>
                    </div>

                    <Progress value={category.usage} className="h-3 mb-6" />

                    <div className="flex flex-wrap gap-3">
                      {category.tools.map((tool, toolIndex) => (
                        <Badge 
                          key={toolIndex}
                          variant="secondary"
                          className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 transition-all duration-300 hover:scale-105 cursor-pointer"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lab Showcase */}
        <div className="mb-16 fade-in-up-scroll">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Lab Environment Showcase</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1731834453355-df041245e7d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21wdXRlciUyMGNsYXNzcm9vbSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3MDA5MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern computer classroom"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-white/90 text-gray-800 mb-2">
                    <Eye className="h-3 w-3 mr-1" />
                    360° Virtual Tour Available
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-3">Main Computing Lab</h4>
                <p className="text-gray-600 mb-4">
                  State-of-the-art learning environment with ergonomic design, ambient lighting, 
                  and climate-controlled comfort for optimal productivity.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>• 75 Workstations</span>
                    <span>• 4K Displays</span>
                    <span>• Ergonomic Setup</span>
                  </div>
                  <Badge variant="outline" className="border-green-500 text-green-600">
                    Active Now
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1623281185000-6940e5347d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMHdvcmtzdGF0aW9uJTIwc2V0dXB8ZW58MXx8fHwxNzU3MDA5MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Programming workstation setup"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-white/90 text-gray-800 mb-2">
                    <Layers className="h-3 w-3 mr-1" />
                    Multi-Monitor Setup
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-3">Development Workstations</h4>
                <p className="text-gray-600 mb-4">
                  Premium development environment featuring dual 4K monitors, mechanical keyboards, 
                  and high-performance computing power for complex projects.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>• Dual Monitors</span>
                    <span>• 32GB RAM</span>
                    <span>• SSD Storage</span>
                  </div>
                  <Badge variant="outline" className="border-blue-500 text-blue-600">
                    High Performance
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Advanced Metrics Dashboard */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden fade-in-up-scroll">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 right-8 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-cyan-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-300 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-white/10 px-6 py-3 rounded-full mb-6">
                <BarChart3 className="h-5 w-5 text-cyan-400" />
                <span className="text-cyan-300 font-semibold">Infrastructure Analytics</span>
              </div>
              <h3 className="text-4xl font-bold mb-4">Performance Excellence Metrics</h3>
              <p className="text-blue-100 text-xl">Delivering world-class computing infrastructure for academic excellence</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl group-hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <TrendingUp className="h-8 w-8 mx-auto mb-4 text-cyan-400" />
                  <div className="text-4xl font-bold mb-2 text-cyan-200">99.9%</div>
                  <div className="text-blue-100 text-lg mb-1">System Uptime</div>
                  <div className="text-blue-300 text-sm">Industry Leading</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl group-hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Activity className="h-8 w-8 mx-auto mb-4 text-green-400" />
                  <div className="text-4xl font-bold mb-2 text-green-200">2000+</div>
                  <div className="text-blue-100 text-lg mb-1">Students Served</div>
                  <div className="text-blue-300 text-sm">Daily Average</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl group-hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Zap className="h-8 w-8 mx-auto mb-4 text-yellow-400" />
                  <div className="text-4xl font-bold mb-2 text-yellow-200">10Gb/s</div>
                  <div className="text-blue-100 text-lg mb-1">Network Speed</div>
                  <div className="text-blue-300 text-sm">Ultra-Fast Connectivity</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl group-hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Shield className="h-8 w-8 mx-auto mb-4 text-purple-400" />
                  <div className="text-4xl font-bold mb-2 text-purple-200">100%</div>
                  <div className="text-blue-100 text-lg mb-1">Security Score</div>
                  <div className="text-blue-300 text-sm">Zero Breaches</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}