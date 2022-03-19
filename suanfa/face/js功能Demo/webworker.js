

self.onmessage = function (e) {
  const uInt8Array = e.data;
  postMessage('inside =' + uInt8Array.toString())
  postMessage('inside =' + uInt8Array.byteLength)
}