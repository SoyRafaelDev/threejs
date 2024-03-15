import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import {CustomButton} from '../components'
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';
const Home = () => {
    const snap = useSnapshot(state);

  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation ('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img src='./threejs.png' alt='logo' className='w-8 h-8 object-contain'/>
                </motion.header>

                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation} className='flex flex-col gap-5'>
                        <h1 className='head-text'>
                            LET'S <br className='xl:block hidden' /> DO IT.
                        </h1>
                    </motion.div>
                    <motion.div>
                        <p className='max-w-md font-normal text-gray-600 text-base'>
                            Create your unique and exclusive shirt with our brand-new 3D costomization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
                        </p> <br />
                       <CustomButton
                       type="filled"
                       title="Custimozi It"
                       handleClick={() => state.intro = false}
                       customStyle="w-fit px-4 py-2.5 font-blod text-sm"
                       />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home