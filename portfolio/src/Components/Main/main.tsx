import "../../index.css"; 
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

export default function Main() {
  return (
    <div className='flex flex-row px-10 justify-between'>
        <h1 style={{ fontFamily: "Viaoda Libre" }} className="text-7xl tracking-wide font-black mt-[220px]"> Hi there! I'm <span style={{ color: "#b02e2e" }}>Priyansh Neel</span><br /> web developer,<br/> product designer,<br/>maker & future entrepreneur</h1>
    </div>
  )
}