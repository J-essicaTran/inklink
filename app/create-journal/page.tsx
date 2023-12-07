'use client';
import { ChangeEvent, useEffect, useState } from "react";
import { auth, db, firestoreDB, storage } from '../firebase';
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes ,getDownloadURL } from "firebase/storage";
import Header from "../components/Header"
import { useSession } from "next-auth/react";

function CreateJournal() {
  const { data: session } = useSession();
  const email = session?.user?.email;

  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [journalName, setJournalName] = useState('');
  const [description, setDescription] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [photo1, setPhoto1] = useState<File | null>(null);
  const [photo2, setPhoto2] = useState<File | null>(null);
  const [photo3, setPhoto3] = useState<File | null>(null);
  const [photo4, setPhoto4] = useState<File | null>(null);
  const [photo5, setPhoto5] = useState<File | null>(null);
  const [photo6, setPhoto6] = useState<File | null>(null);
  const [photo7, setPhoto7] = useState<File | null>(null);
  const [photo8, setPhoto8] = useState<File | null>(null);

  const [thumbnailLink, setThumbnailLink] = useState<string | null>(null);
  const [photo1Link, setPhoto1Link] = useState<string | null>(null);
  const [photo2Link, setPhoto2Link] = useState<string | null>(null);
  const [photo3Link, setPhoto3Link] = useState<string | null>(null);
  const [photo4Link, setPhoto4Link] = useState<string | null>(null);
  const [photo5Link, setPhoto5Link] = useState<string | null>(null);
  const [photo6Link, setPhoto6Link] = useState<string | null>(null);
  const [photo7Link, setPhoto7Link] = useState<string | null>(null);
  const [photo8Link, setPhoto8Link] = useState<string | null>(null);
  
  /////////////////////////////// DEBUGGING ///////////////////////////////////
  useEffect(() => {
    console.log("Thumbnail changed: ", thumbnail);
  }, [thumbnail]) // called whenever 'thumbnail' changes

  useEffect(() => {
    console.log("Photo 1 changed: ", photo1);
  }, [photo1]) // called whenever 'photo1' changes

  useEffect(() => {
    console.log("Photo 2 changed: ", photo2);
  }, [photo2]) // called whenever 'photo2' changes

  useEffect(() => {
    console.log("Photo 3 changed: ", photo3);
  }, [photo3]) // called whenever 'photo3' changes

  useEffect(() => {
    console.log("Photo 4 changed: ", photo4);
  }, [photo4]) // called whenever 'photo4' changes

  useEffect(() => {
    console.log("Photo 5 changed: ", photo5);
  }, [photo5]) // called whenever 'photo5' changes

  useEffect(() => {
    console.log("Photo 6 changed: ", photo6);
  }, [photo6]) // called whenever 'photo6' changes

  useEffect(() => {
    console.log("Photo 7 changed: ", photo7);
  }, [photo7]) // called whenever 'photo7' changes

  useEffect(() => {
    console.log("Photo 8 changed: ", photo8);
  }, [photo8]) // called whenever 'photo8' changes
  /////////////////////////////////////////////////////////////////////////////

  // Called whenever a file input is changed
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("handleFileChange() called!");
    const target = e.target as HTMLInputElement & {
      files: FileList;
    }
    console.log('Target', target.files);

    const inputName = target.name;
    console.log("File Input name: ", inputName);
    if (target.files.length > 0) {
      if (inputName === 'thumbnailInput') {
        setThumbnail(target.files[0]);
      }
      else if (inputName === 'photo1Input') {
        setPhoto1(target.files[0]);
      }
      else if (inputName === 'photo2Input') {
        setPhoto2(target.files[0]);
      }
      else if (inputName === 'photo3Input') {
        setPhoto3(target.files[0]);
      }
      else if (inputName === 'photo4Input') {
        setPhoto4(target.files[0]);
      }
      else if (inputName === 'photo5Input') {
        setPhoto5(target.files[0]);
      }
      else if (inputName === 'photo6Input') {
        setPhoto6(target.files[0]);
      }
      else if (inputName === 'photo7Input') {
        setPhoto7(target.files[0]);
      }
      else if (inputName === 'photo8Input') {
        setPhoto8(target.files[0]);
      }
    }
  }

  // Uploads images to Cloud Storage bucket
  function uploadImages() {
    // Create references to the images (assuming the input image is not null)
    const thumbnailRef: File = thumbnail === null ? null!: thumbnail;
    const photo1Ref: File = photo1 === null ? null!: photo1;
    const photo2Ref: File = photo2 === null ? null!: photo2;
    const photo3Ref: File = photo3 === null ? null!: photo3;
    const photo4Ref: File = photo4 === null ? null!: photo4;
    const photo5Ref: File = photo5 === null ? null!: photo5;
    const photo6Ref: File = photo6 === null ? null!: photo6;
    const photo7Ref: File = photo7 === null ? null!: photo7;
    const photo8Ref: File = photo8 === null ? null!: photo8;
    const filesRefs = [thumbnailRef, photo1Ref, photo2Ref, photo3Ref, photo4Ref, photo5Ref, photo6Ref, photo7Ref, photo8Ref];

    // Create blobs (needed to pass as argument to uploadBytes)
    const thumbnailBlob = new Blob([thumbnailRef]);
    const photo1Blob = new Blob([photo1Ref]);
    const photo2Blob = new Blob([photo2Ref]);
    const photo3Blob = new Blob([photo3Ref]);
    const photo4Blob = new Blob([photo4Ref]);
    const photo5Blob = new Blob([photo5Ref]);
    const photo6Blob = new Blob([photo6Ref]);
    const photo7Blob = new Blob([photo7Ref]);
    const photo8Blob = new Blob([photo8Ref]);
    const blobs = [thumbnailBlob, photo1Blob, photo2Blob, photo3Blob, photo4Blob, photo5Blob, photo6Blob, photo7Blob, photo8Blob];

    // let thumbnailLink: string | null = null;
    // let photo1Link: string | null = null;
    // let photo2Link: string | null = null;
    // let photo3Link: string | null = null;
    // let photo4Link: string | null = null;
    // let photo5Link: string | null = null;
    // let photo6Link: string | null = null;
    // let photo7Link: string | null = null;
    // let photo8Link: string | null = null;

    // Store thumbnail and get the download URL for this image
    if (thumbnailRef !== null) {
      // Specify the path for which the file will be saved to in the Cloud Storage bucket
      let thumbnailPath = 'journal-images/' + email + '/' + journalName + '/' + thumbnailRef.name;
      const storageRef = ref(storage, thumbnailPath);
      // Upload image
      uploadBytes(storageRef, thumbnailBlob).then((snapshot) => {
        console.log('Uploaded thumbnail!');
        return getDownloadURL(snapshot.ref);
      })
      // Get URL of image
      .then((downloadURL) => {
        // Retrieve the download URL of the file that was just uploaded
        console.log("Download URL: ", downloadURL);
        setThumbnailLink(downloadURL);
        console.log("Thumbnail link set to: ", thumbnailLink);
      });
    }

    // Store Photo 1 and get the download URL for this image
    if (photo1Ref !== null) {
      // Specify the path for which the file will be saved to in the Cloud Storage bucket
      let photo1Path = 'journal-images/' + email + '/' + journalName + '/' + photo1Ref.name;
      const storageRef = ref(storage, photo1Path);
      // Upload image
      uploadBytes(storageRef, photo1Blob).then((snapshot) => {
        console.log('Uploaded thumbnail!');
        return getDownloadURL(snapshot.ref);
      })
      // Get URL of image
      .then((downloadURL) => {
        // Retrieve the download URL of the file that was just uploaded
        console.log("Download URL: ", downloadURL);
        setPhoto1Link(downloadURL);
        console.log("Photo 1 link set to: ", photo1Link);
      });
    }

    // Store Photo 2 and get the download URL for this image
    if (photo2Ref !== null) {
      // Specify the path for which the file will be saved to in the Cloud Storage bucket
      let photo2Path = 'journal-images/' + email + '/' + journalName + '/' + photo2Ref.name;
      const storageRef = ref(storage, photo2Path);
      // Upload image
      uploadBytes(storageRef, photo2Blob).then((snapshot) => {
        console.log('Uploaded thumbnail!');
        return getDownloadURL(snapshot.ref);
      })
      // Get URL of image
      .then((downloadURL) => {
        // Retrieve the download URL of the file that was just uploaded
        console.log("Download URL: ", downloadURL);
        setPhoto2Link(downloadURL);
        console.log("Photo 2 link set to: ", photo2Link);
      });
    }

    // Store Photo 3 and get the download URL for this image
    if (photo3Ref !== null) {
      // Specify the path for which the file will be saved to in the Cloud Storage bucket
      let photo3Path = 'journal-images/' + email + '/' + journalName + '/' + photo3Ref.name;
      const storageRef = ref(storage, photo3Path);
      // Upload image
      uploadBytes(storageRef, photo3Blob).then((snapshot) => {
        console.log('Uploaded thumbnail!');
        return getDownloadURL(snapshot.ref);
      })
      // Get URL of image
      .then((downloadURL) => {
        // Retrieve the download URL of the file that was just uploaded
        console.log("Download URL: ", downloadURL);
        setPhoto3Link(downloadURL);
        console.log("Photo 3 link set to: ", photo3Link);
      });
    }

    // Store Photo 4 and get the download URL for this image
    if (photo4Ref !== null) {
      // Specify the path for which the file will be saved to in the Cloud Storage bucket
      let photo4Path = 'journal-images/' + email + '/' + journalName + '/' + photo4Ref.name;
      const storageRef = ref(storage, photo4Path);
      // Upload image
      uploadBytes(storageRef, photo4Blob).then((snapshot) => {
        console.log('Uploaded thumbnail!');
        return getDownloadURL(snapshot.ref);
      })
      // Get URL of image
      .then((downloadURL) => {
        // Retrieve the download URL of the file that was just uploaded
        console.log("Download URL: ", downloadURL);
        setPhoto4Link(downloadURL);
        console.log("Photo 4 link set to: ", photo4Link);
      });
    }

    // Store Photo 5 and get the download URL for this image
    if (photo5Ref !== null) {
      // Specify the path for which the file will be saved to in the Cloud Storage bucket
      let photo5Path = 'journal-images/' + email + '/' + journalName + '/' + photo5Ref.name;
      const storageRef = ref(storage, photo5Path);
      // Upload image
      uploadBytes(storageRef, photo5Blob).then((snapshot) => {
        console.log('Uploaded thumbnail!');
        return getDownloadURL(snapshot.ref);
      })
      // Get URL of image
      .then((downloadURL) => {
        // Retrieve the download URL of the file that was just uploaded
        console.log("Download URL: ", downloadURL);
        setPhoto5Link(downloadURL);
        console.log("Photo 5 link set to: ", photo5Link);
      });
    }

    // Store Photo 6 and get the download URL for this image
    if (photo6Ref !== null) {
      // Specify the path for which the file will be saved to in the Cloud Storage bucket
      let photo6Path = 'journal-images/' + email + '/' + journalName + '/' + photo6Ref.name;
      const storageRef = ref(storage, photo6Path);
      // Upload image
      uploadBytes(storageRef, photo6Blob).then((snapshot) => {
        console.log('Uploaded thumbnail!');
        return getDownloadURL(snapshot.ref);
      })
      // Get URL of image
      .then((downloadURL) => {
        // Retrieve the download URL of the file that was just uploaded
        console.log("Download URL: ", downloadURL);
        setPhoto6Link(downloadURL);
        console.log("Photo 6 link set to: ", photo6Link);
      });
    }

    // Store Photo 7 and get the download URL for this image
    if (photo7Ref !== null) {
      // Specify the path for which the file will be saved to in the Cloud Storage bucket
      let photo7Path = 'journal-images/' + email + '/' + journalName + '/' + photo7Ref.name;
      const storageRef = ref(storage, photo7Path);
      // Upload image
      uploadBytes(storageRef, photo7Blob).then((snapshot) => {
        console.log('Uploaded thumbnail!');
        return getDownloadURL(snapshot.ref);
      })
      // Get URL of image
      .then((downloadURL) => {
        // Retrieve the download URL of the file that was just uploaded
        console.log("Download URL: ", downloadURL);
        setPhoto7Link(downloadURL);
        console.log("Photo 7 link set to: ", photo7Link);
      });
    }

    // Store Photo 8 and get the download URL for this image
    if (photo8Ref !== null) {
      // Specify the path for which the file will be saved to in the Cloud Storage bucket
      let photo8Path = 'journal-images/' + email + '/' + journalName + '/' + photo8Ref.name;
      const storageRef = ref(storage, photo8Path);
      // Upload image
      uploadBytes(storageRef, photo8Blob).then((snapshot) => {
        console.log('Uploaded thumbnail!');
        return getDownloadURL(snapshot.ref);
      })
      // Get URL of image
      .then((downloadURL) => {
        // Retrieve the download URL of the file that was just uploaded
        console.log("Download URL: ", downloadURL);
        setPhoto8Link(downloadURL);
        console.log("Photo 8 link set to: ", photo8Link);
      });
    }
  }

  function addJournalToFirestoreDB() {
    uploadImages();
    setDoc(doc(firestoreDB, 'journals', journalName), {
      userEmail: email,
      name: journalName,
      description: description,
      groupSize: groupSize,
      thumbnail: thumbnailLink,
      photo1: photo1Link,
      photo2: photo2Link,
      photo3: photo3Link,
      photo4: photo4Link,
      photo5: photo5Link,
      photo6: photo6Link,
      photo7: photo7Link,
      photo8: photo8Link
    });
    console.log("Journal created!")
  }

  return (
    <div>
      <Header />
      <div className="h-screen p-2 m-0">
        <div className="pt-4 pb-1">
          <div className="border-2 border-purple-500 rounded-md px-3 py-2 cursor-default bg-purple-500 text-purple-100">
            New Journal
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 w-full h-full md:h-96 p-6 bg-neutral-800 rounded-lg shadow-lg">
          <div className="w-full md:w-1/3 h-full">
            <div
              className="h-full bg-neutral-700 p-16 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              id="dropzone"
            >
              <label
                htmlFor="thumbnailInput"
                className="cursor-pointer flex flex-col items-center space-y-2"
              >
                <span className="text-gray-200 text-2xl">Journal Image</span>
                <svg
                  className="w-16 h-16 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
                <span className="text-gray-200">
                  Drag and drop your files here
                </span>
                <span className="text-gray-100 text-sm">
                  (or click to select)
                </span>
              </label>
              <input type="file" id="thumbnailInput" name="thumbnailInput" className="hidden" onChange={handleFileChange} />
            </div>
          </div>

          <div className="w-full h-full flex flex-col">
            <div className="p-1">
              <input
                type="text"
                className="w-96 border rounded-md py-2 px-4 bg-transparent border-gray-300 text-gray-100 focus:outline-none focus:border-pink-500"
                placeholder="Journal Name"
                onChange={(e) => setJournalName(e.target.value)}
              />
            </div>

            <div className="p-1">
              <textarea
                className="w-full h-60 md:w-10/12 md:h-60 border rounded-md py-2 px-4 bg-transparent border-gray-300 text-gray-100 focus:outline-none focus:border-pink-500 resize-none"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="p-1">
              <span> Group Size: </span>
              <input
                type="text"
                className="w-1/12 border rounded-md py-2 px-4 bg-transparent border-gray-300 text-gray-100 focus:outline-none focus:border-pink-500"
                onChange={(e) => setGroupSize(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className=" pt-8 pb-4">
          <button
            type="button"
            className="border-2 border-purple-600 rounded-full px-3 py-2 text-purple-300 cursor-default hover:bg-purple-600 hover:text-purple-200"
          >
            Add Media
          </button>
        </div>

        {/* Photo Upload Boxes */}

        <div className="w-full h-full md:h-60 md:p-6 pt-8 bg-neutral-800 rounded-lg shadow-lg flex justify-center md:justify-normal overflow-y-auto md:overflow-x-auto">
          <div className="w-fit grid grid-cols-2 gap-8 md:gap-0 md:flex md:flex-row md:space-x-3">
            <div
              className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              id="dropzone"
            >
              <label
                htmlFor="photo1Input"
                className="cursor-pointer flex flex-col items-center space-y-2"
              >
                <svg
                  className="m-16 md:m-7 w-12 h-12  text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </label>
              <input type="file" id="photo1Input" name="photo1Input" className="hidden" onChange={handleFileChange} />
            </div>

            <div
              className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              id="dropzone"
            >
              <label
                htmlFor="photo2Input"
                className="cursor-pointer flex flex-col items-center space-y-2"
              >
                <svg
                  className="m-16 md:m-7 w-12 h-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </label>
              <input type="file" id="photo2Input" name="photo2Input" className="hidden" onChange={handleFileChange} />
            </div>

            <div
              className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              id="dropzone"
            >
              <label
                htmlFor="photo3Input"
                className="cursor-pointer flex flex-col items-center space-y-2"
              >
                <svg
                  className="m-16 md:m-7 w-12 h-full text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </label>
              <input type="file" id="photo3Input" name="photo3Input" className="hidden" onChange={handleFileChange} />
            </div>

            <div
              className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              id="dropzone"
            >
              <label
                htmlFor="photo4Input"
                className="cursor-pointer flex flex-col items-center space-y-2"
              >
                <svg
                  className="m-16 md:m-7 w-12 h-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </label>
              <input type="file" id="photo4Input" name="photo4Input" className="hidden" onChange={handleFileChange} />
            </div>

            <div
              className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              id="dropzone"
            >
              <label
                htmlFor="photo5Input"
                className="cursor-pointer flex flex-col items-center space-y-2"
              >
                <svg
                  className="m-16 md:m-7 w-12 h-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </label>
              <input type="file" id="photo5Input" name="photo5Input" className="hidden" onChange={handleFileChange} />
            </div>

            <div
              className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              id="dropzone"
            >
              <label
                htmlFor="photo6Input"
                className="cursor-pointer flex flex-col items-center space-y-2"
              >
                <svg
                  className="m-16 md:m-7 w-12 h-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </label>
              <input type="file" id="photo6Input" name="photo6Input" className="hidden" onChange={handleFileChange} />
            </div>

            <div
              className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              id="dropzone"
            >
              <label
                htmlFor="photo7Input"
                className="cursor-pointer flex flex-col items-center space-y-2"
              >
                <svg
                  className="m-16 md:m-7 w-12 h-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </label>
              <input type="file" id="photo7Input" name="photo7Input" className="hidden" onChange={handleFileChange} />
            </div>

            <div
              className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              id="dropzone"
            >
              <label
                htmlFor="photo8Input"
                className="cursor-pointer flex flex-col items-center space-y-2"
              >
                <svg
                  className="m-16 md:m-7 w-12 h-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </label>
              <input type="file" id="photo8Input" name="photo8Input" className="hidden" onChange={handleFileChange} />
            </div>

            {/* Can add more or remove */}
          </div>
        </div>

        <div className="p-3 flex flex-row-reverse">
          <button
            type="button"
            onClick={() => addJournalToFirestoreDB()}
            className="ml-2 border-2 border-purple-500 rounded-full px-3 py-2 text-purple-300 cursor-pointer hover:bg-purple-500 hover:text-purple-200"
           >
            Publish
          </button>
          <button
            type="button"
            className="ml-2 border-2 border-gray-600 rounded-full px-3 py-2 text-gray-400 cursor-pointer hover:bg-gray-600 hover:text-gray-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateJournal;
