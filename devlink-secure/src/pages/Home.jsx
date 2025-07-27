import React, { useState } from 'react';
import {
  Users,
  FolderOpen,
  CheckSquare,
  FileText,
  Receipt,
  Filter,
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Menu,
  X,
  Plus,
  Search,
  Bell,
  Settings,
  User,
  Calendar,
  DollarSign,
  BarChart3,
  MessageSquare,
  Eye,
  Edit,
  Trash2,
  Download,
  Upload,
  Play,
  Pause,
  AlertCircle,
  Target,
  Briefcase,
  UserPlus,
  Building2,
  Shield,
  Zap,
  Twitter,
  Linkedin,
  Github,
  Facebook
} from 'lucide-react';
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import Header from '../components/Header';


const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Productivity",
    description: "Streamline your workflow and focus on what matters most - delivering great work."
  },
  {
    icon: Shield,
    title: "Never Miss Deadlines",
    description: "Advanced notifications and timeline management keep you on track."
  },
  {
    icon: Zap,
    title: "Automate Admin Tasks",
    description: "Reduce manual work with automated invoicing and project updates."
  },
  {
    icon: Target,
    title: "Impress Clients",
    description: "Professional project management shows clients you're serious about their success."
  }
];

export default function Home() {
  const navigate = useNavigate()
  const [currentView, setCurrentView] = useState('homepage'); // homepage, client-dashboard, freelancer-dashboard

  if (currentView === 'homepage') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header/>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
                Connect
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Clients & Freelancers</span>
                <br />Seamlessly
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                The dual-sided platform where clients post projects and freelancers deliver results.
                Streamlined collaboration, transparent progress tracking, and seamless project management.
              </p>

              {/* Dual User Type Selection */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group max-w-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">For Clients & Agencies</h3>
                  <p className="text-slate-600 mb-6">Post projects, manage freelancers, track progress, and get results.</p>
                  <button
                    onClick={() => navigate('/client-dashboard')}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center group"
                  >
                    View Client Dashboard
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group max-w-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">For Freelancers</h3>
                  <p className="text-slate-600 mb-6">Find projects, manage tasks, track time, and deliver excellence.</p>
                  <button
                    onClick={() => navigate('/seller-dashboard')}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center group"
                  >
                    View Freelancer Dashboard
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features for Both User Types */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Built for Both Sides of the Equation
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Client Features */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Client Features</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Project Creation & Management</h4>
                      <p className="text-slate-600 text-sm">Create detailed project briefs, set budgets, and define requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Freelancer Management</h4>
                      <p className="text-slate-600 text-sm">Find, hire, and manage freelancers in one place</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Real-time Progress Tracking</h4>
                      <p className="text-slate-600 text-sm">Monitor project progress with visual dashboards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Invoice & Payment Management</h4>
                      <p className="text-slate-600 text-sm">Handle payments and invoicing seamlessly</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Freelancer Features */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Freelancer Features</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Project Discovery</h4>
                      <p className="text-slate-600 text-sm">Browse and apply for projects that match your skills</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Task & Time Management</h4>
                      <p className="text-slate-600 text-sm">Break down projects into tasks and track time efficiently</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Client Communication</h4>
                      <p className="text-slate-600 text-sm">Seamless communication with integrated messaging</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Portfolio & Reviews</h4>
                      <p className="text-slate-600 text-sm">Build your reputation with client reviews and portfolio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Freelancers Choose <h2>Dev<span>link</span></h2>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of successful freelancers who've transformed their business with our platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* testimonials */}
        <Testimonials/>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of freelancers who've already streamlined their workflow and grown their business with Devlink.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Your Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className=" py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-1">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-lg ml-[-30px] flex items-center justify-center">
                    <Logo/>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  The ultimate project management tool for freelancers and agencies. Streamline your workflow and grow your business.
                </p>
                <div className="flex space-x-4">
                  <Twitter className="w-5 h-5 text-gray-800 hover:text-gray-500 cursor-pointer transition-colors" />
                  <Linkedin className="w-5 h-5 text-gray-800 hover:text-gray-500 cursor-pointer transition-colors" />
                  <Github className="w-5 h-5 text-gray-800 hover:text-gray-500 cursor-pointer transition-colors" />
                  <Facebook className="w-5 h-5 text-gray-800 hover:text-gray-500 cursor-pointer transition-colors" />
                </div>
              </div>

              {/* Product Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-800 hover:text-gray-500 transition-colors">Features</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-gray-500 transition-colors">Pricing</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-gray-500 transition-colors">Integrations</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-gray-500 transition-colors">API</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-gray-500 transition-colors">Security</a></li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-800 hover:text-gray-500 transition-colors">About Us</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-gray-500 transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-gray-500 transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-gray-500 transition-colors">Press</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-gray-500 transition-colors">Partners</a></li>
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-800 hover:text-gray-500 transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-gray-500 transition-colors">Contact Us</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-gray-500 transition-colors">Status</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-gray-500 transition-colors">Community</a></li>
                  <li><a href="#" className="text-gray-800 hover:text-gray-500 transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-700 text-sm">
                  © 2025 Devlink. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-gray-700 hover:text-gray-500 text-sm transition-colors">Terms of Service</a>
                  <a href="#" className="text-gray-700 hover:text-gray-500 text-sm transition-colors">Privacy Policy</a>
                  <a href="#" className="text-gray-700 hover:text-gray-500 text-sm transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}