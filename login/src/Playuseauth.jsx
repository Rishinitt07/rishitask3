import { useState, useEffect } from "react"
import axios from "axios"

export default function PlayuseAuth(code) {
  const [accessToken, setAccessToken] = useState(null)
  const [refreshToken, setRefreshToken] = useState(null)
  const [expiresIn, setExpiresIn] = useState(null)

  useEffect(() => {
    axios
      .post("http://localhost:3001/logintoplay", { code })
      .then(res => {
        console.log("Login successful:", res.data)
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn)
        window.history.pushState({}, null, "/")
      })
      .catch(err => {
        console.error("Login failed:", err)
        // window.location = "/"
      })
  }, [code])

  useEffect(() => {
    if (!refreshToken || !expiresIn) return

    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refreshplay", { refreshToken })
        .then(res => {
          console.log("Token refreshed:", res.data)
          setAccessToken(res.data.accessToken)
          setExpiresIn(res.data.expiresIn)
        })
        .catch(err => {
          console.error("Token refresh failed:", err)
          window.location = "/"
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken
}