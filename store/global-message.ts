import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

import { GlobalMessage } from '~/models/global-message'

@Module({ namespaced: true, name: 'global-message' })
export default class GlobalMessageStore extends VuexModule {
  public globalMessage: GlobalMessage = {}

  @Mutation
  public setItem(globalMessage: GlobalMessage): void {
    this.globalMessage = globalMessage
  }
}
