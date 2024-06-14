import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import React, { useState } from "react"

import Widget from "~components/Widget"
import { ChatMessage } from "~features/chat-message"
import { CountButton } from "~features/count-button"

export const config: PlasmoCSConfig = {
  matches: [
    "https://www.plasmo.com/*",
    "https://www.google.com/*",
    "https://arxiv.org/*"
  ]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => <Widget />

export default PlasmoOverlay
