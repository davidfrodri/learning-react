import { useState } from 'react'

export function TwitterFollowCard ({name, userName, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const [hoverText, setHoverText] = useState("Following")
    
    const imageSrc = `https://unavatar.io/${userName}`
    const textIsFollowing = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }



    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img  
                    className="tw-followCard-avatar" 
                    src={imageSrc} 
                    alt="El avatar de kiko" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside className='asideButton' >
                <button className={buttonClassName} onClick={handleClick} onMouseEnter={() => setHoverText("Unfollow")} onMouseLeave={() => setHoverText("Following")}>
                    {isFollowing ? hoverText : textIsFollowing}
                </button>
            </aside>
        </article>
    )
}