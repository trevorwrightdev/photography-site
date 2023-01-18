import { firestore } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

async function getPhotos() {
    const photos = await getDocs(collection(firestore, 'photos'))
    return photos
}

export { getPhotos }