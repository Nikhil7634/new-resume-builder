import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Calendar } from 'lucide-react';
import { ResumeData } from '../types/resume';

interface ResumePreviewProps {
  data: ResumeData;
}

export function ResumePreview({ data }: ResumePreviewProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString + '-01');
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  return (
    <div id="resume-preview" className="max-w-4xl mx-auto overflow-hidden bg-white shadow-2xl print:shadow-none rounded-2xl">
      {/* Header */}
      <div className="relative p-8 overflow-hidden text-white bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            {data.personalInfo.profileImage && (
              <div className="flex-shrink-0">
                <img
                  src={data.personalInfo.profileImage}
                  alt="Profile"
                  className="object-cover w-32 h-32 border-4 rounded-full shadow-xl border-white/30"
                />
              </div>
            )}
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl drop-shadow-lg">
                {data.personalInfo.fullName || 'Your Name'}
              </h1>
              
              <div className="flex flex-wrap justify-center gap-4 mb-4 md:justify-start text-white/90">
                {data.personalInfo.email && (
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                    <Mail size={16} />
                    <span className="text-sm">{data.personalInfo.email}</span>
                  </div>
                )}
                {data.personalInfo.phone && (
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                    <Phone size={16} />
                    <span className="text-sm">{data.personalInfo.phone}</span>
                  </div>
                )}
                {data.personalInfo.location && (
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                    <MapPin size={16} />
                    <span className="text-sm">{data.personalInfo.location}</span>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 md:justify-start text-white/90">
                {data.personalInfo.website && (
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                    <Globe size={16} />
                    <span className="text-sm">{data.personalInfo.website}</span>
                  </div>
                )}
                {data.personalInfo.linkedin && (
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                    <Linkedin size={16} />
                    <span className="text-sm">{data.personalInfo.linkedin}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-8">
            <h2 className="flex items-center gap-3 mb-4 text-2xl font-bold text-gray-800">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-purple-600 to-blue-600"></div>
              Professional Summary
            </h2>
            <p className="p-6 text-lg leading-relaxed text-gray-700 border-l-4 border-purple-400 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
              {data.personalInfo.summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold text-gray-800">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-purple-600 to-blue-600"></div>
              Work Experience
            </h2>
            <div className="space-y-8">
              {data.experience.map((exp, index) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-gradient-to-b from-purple-200 to-blue-200">
                  <div className="absolute top-0 w-4 h-4 rounded-full -left-2 bg-gradient-to-r from-purple-600 to-blue-600"></div>
                  
                  <div className="p-6 border border-purple-100 bg-gradient-to-r from-purple-50/50 to-blue-50/50 rounded-xl">
                    <div className="flex flex-col mb-3 lg:flex-row lg:items-center lg:justify-between">
                      <h3 className="text-xl font-bold text-gray-800">{exp.jobTitle}</h3>
                      <div className="flex items-center gap-2 font-medium text-purple-600">
                        <Calendar size={16} />
                        <span>
                          {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                        </span>
                      </div>
                    </div>
                    <div className="mb-3 text-lg font-semibold text-purple-700">
                      {exp.company} {exp.location && `• ${exp.location}`}
                    </div>
                    {exp.description && (
                      <p className="leading-relaxed text-gray-700 whitespace-pre-line">{exp.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-8">
            <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold text-gray-800">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-purple-600 to-blue-600"></div>
              Education
            </h2>
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={edu.id} className="relative pl-8 border-l-2 border-gradient-to-b from-purple-200 to-blue-200">
                  <div className="absolute top-0 w-4 h-4 rounded-full -left-2 bg-gradient-to-r from-purple-600 to-blue-600"></div>
                  
                  <div className="p-6 border border-purple-100 bg-gradient-to-r from-purple-50/50 to-blue-50/50 rounded-xl">
                    <div className="flex flex-col mb-2 lg:flex-row lg:items-center lg:justify-between">
                      <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                      <div className="flex items-center gap-2 font-medium text-purple-600">
                        <Calendar size={16} />
                        <span>{formatDate(edu.graduationDate)}</span>
                      </div>
                    </div>
                    <div className="text-lg font-semibold text-purple-700">
                      {edu.school} {edu.location && `• ${edu.location}`}
                    </div>
                    {edu.gpa && (
                      <div className="mt-2 font-medium text-gray-600">GPA: {edu.gpa}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold text-gray-800">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-purple-600 to-blue-600"></div>
              Skills & Expertise
            </h2>
            <div className="flex flex-wrap gap-3">
              {data.skills.map((skill, index) => {
                const colors = [
                  'from-purple-500 to-pink-500',
                  'from-blue-500 to-cyan-500',
                  'from-green-500 to-emerald-500',
                  'from-yellow-500 to-orange-500',
                  'from-red-500 to-rose-500',
                  'from-indigo-500 to-purple-500',
                ];
                return (
                  <span
                    key={index}
                    className={`px-4 py-2 bg-gradient-to-r ${colors[index % colors.length]} text-white rounded-full text-sm font-semibold shadow-lg`}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}