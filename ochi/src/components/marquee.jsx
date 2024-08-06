import React from 'react';
import { motion } from 'framer-motion';
function marquee() {
    return (
        <div className='w-full py-20 bg-[#004d43] rounded-xl mt-32'>
            <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-10'>
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{
                        ease: 'linear',
                        repeat: Infinity,
                        duration: 5,
                    }}
                    className='text-[20vw] leading-none font-semibold tracking-tighter uppercase'
                >
                    WE ARE OCHI
                </motion.h1>
                <motion.h1 className='text-[20vw] leading-none font-semibold tracking-tighter uppercase'>
                    WE ARE OCHI
                </motion.h1>
                <motion.h1 className='text-[20vw] leading-none font-semibold tracking-tighter uppercase'>
                    WE ARE OCHI
                </motion.h1>
            </div>
        </div>
    );
}

export default marquee;
