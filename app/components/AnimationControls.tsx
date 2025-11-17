'use client';

import { Hand, Heart, Users, Footprints, Smile, Sparkles } from 'lucide-react';

interface AnimationControlsProps {
  selectedAnimation: string;
  onAnimationSelect: (animation: string) => void;
  onAnimate: () => void;
  isProcessing: boolean;
  disabled: boolean;
}

const animationStyles = [
  { id: 'wave', name: 'Wave', icon: Hand, description: 'Friendly waving gesture' },
  { id: 'hug', name: 'Hug', icon: Users, description: 'Warm hugging motion' },
  { id: 'kiss', name: 'Kiss', icon: Heart, description: 'Blowing a kiss' },
  { id: 'walk', name: 'Walk', icon: Footprints, description: 'Walking forward' },
  { id: 'smile', name: 'Smile', icon: Smile, description: 'Big happy smile' },
  { id: 'gesture', name: 'Gesture', icon: Sparkles, description: 'Custom gesture' },
];

export default function AnimationControls({
  selectedAnimation,
  onAnimationSelect,
  onAnimate,
  isProcessing,
  disabled,
}: AnimationControlsProps) {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Choose Animation Style</h3>
      
      <div className="grid grid-cols-2 gap-3 mb-6">
        {animationStyles.map((style) => {
          const Icon = style.icon;
          return (
            <button
              key={style.id}
              onClick={() => onAnimationSelect(style.id)}
              disabled={disabled}
              className={`p-4 rounded-lg border-2 text-left transition ${
                selectedAnimation === style.id
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon className={`w-5 h-5 ${
                  selectedAnimation === style.id ? 'text-purple-600' : 'text-gray-600'
                }`} />
                <span className="font-semibold">{style.name}</span>
              </div>
              <p className="text-xs text-gray-500">{style.description}</p>
            </button>
          );
        })}
      </div>

      <button
        onClick={onAnimate}
        disabled={disabled || isProcessing}
        className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition ${
          disabled || isProcessing
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
        }`}
      >
        {isProcessing ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Animating...
          </span>
        ) : (
          'Create Animation'
        )}
      </button>

      <p className="text-xs text-gray-500 mt-3 text-center">
        Processing typically takes 10-30 seconds
      </p>
    </div>
  );
}
