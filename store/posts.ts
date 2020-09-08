import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

import { PostRepository } from '~/repositories/post-repository'
import { Post } from '~/models/post'
import { FetchedPostResponse } from '~/models/payload/post-payload'

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
    // TODO: エラー処理
    const fetchPostResponses: FetchedPostResponse[] = await postRepository.fetchAll()
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
}
