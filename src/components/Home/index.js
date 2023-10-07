import './index.scss';
import LogoTitle from '../../assets/images/ht.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetter';
import Logo from './Logo';
import Loader from 'react-loaders';



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a','u','r','a','v','','J','a','d','h','a','v']
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']

    useEffect (() => {
          setTimeout (() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    },[] )


    return (
        <>
        <div className=" container home-page">
           <div className="text-zone">
            <h1>
               <span className={letterClass}>H</span>
               <span className={`${letterClass} _12`}>i</span> 
               <br /> 
            <span className={`${letterClass} _13`}>i</span> 
            <span className={`${letterClass} _14`}>'m </span> 
        <img src={LogoTitle} alt="developer" />
       <AnimatedLetters letterClass={letterClass}
       strArray={nameArray}
       idx={15} />
        <br />
        <AnimatedLetters letterClass={letterClass}
       strArray={jobArray}
       idx={22} />
        </h1> 
        <h2> Fullstack Developer / Angular / Node Js / React </h2>
        <Link to="/contact" className='flat-button'> CONTACT ME </Link>

        </div>
        <Logo />
        </div>
        < Loader type="pacman" />
        </>

        );
}


export default Home