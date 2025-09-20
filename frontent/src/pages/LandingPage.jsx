import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, LayoutTemplate, Menu, X, Download, Zap } from "lucide-react";
import { UserContext } from "../context/UserContex";
import "../index.css";
import { ProfileInfoCard } from "../components/card";
import Modal from "../components/Modal";
import SignUp from "../components/SignUp";
import Login from "../components/Login";

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModel(true);
    } else {
      navigate("/dashboard");
    }
  };

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50">
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-violet-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <LayoutTemplate className=   "w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-200" />
          </div>
          <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent ">
            ResumeXpert
          </span>

          {/* mobile menu button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-violet-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-violet-600" />
            ) : (
              <Menu size={24} className="text-violet-600" />
            )}
          </button>

          {/* desktop navigation */}
          <div className="hidden md:flex items-center">
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="relative group px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-200"
                onClick={() => setOpenAuthModel(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative">Get Started</span>
              </button>
            )}
          </div>
        </div>

        {/* mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg w-full fixed top-16 left-0 right-0 z-40 shadow-lg border-b border-violet-100/50 transition-all duration-300 ease-in-out">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4">
              {user ? (
                <div className="flex flex-col gap-4 py-2">
                  <div className="text-violet-700 font-medium text-center py-2 text-base sm:text-lg">
                    Welcome Back
                  </div>

                  <button
                    className="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-violet-200/50 transition-all"
                    onClick={() => {
                      navigate("/dashboard");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Go to Dashboard
                  </button>
                </div>
              ) : (
                <button
                  className="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-violet-200/50 transition-all"
                  onClick={() => {
                    setOpenAuthModel(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        )}
      </header>
      {/* main content  */}
      <main className="pt-24">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="flex flex-wrap justify-between gap-10 lg:gap-12 items-center">
            {/* left content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 border border-violet-200 text-violet-700 rounded-full font-bold text-xs sm:text-sm">
                Professional Resume Builder
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-tight">
                <span className="block text-slate-900">Craft</span>
                <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 bg-clip-text text-transparent">
                  Professional
                </span>
                <span className="block text-slate-900">Resumes</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg font-medium">
                Create job-wining resumes with expertly designed templates.
                ATS-friendly,recruiter-approved and tailored to your Career
                Goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="group relative px-10 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-violet-200"
                  onClick={handleCTA}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center gap-2 sm:gap-3">
                    Start building{" "}
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </span>
                </button>
                <button
                  className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-violet-200 text-violet-700 font-bold rounded-2xl hover:border-violet-300 hover:bg-violet-50 transition-all"
                  onClick={handleCTA}
                >
                  View templates
                </button>
              </div>

              {/* stats grid */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8 pt-6">
                {[
                  {
                    value: "50K+",
                    label: "Resumes Created",
                    gradient: "from-violet-600 to-fuchsia-600",
                  },
                  {
                    value: "4.9★",
                    label: "User Rating",
                    gradient: "from-orange-500 to-red-500",
                  },
                  {
                    value: "5 Min",
                    label: "Build Time",
                    gradient: "from-emerald-500 to-teal-500",
                  },
                ].map((stat, index) => (
                  <div className="text-center" key={index}>
                    <div
                      className={`text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r bg-clip-text text-transparent ${stat.gradient}`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`text-xs sm:text-sm text-slate-500 font-medium`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* right side */}

            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto flex ">
              <div className="absolute -inset-8 bg-gradient-to-r from-violet-200/50 to-fuchsia-200/50 rounded-3xl blur-3xl"></div>
              <div className="relative ">
                <svg
                  viewBox="0 0 400 500"
                  className="w-full h-auto max-w-md mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background */}
                  <defs>
                    <linearGradient
                      id="bgGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#d946ef" />
                    </linearGradient>
                    <linearGradient
                      id="cardGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#f8fafc" />
                    </linearGradient>
                  </defs>

                  {/* SVG elements */}
                  <rect
                    x="50"
                    y="50"
                    width="300"
                    height="400"
                    rx="20"
                    className="fill-[url(#cardGradient)] stroke-[#e2e8f0] stroke-[2]"
                  />
                  <circle
                    cx="120"
                    cy="120"
                    r="25"
                    className="fill-[url(#bgGradient)]"
                  />
                  <rect
                    x="160"
                    y="105"
                    width="120"
                    height="8"
                    rx="4"
                    className="fill-[#8b5cf6]"
                  />
                  <rect
                    x="160"
                    y="120"
                    width="80"
                    height="6"
                    rx="3"
                    className="fill-[#d946ef]"
                  />
                  <rect
                    x="70"
                    y="170"
                    width="260"
                    height="4"
                    rx="2"
                    className="fill-[#e2e8f0]"
                  />
                  <rect
                    x="70"
                    y="185"
                    width="200"
                    height="4"
                    rx="2"
                    className="fill-[#e2e8f0]"
                  />
                  <rect
                    x="70"
                    y="200"
                    width="240"
                    height="4"
                    rx="2"
                    className="fill-[#e2e8f0]"
                  />
                  <rect
                    x="70"
                    y="230"
                    width="60"
                    height="6"
                    rx="3"
                    className="fill-[#8b5cf6]"
                  />
                  <rect
                    x="70"
                    y="250"
                    width="40"
                    height="15"
                    rx="7"
                    className="fill-[#ddd6fe]"
                  />
                  <rect
                    x="120"
                    y="250"
                    width="50"
                    height="15"
                    rx="7"
                    className="fill-[#ddd6fe]"
                  />
                  <rect
                    x="180"
                    y="250"
                    width="45"
                    height="15"
                    rx="7"
                    className="fill-[#ddd6fe]"
                  />
                  <rect
                    x="70"
                    y="290"
                    width="80"
                    height="6"
                    rx="3"
                    className="fill-[#d946ef]"
                  />
                  <rect
                    x="70"
                    y="310"
                    width="180"
                    height="4"
                    rx="2"
                    className="fill-[#e2e8f0]"
                  />
                  <rect
                    x="70"
                    y="325"
                    width="150"
                    height="4"
                    rx="2"
                    className="fill-[#e2e8f0]"
                  />
                  <rect
                    x="70"
                    y="340"
                    width="200"
                    height="4"
                    rx="2"
                    className="fill-[#e2e8f0]"
                  />

                  {/* Animated elements */}
                  <circle
                    cx="320"
                    cy="100"
                    r="15"
                    className="fill-[#f97316] opacity-80"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-10; 0,0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <rect
                    x="30"
                    y="300"
                    width="12"
                    height="12"
                    rx="6"
                    className="fill-[#10b981] opacity-80"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 5,0; 0,0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <polygon
                    points="360,200 370,220 350,220"
                    className="fill-[#ef4444] opacity-80"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 360 210; 360 360 210; 0 360 210"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </polygon>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* feature section */}
        <section className="bg-gradient-to-br from-violet-50 to-fuchsia-50 py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6">
                Why Choose
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  RsumeXpert?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                Everything you need to create a Professional resume that stands
                Out
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: <Zap className=  "w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "Lightning Fast",
                  description:
                    "Create professional resumes in under 5 minutes with our streamlined process",
                  gradient:  "from-violet-500 to-purple-600",
  

                  bg: "from-violet-50 to-purple-50",
 
                },
                {
                  icon: (
                    <LayoutTemplate className= "w-8 h-8 sm:w-10 sm:h-10" />
                  ),
                  title: "Pro Templates",
                  description:
                    "Choose from dozens of recruiter-approved, industry-specific templates",
                  gradient:  "from-fuchsia-50 to-pink-600",

                  bg: "from-fuchsia-50 to-pink-50",

                },
                {
                  icon: <Download className=  "w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "Instant Export",
                  description:
                    "Download high-quality PDFs instantly with perfect formatting",
                  gradient:  "from-orange-500 to-red-600",
 
                  bg:   "from-orange-50 to-red-50",

                },
              ].map((feature,index)=>(
                
                <div key={index} className=  "group relative">
                <div className={`absolute -inset-2 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-3xl from-violet-200 to-fuchsia-200 ${feature.bg}`}></div>
                <div className={`relative bg-gradient-to-br border border-white/50 p-6 sm:p-8 rounded-3xl hover:shadow-2xl transition-all group-hover:scale-105 ${feature.bg}`}>
                <div className=   {`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br rounded-2xl flex items-center  justify-center mb-4 sm:mb-6 text-pink shadow-lg ${feature.gradient}`}>
                  {feature.icon}
                </div>
                <h3 className= "text-xl sm:text-2xl font-black text-slate-900 mb-2 sm:mb-4">
                  {feature.title}
                </h3>
                <p className=   "text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                  {feature.description}
                </p>
                </div>
                </div>
              ))
              }
            </div>
          </div>
        </section>


        {/* cta section */}

        <section className= "py-16 sm:py-24">
          <div className= "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative">
              <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-violet-200/50 to-fuchsia-200/50 rounded-3xl blur-3xl"></div>
              <div className= "relative bg-gradient-to-br from-white to-violet-50 border border-violet-100 rounded-3xl p-8 sm:p-16">
                <h2 className=  "text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6">
                  Ready to Build Your   
                  <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Standout Resume</span>
                </h2>
                <p className= "text-base sm:text-lg text-slate-600 mb-6 sm:mb-10 max-w-2xl mx-auto font-medium">
                  Join thousands of professionals who landed their dream jobs with our plaforms
                </p>
                <button className="group relative px-8 sm:px-12 py-3 sm:py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-black text-lg rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-violet-200" onClick={handleCTA}>
                  <div className= "absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" ></div>
                  <span className= "relative">Start Building now</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className= "border-t border-violet-100 bg-gradient-to-r from-violet-50 to-fuchsia-50 py-6 sm:py-8">
      <div className=  "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className=  "text-sm sm:text-base text-slate-500 font-medium"></p>
        Crafted with <span className= "bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">❤️</span> by chandan
        <a href="https://www.linkedin.com/in/chandan-palariya/" target="hello" className="hover:text-purple-400 underline"> chandan palariya</a>
      </div>
      </footer>

      {/* modal for login and signup */}
    <Modal isOpen={openAuthModel} onclose={()=>{
      setOpenAuthModel(false)
      serCurrentPage("login")
    }}  hideHeader>
      <div>
        {currentPage==="login" && <Login setCurrentPage={setCurrentPage}/> }
        {currentPage==="signup" && <SignUp setCurrentPage={setCurrentPage} />}
      </div>

    </Modal>
      
    </div>
  );
};

export default LandingPage;
