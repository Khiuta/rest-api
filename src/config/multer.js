import multer from 'multer';
import { extname, resolve } from 'path';

// gerando um nome aleatório para o arquivo
const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG.'));
    }

    return cb(null, true);
  },
  // especificando onde esse arquivo vai ser guardado
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    // especificando qual vai ser o nome do arquivo
    filename: (req, file, cb) => {
      // Date.now() conta todos os milissegundos desde 31/12/1969
      // até o momento que a função é executada
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
