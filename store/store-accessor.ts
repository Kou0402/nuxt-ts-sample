/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import PostsStore from '~/store/posts'
import GlobalMessageStore from '~/store/global-message'

let postsStore: PostsStore
let globalMessageStore: GlobalMessageStore

function initialiseStores(store: Store<any>): void {
  postsStore = getModule(PostsStore, store)
  globalMessageStore = getModule(GlobalMessageStore, store)
}

export { initialiseStores, postsStore, globalMessageStore }
