import apiInstance from "./axios"

export const captureAndSend = async (cameraRef, setSuccessCount, setConfirmed, setConfirmedPhotos, setIsDetectedFace, confirmed) => {
    if (cameraRef.current && !confirmed) {
        const photo = await cameraRef.current.takePictureAsync({ base64: false, skipProcessing: true })

        const formData = new FormData()
        formData.append('image', {
            uri: photo.uri,
            name: 'face.jpg',
            type: 'image/jpg',
        })

        try {
            const res = await apiInstance.post(
                '/detect/face',
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                }
            )

            const isFace = res.data.face_detected
            setIsDetectedFace(isFace)

            if (isFace) {
                setSuccessCount((prev) => {
                    const newCount = prev + 1
                    if (newCount >= 3) {
                        setConfirmed(true)
                        setConfirmedPhotos((prevPhotos) => [...prevPhotos, photo.uri])
                    }
                    return newCount
                })
            } else {
                setSuccessCount(0)
            }

        } catch (error) {
            console.error('Detection error:', error)
            setSuccessCount(0)
        }
    }
}
