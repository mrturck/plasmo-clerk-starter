import { useReducer } from "react"

export const CountButton = ({ increment }) => {
  const [count, increase] = useReducer((c) => c + increment, 0)

  return (
    <button
      onClick={() => increase()}
      type="button"
      className="wf-flex wf-flex-row wf-items-center wf-px-4 wf-py-2 wf-text-sm wf-rounded-lg wf-transition-all wf-border-none
      wf-shadow-lg hover:wf-shadow-md
      active:wf-scale-105 wf-bg-slate-50 hover:wf-bg-slate-100 wf-text-slate-800 hover:wf-text-slate-900">
      Count:
      <span className="wf-inline-flex wf-items-center wf-justify-center wf-w-8 wf-h-4 wf-ml-2 wf-text-xs wf-font-semibold wf-rounded-full">
        {count}
      </span>
    </button>
  )
}
