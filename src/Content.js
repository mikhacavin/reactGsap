import React , {useRef,useEffect} from 'react'
import './Content.css'

function Content({timeline}) {
    let h1 = useRef(null);
    let pText = useRef(null);
    let btn = useRef(null);
    useEffect(()=>{
        timeline.from ([h1, pText, btn], 1, {
            opacity : 0,
            y: "100",
            skewY: 10,
            stagger: {
                amount: .4
            }
        },"-=1")
    })
  return (
    <div>
    <div className='content'>
        <h1 className='content-inner-bold' ref={el=>h1=el}>
            <div>Hard Work Beats Talent</div>
            <br />
            <div>when talent doesnt work hard.</div>
        </h1>
        <p ref={el=>pText=el}>
            Lorem Imposhaudakjfn afdwe irwfriwfcerwfncveruigj sadfawrc
        </p>
        <button ref={el=>btn=el}>
            Explore
        </button>
    </div>
    </div>
  )
}

export default Content