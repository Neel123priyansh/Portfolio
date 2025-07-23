import "../../index.css"; 
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../magicui/terminal";
import { WordRotate } from "../magicui/word-rotate";

export default function Main() {
  return (
    <div className='flex flex-row px-10 justify-between'>
        <h1 style={{ fontFamily: "Viaoda Libre" }} className="text-7xl tracking-wide font-black mt-[200px]"> 
  <span className="flex items-center gap-4">Hi there! I'm <WordRotate className="text-[#b02e2e]" words={["Priyansh Neel", "प्रियांश नील", "پریانش نیل"]} /></span>web developer,<br />product designer,<br />maker & future entrepreneur</h1>
            <Terminal className="mt-[160px] bg-gray-900">
      <TypingAnimation className="text-blue-50">&gt; pnpm dlx shadcn@latest init</TypingAnimation>
      <AnimatedSpan delay={1500} className="text-green-500">
        <span>✔ Preflight checks.</span>
      </AnimatedSpan>
      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ Verifying framework. Found Next.js.</span>
      </AnimatedSpan>
      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Validating Tailwind CSS.</span>
      </AnimatedSpan>
      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Validating import alias.</span>
      </AnimatedSpan>
      <AnimatedSpan delay={3500} className="text-green-500">
        <span>✔ Writing components.json.</span>
      </AnimatedSpan>
      <AnimatedSpan delay={4000} className="text-green-500">
        <span>✔ Checking registry.</span>
      </AnimatedSpan>
      <AnimatedSpan delay={4500} className="text-green-500">
        <span>✔ Updating tailwind.config.ts</span>
      </AnimatedSpan>
      <AnimatedSpan delay={5000} className="text-green-500">
        <span>✔ Updating app/globals.css</span>
      </AnimatedSpan>
      <AnimatedSpan delay={5500} className="text-green-500">
        <span>✔ Installing dependencies.</span>
      </AnimatedSpan>
      <AnimatedSpan delay={6000} className="text-blue-500">
        <span>ℹ Updated 1 file:</span>
        <span className="pl-2">- lib/utils.ts</span>
      </AnimatedSpan>
      <TypingAnimation delay={6500} className="text-muted-foreground">
        Success! Project initialization completed.
      </TypingAnimation>
      <TypingAnimation delay={7000} className="text-muted-foreground">
        You may now add components.
      </TypingAnimation>
    </Terminal>

    </div>
  )
}