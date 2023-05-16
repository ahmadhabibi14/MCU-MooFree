export async function getPostIdList() {
   return [{
     params: {
       id: "11"
     }
   }]
 }

// lib/posts.js 

export async function getPostDetails(postId: string) {
   const dataSet = {
     "11": {
       title: "Post 1",
       description: "Lorem ipsum dolor sit amet...",
       date: "Oct 10, 2022"
     }
   }
   return dataSet
 }