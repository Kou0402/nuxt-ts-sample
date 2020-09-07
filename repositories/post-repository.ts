import firebase from '~/plugins/firebase'
import { Post } from '~/models/post'

export class PostRepository {
  private db: firebase.firestore.Firestore = firebase.firestore()

  async fetchAll(): Promise<Post[]> {
    const posts: Post[] = []
    await this.db
      .collection('posts')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((document) => {
          posts.push(document.data() as Post)
        })
      })
    return posts
  }
}
