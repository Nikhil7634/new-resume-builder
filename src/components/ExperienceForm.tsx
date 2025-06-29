import React from 'react';
import { Briefcase, Plus, Trash2, Calendar, Building } from 'lucide-react';
import { Experience } from '../types/resume';

interface ExperienceFormProps {
  data: Experience[];
  onChange: (data: Experience[]) => void;
}

export function ExperienceForm({ data, onChange }: ExperienceFormProps) {
  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    onChange([...data, newExperience]);
  };

  const removeExperience = (id: string) => {
    onChange(data.filter(exp => exp.id !== id));
  };

  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: string | boolean
  ) => {
    onChange(
      data.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
          Work Experience
        </h2>
        <p className="text-gray-600">Showcase your professional journey</p>
      </div>

      <button
        onClick={addExperience}
        className="flex items-center justify-center w-full gap-3 px-6 py-4 text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl hover:from-purple-600 hover:to-blue-600 hover:shadow-xl"
      >
        <Plus size={20} />
        Add Work Experience
      </button>

      <div className="space-y-8">
        {data.map((experience, index) => (
          <div key={experience.id} className="relative p-8 transition-all duration-300 border-2 border-gray-100 shadow-sm bg-white/70 backdrop-blur-sm rounded-2xl hover:border-purple-200 hover:shadow-lg">
            <div className="absolute top-4 right-4">
              <button
                onClick={() => removeExperience(experience.id)}
                className="p-2 text-red-500 transition-colors rounded-lg hover:bg-red-50"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl">
                <Briefcase className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Experience {index + 1}</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Job Title"
                  value={experience.jobTitle}
                  onChange={(e) => updateExperience(experience.id, 'jobTitle', e.target.value)}
                  className="w-full px-4 py-4 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 group-hover:border-purple-300"
                />
              </div>
              
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Company"
                  value={experience.company}
                  onChange={(e) => updateExperience(experience.id, 'company', e.target.value)}
                  className="w-full px-4 py-4 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 group-hover:border-purple-300"
                />
                <Building className="absolute w-5 h-5 text-gray-400 transition-colors right-4 top-4 group-focus-within:text-purple-500" />
              </div>
              
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Location"
                  value={experience.location}
                  onChange={(e) => updateExperience(experience.id, 'location', e.target.value)}
                  className="w-full px-4 py-4 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 group-hover:border-purple-300"
                />
              </div>
              
              <div className="relative group">
                <input
                  type="month"
                  placeholder="Start Date"
                  value={experience.startDate}
                  onChange={(e) => updateExperience(experience.id, 'startDate', e.target.value)}
                  className="w-full px-4 py-4 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 group-hover:border-purple-300"
                />
                <Calendar className="absolute w-5 h-5 text-gray-400 transition-colors right-4 top-4 group-focus-within:text-purple-500" />
              </div>
            </div>

            <div className="flex items-center gap-6 mb-6">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={experience.current}
                  onChange={(e) => updateExperience(experience.id, 'current', e.target.checked)}
                  className="w-5 h-5 text-purple-600 border-2 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                />
                <span className="font-medium text-gray-700 transition-colors group-hover:text-purple-600">
                  Currently working here
                </span>
              </label>
              
              {!experience.current && (
                <div className="relative group">
                  <input
                    type="month"
                    placeholder="End Date"
                    value={experience.endDate}
                    onChange={(e) => updateExperience(experience.id, 'endDate', e.target.value)}
                    className="px-4 py-3 transition-all duration-300 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 group-hover:border-purple-300"
                  />
                  <Calendar className="absolute w-5 h-5 text-gray-400 transition-colors right-3 top-3 group-focus-within:text-purple-500" />
                </div>
              )}
            </div>

            <div className="relative group">
              <textarea
                placeholder="Describe your key responsibilities, achievements, and impact in this role. Use bullet points or paragraphs to highlight your contributions..."
                value={experience.description}
                onChange={(e) => updateExperience(experience.id, 'description', e.target.value)}
                rows={5}
                className="w-full px-4 py-4 transition-all duration-300 border-2 border-gray-200 resize-none rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 group-hover:border-purple-300"
              />
            </div>
          </div>
        ))}
        
        {data.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-100 to-blue-100">
              <Briefcase size={32} className="text-purple-400" />
            </div>
            <p className="mb-2 text-lg font-medium">No work experience added yet</p>
            <p className="text-sm">Click "Add Work Experience" to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}