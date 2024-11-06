import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag,faDumbbell, faTv, faSliders, faWandMagicSparkles, faUser, faFile, faPrint, faGear, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Logo from '/src/assets/form_logo.png'
import Profile from '/src/assets/ben10.jpg'
const menu = () => {
    
    return (
        <div className="bg-zinc-900 text-white py-4 px-5 w-[300px] h-screen rounded-r-lg flex flex-col justify-between">
            <div className="upper flex flex-col gap-12">
                <h1 className='flex items-center gap-1 text-2xl font-bold'><img className='w-8' src={Logo} alt="Logo" />PROOF</h1>
                <p className='font-bold flex items-center gap-1 text-zinc-300'><FontAwesomeIcon className='text-zinc-600 text-2xl' icon={faHashtag} />Get started</p>
                <div className="toolkit flex flex-col gap-2">
                    <h1 className='font-bold text-zinc-600 text-lg'>TOOLKIT</h1>
                    <div className='flex flex-col gap-2 w-1/2 px-6 font-semibold text-zinc-300'>
                        <p className='flex items-center gap-2 justify-between'><FontAwesomeIcon className='text-zinc-600 text-lg' icon={faDumbbell} />Experiences</p>
                        <p className='flex items-center gap-2 justify-between'><FontAwesomeIcon className='text-zinc-600 text-lg' icon={faTv} />Journeys</p>
                        <p className='flex items-center gap-2 justify-between'><FontAwesomeIcon className='text-zinc-600 text-lg' icon={faSliders} />Recommendations</p>
                    </div>
                </div>
            </div>
            <div className="lower flex flex-col gap-12">
                <div className='flex flex-col gap-2 '>
                    <p className='font-bold text-lg text-zinc-600'>UTILITIES</p>
                        <div className='flex flex-col gap-2 w-1/2 px-6 font-semibold text-zinc-300'>
                            <p className='flex items-center gap-2 justify-between'><FontAwesomeIcon className='text-zinc-600 text-lg' icon={faWandMagicSparkles} />Magic</p>
                            <p className='flex items-center gap-2 justify-between'><FontAwesomeIcon className='text-zinc-600 text-lg' icon={faUser} />Audiences</p>
                            <p className='flex items-center gap-2 justify-between'><FontAwesomeIcon className='text-zinc-600 text-lg' icon={faFile} />Pages</p>
                            <p className='flex items-center gap-2 justify-between'><FontAwesomeIcon className='text-zinc-600 text-lg' icon={faPrint} />Templates</p>
                            <p className='flex items-center gap-2 justify-between'><FontAwesomeIcon className='text-zinc-600 text-lg' icon={faGear} />Settings</p>
                        </div>
                </div>
                <div className="user flex items-center justify-between bg-zinc-800 gap-2 w-full h-14 px-2 rounded-full">
                    <div className='flex items-center gap-2'>
                        <img src={Profile} alt="Profile" className='rounded-full w-12' />
                        <p>@ankitbhagat</p>
                    </div>
                    <FontAwesomeIcon className='text-zinc-600 text-lg px-2' icon={faChevronRight} />
                </div>
            </div>
        </div>
    )
}   

export default menu