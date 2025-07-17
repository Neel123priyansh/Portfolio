import { useNavigate} from "react-router-dom" 
export default function header() {
  const navigate = useNavigate()

  return (
    <div className='fixed z-50 w-full backdrop-blur-lg bg-white/5 border-white/1 flex justify-between items-center max-w-[100%] text-white h-24 mx-auto'>
        <h1 onClick={() => navigate('/Check')} className='text-4xl font-bold font- text-[#00df9a] ml-10'>PRIYANSH NEEL</h1>
        <ul className='flex flex-row text-2xl text-[#00df9a] gap-3 mr-[30px] font-urbanist font-semibold '>
          <li className='p-4 hover:border-b-2 hover:border-[#00df9a] hover:border-opacity-60'>PORTFOLIO</li>
          <li className='p-4 hover:border-b-2 hover:border-[#00df9a] hover:border-opacity-60 '>ABOUT</li>
          <li className='p-4 hover:border-b-2 hover:border-[#00df9a] hover:border-opacity-60'>RESUME</li >
          <li className='p-4 hover:border-b-2 hover:border-[#00df9a] hover:border-opacity-60'>CONTACT ME</li>
        </ul>
    </div>
  )
}