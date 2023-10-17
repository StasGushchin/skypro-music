export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwOTcxMjcxLCJpYXQiOjE2OTA5NjAxMzEsImp0aSI6ImE4YzQ5NDNmOWNmNTRlZjI5NmFmNTMyOWUwODM4YWQ5IiwidXNlcl9pZCI6NzkyfQ.5n8YHTjsgAnYnc4gioyV1wPnxM2D16PS6c9kNhC-JoE"

export async function getAllTracks() {
    const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/', {
        method: "GET",
    })
    const tracks = await response.json();
    return tracks;
}

export function getEntireTrack(onSavedAction, id) {
    try {
      return fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}`, {
        method: "GET",
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        onSavedAction(data);
      })

    } catch (error) {
      console.log(error);
    }
  }