import React, { useEffect } from 'react';
import { Camera, Video, Heart, Users, Award, Play, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

function App() {
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

  const services = [
    { icon: <Camera className="w-8 h-8" />, title: "Photography", description: "Professional photo shoots for all occasions" },
    { icon: <Video className="w-8 h-8" />, title: "Videography", description: "Cinematic video production and editing" },
    { icon: <Heart className="w-8 h-8" />, title: "Wedding", description: "Capturing your special moments" },
    { icon: <Users className="w-8 h-8" />, title: "Events", description: "Corporate and social event coverage" }
  ];

  const gallery = [
    "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://www.aurusjewels.com/cdn/shop/articles/indian_wedding_planning_guide_ultimate.jpg?v=1679913681",
    "https://static.vecteezy.com/system/resources/previews/041/929/902/large_2x/ai-generated-an-indian-bride-and-groom-in-traditional-wedding-attire-exchanging-garlands-during-a-ritual-in-their-marriage-ceremony-photo.jpg",
    "https://cdn-houston.wedsociety.com/wp-content/uploads/2021/09/d752b31fd69eeae30793c1d8386eccca163093640161361d512c312.jpg"
  ];

  const weddingCards = [
    {
      title: "Royal Maharaja",
      image: "https://i.pinimg.com/736x/2a/8a/bd/2a8abdbe12a290c88d1ce551a4d40090.jpg",
      description: "Elegant traditional design with gold foiling and intricate royal motifs"
    },
    {
      title: "Modern Mandala",
      image: "https://i.pinimg.com/736x/f4/90/38/f49038feab3fab6911d2476a8eaa2ddb.jpg",
      description: "Contemporary take on classic patterns with geometric mandala designs"
    },
    {
      title: "Floral Paradise",
      image: "https://i.pinimg.com/736x/b7/04/a4/b704a44fd8f5b257c6b72957e81a4b55.jpg",
      description: "Beautiful floral motifs with traditional Indian elements and patterns"
    },
    {
      title: "Traditional Elegance",
      image: "https://i.pinimg.com/1200x/04/49/6d/04496dc0421efa9204a438cc6ef8a064.jpg",
      description: "Classic Indian wedding invitation design with timeless appeal"
    }
  ];

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
            Get Started <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Services</h2>
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
        <h2 className="text-4xl font-bold text-center mb-16">Gallery</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((img, index) => (
            <div key={index} className="animate-on-scroll relative group overflow-hidden rounded-xl">
              <img 
                src={`${img}?auto=format&fit=crop&w=500&q=80`}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                flex items-end justify-center pb-4">
                <Play className="w-12 h-12 text-white cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wedding Cards Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Indian Wedding Cards</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {weddingCards.map((card, index) => (
            <div key={index} className="animate-on-scroll bg-gradient-to-br from-purple-900/50 to-purple-600/30 
              p-6 rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img 
                  src={`${card.image}?auto=format&fit=crop&w=500&q=80`}
                  alt={card.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-300 mb-4">{card.description}</p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg 
                transition-colors duration-300">
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </section>

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
                  <a href="https://wa.me/+919006766955" 
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
                  <p className="text-gray-300">Nonihat Near +2 High School, Dumka Jharkhand 814145</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to capture your special moments in the most beautiful way.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full 
            transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
