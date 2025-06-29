import React, { useState, useEffect } from 'react';
import { Download, FileText, Save, ArrowLeft } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { ExperienceForm } from './components/ExperienceForm';
import { EducationForm } from './components/EducationForm';
import { SkillsForm } from './components/SkillsForm';
import { ResumePreview } from './components/ResumePreview';
import { ResumeData } from './types/resume';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'builder'>('landing');
  const [activeTab, setActiveTab] = useState('personal');
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      website: '',
      linkedin: '',
      summary: '',
      profileImage: ''
    },
    experience: [],
    education: [],
    skills: []
  });

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      try {
        setResumeData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error loading saved resume data:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever resumeData changes
  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  const handleExport = () => {
    window.print();
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(resumeData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume-data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: FileText },
    { id: 'experience', label: 'Experience', icon: FileText },
    { id: 'education', label: 'Education', icon: FileText },
    { id: 'skills', label: 'Skills', icon: FileText }
  ];

  if (currentView === 'landing') {
    return (
      <div className="min-h-screen">
        <Navbar currentView={currentView} onViewChange={setCurrentView} />
        <LandingPage onStartBuilding={() => setCurrentView('builder')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Navbar currentView={currentView} onViewChange={setCurrentView} />
      
      {/* Builder Header */}
      <header className="mt-16 border-b shadow-sm bg-white/80 backdrop-blur-md border-gray-200/50 print:hidden">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentView('landing')}
                className="p-2 text-gray-600 transition-colors rounded-lg hover:text-purple-600 hover:bg-purple-50"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl">
                  <FileText className="text-white" size={20} />
                </div>
                <h1 className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
                  Resume Builder
                </h1>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 transition-colors rounded-lg hover:text-purple-600 hover:bg-purple-50"
              >
                <Save size={18} />
                Save Data
              </button>
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 text-white transition-all rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:scale-105"
              >
                <Download size={18} />
                Export PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          {/* Editor Panel */}
          <div className="print:hidden form-section">
            <div className="border shadow-xl bg-white/80 backdrop-blur-md rounded-2xl border-white/20">
              {/* Tab Navigation */}
              <div className="border-b border-gray-200/50">
                <nav className="flex flex-wrap justify-center px-6 space-x-8">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-all ${
                          activeTab === tab.id
                            ? 'border-purple-500 text-purple-600 bg-gradient-to-t from-purple-50 to-transparent'
                            : 'border-transparent text-gray-500 hover:text-purple-600 hover:border-purple-300'
                        }`}
                      >
                        <Icon size={16} />
                        {tab.label}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-8">
                {activeTab === 'personal' && (
                  <PersonalInfoForm
                    data={resumeData.personalInfo}
                    onChange={(personalInfo) => setResumeData({ ...resumeData, personalInfo })}
                  />
                )}
                {activeTab === 'experience' && (
                  <ExperienceForm
                    data={resumeData.experience}
                    onChange={(experience) => setResumeData({ ...resumeData, experience })}
                  />
                )}
                {activeTab === 'education' && (
                  <EducationForm
                    data={resumeData.education}
                    onChange={(education) => setResumeData({ ...resumeData, education })}
                  />
                )}
                {activeTab === 'skills' && (
                  <SkillsForm
                    data={resumeData.skills}
                    onChange={(skills) => setResumeData({ ...resumeData, skills })}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="print:col-span-full">
            <div className="sticky top-24">
              <div className="mb-6 print:hidden">
                <h2 className="mb-2 text-2xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
                  Live Preview
                </h2>
                <p className="text-gray-600">Your resume updates in real-time as you edit</p>
              </div>
              <ResumePreview data={resumeData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;