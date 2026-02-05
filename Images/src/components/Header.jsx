import React, { useEffect, useState } from 'react'
import Select from 'react-select';
const Header = () => {

    const [option1, setOption1] = useState("")
    const [option2, setOption2] = useState("")
    const [imgUrl1, setImgUrl1] = useState()
    const [imgUrl2, setImgUrl2] = useState()

    const carOptions1 = [
        { value: 'nature', label: 'Nature' },
        { value: 'animals', label: 'Animals' },
        { value: 'architecture', label: 'Architecture' },
        { value: 'food', label: 'Food' },
        { value: 'travel', label: 'Travel' },
        { value: 'technology', label: 'Technology' },
        { value: 'people', label: 'People' },
        { value: 'sports', label: 'Sports' },
        { value: 'music', label: 'Music' },
        { value: 'art', label: 'Art' },
        { value: 'fashion', label: 'Fashion' },
        { value: 'cars', label: 'Cars' },
        { value: 'movies', label: 'Movies' },
        { value: 'books', label: 'Books' },
        { value: 'science', label: 'Science' },
        { value: 'fitness', label: 'Fitness' },
        { value: 'history', label: 'History' },
        { value: 'business', label: 'Business' },
        { value: 'celebrities', label: 'Celebrities' },
        { value: 'vintage', label: 'Vintage' },
        // Add more options as needed
    ];
    const carOptions2 = [
        { value: 'mountains', label: 'Mountains' },
        { value: 'underwater', label: 'Underwater' },
        { value: 'nightlife', label: 'Nightlife' },
        { value: 'deserts', label: 'Deserts' },
        { value: 'aviation', label: 'Aviation' },
        { value: 'dance', label: 'Dance' },
        { value: 'gardens', label: 'Gardens' },
        { value: 'streetart', label: 'Street Art' },
        { value: 'weather', label: 'Weather' },
        { value: 'colors', label: 'Colors' },
        { value: 'superheroes', label: 'Superheroes' },
        { value: 'toys', label: 'Toys' },
        { value: 'instruments', label: 'Instruments' },
        { value: 'sunrises', label: 'Sunrises' },
        { value: 'medieval', label: 'Medieval' },
        { value: 'fantasy', label: 'Fantasy' },
        { value: 'coffee', label: 'Coffee' },
        { value: 'rivers', label: 'Rivers' },
        { value: 'cartoons', label: 'Cartoons' },
        { value: 'insects', label: 'Insects' },
        // Add more options as needed
    ];

    const handleChange1 = (selectedOption) => {
        // console.log(`Selected car: ${selectedOption.value}`);
        setOption1(selectedOption.value)
    };
    const handleChange2 = (selectedOption) => {
        // console.log(`Selected car: ${selectedOption.value}`);
        setOption2(selectedOption.value)
    };


    const getImage = () => {
        // Using Lorem Picsum as Unsplash Source API was deprecated
        const randomSeed1 = Math.random().toString(36).substring(7)
        const randomSeed2 = Math.random().toString(36).substring(7)
        setImgUrl1(`https://picsum.photos/seed/${randomSeed1}/800/600`)
        setImgUrl2(`https://picsum.photos/seed/${randomSeed2}/800/600`)
    }

    // Load initial images on mount
    useEffect(() => {
        getImage()
    }, [])

    // Refresh images when options change
    useEffect(() => {
        if (option1 || option2) {
            getImage()
        }
    }, [option1, option2])

    return (
        <div>
            <header>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, Baby!</h1>

                            <p className="mt-1.5 text-sm text-gray-500">Let's get some Images! 🎉</p>
                        </div>

                        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">

                            <Select
                                options={carOptions1}
                                placeholder="Select One"
                                onChange={handleChange1}
                            />
                            <Select
                                options={carOptions2}
                                placeholder="Select One"
                                onChange={handleChange2}
                            />
                            <button
                                onClick={getImage}
                                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                            >
                                <span className="text-sm font-medium">Get Random Images</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="  rounded-lg bg-gray-200">
                    <img src={imgUrl1} alt="" />
                </div>
                <div className="  rounded-lg bg-gray-200">
                    <img src={imgUrl2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header
