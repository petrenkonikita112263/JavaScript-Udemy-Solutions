import { async } from "regenerator-runtime"
import { TIMEOUT_SECONDS } from "./config.js"

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(
                new Error(`Request took too long! Timeout after ${s} second`)
            )
        }, s * 1000)
    })
}

export const getJsonResponseData = async function (urlLink) {
    try {
        // prettier-ignore
        const response = await Promise.race([fetch(urlLink, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }), TIMEOUT_SECONDS])
        const jsonData = await response.json()
        if (!response.ok)
            throw new Error(`${jsonData.message} (${jsonData.status})`)
        return jsonData
    } catch (error) {
        throw error
    }
}

export const AJAX = async function (url, uploadData = undefined) {
    try {
        const fetchPro = uploadData
            ? fetch(url, {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify(uploadData),
              })
            : fetch(url)
        const response = await Promise.race([fetchPro, timeout(3)])
        const data = await response.json()
        if (!response.ok)
            throw new Error(`${data.message} (${response.status})`)
        return data
    } catch (error) {
        throw error
    }
}
