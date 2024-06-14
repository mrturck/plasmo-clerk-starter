import Bookmark from "data-base64:~assets/Bookmark.svg"
import Comment from "data-base64:~assets/Comment.svg"
import someCoolImage from "data-base64:~assets/Wonderfall.svg"
import React, { useState } from "react"

const Widget = () => {
  const [isHover, setIsHover] = useState(false)
  const [showComments, setShowComments] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => {
        !showComments ? setShowComments(!showComments) : {}
      }}
      className="wf-fixed relative wf-top-8  wf-right-0">
      <div
        className={`${showComments ? "wf-w-[280px] wf-rounded-2xl wf-translate-x-[-20px] wf-gap-2  wf-py-3" : "wf-cursor-pointer wf-w-20  wf-py-2 wf-rounded-l-2xl"} wf-flex wf-flex-col  wf-z-10 wf-relative wf-bg-white wf-shadow hover:wf-shadow-intense wf-px-3 ${isHover && !showComments ? "wf-translate-x-[-0px]" : "wf-translate-x-14"}  wf-transition-all wf-duration-300 group`}>
        <div className="wf-flex wf-items-center  wf-justify-between">
          <img
            src={someCoolImage}
            className={`wf-transition-all wf-duration-300 wf-w-4 wf-h-auto ${isHover || showComments ? "wf-rotate-[-90deg]" : ""}`}
            alt="Some pretty cool image"
          />
          {showComments && (
            <Minimize onClick={() => setShowComments(!showComments)} />
          )}
        </div>
        <Feed isVisible={showComments} />
      </div>
      {!showComments && <ActionButtons isHover={isHover} />}
    </div>
  )
}

export default Widget

const ActionButtons = ({ isHover }) => (
  <>
    <div
      className={`wf-bg-[#daff47] wf-flex wf-gap-2  wf-items-center wf-w-20 wf-absolute wf-z-[1] wf-shadow hover:wf-shadow-intense hover:wf-z-20 wf-cursor-pointer wf-top-8 wf-p-2 wf-rounded-l-full wf-text-sm wf-font-semibold wf-text-slate-800 wf-transition-delay wf-transition-all wf-duration-300 ${isHover ? "wf-translate-x-[0px]" : "wf-translate-x-20"}`}>
      <img src={Comment} alt="Bookmark" className="wf-h-4 wf-w-4" />
      <p>4321</p>
    </div>
    <div
      className={`wf-bg-[#47FF6F] wf-flex wf-gap-2  wf-items-center wf-w-20 wf-absolute wf-z-[1] wf-shadow hover:wf-shadow-intense hover:wf-z-20 wf-cursor-pointer wf-top-16 wf-p-2 wf-rounded-l-full wf-text-sm wf-font-semibold wf-text-slate-800 wf-transition-delay wf-transition-all wf-duration-500 ${isHover ? "wf-translate-x-[0px]" : "wf-translate-x-20"}`}>
      <img src={Bookmark} alt="Bookmark" className="wf-h-4 wf-w-4" />
      <p>123</p>
    </div>
  </>
)

const Minimize = ({ onClick }) => (
  <div
    onClick={onClick}
    className="wf-rounded-full hover:wf-bg-slate-100 wf-text-slate-400 hover:wf-text-slate-950 wf-cursor-pointer wf-h-8 wf-w-8 wf-flex wf-justify-center wf-items-center ">
    <p className="wf-text-xl wf-font-semibold">-</p>
  </div>
)

const Feed = ({ isVisible }) => {
  return (
    <div
      className={`wf-flex wf-flex-col wf-h-full wf-justify-between wf-overflow-hidden wf-transition-all wf-duration-250 ${isVisible ? "wf-h-[80vh]" : "wf-h-0"}`}>
      <div className="wf-flex wf-flex-col wf-gap-2">
        <Message />
        <Message />
        <Message />
      </div>
      <Input />
    </div>
  )
}

const Input = () => (
  <div className="wf-flex wf-items-center wf-justify-between wf-w-full  wf-border wf-slate-300 wf-rounded-xl wf-p-2 wf-gap-2">
    <textarea
      className="wf-w-full wf-bg-transparent wf-border-0 wf-text-sm wf-text-slate-900 wf-outline-none wf-resize-none"
      placeholder="Type a message and press Enter"
      rows={1}
      onInput={(e) => {
        e.target.style.height = "auto"
        e.target.style.height = `${e.target.scrollHeight}px`
      }}
    />
    {/* <div className="wf-h-full wf-flex wf-items-end ">
      <button className="wf-text-sm  wf-text-slate-900 wf-p-2 wf-rounded-lg self-items-end">
        Send
      </button>
    </div> */}
  </div>
)

const Message = () => (
  <div className="wf-p-2 wf-bg-slate-200 wf-rounded-lg wf-w-full wf-flex wf-flex-col wf-gap-1 ">
    <div className="wf-flex wf-items-center wf-justify-between">
      <div className="wf-flex wf-items-center wf-gap-1">
        <Avatar src={""} />
        <p className="wf-text-sm wf-text-slate-900 wf-font-semibold">
          John Doe
        </p>
      </div>
      <p className="wf-text-xs wf-text-slate-400">2h ago</p>
    </div>
    <p className="wf-text-sm wf-text-slate-900">Hello World</p>
  </div>
)

const Avatar = ({ src }: { src?: string }) =>
  // if no src, use bg-green-500
  !src ? (
    <div className="wf-h-5 wf-w-5 wf-rounded-full wf-bg-green-500" />
  ) : (
    <img
      className="wf-h-5 wf-w-5 wf-rounded-full"
      src={src}
      alt="Some pretty cool image"
    />
  )
