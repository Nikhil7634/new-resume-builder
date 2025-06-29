import React, { useState, KeyboardEvent } from 'react';
import { Award, Plus, X, Zap } from 'lucide-react';

interface SkillsFormProps {
  data: string[];
  onChange: (data: string[]) => void;
}

export function SkillsForm({ data, onChange }: SkillsFormProps) {
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() && !data.includes(newSkill.trim())) {
      onChange([...data, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skill: string) => {
    onChange(data.filter(s => s !== skill));
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  const skillColors = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-yellow-500 to-orange-500',
    'from-red-500 to-rose-500',
    'from-indigo-500 to-purple-500',
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Skills & Expertise
        </h2>
        <p className="text-gray-600">Highlight your key competencies</p>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1 group">
          <input
            type="text"
            placeholder="Add a skill (e.g., JavaScript, Project Management)"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:border-purple-300"
          />
          <Zap className="absolute right-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
        </div>
        <button
          onClick={addSkill}
          className="px-6 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
        >
          <Plus size={18} />
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {data.map((skill, index) => (
          <span
            key={index}
            className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${skillColors[index % skillColors.length]} text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 group`}
          >
            {skill}
            <button
              onClick={() => removeSkill(skill)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors group-hover:scale-110"
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>

      {data.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award size={32} className="text-purple-400" />
          </div>
          <p className="text-lg font-medium mb-2">No skills added yet</p>
          <p className="text-sm">Add your skills to showcase your expertise</p>
        </div>
      )}
    </div>
  );
}