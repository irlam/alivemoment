'use client';

import { Download, Share2 } from 'lucide-react';

interface PreviewSectionProps {
  originalImage: string | null;
  animatedVideo: string | null;
  isProcessing: boolean;
}

export default function PreviewSection({ originalImage, animatedVideo, isProcessing }: PreviewSectionProps) {
  const handleDownload = () => {
    if (!animatedVideo) return;
    
    const link = document.createElement('a');
    link.href = animatedVideo;
    link.download = `alivemoment-${Date.now()}.mp4`;
    link.click();
  };

  const handleShare = async () => {
    if (!animatedVideo) return;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Animated Photo',
          text: 'Check out this animated photo I created with AliveMoment!',
          url: animatedVideo,
        });
      } catch (error) {
        console.error('Share error:', error);
      }
    } else {
      // Fallback: copy link
      navigator.clipboard.writeText(animatedVideo);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-semibold mb-4">Preview</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Original */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">Original Photo</p>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            {originalImage && (
              <img 
                src={originalImage} 
                alt="Original" 
                className="w-full h-auto"
              />
            )}
          </div>
        </div>

        {/* Animated */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">Animated Result</p>
          <div className="bg-gray-100 rounded-lg overflow-hidden min-h-[200px] flex items-center justify-center">
            {isProcessing ? (
              <div className="text-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4" />
                <p className="text-gray-600">Creating your animation...</p>
              </div>
            ) : animatedVideo ? (
              <video 
                src={animatedVideo} 
                controls 
                autoPlay 
                loop
                className="w-full h-auto"
              />
            ) : (
              <p className="text-gray-400">Click "Create Animation" to generate</p>
            )}
          </div>

          {animatedVideo && !isProcessing && (
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleDownload}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                <Download className="w-5 h-5" />
                Download
              </button>
              <button
                onClick={handleShare}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
              >
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
