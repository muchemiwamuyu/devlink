import React from 'react'

function ClientDashboard() {
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