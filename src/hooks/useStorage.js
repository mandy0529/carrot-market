import {useState, useEffect} from 'react';
import {db, timestamp, storage} from '../firebase';

function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState('');

  if (file) {
    const imgStorage = storage.ref(file.name);
    const collectionRef = db.collection('images');
    imgStorage.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await imgStorage.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({url, createdAt});
        setUrl(url);
      }
    );
  }

  return {progress, error, url};
}

export default useStorage;
