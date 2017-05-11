const CLOUD_NAME = 'dz7uqy8eg'
const UPLOAD_PRESET = 'sd0yuyye'

export async function uploadImage(image) {
  const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: `{"file":"${image}","upload_preset":"${UPLOAD_PRESET}"}`
  })

  if (response.status === 200) {
    const json = await response.json()
    return json
  } else {
    let err
    try {
      const json = response.json()
      err = JSON.stringify(json)
    } catch (e) {
      err = e.message
    }

    alert(response.status + ' error on upload image profile:' + err)
    return Promise.reject()
  }
}
