export type Book = {
  title: string
  author: string
  publishedDate: string
  available: boolean
  genre: string
}
// export enum StyleFunc  {
//   Fiction = 'Fiction',
//   NonFiction = 'Non-Fiction',
//   Mystery = 'Mystery',
//   Romance = 'Romance',
//   ScienceFiction = 'Science Fiction',
//   Thriller = 'Thriller',
// }
export type User={
    userName:string
    password:string
    email:string
}
export let userArr: User[] = [];
export const checkFeildsFun=(userArr?:User[],currentuser?:User)=>{
const checkFeilds=userArr?.every((value)=>value.userName!==currentuser?.userName && value.email!==currentuser?.email&&value.password!==currentuser?.password)
return checkFeilds;
}