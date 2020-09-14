import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import firebase from '~/plugins/firebase'

import { globalMessageStore } from '~/store'
import { PostRepository } from '~/repositories/post-repository'
import { Post } from '~/models/post'
import {
  FetchedPostResponse,
  SavePostRequest,
} from '~/models/payload/post-payload'
import { MESSAGE } from '~/constants/message'

@Module({ stateFactory: true, namespaced: true, name: 'posts' })
export default class PostsStore extends VuexModule {
  public posts: Post[] = []

  @Mutation
  private setItems(posts: Post[]): void {
    this.posts = posts
  }

  @Action
  public async fetchAll(): Promise<void> {
    const postRepository: PostRepository = new PostRepository()
    const fetchPostResponses: FetchedPostResponse[] = await postRepository
      .fetchAll()
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
        globalMessageStore.setItem({
          message: MESSAGE.Error.FirestoreNotAvailable,
          level: 'Error',
        })
        return []
      })
    // データ変換を行う
    const posts: Post[] = []
    fetchPostResponses.forEach((fetchPostResponse) => {
      const post: Post = {
        createdAt: fetchPostResponse.createdAt.toDate(),
        createdUserName: fetchPostResponse.createdUserName,
        comment: fetchPostResponse.comment,
      }
      posts.push(post)
    })
    this.setItems(posts)
  }

  @Action
  public async save(post: Post): Promise<void> {
    const postRepository: PostRepository = new PostRepository()
    const savePostRequest: SavePostRequest = {
      createdUserName: post.createdUserName,
      comment: post.comment,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }
    await postRepository.save(savePostRequest).catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error)
      globalMessageStore.setItem({
        message: MESSAGE.Error.FirestoreNotAvailable,
        level: 'Error',
      })
    })
    this.fetchAll()
  }
}
