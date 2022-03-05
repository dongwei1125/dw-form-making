import lodash from 'lodash'
import Clipboard from 'clipboard'
import { defaultJson } from 'assets/js/index.js'

function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}

function uuid() {
  return Date.now() + '_' + S4()
}

function deepClone(object) {
  return lodash.cloneDeep(object)
}

function getDefaultJson() {
  return deepClone(defaultJson)
}

function copyText(text, className) {
  if (typeof text === 'object') {
    text = JSON.stringify(text)
  }

  const clipboard = new Clipboard(className, {
    text: () => text,
  })

  return new Promise((resolve, reject) => {
    clipboard.on('success', () => {
      resolve()
      clipboard.destroy()
    })

    clipboard.on('error', () => {
      reject()
      clipboard.destroy()
    })
  })
}

export { deepClone, copyText, uuid, getDefaultJson, S4 }
