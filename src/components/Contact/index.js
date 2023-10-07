





import Loader from 'react-loaders'
import { useEffect, useRef, useState } from 'react'
//import emailjs from '@emailjs/browser'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetter'
import { MapContainer, Marker, TileLayer,Popup } from 'react-leaflet'
import './index.scss'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const Form = useRef ()

    useEffect (() => {
         setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
        }, [])




        // const sendEmail = (e) => {
        //   e.preventDefault();
      
        //   emailjs.sendForm('service_9o1zwyv', 'template_hbssi9e', Form.current, 'PJQEbBoWThyF3IEgB')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        // };
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_9o1zwyv', 'template_hbssi9e', Form.current, 'PJQEbBoWThyF3IEgB')
            .then(
              () => {
                alert('Message successfully sent!')
                window.location.reload(false)
              },
              () => {
                alert('Failed to send the message, please try again')
              }
            )
            }
    
    return (
        <>
    <div className="container contact-page">
    <div className='text-zone'>
    <h1>
    <AnimatedLetters
     letterClass={letterClass}    
     strArray={['C', 'o', 'n','t','a','c','t',' ','m','e']}
     idx={15}   
    />
    </h1>
    <p>
    I'm very ambitious fullstack developer  looking for a role in
        established IT company with the opportunity  because i'm still berozbar unemployed is any recruitor read this kindly contact with me to work with the latest
        technologies on challenging and diverse projects.
    </p>
    <div className="contact-form">
<form ref={Form} onSubmit={sendEmail}>
<dt>
<li className="half">
<input placeholder="Name"  type="text" name="name" required />
</li>
<li className="half">
<input
placeholder="Email"
type="email"
name="email"
required
/>
</li>
<li>
<input placeholder="Subject" type="text" name="subject" required />
</li>
<li>
<textarea  placeholder="message" name="message" required></textarea>
</li>
<li>
<input type="submit" className='flat-button' value="SEND" />
</li>
</dt>
</form>

</div>
</div>

<div className="info-map">
          Gaurav Jadhav,
          <br />
          India,
          <br />
         Nagpur <br />
         Maharashtra <br />
          <br />
          <span>gauravjadhav173@gmail.com</span>
        </div>
        <div  className='map-wrap'>
        <MapContainer center={[21.105339, 79.003590]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[21.105339, 79.003590]}>
              <Popup>Gaurav lives here, come over for a cup of tea :</Popup>
            </Marker>
          </MapContainer>

        </div>
</div>

<Loader type="pacman" />

    </>
    )

}


export default Contact



    
   
    