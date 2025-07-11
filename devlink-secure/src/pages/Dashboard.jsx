import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter, MoreHorizontal, Calendar, DollarSign, User, Briefcase, Clock, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [clients, setClients] = useState([
    {
      id: 1,
      name: 'TechCorp Inc.',
      email: 'contact@techcorp.com',
      phone: '+1 (555) 123-4567',
      status: 'active',
      totalProjects: 3,
      totalValue: 45000,
      avatar: 'TC'
    },
    {
      id: 2,
      name: 'Creative Studio',
      email: 'hello@creativestudio.com',
      phone: '+1 (555) 234-5678',
      status: 'active',
      totalProjects: 2,
      totalValue: 28000,
      avatar: 'CS'
    },
    {
      id: 3,
      name: 'StartupXYZ',
      email: 'team@startupxyz.com',
      phone: '+1 (555) 345-6789',
      status: 'inactive',
      totalProjects: 1,
      totalValue: 12000,
      avatar: 'SX'
    }
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'E-commerce Platform',
      client: 'TechCorp Inc.',
      status: 'in-progress',
      progress: 65,
      startDate: '2024-01-15',
      endDate: '2024-03-15',
      budget: 25000,
      description: 'Building a modern e-commerce platform with React and Node.js'
    },
    {
      id: 2,
      name: 'Brand Identity Design',
      client: 'Creative Studio',
      status: 'completed',
      progress: 100,
      startDate: '2024-02-01',
      endDate: '2024-02-28',
      budget: 8000,
      description: 'Complete brand identity package including logo, colors, and guidelines'
    },
    {
      id: 3,
      name: 'Mobile App Development',
      client: 'StartupXYZ',
      status: 'on-hold',
      progress: 30,
      startDate: '2024-01-10',
      endDate: '2024-04-10',
      budget: 35000,
      description: 'Cross-platform mobile app for iOS and Android'
    },
    {
      id: 4,
      name: 'Website Redesign',
      client: 'TechCorp Inc.',
      status: 'planning',
      progress: 10,
      startDate: '2024-03-01',
      endDate: '2024-04-15',
      budget: 15000,
      description: 'Complete website redesign with modern UI/UX'
    }
  ]);

  const [showAddClient, setShowAddClient] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
      case 'completed':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'in-progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'on-hold':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'inactive':
      case 'planning':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'in-progress':
        return <Clock className="w-4 h-4" />;
      case 'on-hold':
        return <AlertCircle className="w-4 h-4" />;
      case 'inactive':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const DashboardView = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Clients</p>
              <p className="text-2xl font-bold text-white">{clients.length}</p>
            </div>
            <div className="bg-cyan-500/20 p-3 rounded-lg">
              <User className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Projects</p>
              <p className="text-2xl font-bold text-white">{projects.filter(p => p.status === 'in-progress').length}</p>
            </div>
            <div className="bg-cyan-500/20 p-3 rounded-lg">
              <Briefcase className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-white">${projects.reduce((sum, p) => sum + p.budget, 0).toLocaleString()}</p>
            </div>
            <div className="bg-cyan-500/20 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Completed</p>
              <p className="text-2xl font-bold text-white">{projects.filter(p => p.status === 'completed').length}</p>
            </div>
            <div className="bg-cyan-500/20 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Projects</h3>
        <div className="space-y-4">
          {projects.slice(0, 3).map(project => (
            <div key={project.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="flex-1">
                <h4 className="font-medium text-white">{project.name}</h4>
                <p className="text-gray-400 text-sm">{project.client}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)}
                    {project.status}
                  </div>
                  <span className="text-gray-500 text-xs">{project.progress}% complete</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-white">${project.budget.toLocaleString()}</p>
                <p className="text-gray-400 text-sm">{project.endDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ClientsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Clients</h2>
        <button
          onClick={() => setShowAddClient(true)}
          className="flex items-center gap-2 bg-cyan-500 text-black px-4 py-2 rounded-lg hover:bg-cyan-400 transition-colors font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Client
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map(client => (
          <div key={client.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <span className="text-cyan-400 font-semibold text-sm">{client.avatar}</span>
                </div>
                <div>
                  <h3 className="font-medium text-white">{client.name}</h3>
                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(client.status)}`}>
                    {getStatusIcon(client.status)}
                    {client.status}
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-white">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">{client.email}</p>
              <p className="text-gray-400 text-sm">{client.phone}</p>
              <div className="flex justify-between items-center pt-2 border-t border-gray-700">
                <div>
                  <p className="text-xs text-gray-500">Projects</p>
                  <p className="text-sm font-medium text-white">{client.totalProjects}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Total Value</p>
                  <p className="text-sm font-medium text-white">${client.totalValue.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Projects</h2>
        <button
          onClick={() => setShowAddProject(true)}
          className="flex items-center gap-2 bg-cyan-500 text-black px-4 py-2 rounded-lg hover:bg-cyan-400 transition-colors font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </button>
      </div>

      <div className="space-y-4">
        {projects.map(project => (
          <div key={project.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-white text-lg">{project.name}</h3>
                <p className="text-gray-400">{project.client}</p>
                <p className="text-gray-500 text-sm mt-1">{project.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm border ${getStatusColor(project.status)}`}>
                  {getStatusIcon(project.status)}
                  {project.status}
                </div>
                <button className="text-gray-400 hover:text-white">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">Start Date</p>
                <p className="text-sm text-white">{project.startDate}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">End Date</p>
                <p className="text-sm text-white">{project.endDate}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Budget</p>
                <p className="text-sm text-white">${project.budget.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Progress</p>
                <p className="text-sm text-white">{project.progress}%</p>
              </div>
            </div>

            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AddClientModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold text-white mb-4">Add New Client</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Client Name</label>
            <input
              type="text"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter client name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
            <input
              type="tel"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter phone number"
            />
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => setShowAddClient(false)}
            className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => setShowAddClient(false)}
            className="flex-1 bg-cyan-500 text-black px-4 py-2 rounded-lg hover:bg-cyan-400 transition-colors font-medium"
          >
            Add Client
          </button>
        </div>
      </div>
    </div>
  );

  const AddProjectModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold text-white mb-4">Add New Project</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Project Name</label>
            <input
              type="text"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter project name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Client</label>
            <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
              <option>Select a client</option>
              {clients.map(client => (
                <option key={client.id} value={client.id}>{client.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Budget</label>
            <input
              type="number"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter budget"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <textarea
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              rows="3"
              placeholder="Enter project description"
            ></textarea>
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => setShowAddProject(false)}
            className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => setShowAddProject(false)}
            className="flex-1 bg-cyan-500 text-black px-4 py-2 rounded-lg hover:bg-cyan-400 transition-colors font-medium"
          >
            Add Project
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold text-white">
                Project<span className="text-cyan-400">Tracker</span>
              </h1>
              <nav className="flex space-x-6">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === 'dashboard'
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('clients')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === 'clients'
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Clients
                </button>
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === 'projects'
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Projects
                </button>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 w-64"
                />
              </div>
              <button className="text-gray-400 hover:text-white">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <DashboardView />}
        {activeTab === 'clients' && <ClientsView />}
        {activeTab === 'projects' && <ProjectsView />}
      </main>

      {/* Modals */}
      {showAddClient && <AddClientModal />}
      {showAddProject && <AddProjectModal />}
    </div>
  );
};

export default Dashboard;