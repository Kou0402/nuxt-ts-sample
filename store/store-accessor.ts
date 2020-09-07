import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import PostsStore from '~/store/posts'

// eslint-disable-next-line import/no-mutable-exports
let postsStore: PostsStore

function initialiseStores(store: Store<any>): void {
  postsStore = getModule(PostsStore, store)
}

export { initialiseStores, postsStore }
