import React, { useRef } from 'react';
import { User, Mail, Phone, MapPin, Globe, Linkedin, Camera, X } from 'lucide-react';
import { PersonalInfo } from '../types/resume';

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

export function PersonalInfoForm({ data, onChange }: PersonalInfoFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: keyof PersonalInfo, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        handleChange('profileImage', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    handleChange('profileImage', '');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Personal Information
        </h2>
        <p className="text-gray-600">Let's start with your basic information</p>
      </div>

      {/* Profile Image Upload */}
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          {data.profileImage ? (
            <div className="relative group">
              <img
                src={data.profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <button
                onClick={removeImage}
                className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center border-4 border-white shadow-lg">
              <Camera className="w-8 h-8 text-purple-400" />
            </div>
          )}
        </div>
        
        <div className="text-center">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <Camera size={16} />
            {data.profileImage ? 'Change Photo' : 'Upload Photo'}
          </button>
          <p className="text-sm text-gray-500 mt-2">Optional: Add a professional headshot</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group">
          <input
            type="text"
            placeholder="Full Name"
            value={data.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:border-purple-300"
          />
          <User className="absolute right-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
        </div>
        
        <div className="relative group">
          <input
            type="email"
            placeholder="Email Address"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:border-purple-300"
          />
          <Mail className="absolute right-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
        </div>
        
        <div className="relative group">
          <input
            type="tel"
            placeholder="Phone Number"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:border-purple-300"
          />
          <Phone className="absolute right-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
        </div>
        
        <div className="relative group">
          <input
            type="text"
            placeholder="Location"
            value={data.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:border-purple-300"
          />
          <MapPin className="absolute right-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
        </div>
        
        <div className="relative group">
          <input
            type="url"
            placeholder="Website"
            value={data.website}
            onChange={(e) => handleChange('website', e.target.value)}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:border-purple-300"
          />
          <Globe className="absolute right-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
        </div>
        
        <div className="relative group">
          <input
            type="url"
            placeholder="LinkedIn Profile"
            value={data.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:border-purple-300"
          />
          <Linkedin className="absolute right-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
        </div>
      </div>
      
      <div className="relative group">
        <textarea
          placeholder="Professional Summary - Write a compelling summary that highlights your key achievements and career goals..."
          value={data.summary}
          onChange={(e) => handleChange('summary', e.target.value)}
          rows={5}
          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm group-hover:border-purple-300"
        />
      </div>
    </div>
  );
}