import { saveAs } from 'file-saver'
 export  const downloadCV = () => {
   
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=1nMPxfu8susajgz3WP5OTKWly-pxn8LLv';

    saveAs(pdfUrl, 'CV.pdf'); // The second argument is the default filename
  };