import { useState, useEffect } from 'react';
import {
  Monitor, Wifi, Server, Zap, Shield, Thermometer, Cpu, Database, HardDrive, Globe, Lock,
  Activity, BarChart3, TrendingUp, Eye, Cloud, Code2, Camera, X, ChevronLeft, ChevronRight,
  ZoomIn, Play, Pause, Grid3X3, List, Search, Download
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';

/*
  Updated InfrastructureGallery - simplified per request:
  - Removed "like" functionality (no like buttons or likedImages state).
  - Removed tag badges from thumbnails and modal.
  - Removed photographer and date details from modal.
  - Keeps gallery mount-on-open, remount-on-open (galleryKey), optional cache-bust (galleryTimestamp),
    auto-open first image when gallery is opened, responsive grid, and modal sizing/behavior.
*/

export function InfrastructureGallery() {
  const [activeTab, setActiveTab] = useState<'infrastructure' | 'gallery'>('infrastructure');
  const [hoveredFacility, setHoveredFacility] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [viewCounts, setViewCounts] = useState<{ [key: number]: number }>({});

  // force remount / optional cache-bust
  const [galleryKey, setGalleryKey] = useState(0);
  const [galleryTimestamp, setGalleryTimestamp] = useState<number | null>(null);

  // --- Core Infrastructure Components (the only content for Infrastructure tab) ---
  const facilities = [
    {
      icon: Monitor,
      title: "Powerful Workstations",
      description: "Reliable high-performance systems for everyday lab use",
      specs: ["Intel Core i9", "16GB RAM", "512GB NVMe SSD"],
      color: "from-blue-500 to-cyan-500",
      performance: 98,
      status: "Optimal"
    },
    {
      icon: Wifi,
      title: "Hyper-Speed Network",
      description: "Stable wired and wireless connectivity for all systems",
      specs: ["Gigabit fiber network", "WiFi-enabled workstations", "Local network nodes for efficient data flow"],
      color: "from-green-500 to-emerald-500",
      performance: 99,
      status: "Excellent"
    },
    {
      icon: Zap,
      title: "Power & Backup",
      description: "Redundant power with UPS and solar integration",
      specs: ["Triple UPS", "Solar-ready", "Power monitoring"],
      color: "from-yellow-500 to-orange-500",
      performance: 100,
      status: "Perfect"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Secure systems with monitored network protection",
      specs: ["CCTV monitoring", "Continuous system monitoring", "Strong encryption standards"],
      color: "from-red-500 to-pink-500",
      performance: 95,
      status: "Secure"
    },
    {
      icon: Thermometer,
      title: "Enviroment",
      description: "Precision Enviroment quality control for stable operations",
      specs: ["Air-conditioned workspace", "Structured ventilation and air circulation", "Energy-efficient operation"],
      color: "from-teal-500 to-cyan-500",
      performance: 96,
      status: "Optimal"
    }
  ];

  // --- Gallery images (replace with your own public raw/ CDN URLs) ---
  const galleryImages = [
    { src: "https://raw.githubusercontent.com/AbdulRahman-droid208/college-website/main/1.jpeg", title: "Advanced Programming Session", description: "Students coding", category: "students" },
    { src: "https://raw.githubusercontent.com/AbdulRahman-droid208/college-website/main/2.jpeg", title: "Next-Gen Classroom", description: "State-of-the-art classroom", category: "facilities" },
    { src: "https://raw.githubusercontent.com/AbdulRahman-droid208/college-website/main/3.jpeg", title: "Workstation", description: "Dual monitors", category: "equipment" }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryImages.length },
    { id: 'students', name: 'Students', count: galleryImages.filter(i => i.category === 'students').length },
    { id: 'facilities', name: 'Facilities', count: galleryImages.filter(i => i.category === 'facilities').length },
    { id: 'equipment', name: 'Equipment', count: galleryImages.filter(i => i.category === 'equipment').length }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesFilter = filter === 'all' || image.category === filter;
    const q = searchTerm.trim().toLowerCase();
    const matchesSearch = !q || image.title.toLowerCase().includes(q) || image.description.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  const finalSrc = (base: string) => {
    if (!galleryTimestamp) return base;
    return base + (base.includes('?') ? `&t=${galleryTimestamp}` : `?t=${galleryTimestamp}`);
  };

  // slideshow
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isSlideshow && selectedImage !== null) {
      interval = setInterval(() => {
        setSelectedImage(prev => prev !== null ? (prev + 1) % filteredImages.length : 0);
      }, 3000);
    }
    return () => { if (interval) clearInterval(interval); };
  }, [isSlideshow, selectedImage, filteredImages.length]);

  const openModal = (index: number) => {
    setSelectedImage(index);
    setViewCounts(prev => ({ ...prev, [index]: (prev[index] || 0) + 1 }));
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsSlideshow(false);
  };

  const nextImage = () => { if (selectedImage !== null) setSelectedImage((selectedImage + 1) % filteredImages.length); };
  const prevImage = () => { if (selectedImage !== null) setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1); };

  // Handle hash navigation for #gallery link
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#gallery') {
        setActiveTab('gallery');
        setGalleryKey(k => k + 1);
        setGalleryTimestamp(Date.now());
        setSelectedImage(null);
        setIsSlideshow(false);
        setTimeout(() => openModal(0), 60);
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // NOTE: removed toggleLike and likedImages usage per request

  return (
    <section id="infrastructure" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Lab Infrastructure & Gallery</h2>
          <p className="mt-2 text-sm md:text-base text-gray-600">Explore images of our lab and core components.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1 shadow">
            <button
              onClick={() => {
                // Infrastructure tab shows only core components
                setActiveTab('infrastructure');
                setSelectedImage(null);
                setIsSlideshow(false);
              }}
              className={`px-6 py-2 rounded-full font-medium ${activeTab === 'infrastructure' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Infrastructure
            </button>

            <button
              onClick={() => {
                // Open gallery, remount subtree, set timestamp, reset modal, then open first image
                setActiveTab('gallery');
                setGalleryKey(k => k + 1);
                setGalleryTimestamp(Date.now());
                setSelectedImage(null);
                setIsSlideshow(false);
                setTimeout(() => openModal(0), 60);
              }}
              className={`px-6 py-2 rounded-full font-medium ${activeTab === 'gallery' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Visual Gallery
            </button>
          </div>
        </div>

        {/* Infrastructure tab: ONLY core components */}
        {activeTab === 'infrastructure' && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Core Infrastructure Components</h3>
            <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              {facilities.map((f, i) => (
                <Card key={i} className="group overflow-hidden rounded-2xl shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-2xl ${f.color} text-white inline-flex items-center`}><f.icon className="h-6 w-6" /></div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-700 border-green-200">{f.status}</Badge>
                        <div className="text-sm text-gray-500 mt-1">{f.performance}% efficiency</div>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-2">{f.title}</h4>
                    <p className="text-gray-600 mb-4">{f.description}</p>
                    <div className="text-sm text-gray-700">
                      {f.specs.map((s, si) => (
                        <div key={si} className="inline-block mr-3 mb-2 px-3 py-1 bg-gray-100 rounded-full text-sm">{s}</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Gallery tab: gallery first, then core components shown below */}
        <div id="gallery" className="absolute -top-20" aria-hidden="true" />
        {activeTab === 'gallery' && (
          <div key={galleryKey} className="mb-12 space-y-8">
            {/* Controls */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Search photos..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 pr-3 py-2" />
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setViewMode('grid')} className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}><Grid3X3 className="w-4 h-4" /></button>
                  <button onClick={() => setViewMode('masonry')} className={`p-2 rounded ${viewMode === 'masonry' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}><List className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap">
                {categories.map(cat => (
                  <button key={cat.id} onClick={() => setFilter(cat.id)} className={`px-3 py-1 rounded-full text-sm ${filter === cat.id ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-white border'}`}>
                    {cat.name} <span className="ml-2 bg-white/20 px-2 rounded text-xs">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Responsive auto-fit grid (auto-optimizes to user's screen) */}
            <div
              className="grid gap-6"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', alignItems: 'start' }}
            >
              {filteredImages.map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden bg-white shadow-sm cursor-pointer" onClick={() => openModal(idx)}>
                  <div className="w-full relative" style={{ paddingTop: '75%' }}>
                    <div className="absolute inset-0">
                      <ImageWithFallback
                        key={`${galleryTimestamp ?? 0}-${idx}`}
                        src={finalSrc(img.src)}
                        alt={img.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold line-clamp-1">{img.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Eye className="w-4 h-4" /> <span>{viewCounts[idx] || 0}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-2">{img.description}</p>
                    {/* tags removed per request */}
                  </div>
                </div>
              ))}
            </div>

            {/* After gallery, show core components again (so user sees infrastructure components without switching tabs) */}
            <div>
              <h3 className="text-2xl font-semibold mt-6 mb-4 text-center">Core Infrastructure Components</h3>
              <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
                {facilities.map((f, i) => (
                  <Card key={i} className="group overflow-hidden rounded-2xl shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-2xl ${f.color} text-white inline-flex items-center`}><f.icon className="h-6 w-6" /></div>
                        <div className="text-right">
                          <Badge className="bg-green-100 text-green-700 border-green-200">{f.status}</Badge>
                          <div className="text-sm text-gray-500 mt-1">{f.performance}% efficiency</div>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold mb-2">{f.title}</h4>
                      <p className="text-gray-600 mb-4">{f.description}</p>
                      <div className="text-sm text-gray-700">
                        {f.specs.map((s, si) => (
                          <div key={si} className="inline-block mr-3 mb-2 px-3 py-1 bg-gray-100 rounded-full text-sm">{s}</div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/70" onClick={closeModal} />
            <div className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-transparent rounded-lg overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between p-3 bg-black/50 text-white">
                <div className="flex items-center gap-3">
                  <h4 className="font-semibold">{filteredImages[selectedImage].title}</h4>
                  <Badge className="bg-white/10 text-white">{selectedImage + 1} / {filteredImages.length}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={() => setIsSlideshow(s => !s)} className="text-white">{isSlideshow ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}</Button>
                  <Button variant="ghost" size="icon" onClick={() => {
                    const link = document.createElement('a');
                    link.href = finalSrc(filteredImages[selectedImage].src);
                    link.download = filteredImages[selectedImage].title.replace(/\s+/g, '-') + '.jpg';
                    document.body.appendChild(link); link.click(); link.remove();
                  }} className="text-white"><Download className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="icon" onClick={closeModal} className="text-white"><X className="w-5 h-5" /></Button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row bg-black rounded-b-lg overflow-hidden" style={{ maxHeight: 'calc(90vh - 56px)' }}>
                <div className="flex-1 flex items-center justify-center p-3 md:p-6">
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageWithFallback
                      key={`${galleryTimestamp ?? 0}-modal-${selectedImage}`}
                      src={finalSrc(filteredImages[selectedImage].src)}
                      alt={filteredImages[selectedImage].title}
                      className="max-w-full max-h-[82vh] object-contain"
                    />
                  </div>
                </div>

                <div className="w-full md:w-80 bg-black/60 p-4 overflow-auto text-white/90">
                  <p className="text-sm mb-3">{filteredImages[selectedImage].description}</p>
                  {/* tags removed */}
                  <div className="text-xs text-white/70 space-y-2">
                    <div><strong>Category:</strong> {filteredImages[selectedImage].category}</div>
                    {/* photographer & date removed per request */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1"><Eye className="w-4 h-4" /><span>{viewCounts[selectedImage] || 0} views</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* navigation */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Button variant="ghost" size="icon" onClick={prevImage} className="bg-black/40 text-white p-2 rounded-full"><ChevronLeft className="w-6 h-6" /></Button>
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Button variant="ghost" size="icon" onClick={nextImage} className="bg-black/40 text-white p-2 rounded-full"><ChevronRight className="w-6 h-6" /></Button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}