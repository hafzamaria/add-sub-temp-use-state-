import React from 'react'
import {useState} from "react";
import ReactDOM from "react-dom";
import "./style.css";

 const App = () =>{
  
  const [temp,setTemp]=useState(35);

  const IncNum =()=>{
    setTemp(temp +1);
  };

  const DeNum =()=>{
    setTemp( temp-1);
  }
  return(
    <div className='main'>

    {/* <h2>You can add & subtract here</h2> */}

    <button onClick={IncNum}>+</button>


    <h2>Current Temperature is </h2>
    <h1>{temp}
    <img className='icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEX///8AAADy8vLS0tL7+/v39/fc3NzCwsLv7+/KysouLi6IiIi3t7dwcHDh4eHl5eV8fHyPj49MTEw0NDQnJyevr6+mpqZbW1saGhpSUlJpaWk7OztERERgYGCYmJgQEBBYSKQsAAAE0UlEQVRogcVb57qDIAyto4p11FlXW9//La+9ZWmRoQjnX/sBRyAJSQiXC8Y1iLz7xTyyd+V8ML0Ss8Ru7hDcQoPMQe0sEPummCNnjdQQd/DD7Di5EWb/xqB2GhPUbxaz07nnM/sTYns1XlRggXucT50sl/jewp/1+dQxpHrD36CCf5xv2EY4SaxOD0h9vlVDVgT/4RrbbEhU4D/8PdQg87woDD0vU9CMaW1D1GYNoiTu6w6riTN1Y95EUoLSw72+oj/k9xp4Rcm0R/NwzzwCov7FWsLRYIIPd6O0YtNi+iHhs4eo5XeBQYk6cntl8cZ0l5hyjzcKblc+wiTGv3hbHbYsHjZKzsY9mD2662aHULDQP0NtHkX+k9V+s3nEbM5HvTVzlfP6njJm1afxY1bpIJhV+xGnbf3bpt8QWnkvpelWDcdXk4FVYx8EyTCuh3ywh/zxzdjE4LVsVsXepu1yvbUO9Bmz4TWm2twi9mjRcsrDRjOqw7Ak39jx+xsuUbrlCi+9mUJoqz4AxaJTutnwnnGM/2IGxbbqcb/4ucPtupb0x0vNGGERXozKDohLCWwl3OM1PMoU3AK1voBizvesGbXltRI3Peed8RhlOjq2kjHh92S5dvuKLll0BRefyHa5l/gDYoIr2S5EQLfVUgpkw1u5Dg0RsGPMtIoX4sazmdHHTM9bRlqxcA/HmanN68TyitfoqYMZ+78SMyFehKaY18fOlcDX9rHl5jqWKrjjYIF/AmGP8c1tpgQcVHPFFiDn5ZApWQOKWsVdcawLiqcNH+Dj7EwFV3iAkgGQx7zkqUC30KRvujM6g1BoJdXgBCDxLo1lLTGQ8ptM1n7hoZ02zoyTWgZSdytcUahhnBmv90HPZA9ya0KGoo3JODP2i7T4JmpAeSXzlgxt9aT1zJID9KFG88woKf4yT43cQfOmDBsU5VD6OJDvZkHK4FktESNoBzy2RqWkiR7AWPgpnyjSBpgW7M0zX1p71NCYSUb/WmFxwQdrfjA6uGxIOIx5Kgt6Da3ZZMGaISfFgg1HJ5d5f/SSwYyHxkSGLFAu2IKXYtE3w8GeBTmz6Iej6MPCZqPM/2TBiqPNtqDZyKhYiPeuKElpccUtBCAo9rGQQcJ5MwuqjbKFTwu77dib9mmZ4VYYwJ6YDx9EV6r4FkDbpcsH4N8Nifkep4tqLDRdcn0BQ8maXy7anLDkeMyNChQE/fdcGRpRZKHJ7Z6mYAAfDWKVxXeao54YSP5O83LB9/ytDqOGb+5riVUk99caMuPk/loqK5bo4ya39pKhBamMOugj7hiIVGgcOcR8Mox0hQZdl9LtDgkAKUhUKT2nyln2VsuHZASVapz5kylutbKrL1yqkk6tBmk5b/VnIRFVw6RaebXY79kSKeU5AF2EOSqtNsSiijOWlpRF1aJT7jPHyyrbXGrh7vGy0y7iGd6yorIMBVPw16XFB+I3d1U6W3NqwEGUr4pT22OZsGRdk3vrHwFYzf4KvPfrp4Z7o3pWHiBfDznH4GWav5Mw+rwGaN75wKpnPjjlL7ySMbIAla4oXbU+/KYzfIkUquJb3XmJu9xbgFpO/RUhfgFxS8PTXmZ93n0wKuD/p/ssxO8+jtJHTdxTj12cqSvj5HRaCm4WeB+oPPH5A1qrLyWiIZFrAAAAAElFTkSuQmCC" alt="" />
    </h1>
    <button onClick={DeNum}>-</button>
    </div>

  )
 }
   ReactDOM.render(< App/>, document.querySelector("#root"));
