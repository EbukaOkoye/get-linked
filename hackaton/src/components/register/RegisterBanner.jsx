import image from '../../assets/contact-img.svg'
import { grey, purple } from "../../utilities/utils"
import man from '../../assets/walking-man.svg'
import woman from '../../assets/walking-girl.svg'


const RegisterBanner = () => {
  return (
    <>
        <div className="register-banner bg-mainBlue grid grid-cols-1 lg:grid-cols-2 gap-5 p-8">
            <div className="left-img">
                <img className="w-5 h-5 ml-12" src={purple} alt="" />
                <img src={image} alt="" />
                <img className="w-5 h-5 mb-8" src={grey} alt="" />
            </div>
            <div className="right-form">
                <div className="form-container  bg-gradient-to-tl from-transparent to-mainBlue py-4 px-8">
                    <img className='w-5 h-5 ml-auto mr-20' src={purple} alt="" />
                    <h2 className='text-xl lg:text-3xl text-brightPurple font-custom font-bold py-3'>Register</h2>
                    <p className='flex '>
                        <span className='text-xs text-white font-mont'>Be part of this movement!</span>
                        <span><img src={woman} alt="" /></span>
                        <span><img src={man} alt="" /></span>
                    </p>
                    <form></form>
                </div>
            </div>
        </div>
    </>
  )
}

export default RegisterBanner