// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import grangeInsuranceLogo from './assets/grange_insurance.png';
import { IoSearchSharp } from 'react-icons/io5';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="main-wrapper">
        <main>
          <nav>
            <img src={grangeInsuranceLogo} height="80px" />

            <div>
              <button id="findAnAgencyBtnOutlined">Find an agency</button>
              <button id="findAnAgencyBtnOutlined">Log in</button>
              <IoSearchSharp fontSize="1.6rem" />
            </div>
          </nav>
        </main>
        <div className="main-img">
          <div>
            <h1>
              Customize your insurance with a Grange Insurance agency in your
              area
            </h1>
            <button id="findAnAgencyBtnFilled">Find an agency</button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: 'white',
            height: '600px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              width: '1000px',
              position: 'relative',
              top: '-180px',
              backgroundColor: 'white',
              display: 'flex',
              padding: '40px',
              gap: '40px'
            }}
          >
            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>
                Grange partners with local, independent insurance agents
              </div>
              <p>
                In under one minute, you can find an agency near you who can
                provide a quote on Grange auto, home, or business insurance.
              </p>
            </div>
            <img
              src="https://www.grangeinsurance.com/-/media/resources/photos/homepage/home-agent-323x175_352347795.jpg"
              height="160px"
            />
          </div>
        
        </div>
      </div>
    </>
  );
}

export default App;
