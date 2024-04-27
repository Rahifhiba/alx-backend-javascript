import { uploadPhoto, createUser } from "./utils"

export default function handleProfileSignup() {
    return new Promise((resolve, reject) => {
        let u = new createUser
        if (createUser){
            resolve(() => {u.firstname, u.lastname})
        }
        else {
            reject(console.log("Signup system offline"))
        }
    })
}