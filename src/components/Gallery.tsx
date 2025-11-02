import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera, Play, Pause, Grid3X3, List, Filter, Search, Download, Share2, Heart, Eye, RotateCw } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
  const [viewCounts, setViewCounts] = useState<{[key: number]: number}>({});

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1689236673934-66f8e9d9279b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHN0dWRlbnRzJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU3MDA5MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Advanced Programming Session",
      description: "Students engaged in intensive coding sessions with modern development tools",
      category: "students",
      tags: ["programming", "coding", "students", "learning"],
      photographer: "Lab Team",
      date: "2024-03-15",
      size: "large"
    },
    {
      src: "https://images.unsplash.com/photo-1731834453355-df041245e7d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21wdXRlciUyMGNsYXNzcm9vbSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3MDA5MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Next-Gen Classroom Technology",
      description: "State-of-the-art classroom featuring cutting-edge technology and interactive learning systems",
      category: "facilities",
      tags: ["classroom", "technology", "modern", "interactive"],
      photographer: "MIT Media Team",
      date: "2024-03-10",
      size: "medium"
    },
    {
      src: "https://images.unsplash.com/photo-1623281185000-6940e5347d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMHdvcmtzdGF0aW9uJTIwc2V0dXB8ZW58MXx8fHwxNzU3MDA5MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Premium Development Workstation",
      description: "Individual workstation with dual 4K monitors and ergonomic setup for enhanced productivity",
      category: "equipment",
      tags: ["workstation", "monitors", "setup", "development"],
      photographer: "Technical Team",
      date: "2024-03-08",
      size: "small"
    },
    {
      src: "https://images.unsplash.com/photo-1680479611243-a072462e4d6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMGludGVyaW9yJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NzAwOTE0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Modern Lab Interior Design",
      description: "Spacious and thoughtfully designed computer lab interior with optimal lighting and ventilation",
      category: "facilities",
      tags: ["interior", "design", "spacious", "modern"],
      photographer: "Architecture Team",
      date: "2024-03-05",
      size: "large"
    },
    {
      src: "https://images.unsplash.com/photo-1719498828499-48b0086e5c21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMHRvZ2V0aGVyJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc1NzAwOTE0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Collaborative Innovation Hub",
      description: "Students collaborating on innovative projects with peer-to-peer learning methodology",
      category: "activities",
      tags: ["collaboration", "teamwork", "innovation", "projects"],
      photographer: "Student Council",
      date: "2024-03-12",
      size: "medium"
    },
    {
      src: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NTY5MjQ1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Enterprise Server Infrastructure",
      description: "Dedicated server room with enterprise-grade infrastructure supporting all lab operations",
      category: "infrastructure",
      tags: ["servers", "infrastructure", "data-center", "enterprise"],
      photographer: "IT Department",
      date: "2024-02-28",
      size: "small"
    },
    {
      src: "https://images.unsplash.com/photo-1552871847-d81af14f486d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBwcm9mZXNzb3IlMjB0ZWFjaGluZ3xlbnwxfHx8fDE3NTcwMDkwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Expert Faculty Mentorship",
      description: "Experienced faculty providing personalized guidance and mentorship in practical sessions",
      category: "faculty",
      tags: ["faculty", "teaching", "mentorship", "guidance"],
      photographer: "Academic Office",
      date: "2024-03-14",
      size: "medium"
    },
    {
      src: "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBjb21wZXRpdGlvbiUyMGhhY2thdGhvbiUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc1NzAxMDI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Coding Competition Arena",
      description: "High-energy atmosphere during coding competitions and hackathon events",
      category: "events",
      tags: ["competition", "hackathon", "events", "coding"],
      photographer: "Event Team",
      date: "2024-03-16",
      size: "large"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryImages.length },
    { id: 'students', name: 'Students', count: galleryImages.filter(img => img.category === 'students').length },
    { id: 'facilities', name: 'Facilities', count: galleryImages.filter(img => img.category === 'facilities').length },
    { id: 'equipment', name: 'Equipment', count: galleryImages.filter(img => img.category === 'equipment').length },
    { id: 'activities', name: 'Activities', count: galleryImages.filter(img => img.category === 'activities').length },
    { id: 'events', name: 'Events', count: galleryImages.filter(img => img.category === 'events').length }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesFilter = filter === 'all' || image.category === filter;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  // Slideshow functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSlideshow && selectedImage !== null) {
      interval = setInterval(() => {
        setSelectedImage(prev => prev !== null ? (prev + 1) % filteredImages.length : 0);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isSlideshow, selectedImage, filteredImages.length]);

  const openModal = (index: number) => {
    setSelectedImage(index);
    // Increment view count
    setViewCounts(prev => ({
      ...prev,
      [index]: (prev[index] || 0) + 1
    }));
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsSlideshow(false);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const toggleLike = (index: number) => {
    setLikedImages(prev => {
      const newLikes = new Set(prev);
      if (newLikes.has(index)) {
        newLikes.delete(index);
      } else {
        newLikes.add(index);
      }
      return newLikes;
    });
  };

  const getMasonryClass = (size: string, index: number) => {
    if (viewMode === 'grid') return '';
    
    switch (size) {
      case 'large': return 'md:row-span-2';
      case 'medium': return 'md:row-span-1';
      case 'small': return 'md:row-span-1';
      default: return '';
    }
  };

  const getImageHeight = (size: string) => {
    if (viewMode === 'grid') return 'h-64';
    
    switch (size) {
      case 'large': return 'h-80';
      case 'medium': return 'h-56';
      case 'small': return 'h-48';
      default: return 'h-64';
    }
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 fade-in-up-scroll">
          <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6">
            <Camera className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Visual Showcase</span>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
            Lab Gallery & Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our world-class computer laboratory through this comprehensive visual tour. 
            From cutting-edge facilities to dynamic learning environments, witness innovation in action.
          </p>
        </div>

        {/* Enhanced Controls */}
        <div className="mb-12 fade-in-up-scroll">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-200/50">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search photos by title, description, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/70 border-gray-200 focus:border-blue-500 transition-colors"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-gray-100 rounded-2xl p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-xl"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'masonry' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('masonry')}
                  className="rounded-xl"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={filter === category.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter(category.id)}
                    className={`rounded-2xl transition-all duration-300 ${
                      filter === category.id 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                        : 'hover:bg-blue-50'
                    }`}
                  >
                    {category.name}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Gallery Grid */}
        <div className={`${
          viewMode === 'masonry' 
            ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max' 
            : 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
        } stagger-children`}>
          {filteredImages.map((image, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden cursor-pointer bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl ${getMasonryClass(image.size, index)} scale-in-center-scroll`}
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={image.src}
                  alt={image.title}
                  className={`w-full ${getImageHeight(image.size)} object-cover transition-transform duration-700 group-hover:scale-110`}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <ZoomIn className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-800 capitalize font-semibold">
                    {image.category}
                  </Badge>
                </div>

                {/* Stats overlay */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Eye className="h-3 w-3 text-white" />
                    <span className="text-white text-xs">{viewCounts[index] || 0}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(index);
                    }}
                    className="bg-black/50 backdrop-blur-sm rounded-full p-1 hover:bg-black/70 transition-colors"
                  >
                    <Heart className={`h-4 w-4 ${likedImages.has(index) ? 'text-red-500 fill-current' : 'text-white'}`} />
                  </button>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold text-lg mb-1 line-clamp-1">{image.title}</h3>
                  <p className="text-white/80 text-sm line-clamp-2">{image.description}</p>
                  
                  {/* Tags */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {image.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs bg-white/20 text-white border-0">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full max-h-full flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm rounded-t-3xl">
                <div className="flex items-center space-x-4">
                  <h3 className="text-white text-xl font-semibold">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <Badge className="bg-white/20 text-white">
                    {selectedImage + 1} of {filteredImages.length}
                  </Badge>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSlideshow(!isSlideshow)}
                    className="text-white hover:bg-white/20"
                    title={isSlideshow ? 'Pause slideshow' : 'Start slideshow'}
                  >
                    {isSlideshow ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    title="Download image"
                  >
                    <Download className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    title="Share image"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeModal}
                    className="text-white hover:bg-white/20"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 bg-black/30 backdrop-blur-sm z-10 rounded-full w-12 h-12"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 bg-black/30 backdrop-blur-sm z-10 rounded-full w-12 h-12"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Main Image */}
              <div className="flex-1 flex items-center justify-center bg-black rounded-b-3xl overflow-hidden">
                <ImageWithFallback
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-b-3xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-white/80 mb-4 leading-relaxed">
                      {filteredImages[selectedImage].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {filteredImages[selectedImage].tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-white/20 text-white border-0">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-white/60 text-sm space-y-2">
                    <div><strong>Category:</strong> {filteredImages[selectedImage].category}</div>
                    <div><strong>Photographer:</strong> {filteredImages[selectedImage].photographer}</div>
                    <div><strong>Date:</strong> {filteredImages[selectedImage].date}</div>
                    <div className="flex items-center space-x-4 mt-4">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{viewCounts[selectedImage] || 0} views</span>
                      </div>
                      <button
                        onClick={() => toggleLike(selectedImage)}
                        className="flex items-center space-x-1 hover:text-red-400 transition-colors"
                      >
                        <Heart className={`h-4 w-4 ${likedImages.has(selectedImage) ? 'text-red-500 fill-current' : ''}`} />
                        <span>{likedImages.has(selectedImage) ? 'Liked' : 'Like'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Statistics */}
        <div className="mt-20 fade-in-up-scroll">
          <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white border-0 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 right-8 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-cyan-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
            
            <CardContent className="p-12 relative z-10">
              <div className="text-center mb-12">
                <Camera className="h-16 w-16 mx-auto mb-6 animate-pulse" />
                <h3 className="text-4xl font-bold mb-4">Visual Impact Metrics</h3>
                <p className="text-blue-100 text-xl">Capturing excellence through every frame</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="group">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl group-hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl font-bold mb-2 text-cyan-200">150+</div>
                    <div className="text-blue-100 text-lg mb-1">High-Res Photos</div>
                    <div className="text-blue-300 text-sm">Professional Quality</div>
                  </div>
                </div>
                <div className="group">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl group-hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl font-bold mb-2 text-green-200">8</div>
                    <div className="text-blue-100 text-lg mb-1">Categories</div>
                    <div className="text-blue-300 text-sm">Comprehensive Coverage</div>
                  </div>
                </div>
                <div className="group">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl group-hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl font-bold mb-2 text-purple-200">4K</div>
                    <div className="text-blue-100 text-lg mb-1">Resolution</div>
                    <div className="text-blue-300 text-sm">Crystal Clear Detail</div>
                  </div>
                </div>
                <div className="group">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl group-hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl font-bold mb-2 text-yellow-200">24/7</div>
                    <div className="text-blue-100 text-lg mb-1">Updates</div>
                    <div className="text-blue-300 text-sm">Fresh Content Daily</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}