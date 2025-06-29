import React from 'react';
import { GraduationCap, Plus, Trash2, Calendar, School } from 'lucide-react';
import { Education } from '../types/resume';

interface EducationFormProps {
  data: Education[];
  onChange: (data: Education[]) => void;
}

export function EducationForm({ data, onChange }: EducationFormProps) {
  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      degree: '',
      school: '',
      location: '',
      graduationDate: '',
      gpa: ''
    };
    onChange([...data, newEducation]);
  };

  const removeEducation = (id: string) => {
    onChange(data.filter(edu => edu.id !== id));
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    onChange(data.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Education
        </h2>
        <p className="text-gray-600">Add your educational background</p>
      </div>

      <button
        onClick={addEducation}
        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <Plus size={20} />
        Add Education
      </button>

      <div className="space-y-8">
        {data.map((education, index) => (
          <div key={education.id} className="relative p-8 bg-white/70 backdrop-blur-sm rounded-2xl border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 shadow-sm hover:shadow-lg">
            <div className="absolute top-4 right-4">
              <button
                onClick={() => removeEducation(education.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl">
                <GraduationCap className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Education {index + 1}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Degree (e.g., Bachelor of Science)"
                  value={education.degree}
                  onChange={(e) => updateEducation(education.id, 'degree', e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 group-hover:border-purple-300"
                />
              </div>
              
              <div className="relative group">
                <input
                  type="text"
                  placeholder="School/University"
                  value={education.school}
                  onChange={(e) => updateEducation(education.id, 'school', e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 group-hover:border-purple-300"
                />
                <School className="absolute right-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
              </div>
              
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Location"
                  value={education.location}
                  onChange={(e) => updateEducation(education.id, 'location', e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 group-hover:border-purple-300"
                />
              </div>
              
              <div className="relative group">
                <input
                  type="month"
                  placeholder="Graduation Date"
                  value={education.graduationDate}
                  onChange={(e) => updateEducation(education.id, 'graduationDate', e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 group-hover:border-purple-300"
                />
                <Calendar className="absolute right-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
              </div>
              
              <div className="relative group md:col-span-2">
                <input
                  type="text"
                  placeholder="GPA (optional)"
                  value={education.gpa || ''}
                  onChange={(e) => updateEducation(education.id, 'gpa', e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 group-hover:border-purple-300"
                />
              </div>
            </div>
          </div>
        ))}
        
        {data.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap size={32} className="text-purple-400" />
            </div>
            <p className="text-lg font-medium mb-2">No education added yet</p>
            <p className="text-sm">Click "Add Education" to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}