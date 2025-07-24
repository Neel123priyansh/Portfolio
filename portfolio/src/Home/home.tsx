import Header from '../Components/Header/header'
import Main from '../Components/Main/main'
import { SmoothCursor } from "../Components/ui/smooth-cursor";
import Move from './move'

export const Home = () => {
  return (
    <>
    <SmoothCursor />
    <Header/>  
    <Main/>
    <Move/> 
    </>
  )
}

export default Home