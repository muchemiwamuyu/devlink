import React, { useState } from 'react';
import { Plus, Search, Filter, Calendar, Users, DollarSign, Clock, Star, MapPin, Mail, Phone, Globe, Edit2, Trash2, Eye, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'E-commerce Website Redesign',
      client: 'TechCorp Solutions',
      status: 'in-progress',
      priority: 'high',
      budget: 15000,
      deadline: '2025-08-15',
      progress: 65,
      description: 'Complete redesign of the e-commerce platform with modern UI/UX',
      tasks: [
        { id: 1, title: 'UI Design', completed: true },
        { id: 2, title: 'Frontend Development', completed: false },
        { id: 3, title: 'Backend Integration', completed: false }
      ]
    },
    {
      id: 2,
      name: 'Mobile App Development',
      client: 'StartupXYZ',
      status: 'planning',
      priority: 'medium',
      budget: 25000,
      deadline: '2025-09-30',
      progress: 20,
      description: 'Native mobile app for iOS and Android platforms',
      tasks: [
        { id: 1, title: 'Requirements Analysis', completed: true },
        { id: 2, title: 'Wireframing', completed: false },
        { id: 3, title: 'Development', completed: false }
      ]
    },
    {
      id: 3,
      name: 'Brand Identity Package',
      client: 'Creative Agency',
      status: 'completed',
      priority: 'low',
      budget: 8000,
      deadline: '2025-07-01',
      progress: 100,
      description: 'Complete brand identity including logo, colors, and guidelines',
      tasks: [
        { id: 1, title: 'Logo Design', completed: true },
        { id: 2, title: 'Brand Guidelines', completed: true },
        { id: 3, title: 'Marketing Materials', completed: true }
      ]
    }
  ]);

  const [freelancers] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      specialization: 'UI/UX Designer',
      rating: 4.9,
      hourlyRate: 85,
      location: 'San Francisco, CA',
      avatar: '👩‍💻',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      availability: 'Available',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 123-4567',
      portfolio: 'www.sarahdesigns.com',
      completedProjects: 47,
      yearsExp: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      specialization: 'Full Stack Developer',
      rating: 4.8,
      hourlyRate: 95,
      location: 'New York, NY',
      avatar: '👨‍💻',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      availability: 'Busy until Aug 15',
      email: 'michael.chen@email.com',
      phone: '+1 (555) 987-6543',
      portfolio: 'www.michaeldev.com',
      completedProjects: 62,
      yearsExp: 7
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      specialization: 'Mobile App Developer',
      rating: 4.7,
      hourlyRate: 90,
      location: 'Austin, TX',
      avatar: '👩‍💻',
      skills: ['React Native', 'Swift', 'Kotlin', 'Firebase'],
      availability: 'Available',
      email: 'emily.rodriguez@email.com',
      phone: '+1 (555) 456-7890',
      portfolio: 'www.emilyapps.com',
      completedProjects: 38,
      yearsExp: 4
    }
  ]);

  const [showProjectModal, setShowProjectModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [projectForm, setProjectForm] = useState({
    name: '',
    client: '',
    status: 'planning',
    priority: 'medium',
    budget: '',
    deadline: '',
    description: ''
  });

  const handleProjectSubmit = () => {
    if (!projectForm.name || !projectForm.client || !projectForm.budget || !projectForm.deadline || !projectForm.description) {
      return;
    }
    
    if (editingProject) {
      setProjects(projects.map(p => 
        p.id === editingProject.id 
          ? { ...p, ...projectForm, progress: p.progress, tasks: p.tasks }
          : p
      ));
    } else {
      const newProject = {
        ...projectForm,
        id: Date.now(),
        progress: 0,
        tasks: []
      };
      setProjects([...projects, newProject]);
    }
    setShowProjectModal(false);
    setEditingProject(null);
    setProjectForm({
      name: '',
      client: '',
      status: 'planning',
      priority: 'medium',
      budget: '',
      deadline: '',
      description: ''
    });
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setProjectForm({
      name: project.name,
      client: project.client,
      status: project.status,
      priority: project.priority,
      budget: project.budget,
      deadline: project.deadline,
      description: project.description
    });
    setShowProjectModal(true);
  };

  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter(p => p.id !== projectId));
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress': return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'planning': return <Clock className="w-4 h-4 text-blue-500" />;
      default: return <XCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'planning': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const ProjectModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {editingProject ? 'Edit Project' : 'Add New Project'}
          </h2>
          <button
            onClick={() => setShowProjectModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <XCircle className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Name
            </label>
            <input
              type="text"
              value={projectForm.name}
              onChange={(e) => setProjectForm({...projectForm, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Client
            </label>
            <input
              type="text"
              value={projectForm.client}
              onChange={(e) => setProjectForm({...projectForm, client: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={projectForm.status}
                onChange={(e) => setProjectForm({...projectForm, status: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="planning">Planning</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority
              </label>
              <select
                value={projectForm.priority}
                onChange={(e) => setProjectForm({...projectForm, priority: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget ($)
              </label>
              <input
                type="number"
                value={projectForm.budget}
                onChange={(e) => setProjectForm({...projectForm, budget: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deadline
              </label>
              <input
                type="date"
                value={projectForm.deadline}
                onChange={(e) => setProjectForm({...projectForm, deadline: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={projectForm.description}
              onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={handleProjectSubmit}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {editingProject ? 'Update Project' : 'Create Project'}
            </button>
            <button
              onClick={() => setShowProjectModal(false)}
              className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Client Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">JD</span>
                </div>
                <span className="text-sm font-medium text-gray-700">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('projects')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'projects'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              My Projects
            </button>
            <button
              onClick={() => setActiveTab('freelancers')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'freelancers'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Find Freelancers
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'projects' && (
          <div>
            {/* Projects Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">My Projects</h2>
                <p className="text-gray-600">Manage your projects and track progress</p>
              </div>
              <button
                onClick={() => setShowProjectModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                New Project
              </button>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="planning">Planning</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <div key={project.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(project.status)}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status.replace('-', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEditProject(project)}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{project.client}</p>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{project.description}</p>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Progress</span>
                        <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-4 pt-4 border-t">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-900">
                          ${project.budget.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">
                          {new Date(project.deadline).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                        {project.priority} priority
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'freelancers' && (
          <div>
            {/* Freelancers Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Freelancers</h2>
              <p className="text-gray-600">Connect with talented freelancers and developers</p>
            </div>

            {/* Freelancers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freelancers.map(freelancer => (
                <div key={freelancer.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                          {freelancer.avatar}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{freelancer.name}</h3>
                          <p className="text-sm text-gray-600">{freelancer.specialization}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-900">{freelancer.rating}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{freelancer.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">${freelancer.hourlyRate}/hour</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className={`text-sm ${freelancer.availability === 'Available' ? 'text-green-600' : 'text-yellow-600'}`}>
                          {freelancer.availability}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {freelancer.skills.map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>{freelancer.completedProjects} projects</span>
                      <span>{freelancer.yearsExp} years exp</span>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        Hire Now
                      </button>
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Mail className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Globe className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {showProjectModal && <ProjectModal />}
    </div>
  );
};

export default ClientDashboard;