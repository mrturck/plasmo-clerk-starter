import {
  SignInButton,
  UserButton,
  useUser
} from "@clerk/chrome-extension"

import React, { useEffect, useState } from "react"


const App = () => {
  const { user } = useUser()
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      
      className="wf-fixed relative wf-top-16  wf-right-0 wf-bg-white wf-shadow wf-p-3 wf-rounded wf-right-4 ">
      <div
        className={'wf-w-[280px]'}>
        <div className="wf-flex wf-items-center  wf-justify-between wf-px-[10px]">
        </div>
        {user?.id ? (
          <>
           
            <UserButton />
            <p>You are signed in</p>
          </>
        ) : (
          <>
            <SignInButton mode="modal" />
            <p>You are not signed in</p>
          </>
        )}
      </div>
    </div>
  )
}

export default App
