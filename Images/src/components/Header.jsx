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

        setImgUrl1(`https://source.unsplash.com/random/?${option1},${option2}`)
        setImgUrl2(`https://source.unsplash.com/random/?$${option2},${option1}`)

    }
    useEffect(() => {
        getImage()
    })

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