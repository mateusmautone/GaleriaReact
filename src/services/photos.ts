import { Photo } from '../types/Photo'
import { storage } from '../libs/firebase'
import { ref, listAll, getDownloadURL} from 'firebase/storage'

export const getAll = async () => {
    let list:Photo[] = [];

    const imagesFolder = ref(storage, "images")

    return list
}