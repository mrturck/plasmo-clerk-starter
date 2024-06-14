import { useReducer } from "react"

export const ChatMessage = ({ username, avatarUrl, text }) => {
  return (
    <div
      className="wf-flex wf-flex-col wf-px-4 wf-py-2 wf-text-sm  wf-transition-all
        wf-border-b wf-border-slate-300 
        active:wf-scale-105  hover:wf-bg-slate-100 wf-text-slate-800 hover:wf-text-slate-900">
      <div className="wf-flex wf-flex-row wf-items-center">
        <Avatar src={avatarUrl} alt={`${username}'s avatar`} />
        <span className="wf-font-semibold">{username}</span>
      </div>
      <p className="wf-mt-1">{text}</p>
    </div>
  )
}

// if no src just pick a random color
const Avatar = ({ src, alt }) => {
  return (
    <img
      src={
        src ||
        `https://via.placeholder.com/150/${Math.random().toString(16).slice(2, 8)}`
      }
      alt={alt}
      className="wf-w-8 wf-h-8 wf-rounded-full wf-mr-2"
    />
  )
}
