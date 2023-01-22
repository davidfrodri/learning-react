import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const format = (userName) => `@${userName}`
    return (
    <section className='PanelFollowT'>
        <TwitterFollowCard formatUserName={format} userName="elonmusk" name="Elon Molusko"/>
        <TwitterFollowCard formatUserName={format} userName="midudev" name="Miguel Angel Duran"/>
        <TwitterFollowCard formatUserName={format} userName="kikobeats" name="Kiko Beats"/>
    </section>
    )
}