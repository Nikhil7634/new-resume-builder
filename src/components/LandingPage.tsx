import React from 'react';
import { 
  FileText, 
  Zap, 
  Download, 
  Eye, 
  Palette, 
  Shield, 
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Target
} from 'lucide-react';

interface LandingPageProps {
  onStartBuilding: () => void;
}

export function LandingPage({ onStartBuilding }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 font-medium text-purple-700 rounded-full bg-gradient-to-r from-purple-100 to-blue-100">
              <Star className="w-4 h-4" />
              <span>Professional Resume Builder</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold md:text-7xl">
              <span className="text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text">
                Build Your Dream
              </span>
              <br />
              <span className="text-gray-800">Resume in Minutes</span>
            </h1>
            
            <p className="max-w-3xl mx-auto mb-8 text-xl leading-relaxed text-gray-600">
              Create stunning, professional resumes with our intuitive builder. 
              Real-time preview, beautiful templates, and instant PDF export - 
              everything you need to land your dream job.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={onStartBuilding}
                className="flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 group bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:shadow-2xl hover:scale-105"
              >
                Start Building Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="px-8 py-4 text-lg font-semibold text-purple-600 transition-all duration-300 border-2 border-purple-200 rounded-xl hover:bg-purple-50 hover:border-purple-300">
                View Examples
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No Registration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Instant Download</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20 sm:px-6 lg:px-8 bg-white/50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Powerful Features for
              <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text"> Perfect Resumes</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Everything you need to create a professional resume that stands out from the crowd
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Live Preview",
                description: "See your resume update in real-time as you type. No surprises, just perfect formatting.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Download,
                title: "Instant Export",
                description: "Download your resume as a high-quality PDF with a single click. Print-ready and ATS-friendly.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Palette,
                title: "Beautiful Design",
                description: "Professional templates with modern typography and clean layouts that impress recruiters.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Built for speed. Create and edit your resume without any lag or loading times.",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                icon: Shield,
                title: "Privacy First",
                description: "Your data stays in your browser. No servers, no tracking, complete privacy guaranteed.",
                gradient: "from-red-500 to-rose-500"
              },
              {
                icon: FileText,
                title: "Smart Sections",
                description: "Organized sections for experience, education, skills, and more. Easy to customize and reorder.",
                gradient: "from-indigo-500 to-purple-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-sm group rounded-2xl hover:shadow-xl hover:border-gray-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-800">
                Why Choose
                <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text"> ResumeForge?</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                We believe everyone deserves a professional resume that showcases their unique talents. 
                Our platform combines cutting-edge technology with beautiful design to help you create 
                resumes that get noticed by employers and ATS systems alike.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Trusted by Thousands",
                    description: "Join thousands of job seekers who've landed their dream jobs with our resume builder."
                  },
                  {
                    icon: Award,
                    title: "Industry Standards",
                    description: "Our templates follow the latest industry standards and best practices for maximum impact."
                  },
                  {
                    icon: Target,
                    title: "ATS Optimized",
                    description: "All our templates are optimized for Applicant Tracking Systems to ensure your resume gets seen."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-purple-100 to-blue-100">
                      <item.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative p-8 bg-white border border-gray-100 shadow-2xl rounded-3xl">
                 <img   src="https://framerusercontent.com/images/Yf6wBQFj68M7QNPLtY2KP6RE.webp?lossless=1" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Build Your Perfect Resume?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-purple-100">
            Join thousands of successful job seekers. Create your professional resume in minutes, not hours.
          </p>
          <button
            onClick={onStartBuilding}
            className="flex items-center gap-2 px-8 py-4 mx-auto text-lg font-semibold text-purple-600 transition-all duration-300 bg-white group rounded-xl hover:shadow-2xl hover:scale-105"
          >
            Get Started Now - It's Free!
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 text-white bg-gray-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl">
                  <FileText className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                  ResumeForge
                </span>
              </div>
              <p className="max-w-md mb-4 text-gray-400">
                The most intuitive and powerful resume builder. Create professional resumes 
                that get you hired, completely free and with complete privacy.
              </p>
            </div>
            
            <div>
              <h3 className="mb-4 font-semibold">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="transition-colors hover:text-white">Resume Builder</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Templates</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Examples</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 font-semibold">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="transition-colors hover:text-white">Help Center</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
            <p>&copy; 2024 ResumeForge. All rights reserved. Built with ❤️ for job seekers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}