import { Photo } from '../types/Photo'
import { storage } from '../libs/firebase'
import { ref, listAll, getDownloadURL} from 'firebase/storage'

export const getAll = async () => {
    let list:Photo[] = [];

    const imagesFolder = ref(storage, "images") // cria referencia da pasta
    const photoList = await listAll(imagesFolder); // le os arquivos que estao na pasta

    // loop nos arquivos da pasta
    for(let i in photoList.items) {
        //pega o link de download
        let photoUrl = await getDownloadURL(photoList.items[i]);

        // monto a array
        list.push({
            name: photoList.items[i].name,
            url: photoUrl
            
        });
    }

    return list;
}