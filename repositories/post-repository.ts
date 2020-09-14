import firebase from '~/plugins/firebase'

import {
  FetchedPostResponse,
  SavePostRequest,
} from '~/models/payload/post-payload'

export class PostRepository {
  private db: firebase.firestore.Firestore = firebase.firestore()

  async fetchAll(): Promise<FetchedPostResponse[]> {
    const fetchedPostResponses: FetchedPostResponse[] = []
    await this.db
      .collection('posts')
      .orderBy('createdAt')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((document) => {
          const fetchedPostResponse = document.data() as FetchedPostResponse
          fetchedPostResponses.push(fetchedPostResponse)
        })
      })
    return fetchedPostResponses
  }

  async save(payload: SavePostRequest): Promise<void> {
    await this.db.collection('posts').add(payload)
  }

  async testError(): Promise<void> {
    await this.db.collection('error').get()
  }
}
