import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

import { storage } from './config'

export const uploadImage = async (file: File): Promise<string> => {
  const storageRef = ref(storage, `images/${file.name}`)
  await uploadBytes(storageRef, file)
  return getDownloadURL(storageRef)
}
