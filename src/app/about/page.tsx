'use client'
import React, { useState, useEffect } from 'react'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b45b9c12?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate about innovation and building meaningful connections."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Tech visionary with 10+ years in scalable solutions."
    },
    {
      name: "Emma Davis",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Creative mind focused on user-centered design experiences."
    }
  ]

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "We push boundaries and embrace cutting-edge solutions to solve complex challenges."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Our diverse team works together to achieve extraordinary results for our clients."
    },
    {
      icon: "🎯",
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code to customer service."
    },
    {
      icon: "🌱",
      title: "Growth",
      description: "We believe in continuous learning and evolving with the ever-changing tech landscape."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              About Our Story
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of innovators, creators, and problem-solvers dedicated to building the future of digital experiences.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-12">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="rgb(248 250 252)" />
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We believe technology should enhance human potential, not replace it. Our mission is to create digital solutions that empower businesses and individuals to achieve their goals while maintaining the human connection that makes us unique.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Since our founding in 2019, we ve helped over 500 companies transform their digital presence and achieve measurable growth through innovative technology solutions.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl transform rotate-3 hover:rotate-1 transition-transform duration-500"></div>
                <div className="absolute inset-4 bg-white rounded-3xl shadow-2xl overflow-hidden transform -rotate-3 hover:-rotate-1 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape our culture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The brilliant minds behind our success story.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`group text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                <div className="relative mb-6 mx-auto w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full transform group-hover:scale-105 transition-transform duration-500"></div>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="absolute inset-2 w-44 h-44 object-cover rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Let create something amazing together. We love to hear about your project and explore how we can help bring your vision to life.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}