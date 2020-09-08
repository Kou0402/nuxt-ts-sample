import firebase from '~/plugins/firebase'

import { FetchedPostResponse } from '~/models/payload/post-payload'

export class PostRepository {
  private db: firebase.firestore.Firestore = firebase.firestore()

  async fetchAll(): Promise<FetchedPostResponse[]> {
    const fetchedPostResponses: FetchedPostResponse[] = []
    await this.db
      .collection('posts')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((document) => {
          const fetchedPostResponse = document.data() as FetchedPostResponse
          fetchedPostResponses.push(fetchedPostResponse)
        })
      })
    return fetchedPostResponses
  }
}
