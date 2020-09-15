import firebase from '~/plugins/firebase'

export const sampleDate = new Date(2020, 1, 1)
export const mock = {
  fetchedPostResponses: [
    {
      createdUserName: '投稿者1',
      createdAt: firebase.firestore.Timestamp.fromDate(sampleDate),
      comment: 'コメント1',
    },
    {
      createdUserName: '投稿者2',
      createdAt: firebase.firestore.Timestamp.fromDate(sampleDate),
      comment: 'コメント2',
    },
  ],
}
