import multer from "multer";
import {resolve} from "path"

// from node.js
import crypto from "crypto"

export default {
  upload(folder: string, ) {
    return {
      // saving file
      storage: multer.diskStorage({
        // going to root
        destination: resolve(__dirname,  "..", "..", "tmp"),
        filename: (request, file, callback) => {
          // generating hexadecimal hash to compose filename
          const fileHash = crypto.randomBytes(16).toString("hex")
          const fileName = `${fileHash}-${file.originalname}`

          return callback(null, fileName)

        }
      })
    }
  }
}