import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'elonmusk',
        name: 'Elon Molusko',
        initialIsFollowing: 'true'
    },
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        initialIsFollowing: 'true'
    },
    {
        userName: 'kikobeats',
        name: 'Kiko Beats',
        initialIsFollowing: 'false'
    }
]

export function App () {
    return (
        <section className='PanelFollowT'>
            {
                users.map(user => {
                    const { userName, name, initialIsFollowing } = user
                    return (
                        <TwitterFollowCard 
                            key={userName} 
                            userName={userName} 
                            name={name} 
                            initialIsFollowing={initialIsFollowing} />
                    )
                })
            }
        </section>
    )
}