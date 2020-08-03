import Vue from 'vue'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/bundle'
if (!Vue.prototype._) {
  Vue.use(VueLodash, lodash)
}
