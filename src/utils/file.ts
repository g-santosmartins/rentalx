import fs from 'fs'


export const deleteFile =async (filename:string) => {

  // verifies if the file exists inside the directory
  try {
    await fs.promises.stat(filename)

  }catch {
    // on error ends the call
    return
  }

  await fs.promises.unlink(filename)


}