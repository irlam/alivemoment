# AliveMoment - Animated Memory Dashboard

Transform your static photos into dynamic, animated videos with AI-powered photo-to-video animation.

![AliveMoment](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **Photo-to-Video Animation**: Turn single images into moving, expressive memories
- **Multiple Animation Styles**: Choose from waving, hugging, kissing, walking, smiling, and more
- **Download & Share**: Get high-quality animations ready to share anywhere
- **Unlimited Previews**: Preview and edit as many times as you want
- **User Storage & Access**: Full-stack backend with user authentication and storage
- **Modern UI**: Beautiful, responsive interface built with Next.js and Tailwind CSS

## 🚀 Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Backend**: Next.js API Routes
- **Database**: SQLite with Prisma ORM
- **Icons**: Lucide React
- **Authentication**: JWT (ready for implementation)
- **File Upload**: Multipart form data handling

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/irlam/alivemoment.git
cd alivemoment
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
npx prisma generate
npx prisma migrate dev --name init
```

4. Create a `.env` file:
```bash
DATABASE_URL="file:./dev.db"
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
alivemoment/
├── app/
│   ├── api/
│   │   ├── upload/       # File upload endpoint
│   │   └── animate/      # Animation processing endpoint
│   ├── components/
│   │   ├── UploadSection.tsx
│   │   ├── AnimationControls.tsx
│   │   └── PreviewSection.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── lib/
│   └── prisma.ts         # Prisma client
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── migrations/
├── public/
│   ├── uploads/          # Uploaded images
│   └── animations/       # Generated animations
├── package.json
└── README.md
```

## 🗄️ Database Schema

### User Model
- `id`: Unique identifier
- `email`: User email (unique)
- `name`: User name
- `password`: Hashed password
- `animations`: One-to-many relationship with animations

### Animation Model
- `id`: Unique identifier
- `userId`: Foreign key to User
- `originalImage`: Path to original image
- `animatedVideo`: Path to animated video
- `animationType`: Type of animation (wave, hug, kiss, etc.)
- `status`: Processing status (processing, completed, failed)

## 🎨 Animation Styles

Currently supported animation styles:
- **Wave**: Friendly waving gesture
- **Hug**: Warm hugging motion
- **Kiss**: Blowing a kiss
- **Walk**: Walking forward
- **Smile**: Big happy smile
- **Gesture**: Custom gesture

## 🔧 API Endpoints

### POST /api/upload
Upload an image file.

**Request**: Multipart form data with `file` field
**Response**: 
```json
{
  "success": true,
  "url": "/uploads/filename.jpg",
  "filename": "filename.jpg"
}
```

### POST /api/animate
Process an image into an animated video.

**Request**:
```json
{
  "imageUrl": "/uploads/filename.jpg",
  "animationType": "wave"
}
```

**Response**:
```json
{
  "success": true,
  "videoUrl": "/animations/video.mp4",
  "animationType": "wave",
  "message": "Animation processing completed"
}
```

## 🔌 AI Integration (To Be Implemented)

The `/api/animate` endpoint is currently a placeholder. To enable actual AI-powered animation, integrate with one of these services:

- **Runway ML** (https://runwayml.com/) - Advanced AI video generation
- **D-ID** (https://www.d-id.com/) - Realistic talking head animations
- **Synthesia** (https://www.synthesia.io/) - Professional AI video platform
- **Custom ML Model** - First Order Motion Model or similar

Example integration points:
1. Modify `/app/api/animate/route.ts`
2. Add API keys to `.env`
3. Implement service-specific SDK calls
4. Handle async processing with webhooks

## 🛡️ Security Features

- File type validation
- File size limits (10MB)
- SQL injection protection via Prisma
- Input sanitization
- CORS configuration ready

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t alivemoment .
docker run -p 3000:3000 alivemoment
```

## 📝 Future Enhancements

- [ ] User authentication and login
- [ ] User dashboard with animation history
- [ ] Payment integration for premium features
- [ ] Batch processing for multiple images
- [ ] Advanced animation customization
- [ ] Social media integration
- [ ] Mobile app (React Native)
- [ ] Real AI model integration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

Created with ❤️ by the AliveMoment team

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting platform
- Tailwind CSS for the styling system
- Lucide for beautiful icons

---

**Note**: This is a full-stack foundation ready for AI integration. The animation endpoint is currently a placeholder and requires integration with an AI service for actual photo animation functionality.
