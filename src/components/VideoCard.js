import React from 'react'

const VideoCard = ({info}) => {
    // extract snippet,statistics from info
    const {snippet,statistics}=info;
    // extract channelTitle,title,thumbnails from snippet
    const {channelTitle,title,thumbnails}=snippet;
    return (
    <div className='p-2 m-2 w-72 border-2 border-gray-950 shadow-lg'>
        <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>

    </div>
  )
}

export default VideoCard