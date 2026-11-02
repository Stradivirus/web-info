import React, { useState, useEffect, ReactNode } from 'react';
import { Calendar, GitBranch, ChevronDown, ChevronUp } from 'lucide-react';

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, images, currentIndex, setCurrentIndex }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
          break;
        case 'ArrowRight':
          setCurrentIndex(prev => (prev < images.length - 1 ? prev + 1 : prev));
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length, onClose, setCurrentIndex]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full mx-4">
        <img 
          src={images[currentIndex]} 
          alt="확대된 이미지" 
          className="w-full h-auto"
          onClick={(e) => e.stopPropagation()}
        />
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

export interface StudyAccordionProps {
  title: string;
  date: string;
  category: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export const StudyAccordion: React.FC<StudyAccordionProps> = ({ title, date, category, isOpen, onToggle, children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [images, setImages] = useState<string[]>([]);

  const registerImages = (imageArray: string[]) => {
    setImages(imageArray);
  };

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { 
        onImageClick: handleImageClick,
        registerImages: registerImages
      });
    }
    return child;
  });

  return (
    <div className="bg-slate-50 rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
      <button
        className="w-full p-6 text-left border-b border-gray-200 focus:outline-none"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
            <div className="flex gap-4 mt-2 text-gray-600">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {date}
              </span>
              <span className="flex items-center gap-2">
                <GitBranch className="w-4 h-4" />
                {category}
              </span>
            </div>
          </div>
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      
      {isOpen && (
        <div className="p-6">
          {childrenWithProps}
        </div>
      )}

      <ImageModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
      />
    </div>
  );
};