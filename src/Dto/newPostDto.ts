export default interface NewPostDto {
     authorId:string,
     content: string,
     hashtags :string[],
     ref?:string
}