import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import appwriteService from "../appwrite/config";
import { Container, PostCard, AboutSection } from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        appwriteService.getPosts()
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className='w-full'>
            {/* Hero section */}
            <div className='w-full py-16 bg-teal-950 text-white text-center'>
                <Container>
                    <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                        Welcome to GameBlog 🎮
                    </h1>
                    <p className='text-teal-100 max-w-xl mx-auto text-lg'>
                        Just a small corner of the internet where I write about the games I'm
                        playing — reviews, hot takes, and the occasional rant about a boss
                        fight that ruined my week.
                    </p>

                    {!authStatus && (
                        <div className='mt-8 flex flex-wrap gap-4 justify-center'>
                            <Link
                                to='/login'
                                className='px-6 py-2 rounded-full bg-orange-600 hover:bg-orange-700 duration-200 font-medium'
                            >
                                Login
                            </Link>
                            <Link
                                to='/signup'
                                className='px-6 py-2 rounded-full border border-orange-500 hover:bg-orange-600 duration-200 font-medium'
                            >
                                Create an account
                            </Link>
                        </div>
                    )}

                    {authStatus && (
                        <div className='mt-8'>
                            <Link
                                to='/add-post'
                                className='px-6 py-2 rounded-full bg-orange-600 hover:bg-orange-700 duration-200 font-medium'
                            >
                                Write a new post
                            </Link>
                        </div>
                    )}
                </Container>
            </div>

            {/* About section - alternating image/text rows */}
            <AboutSection />

            {/* Posts section */}
            <div className='w-full py-10'>
                <Container>
                    {loading ? (
                        <p className='text-center text-white/70'>Loading posts...</p>
                    ) : posts.length === 0 ? (
                        <div className='text-center'>
                            <h2 className='text-2xl font-bold text-white mb-2'>
                                {authStatus ? "No posts yet" : "Nothing to show yet"}
                            </h2>
                            <p className='text-white/70'>
                                {authStatus
                                    ? "Nobody's posted anything yet — want to be the first?"
                                    : "Log in to start reading posts from the community."}
                            </p>
                        </div>
                    ) : (
                        <>
                            <h2 className='text-2xl font-bold text-white mb-6 text-center'>
                                Latest Posts
                            </h2>
                            <div className='flex flex-wrap -m-2'>
                                {posts.map((post) => (
                                    <div key={post.$id} className='p-2 w-full sm:w-1/2 lg:w-1/4'>
                                        <PostCard {...post} />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </Container>
            </div>
        </div>
    )
}

export default Home