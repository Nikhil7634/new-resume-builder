import { 
  FileText, 
  Zap, 
  Download, 
  Eye, 
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Heart,
  Sparkles,
  LayoutTemplate,
  BookOpen,
  Lock,
  Rocket
} from 'lucide-react';

interface LandingPageProps {
  onStartBuilding: () => void;
}

export function LandingPage({ onStartBuilding }: LandingPageProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 bg-purple-100 rounded-full top-20 left-10 mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bg-blue-100 rounded-full top-40 right-20 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bg-indigo-100 rounded-full bottom-20 left-1/2 w-80 h-80 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-24 hero-section sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 font-medium text-purple-700 transition-shadow rounded-full shadow-sm bg-gradient-to-r from-purple-100 to-blue-100 hover:shadow-md">
              <Sparkles className="w-5 h-5" />
              <span>Professional Resume Builder</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              <span className="text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text">
                Craft Your Perfect
              </span>
              <br />
              <span className="relative inline-block text-gray-900">
                Resume Effortlessly
                <span className="absolute left-0 w-full h-2 bottom-2 bg-gradient-to-r from-purple-200 to-blue-200 -z-10 opacity-80"></span>
              </span>
            </h1>
            
            <p className="max-w-3xl mx-auto mb-10 text-xl leading-relaxed text-gray-600">
              Create stunning, professional resumes with our intuitive builder. 
              Real-time preview, beautiful templates, and instant PDF export - 
              everything you need to land your dream job.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={onStartBuilding}
                className="relative flex items-center gap-3 px-8 py-4 overflow-hidden text-lg font-semibold text-white transition-all duration-300 group bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Building Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-purple-700 to-blue-700 group-hover:opacity-100"></span>
              </button>
              
              <button className="flex items-center gap-2 px-8 py-4 text-lg font-semibold text-purple-600 transition-all duration-300 border-2 border-purple-200 rounded-xl hover:bg-purple-50 hover:border-purple-300 hover:shadow-lg">
                <LayoutTemplate className="w-5 h-5" />
                View Templates
              </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-gray-500">
              {[
                { icon: CheckCircle, text: "100% Free" },
                { icon: CheckCircle, text: "No Registration" },
                { icon: CheckCircle, text: "Instant Download" },
                { icon: CheckCircle, text: "ATS Friendly" },
                { icon: CheckCircle, text: "Unlimited Customization" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <item.icon className="w-4 h-4 text-green-500" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <div className="relative py-8 bg-white/80 backdrop-blur-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <p className="mb-6 text-sm font-semibold tracking-wider text-center text-gray-500 uppercase">
            Trusted by job seekers at
          </p>
          <div className="grid items-center justify-center grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {['Google', 'Microsoft', 'Amazon', 'Apple', 'Netflix'].map((company, index) => (
              <div key={index} className="flex items-center justify-center transition-opacity opacity-70 hover:opacity-100">
                <span className="text-xl font-bold text-gray-700">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="relative px-4 py-20 sm:px-6 lg:px-8 bg-white/50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Everything You Need for a
              <span className="relative inline-block ml-2">
                <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">Standout Resume</span>
                <Sparkles className="absolute w-6 h-6 text-yellow-400 -top-4 -right-6" />
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Our powerful features help you create a resume that gets noticed by recruiters and hiring managers
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Real-time Preview",
                description: "See your resume update instantly as you make changes. No guessing, just perfect formatting every time.",
                gradient: "from-blue-500 to-cyan-500",
                badge: "Popular"
              },
              {
                icon: Download,
                title: "One-Click Export",
                description: "Download your resume as a high-quality PDF with a single click. Print-ready and ATS-optimized.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: LayoutTemplate,
                title: "20+ Templates",
                description: "Professional designs with modern typography and clean layouts that impress recruiters.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Built for speed. Create and edit your resume without any lag or loading times.",
                gradient: "from-yellow-500 to-orange-500",
                badge: "New"
              },
              {
                icon: Lock,
                title: "Privacy First",
                description: "Your data stays in your browser. No servers, no tracking, complete privacy guaranteed.",
                gradient: "from-red-500 to-rose-500"
              },
              {
                icon: BookOpen,
                title: "Guided Sections",
                description: "Smart suggestions for experience, education, skills, and more. Easy to customize and reorder.",
                gradient: "from-indigo-500 to-purple-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="relative p-8 transition-all duration-300 bg-white border border-gray-100 shadow-sm group rounded-2xl hover:shadow-xl hover:border-transparent hover:bg-gradient-to-br hover:from-white hover:via-white hover:to-gray-50"
              >
                {feature.badge && (
                  <span className={`absolute -top-3 -right-3 px-3 py-1 text-xs font-semibold rounded-full ${
                    feature.badge === "Popular" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
                  }`}>
                    {feature.badge}
                  </span>
                )}
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 text-white sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { number: "10,000+", label: "Resumes Created" },
              { number: "95%", label: "Satisfaction Rate" },
              { number: "20+", label: "Professional Templates" },
              { number: "100%", label: "Free Forever" },
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
                <p className="mb-2 text-4xl font-bold">{stat.number}</p>
                <p className="text-sm font-medium text-purple-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-4 py-20 overflow-hidden sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="relative z-10">
              <h2 className="mb-6 text-4xl font-bold text-gray-800">
                Why Job Seekers
                <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text"> Love Us</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                We've revolutionized resume building by combining cutting-edge technology with 
                beautiful design to help you create resumes that get noticed by employers and 
                ATS systems alike.
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
                    title: "Industry Best Practices",
                    description: "Our templates follow the latest industry standards for maximum impact."
                  },
                  {
                    icon: Rocket,
                    title: "Quick & Easy",
                    description: "Create a professional resume in minutes, not hours."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 transition-all duration-300 bg-white rounded-xl hover:shadow-md">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg shadow-sm bg-gradient-to-r from-purple-100 to-blue-100">
                      <item.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl blur-3xl opacity-20 -z-10"></div>
              <div className="relative p-1 shadow-2xl bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl">
                <div className="overflow-hidden rounded-2xl">
                  <img 
                    src="https://framerusercontent.com/images/Yf6wBQFj68M7QNPLtY2KP6RE.webp?lossless=1" 
                    alt="Professional resume example" 
                    className="w-full h-auto transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Success Stories from
              <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text"> Our Users</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Don't just take our word for it - hear from people who landed their dream jobs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Product Manager at Google",
                quote: "I got 3 interview calls within a week of using my new resume. The templates are so professional!",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "Michael Chen",
                role: "Software Engineer at Microsoft",
                quote: "The ATS optimization feature helped me get past the screening process for the first time.",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "David Rodriguez",
                role: "Marketing Director at Airbnb",
                quote: "From creating to downloading took less than 15 minutes. Incredibly easy to use.",
                avatar: "https://randomuser.me/api/portraits/men/75.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-8 transition-all duration-300 bg-white border border-gray-100 rounded-2xl hover:shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <img className="w-12 h-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-gray-600">"{testimonial.quote}"</p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-20 overflow-hidden sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 cta-section">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 w-64 h-64 bg-indigo-300 rounded-full left-1/2 mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Build Your Perfect Resume?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-purple-100">
            Join thousands of successful job seekers. Create your professional resume in minutes, not hours.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={onStartBuilding}
              className="relative flex items-center gap-3 px-8 py-4 text-lg font-semibold text-purple-600 transition-all duration-300 bg-white group rounded-xl hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Now - It's Free!
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            
            <button className="flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50">
              <BookOpen className="w-5 h-5" />
              See Examples
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-4 mt-8 text-sm text-purple-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>No registration needed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-16 text-white bg-gray-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 shadow-sm bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl">
                  <FileText className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                  ResumeForge
                </span>
              </div>
              <p className="max-w-md mb-6 text-gray-400">
                The most intuitive and powerful resume builder. Create professional resumes 
                that get you hired, completely free and with complete privacy.
              </p>
              <div className="flex items-center gap-4">
                {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social, index) => (
                  <a key={index} href="#" className="text-gray-400 transition-colors hover:text-white">
                    <span className="sr-only">{social}</span>
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full">
                      {social.charAt(0)}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="mb-6 text-lg font-semibold">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Resume Builder</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Templates</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Examples</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-6 text-lg font-semibold">Resources</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Blog</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Resume Tips</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Career Advice</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-6 text-lg font-semibold">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="transition-colors hover:text-white hover:underline">About Us</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Contact</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="transition-colors hover:text-white hover:underline">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 mt-12 text-center text-gray-400 border-t border-gray-800">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <p>Made with <Heart className="inline w-4 h-4 text-red-500 fill-current" /> for job seekers everywhere</p>
              <span className="hidden sm:block">•</span>
              <p>&copy; {new Date().getFullYear()} ResumeForge. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}