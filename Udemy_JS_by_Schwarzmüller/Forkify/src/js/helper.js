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
        const response = await Promise.race([fetch(urlLink), timeout(TIMEOUT_SECONDS)])
        const jsonData = await response.json()
        if (!response.ok)
            throw new Error(`${jsonData.message} (${jsonData.status})`)
        return jsonData
    } catch (error) {
        throw error
    }
}
