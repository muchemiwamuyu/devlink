import { Star } from 'lucide-react'
import React from 'react'

function Testimonials() {

    const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Freelance Designer",
    company: "Creative Studios",
    image: "https://images.unsplash.com/photo-1494790108755-2616b95a1e7e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "This tool completely transformed how I manage my freelance business. I've never been more organized and my clients love the transparency."
  },
  {
    name: "Marcus Chen",
    role: "Digital Marketing Agency Owner",
    company: "GrowthLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Managing 20+ clients used to be chaos. Now everything is streamlined and we've reduced project delivery time by 30%."
  },
  {
    name: "Emily Rodriguez",
    role: "Web Developer",
    company: "CodeCraft",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The invoice management feature alone has saved me hours each week. Plus, my clients appreciate the professional touch."
  }
]

  return (
    <>
        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what successful freelancers and agencies say about Devlink.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      <div className="text-blue-600 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default Testimonials