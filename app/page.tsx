'use client';

import { useState } from 'react';
import { Upload, Sparkles, Share2, Download, Wand2, Heart, Hand, Users, Video } from 'lucide-react';
import UploadSection from './components/UploadSection';
import AnimationControls from './components/AnimationControls';
import PreviewSection from './components/PreviewSection';

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedAnimation, setSelectedAnimation] = useState<string>('wave');
  const [animatedVideo, setAnimatedVideo] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl);
    setAnimatedVideo(null);
  };

  const handleAnimate = async () => {
    if (!uploadedImage) return;
    
    setIsProcessing(true);
    try {
      const response = await fetch('/api/animate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageUrl: uploadedImage,
          animationType: selectedAnimation,
        }),
      });

      if (!response.ok) throw new Error('Animation failed');
      
      const data = await response.json();
      setAnimatedVideo(data.videoUrl);
    } catch (error) {
      console.error('Animation error:', error);
      alert('Failed to animate photo. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AliveMoment
              </h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#features" className="text-gray-600 hover:text-purple-600 transition">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition">How It Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition">Pricing</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Bring Photos to Life
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Turn a single image into a moving, expressive memory with AI-powered photo-to-video animation
          </p>
        </div>

        {/* Main Application Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <UploadSection onImageUpload={handleImageUpload} />
            <div>
              <AnimationControls 
                selectedAnimation={selectedAnimation}
                onAnimationSelect={setSelectedAnimation}
                onAnimate={handleAnimate}
                isProcessing={isProcessing}
                disabled={!uploadedImage}
              />
            </div>
          </div>
          
          {(uploadedImage || animatedVideo) && (
            <PreviewSection 
              originalImage={uploadedImage}
              animatedVideo={animatedVideo}
              isProcessing={isProcessing}
            />
          )}
        </div>

        {/* Features Section */}
        <div id="features" className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Amazing Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Video className="w-10 h-10 text-purple-600" />}
              title="Photo-to-Video Animation"
              description="Transform static images into dynamic, lifelike videos"
            />
            <FeatureCard 
              icon={<Wand2 className="w-10 h-10 text-pink-600" />}
              title="Multiple Animation Styles"
              description="Choose from waving, hugging, kissing, walking, and more"
            />
            <FeatureCard 
              icon={<Download className="w-10 h-10 text-blue-600" />}
              title="Download & Share"
              description="Get high-quality animations ready to share anywhere"
            />
            <FeatureCard 
              icon={<Sparkles className="w-10 h-10 text-purple-600" />}
              title="Unlimited Previews"
              description="Preview and edit as many times as you want"
            />
          </div>
        </div>

        {/* How It Works */}
        <div id="how-it-works" className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard 
              number="1"
              title="Upload Your Photo"
              description="Choose any photo you want to bring to life"
            />
            <StepCard 
              number="2"
              title="Select Animation Style"
              description="Pick from various gestures and movements"
            />
            <StepCard 
              number="3"
              title="Download & Share"
              description="Get your animated video and share with loved ones"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 AliveMoment. Turn your memories into moving moments.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl font-bold rounded-full mb-4">
        {number}
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
