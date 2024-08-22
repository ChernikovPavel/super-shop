import React, { useState } from 'react'

const Btn1 = () => <svg width="127" className='svg-test' height="35" viewBox="0 0 127 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M112.409 0H12.7411L0 22.6603L12.7411 35H116.725L127 12.5641L112.409 0Z" fill="#7E7E7E"/>
<path fillRule="evenodd" clipRule="evenodd" d="M103.844 35H116.725L127 12.5641L117.771 4.61734L103.844 35Z" fill="#111010"/>
</svg>

const Btn2 = () => <svg className='svg-test' width="127" height="35" viewBox="0 0 127 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className='svg-test' d="M112.409 0H12.7411L0 22.6603L12.7411 35H116.725L127 12.5641L112.409 0Z" fill="#7E7E7E"/>
<path fillRule="evenodd" clipRule="evenodd" d="M11.0466 33.3589L12.7411 35H116.725L127 12.5641L112.409 0H26.3389L11.0466 33.3589Z" fill="#111010"/>
</svg>



export default function TestPage() {
    const [varib, chngVarib] = useState(true)
  return (
    <div>
        <button onClick={() => {chngVarib((prev) => prev ? false : true)}} className='btn-primary'>chng</button>

        {
            varib ?         <Btn1></Btn1> : <Btn2></Btn2>
        }

        
        
        </div>
  )
}
