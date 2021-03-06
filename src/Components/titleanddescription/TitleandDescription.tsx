import React from 'react'
import './TitleandDescription.css'

 type Props = {
       titulo : string;
       sub:string;
       text:string;
       text2:string;
 }
 function TitleandDescription(props:Props){
      return(
            <div className='TD'>
                  <h1 className='TD__h1--title'>{props.titulo}</h1>
                  <div className='TD__div--container'>
                        <h2 className='TD__h2--sub'>{props.sub}</h2>
                        <p className='TD__p--text'>{props.text}</p>
                        <br/>
                        <p className='TD__p--text'>{props.text2}</p>
                  </div>
            </div>

      );
}
export default TitleandDescription;

