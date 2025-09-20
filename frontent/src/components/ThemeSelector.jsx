import React, { useRef, useState,useEffect } from 'react';
import { resumeTemplates } from '../utils/data';
import RenderResume from './RenderResume';
import { Check } from 'lucide-react';
import Tabs from './Tabs';
import {TemplateCard} from './card';
import { DUMMY_RESUME_DATA } from '../utils/data.js'; //you have to change this thing

const TAB_DATA = [{ label: 'Templates' }];

const ThemeSelector = ({ selectedTheme, setSelectedTheme, resumedata, onClose }) => {
  const resumeRef = useRef(null);
  const [baseWidth, setBaseWidth] = useState(800);

  // selected theme Template using id
  const initialIndex = resumeTemplates.findIndex((t) => t.id === selectedTheme);
  const [selectedTemplate, setSelectedTemplate] = useState({
    theme: selectedTheme || resumeTemplates[0]?.id || '',
    index: initialIndex >= 0 ? initialIndex : 0,
  });  

  const [tabValue, setTabValue] = useState('Templates');

  const handleThemeSelection = () => {
    setSelectedTheme(selectedTemplate.theme);
    onClose();
  };

  const updateBaseWidth = () => {
    if (resumeRef.current?.offsetWidth) {
      setBaseWidth(resumeRef.current.offsetWidth);
    }
  };

  useEffect(()=>{
    updateBaseWidth();
    window.addEventListener("resize",updateBaseWidth)
    return ()=>{
      window.removeEventListener("resize",updateBaseWidth)
    }
  },[])


  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:p-6 bg-gradient-to-r from-white via-violet-50 to-violet-100 rounded-2xl border-violet-100">
        <Tabs tabs={TAB_DATA} activeTab={tabValue} setActiveTab={setTabValue} />

        <button
          className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-black rounded-2xl hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          onClick={handleThemeSelection}
        >
          <Check size={18} />
          Apply Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] lg:max-h-[70vh] overflow-auto p-2">
            {resumeTemplates.map((template, index) => (
              <TemplateCard
                key={`template_${index}`}
                thumbnailImg={template.thumbnailImg}
                isSelected={selectedTemplate.index === index}
                onSelect={() =>
                  setSelectedTemplate({
                    theme: template.id,
                    index,
                  })
                }
              />
            ))}
          </div>
        </div>

        {/* right area */}
        <div
          className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-4 sm:p-6"
          ref={resumeRef}
        >
          <RenderResume
            templateId={selectedTemplate?.theme || ''}
            resumeData={resumedata || DUMMY_RESUME_DATA}
            containerWidth={baseWidth}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
