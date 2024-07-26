
// import Loginspotify from "./Loginspotify"
// import Dashboardsongs from "./Dashboardsongs"

import PlayDash from "./PlayDash"
import Playauth from "./Playauth"

const code = new URLSearchParams(window.location.search).get("code")

function Playsong() {
  return code ? <PlayDash code={code} /> : <Playauth />
  // return code ? <Dashboardsongs code={code} /> : <Dashboardsongs />
}

export default Playsong