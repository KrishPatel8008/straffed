import React from 'react'
import { Container } from '../index.js'

function ControllerIllustration() {
    return (
        <svg viewBox="0 0 320 240" className="w-full max-w-sm mx-auto">
            <rect x="0" y="0" width="320" height="240" rx="20" fill="#134e4a" />
            <path
                d="M100 120c0-22 18-40 40-40h40c22 0 40 18 40 40l14 46c4 14-6 28-20 28-6 0-12-2-16-7l-14-16h-48l-14 16c-4 5-10 7-16 7-14 0-24-14-20-28z"
                fill="#ea580c"
            />
            <circle cx="120" cy="110" r="8" fill="#134e4a" />
            <rect x="112" y="102" width="16" height="16" rx="3" fill="#134e4a" opacity="0" />
            <rect x="116" y="102" width="8" height="16" fill="#fdba74" />
            <rect x="108" y="110" width="24" height="8" fill="#fdba74" />
            <circle cx="200" cy="102" r="6" fill="#fdba74" />
            <circle cx="216" cy="118" r="6" fill="#fdba74" />
            <circle cx="200" cy="134" r="6" fill="#fdba74" />
            <circle cx="184" cy="118" r="6" fill="#fdba74" />
        </svg>
    )
}

function WriteIllustration() {
    return (
        <svg viewBox="0 0 320 240" className="w-full max-w-sm mx-auto">
            <rect x="0" y="0" width="320" height="240" rx="20" fill="#134e4a" />
            <rect x="90" y="50" width="140" height="150" rx="10" fill="#fff7ed" />
            <rect x="108" y="76" width="104" height="10" rx="5" fill="#ea580c" />
            <rect x="108" y="100" width="104" height="8" rx="4" fill="#fdba74" />
            <rect x="108" y="118" width="80" height="8" rx="4" fill="#fdba74" />
            <rect x="108" y="136" width="104" height="8" rx="4" fill="#fdba74" />
            <rect x="108" y="154" width="60" height="8" rx="4" fill="#fdba74" />
            <path d="M188 168 L220 168 L214 190 L182 190 Z" fill="#ea580c" />
            <circle cx="160" cy="184" r="4" fill="#ea580c" />
        </svg>
    )
}

function BuildIllustration() {
    return (
        <svg viewBox="0 0 320 240" className="w-full max-w-sm mx-auto">
            <rect x="0" y="0" width="320" height="240" rx="20" fill="#134e4a" />
            <rect x="80" y="70" width="160" height="100" rx="8" fill="#fff7ed" />
            <rect x="94" y="84" width="132" height="60" rx="4" fill="#134e4a" />
            <text x="100" y="112" fill="#fdba74" fontSize="20" fontFamily="monospace">
                &lt;/&gt;
            </text>
            <text x="140" y="132" fill="#ea580c" fontSize="14" fontFamily="monospace">
                v1.0
            </text>
            <rect x="140" y="172" width="40" height="10" rx="3" fill="#fff7ed" />
            <circle cx="230" cy="80" r="14" fill="#ea580c" />
            <path
                d="M230 70 v-4 M230 94 v-4 M220 80 h-4 M244 80 h-4 M223 73 l-3-3 M237 73 l3-3 M223 87 l-3 3 M237 87 l3 3"
                stroke="#ea580c"
                strokeWidth="2"
            />
        </svg>
    )
}

const sections = [
    {
        title: "Honest reviews, no fluff",
        text: "Every post here is something I actually played through myself — no press copies, no sponsor scripts. Just ratings, thoughts, and the occasional list of bugs that annoyed me more than they should have.",
        Illustration: ControllerIllustration,
        reverse: false,
    },
    {
        title: "Written by one person, not a team",
        text: "There's no editorial board here, just me typing away after finishing a game (or rage-quitting one). Expect a casual voice, some typos I probably missed, and opinions that are entirely my own.",
        Illustration: WriteIllustration,
        reverse: true,
    },
    {
        title: "Still a work in progress",
        text: "This whole site is something I built to learn React, Redux, and Appwrite along the way — so if something looks a little rough around the edges, that's just me figuring it out as I go.",
        Illustration: BuildIllustration,
        reverse: false,
    },
]

function AboutSection() {
    return (
        <div className="w-full py-14">
            <Container>
                <div className="space-y-16">
                    {sections.map(({ title, text, Illustration, reverse }) => (
                        <div
                            key={title}
                            className={`flex flex-col ${
                                reverse ? "md:flex-row-reverse" : "md:flex-row"
                            } items-center gap-8`}
                        >
                            <div className="w-full md:w-1/2">
                                <Illustration />
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