import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData();
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/rupjyoti921')
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching GitHub data:', error);
    //             setLoading(false);
    //         });
    // }, []);

    // if (loading) {
    //     return (
    //         <div className="flex justify-center items-center min-h-screen">
    //             <div className="text-2xl text-gray-600">Loading...</div>
    //         </div>
    //     );
    // }

    // if (!data) {
    //     return (
    //         <div className="flex justify-center items-center min-h-screen">
    //             <div className="text-2xl text-red-600">Failed to load GitHub data</div>
    //         </div>
    //     );
    // }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
                    GitHub Profile
                </h1>
                
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    {/* Header Section with Cover */}
                    <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 h-32"></div>
                    
                    {/* Profile Section */}
                    <div className="relative px-8 pb-8">
                        {/* Avatar */}
                        <div className="flex justify-center -mt-16 mb-4">
                            <img 
                                src={data.avatar_url} 
                                alt={data.name || data.login}
                                className="w-32 h-32 rounded-full border-8 border-white shadow-xl"
                            />
                        </div>
                        
                        {/* User Info */}
                        <div className="text-center mb-6">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                {data.name || data.login}
                            </h2>
                            <p className="text-gray-600 text-lg mb-2">@{data.login}</p>
                            {data.bio && (
                                <p className="text-gray-700 max-w-2xl mx-auto mt-4">
                                    {data.bio}
                                </p>
                            )}
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            {/* Followers Card */}
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                                <div className="text-blue-600 mb-2">
                                    <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                    </svg>
                                </div>
                                <p className="text-4xl font-bold text-gray-800 mb-1">
                                    {data.followers}
                                </p>
                                <p className="text-gray-600 font-medium">Followers</p>
                            </div>

                            {/* Following Card */}
                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                                <div className="text-green-600 mb-2">
                                    <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                    </svg>
                                </div>
                                <p className="text-4xl font-bold text-gray-800 mb-1">
                                    {data.following}
                                </p>
                                <p className="text-gray-600 font-medium">Following</p>
                            </div>

                            {/* Repositories Card */}
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                                <div className="text-purple-600 mb-2">
                                    <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-4xl font-bold text-gray-800 mb-1">
                                    {data.public_repos}
                                </p>
                                <p className="text-gray-600 font-medium">Public Repos</p>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="flex flex-wrap justify-center gap-4 text-gray-600">
                            {data.location && (
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span>{data.location}</span>
                                </div>
                            )}
                            {data.company && (
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                                    </svg>
                                    <span>{data.company}</span>
                                </div>
                            )}
                        </div>

                        {/* View Profile Button */}
                        <div className="mt-8 text-center">
                            <a 
                                href={data.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                                View GitHub Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rupjyoti921');
    return response.json();
}