import vLoading, { createGlobalLoading } from './src/directive.js'


export const TLoading = {
  install(app) {
    app.directive('loading', vLoading)
  },
  directive: vLoading,
  service: createGlobalLoading
}

export default TLoading