import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

import { PostRepository } from '~/repositories/post-repository'
import { Post } from '~/models/post'

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
    const posts: Post[] = await postRepository.fetchAll()
    this.setItems(posts)
  }
}
