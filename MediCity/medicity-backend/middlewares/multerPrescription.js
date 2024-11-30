import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure upload directory exists
const uploadDir = path.join(__dirname, '../uploads/prescriptions');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Storage Configuration
const storagePrescription = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, uploadDir);
    },
    filename: (req, file, callback) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        callback(null, uniqueName);
    },
});

const upload = multer({ storage: storagePrescription });

export default upload;




// import multer from 'multer'
// import path from 'path';



// const storagePresciption =  multer.diskStorage({
     
//     destination: function (req, file, callback) {
//         // Define where the files will be stored
//         callback(null, 'uploads/prescriptions'); // Replace with your desired directory
//     },


//     filename: function(req, file, callback){
//         callback(null, file.originalname)
//     }
// })

// import fs from 'fs';
// const uploadDir = 'uploads/prescriptions';
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

// const upload = multer({storagePresciption})

// export default upload;