const urlsText = `www.strava.com
twitter.com
rufusprogrammer.com
www.onepeloton.com
sweatco.in
www.relive.cc
help.runtastic.com
www.runtastic.com
www.fitness22.com
fitness22content.com
verv.com
facebook.com
8fit.com
apptuitive.at
www.workoutinc.net
legal.walkfit.pro
abvio.com
www.traillink.com
www.railstotrails.org
SixColors.com
home.trainingpeaks.com
www.bikemap.net
www.wikiloc.com
Wikiloc.com
madmuscles.com
maps.apple.com
www.nonetorun.com
www.runna.com
www.fitapp.info
www.trailforks.com
www.apple.com
basemap.it
about.fatmap.com
privacy.appfeedbacks.com
www.iubenda.com
recoverathletics.com
www.chimani.com
vgfit.com
appannex.com
www.wokamon.com
www.facebook.com
www.twitter.com
forum.shikudo.com
www.bettertogether-app.com
funappsandtopcoolgames.wordpress.com
Strava.com
www.myfitnesssync.com
strava.com
thunderforest.com
gurumaps.app
bestcoolappsllc.wordpress.com
rewirefitness.app
fitzyapps.com
hiiker.app
leap.app
pay.mobihealthplus.com
app.neatsy.ai
www.downdogapp.com
tsarikovskiy.github.io
www.keiser.com
MapMyTracks.com
www.mapmytracks.com
getcadence.app
easyrun.app
RunforFit.me
powermornings.co
bikemeter.tilda.ws
www.epicrideweather.com
www.workoutcompanions.app
www.strivecompetitions.com
www.playsportsnetwork.com
privacyportal-cdn.onetrust.com
xoss.co
www.xoss.co
beta.strive.ai
mymottiv.com
app.mymottiv.com
find-my-friends.uniq.by
strava.cz
strava.sk
bit.ly
www.strava.cz
hikingbook.net
app-service.naturetrailsinfo.com`;
const urlsList = urlsText.split("\n")

async function checkPathsExists(urls) {
console.log("loading...")
  let validUrls = []
  for (const url of urls) {
    try {
      const response = await fetch(`https://corsproxy.io/?` + encodeURIComponent(`https://${url}/.well-known/apple-app-site-association`));
      if (response.status === 200) {
        validUrls.push(url);
      }
    } catch (error) {}
  }
    console.log("done!")

  return validUrls;
}
let listof = ``
checkPathsExists(urlsList)
  .then(validUrls => {
  for (var urles of validUrls){
  listof += `${urles}\n`
  }
    console.log(listof);
  })
  .catch(error => {
  });
