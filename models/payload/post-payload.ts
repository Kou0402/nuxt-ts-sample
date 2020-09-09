import firebase from '~/plugins/firebase'

export interface FetchedPostResponse {
  createdUserName: string
  createdAt: firebase.firestore.Timestamp
  comment: string
}

export interface SavePostRequest {
  createdUserName: string
  createdAt: firebase.firestore.FieldValue
  comment: string
}
