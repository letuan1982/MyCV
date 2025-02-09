import React from 'react'

interface VideoProps {
  videoId: string
  title?: string
}

const Video: React.FC<VideoProps> = ({ videoId, title }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="w-full bg-orange-300 mb-4">
      {' '}
      {title && (
        <h2 className="text-xl mb-2 font-bold text-black px-4">{title}</h2>
      )}
      <div className="relative w-full aspect-[16/9] px-4">
        <iframe
          src={`${embedUrl}?autoplay=1&mute=1&loop=1&playlist=${embedUrl.split('/').pop()}`}
          title={title || 'YouTube video player'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default Video
