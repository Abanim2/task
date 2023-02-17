import React from 'react'

function Aside() {
  return (

    // this shows the content to the left of world map
    <div className='aside'>
      <p>All users <span>DETAIL &gt; </span></p>
      <p id='users'>2,431,340</p>
      <div className="side-data">
        <div className="side-box purple-box"><div className='purple-center'></div></div>
        <div className='side-data-text'>
          <p>Total earning</p>
          <p>540,549</p>
        </div>
      </div>
      <div className="side-data">
        <div className="side-box cyan-box"><div className='cyan-center'></div></div>
        <div className='side-data-text'>
          <p>Sales</p>
          <p>1,205,677</p>
        </div>
      </div>
      <div className="side-data">
        <div className="side-box orange-box"><div className='orange-center'></div></div>
        <div className='side-data-text'>
          <p>Purchase</p>
          <p>48,430,039</p>
        </div>
      </div>


      {/*  circular indecators are added here  */}
      <div className="bootom-indicators">
        <div className="bottom-content-wrap">
          <div className="circle-wrap">
            <div className="circle">
              <div className="mask full">
                <div className="fill"></div>
              </div>
              <div className="mask half">
                <div className="fill"></div>
              </div>
              <div className="inside-circle"> 27% </div>
            </div>
          </div>
          <div className='bottom-circle-text'>   <p className='circle-text'>92,980</p>
            <p className='circle-text'>Active users</p></div>
        </div>

        <div className="bottom-content-wrap">
          <div className="circle-wrap">
            <div className="circle">
              <div className="mask full">
                <div className="fill"></div>
              </div>
              <div className="mask half">
                <div className="fill"></div>
              </div>
              <div className="inside-circle"> 67% </div>
            </div>
          </div>
          <div className='bottom-circle-text'>   <p className='circle-text'>22,652</p>
            <p className='circle-text'>New users</p></div>
        </div>
      </div>


    </div>
  )
}

export default Aside
