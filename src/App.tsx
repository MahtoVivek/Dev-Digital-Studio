import React, { useEffect, useState } from 'react';
import { Camera, Video, Heart, Users, Award, ChevronRight, Phone, Mail, MapPin, Share2 } from 'lucide-react';

function App() {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppShare = (cardTitle: string) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the "${cardTitle}" wedding invitation design from Dev Digital Studio. Could you please provide more details?`
    );
    window.open(`https://wa.me/+919006766955?text=${message}`, '_blank');
  };

  const services = [
    { icon: <Camera className="w-8 h-8" />, title: "Photography", description: "Professional photo shoots for all occasions" },
    { icon: <Video className="w-8 h-8" />, title: "Videography", description: "Cinematic video production and editing" },
    { icon: <Heart className="w-8 h-8" />, title: "Wedding", description: "Capturing your special moments" },
    { icon: <Users className="w-8 h-8" />, title: "Events", description: "Corporate and social event coverage" }
  ];

  const gallery = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaP51vUvIuZA8JrJY6n0Esrfg9jQLHowpW0q2VkDmNmIuigBdy7b_tYsc&s=10",
      description: "Elegant Wedding Reception Setup",
      category: "Decoration"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnRIbj-i-wIVUjDwgD8jEf76bZR2yR5fqGYx6xFibpGE8OZD2FdfSPFoV&s=10",
      description: "Bride's Traditional Ceremony",
      category: "Ceremony"
    },
    {
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
      description: "Romantic Couple Portraits",
      category: "Portraits"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg827cM1tYCLRTcl4-SeGQa7SGG7tCMQMkFGL-cDSAPPha9iLrC0KXVa7b&s=10",
      description: "Wedding Venue at Sunset",
      category: "Venue"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdB5t7MOGVAwPIBWFGAnwCEAAWqOma6LRe2lXbHpZR55irQda2zLtsW4&s=10",
      description: "Traditional Wedding Rituals",
      category: "Ceremony"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmKDZcrtcmpYiGDubB54J9RFliSyvRHdcMvhpWZGKX5VxLQXtVExnZqi_1&s=10",
      description: "Candid Family Moments",
      category: "Family"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYqJDw8eRroUeL5Crw0vTYjSmsCdRau6rEVpFv9cgA7G2Ul0IdtyYfdNQ&s=10",
      description: "First Dance Celebration",
      category: "Reception"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKK0mlcyQ-OaT4wRfEBe3hqKVtfqNEcUYk5Y0xfiYNMp73O-m2G1tYqIE-&s=10",
      description: "Elegant Table Settings",
      category: "Decoration"
    }
  ];

  const weddingCards = [
    {
      title: "Royal Maharaja",
      image: "https://i.pinimg.com/736x/2a/8a/bd/2a8abdbe12a290c88d1ce551a4d40090.jpg",
      description: "Elegant traditional design with gold foiling and intricate royal motifs",
      price: "₹15,000",
      features: ["Premium Paper", "Gold Foiling", "Custom Design", "Free Samples"]
    },
    {
      title: "Modern Mandala",
      image: "https://i.pinimg.com/736x/f4/90/38/f49038feab3fab6911d2476a8eaa2ddb.jpg",
      description: "Contemporary take on classic patterns with geometric mandala designs",
      price: "₹12,000",
      features: ["Metallic Ink", "Custom Colors", "Digital Proof", "Express Delivery"]
    },
    {
      title: "Floral Paradise",
      image: "https://i.pinimg.com/736x/b7/04/a4/b704a44fd8f5b257c6b72957e81a4b55.jpg",
      description: "Beautiful floral motifs with traditional Indian elements and patterns",
      price: "₹10,000",
      features: ["Eco-friendly Paper", "Floral Design", "Customization", "Free Envelopes"]
    },
    {
      title: "Traditional Elegance",
      image: "https://i.pinimg.com/1200x/04/49/6d/04496dc0421efa9204a438cc6ef8a064.jpg",
      description: "Classic Indian wedding invitation design with timeless appeal",
      price: "₹8,000",
      features: ["Classic Design", "Quality Paper", "Quick Delivery", "Bulk Discount"]
    }
  ];

  const invitationMedia = {
    videos: [
      {
        url: "https://marketplace.canva.com/EAGXPA44YSw/2/0/800w/canva-KBB23MMZU0s.mp4",
        title: "Wedding Ceremony Highlights"
      },
      {
        url: "https://marketplace.canva.com/EAF1Wcfkl0U/1/document_800w/canva-ArZElkd6L0c.mp4",
        title: "Reception Celebrations"
      },
      {
        url: "https://marketplace.canva.com/EAGL7UqwWFY/1/document_1440w/canva-NN5-8BGeGoI.mp4",
        title: "Traditional Rituals"
      },
      {
        url: "https://marketplace.canva.com/EAF1WWZGwi0/2/document_1440w/canva-mB3ThldZ5Kc.mp4",
        title: "Family Moments"
      }
    ],
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYqJDw8eRroUeL5Crw0vTYjSmsCdRau6rEVpFv9cgA7G2Ul0IdtyYfdNQ&s=10",
        description: "Traditional Wedding Ceremony"
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaP51vUvIuZA8JrJY6n0Esrfg9jQLHowpW0q2VkDmNmIuigBdy7b_tYsc&s=10",
        description: "Elegant Reception Setup"
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKK0mlcyQ-OaT4wRfEBe3hqKVtfqNEcUYk5Y0xfiYNMp73O-m2G1tYqIE-&s=10",
        description: "Couple Portrait Session"
      },
      {
        url: "https://media-api.xogrp.com/images/72241d24-e14d-4cca-98a6-9af1d06b95cf~rs_768.h",
        description: "Sunset Wedding Venue"
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmKDZcrtcmpYiGDubB54J9RFliSyvRHdcMvhpWZGKX5VxLQXtVExnZqi_1&s=10",
        description: "Traditional Rituals"
      },
      {
        url: "https://tiaraabanquets.com/blog/wp-content/uploads/2022/09/Thumbnail-Indian-Wedding-Traditions-1536x1024.jpg",
        description: "Family Celebrations"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4"
            alt="background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-6 animate-fade-down">
            Dev Digital Studio
          </h1>
          <p className="text-xl mb-8 animate-fade-up">Capturing moments that last forever</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full 
            transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <a href="https://wa.me/+919006766955" >
            Contact Now </a>
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-on-scroll bg-gray-800/50 p-6 rounded-xl 
              hover:bg-purple-600/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-purple-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-black/30">
        <h2 className="text-4xl font-bold text-center mb-16">Our Gallery</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <div key={index} className="animate-on-scroll relative group overflow-hidden rounded-xl">
              <img 
                src={`${item.image}?auto=format&fit=crop&w=500&q=80`}
                alt={item.description}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent 
                opacity-0 group-hover:opacity-100 transition-all duration-300 
                flex flex-col items-center justify-end p-4 text-center">
                <span className="text-purple-300 text-sm font-medium mb-1">{item.category}</span>
                <h3 className="text-white font-semibold">{item.description}</h3>
                <div className="w-12 h-0.5 bg-purple-500 mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wedding Cards Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Indian Wedding Cards</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {weddingCards.map((card, index) => (
            <div key={index} className="animate-on-scroll bg-gradient-to-br from-purple-900/50 to-purple-600/30 
              rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={`${card.image}?auto=format&fit=crop&w=500&q=80`}
                  alt={card.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <span className="text-purple-300 font-medium">{card.price}</span>
                </div>
                <p className="text-gray-300 mb-4 line-clamp-2">{card.description}</p>
                <ul className="space-y-2 mb-6">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleWhatsAppShare(card.title)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg 
                      transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Phone className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                    Enquire
                  </button>
                  <button 
                    onClick={() => handleWhatsAppShare(card.title)}
                    className="bg-purple-600/30 hover:bg-purple-600/50 text-white p-2.5 rounded-lg 
                      transition-all duration-300 flex items-center justify-center"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Invitation Media Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Wedding Memories</h2>
          
          {/* Videos Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-semibold text-center mb-12">Cinematic Moments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {invitationMedia.videos.map((video, index) => (
                <div 
                  key={index} 
                  className="animate-on-scroll group cursor-pointer"
                  onClick={() => setSelectedVideo(video.url)}
                >
                  <div className="aspect-video rounded-xl overflow-hidden shadow-xl mb-3 
                    transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <video
                      src={video.url}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                      flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center 
                        backdrop-blur-sm transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Video className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-center text-purple-300 
                    group-hover:text-purple-200 transition-colors">
                    {video.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Images Section */}
          <div>
            <h3 className="text-3xl font-semibold text-center mb-12">Captured Moments</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {invitationMedia.images.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl cursor-pointer 
                    transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  onClick={() => setSelectedMedia(image.url)}
                >
                  <img
                    src={`${image.url}?auto=format&fit=crop&w=600&q=80`}
                    alt={image.description}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-all duration-300 
                    flex items-center justify-center">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-4 
                        flex items-center justify-center backdrop-blur-sm">
                        <Camera className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white font-medium px-6">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Lightbox */}
      {(selectedMedia || selectedVideo) && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-50"
          onClick={() => {
            setSelectedMedia(null);
            setSelectedVideo(null);
          }}
        >
          <div className="relative max-w-7xl w-full">
            {selectedMedia && (
              <img
                src={selectedMedia}
                alt="Selected media"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            )}
            {selectedVideo && (
              <video
                src={selectedVideo}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                autoPlay
                controls
                playsInline
              />
            )}
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white 
                bg-black/20 rounded-full p-2 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMedia(null);
                setSelectedVideo(null);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll space-y-8">
              <div className="flex items-center gap-4">
                <Phone className="w-8 h-8 text-purple-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
                  <a href="https://wa.me/+919876543210" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-purple-400 hover:text-purple-300 transition-colors">
                    +91 9006766955
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-8 h-8 text-purple-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <a href="mailto:contact@devdigitalstudio.com" 
                     className="text-purple-400 hover:text-purple-300 transition-colors">
                    contact@devdigitalstudio.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-8 h-8 text-purple-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Studio Location</h3>
                  <p className="text-gray-300">Nonihat near High School, Dumka, Jharkhand, India</p>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll bg-purple-900/20 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Quick Connect</h3>
              <a href="https://wa.me/+919006766955" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 
                   text-white px-8 py-4 rounded-xl transition-colors duration-300 w-full">
                <Phone className="w-6 h-6" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Award className="w-16 h-16 text-purple-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Design & Maintain By Vivek</h2>
          <p className="text-xl text-gray-300 mb-8">
            If you're looking for a fully responsive and visually stunning website or app, contact us today!
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full 
            transition-all duration-300 transform hover:scale-105">
            <a href="https://wa.me/+917004162492" >
            Contact Us
              </a>
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
