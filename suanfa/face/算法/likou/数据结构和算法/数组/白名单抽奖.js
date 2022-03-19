function lottery(whiteList, participant) {
  const pLen = participant.length, wLen = whiteList.length, targetNum = 20000;
  if (pLen === 0) {
    return [];
  }
  if (pLen < targetNum) return participant;
  let res = [], i = 0;
  const map = new Map();
  while (i < wLen && res.length <= targetNum) {
    let pIndex = participant.indexOf(whiteList[i]);
    if (pIndex !== -1) {
      map.set(pIndex, true);
      res.push(whiteList[i]);
    }
    i++;
  }
  while(res.length < targetNum) {
    const index = Math.floor(Math.random() * pLen);
    if (map.has(index)) continue;
    res.push(participant[index]);
    map.set(index, true);
  }
  return res;
}