import React, { useState, useRef, useEffect } from 'react';
import { Edit, Camera, Trash2, Check } from 'lucide-react';

export const ProfilePhotoSelector = ({ image, setImage, preview, setPreview }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(preview || null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (preview) setPreviewUrl(preview);
  }, [preview]);

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setPreview?.(url);
    }
  };

  const handleRemove = () => {
    setImage(null);
    setPreviewUrl(null);
    setPreview?.(null);
  };

  const chooseFile = () => inputRef.current.click();

  return (
    <div className="relative w-32 h-32 rounded-full overflow-hidden cursor-pointer">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />
      {!previewUrl ? (
        <div
          className={`flex items-center justify-center w-full h-full bg-gray-100 rounded-full border-2 border-dashed transition-colors ${
            hovered ? 'bg-gray-200' : ''
          }`}
          onClick={chooseFile}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <button type="button" className="p-2 bg-white rounded-full shadow">
            <Camera size={20} />
          </button>
        </div>
      ) : (
        <div
          className="relative w-full h-full group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className={`w-full h-full overflow-hidden rounded-full border ${
              hovered ? 'opacity-80' : ''
            }`}
            onClick={chooseFile}
          >
            <img src={previewUrl} alt="profile" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center bg-white/80 text-gray-800 rounded-full shadow hover:bg-white"
              onClick={chooseFile}
            >
              <Edit size={16} />
            </button>
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full shadow hover:bg-red-600"
              onClick={handleRemove}
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const TitleInput = ({ title, setTitle }) => {
  const [editing, setEditing] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex items-center gap-2">
      {editing ? (
        <>
          <input
            type="text"
            placeholder="Resume title"
            className={`px-3 py-2 rounded-md border outline-none transition w-64 ${
              focused ? 'border-violet-500 ring-2 ring-violet-200' : 'border-gray-300'
            }`}
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoFocus
          />
          <button
            className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={() => setEditing(false)}
          >
            <Check className="w-5 h-5" />
          </button>
        </>
      ) : (
        <>
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            className="p-2 text-gray-600 hover:text-violet-600"
            onClick={() => setEditing(true)}
          >
            <Edit className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
};
