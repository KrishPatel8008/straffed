import React from 'react'
import { Container } from '../index.js'
import valorantImg from '../../assets/valorant.jpg'
import eldenRingImg from '../../assets/elden ring.jpg'
import minecraftImg from '../../assets/minecraft.png'

function GameImage({ src, alt }) {
    return (
        <div className="w-full max-w-sm mx-auto aspect-[4/3] rounded-2xl overflow-hidden bg-teal-950 shadow-lg ring-1 ring-white/10">
            <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
        </div>
    )
}

const sections = [
    {
        title: "Fast, tactical, and unforgiving — FPS reviews",
        text: "Games like Valorant get the deep dive: agent picks, aim duels, and the meta shifts that decide ranked matches. If a shooter lives or dies on split-second decisions, I'm breaking down what worked and what got me killed.",
        image: valorantImg,
        alt: "Valorant gameplay",
        reverse: false,
    },
    {
        title: "Boss fights that ruined my week",
        text: "Single-player worlds like Elden Ring get the full rant treatment — every attempt, every death, every 'okay one more try' at 2am. Expect honest takes on difficulty, lore, and the bosses that nearly broke me.",
        image: eldenRingImg,
        alt: "Elden Ring gameplay",
        reverse: true,
    },
    {
        title: "Minecraft builds worth showing off",
        text: "From redstone contraptions to sprawling survival bases, I showcase whatever I've been building in Minecraft lately — screenshots, world tours, and the occasional creeper-induced disaster.",
        image: minecraftImg,
        alt: "Minecraft build showcase",
        reverse: false,
    },
]

function AboutSection() {
    return (
        <div className="w-full py-14">
            <Container>
                <div className="space-y-16">
                    {sections.map(({ title, text, image, alt, reverse }) => (
                        <div key={title} className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8`}>
                            <div className="w-full md:w-1/2">
                                <GameImage src={image} alt={alt} />
                            </div>
                            <div className="w-full md:w-1/2 text-white text-center md:text-left">
                                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                                <p className="text-white/80 leading-relaxed">{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AboutSection