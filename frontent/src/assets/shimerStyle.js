export const shimmerStyle = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes flow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes bubble {
    0% { transform: translateY(0) scale(1); opacity: 0.7; }
    50% { transform: translateY(-10px) scale(1.1); opacity: 0.9; }
    100% { transform: translateY(0) scale(1); opacity: 0.7; }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
    50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
  }
  
  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
  
  .animate-flow {
    animation: flow 4s infinite linear;
  }
  
  .animate-bubble {
    animation: bubble 2s infinite ease-in-out;
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 2s infinite;
  }
`


export const infoStyles = {
  // Progress
  progressWrapper: "w-20 h-2 rounded-full bg-gray-200",
  progressBar: color => `h-full rounded-full transition-all`,

  // ActionLink
  actionWrapper: "flex items-center gap-3",
  actionIconWrapper: "w-6 h-6 flex items-center justify-center rounded-full",
  actionLink: "text-sm font-medium underline cursor-pointer break-all text-gray-600 hover:text-emerald-600 transition-colors",

  // CertificationInfo
  certContainer: "mb-4",
  certTitle: "text-base font-semibold text-gray-900",
  certRow: "flex items-center gap-2 mt-1",
  certYear: bgColor => `text-xs font-bold text-white px-3 py-1 rounded-lg`,
  certIssuer: "text-sm text-gray-600 font-medium",

  // ContactInfo
  contactRow: "flex items-center gap-3 mb-3",
  contactIconWrapper: "w-8 h-8 flex items-center justify-center rounded-lg",
  contactText: "flex-1 text-sm font-medium break-all text-gray-700",

  // EducationInfo
  eduContainer: "mb-5",
  eduDegree: "text-base font-semibold pb-2 text-gray-900",
  eduInstitution: "text-sm text-gray-700 font-medium",
  eduDuration: "text-xs text-gray-500 font-medium italic mt-1",

  // Language/Skill Info
  infoRow: "flex items-center justify-between mb-3",
  infoLabel: "text-sm font-semibold text-gray-900",

  // Links
  linkRow: "flex items-center space-x-1 hover:text-blue-600",

  // ProjectInfo
  projectContainer: "mb-5",
  projectTitle: isPreview => `${isPreview ? 'text-sm' : 'text-base'} font-semibold text-gray-900`,
  projectDesc: "text-sm text-gray-600 mt-1 leading-relaxed",
  projectLinks: "flex items-center gap-4 font-medium mt-3",

  // RatingInput
  ratingWrapper: "flex gap-2 cursor-pointer",
  ratingDot: "w-4 h-4 rounded transition-all hover:scale-110",

  // SkillSection
  skillGrid: "grid grid-cols-2 gap-x-6 gap-y-2 mb-5",

  // WorkExperience
  workContainer: "mb-6",
  workHeader: "flex items-start justify-between mb-2",
  workCompany: "text-base font-semibold pb-2 text-gray-900",
  workRole: "text-base font-medium text-gray-700",
  workDuration: color => `text-sm font-bold italic`,
  workDesc: "text-sm text-gray-600 font-medium leading-relaxed"
};


export const containerStyles = {
  main: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
  header: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-white to-violet-50 border border-violet-100 rounded-2xl py-4 px-6 mb-6 shadow-sm",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8",
  formContainer: "bg-white border border-violet-100 rounded-2xl overflow-hidden shadow-sm",
  previewContainer: "bg-white border border-violet-100 rounded-2xl overflow-hidden shadow-sm p-4",
  previewInner: "w-full max-w-[800px] mx-auto",
  modalContent: "w-[90vw] h-[80vh]",
  pdfPreview: "w-full p-4 flex justify-center",
  hiddenThumbnail: "bg-white shadow-lg max-w-[400px] mx-auto"
};


export const statusStyles = {
  completionBadge: "inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700",
  modalBadge: "inline-flex items-center gap-2 bg-violet-100 px-3 py-1 rounded-full text-sm font-medium text-violet-700",
  error: "flex items-center gap-3 text-sm font-medium text-amber-700 bg-amber-50 border border-amber-200 px-4 py-3 rounded-xl mb-4"
};
