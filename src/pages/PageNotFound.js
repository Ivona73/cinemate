import Image from '../assets/images/pagenotfound.png'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export const PageNotFound=()=>{

    useEffect(()=>{
        document.title='Page Not Found/Cinemate';
    })

    const navigate=useNavigate();

    return(
        <main>
            <section className='flex flex-col justify-center px-2'>
                <div className='flex flex-col items-center my-4 '>
                    <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404 Opps! Page Not Found</p>
                    <div className='max-w-lg'>
                        <img className='rounded' src={Image} alt='404 Page Not Found'/>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <button onClick={()=>navigate('/')} className='bg-blue-900 text-white dark:bg-white dark:text-black px-6 py-2 rounded-lg hover:bg-blue-800 dark:hover:bg-gray-200 transition'>
                        Back to Cinemate
                    </button>
                </div>
            </section>
        </main>
    )
}