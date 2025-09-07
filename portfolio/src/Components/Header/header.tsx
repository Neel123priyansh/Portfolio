import { useNavigate} from "react-router-dom" 
export default function header() {   
  const navigate = useNavigate() 
  
  return (
    <div className='fixed z-50 w-full backdrop-blur-lg px-10 bg-white/5 border-white/1 flex justify-between items-center max-w-[100%] text-white h-24 mx-auto'>    
        <h1 onClick={() => navigate('/Check')} className='text-3xl font-robotocondensed tracking-[0.25em] text-[#252b29]'>PRIYANSH NEEL</h1>      
        <ul className='flex flex-row text-xl justify-between text-[#252b29] gap-10 font-robotocondensed tracking-widest '>   
          <li className='p-4'>PORTFOLIO</li>     
          <li className='p-4'>ABOUT</li>          
          <li className='p-4 rounded-[5px] border-2'>RESUME</li>    
          <li className='p-4'>CONTACT ME</li>      
        </ul>   
    </div>  
  )     
}     