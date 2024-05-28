const path = require('path')
const Config = require(path.join(__dirname,'nuxt.config'))
const { createApp } = require('h3')
const { loadNuxt, build } = require('nuxt')
const isDev = process.env.NODE_ENV === 'DEV'

class NuxtService {
  constructor () {
    const config = {...Config, ...{dev: isDev}, ...{rootDir: __dirname}}
    this.nuxt = createApp(config)
  }

  /**
   * Starts the build process
   *
   * @method boot
   *
   * @return {Promise}
   */
  async build () {
    await build(this.nuxt)
  }

  /**
   * Handles the HTTP request by making the appropriate
   * response, based upon the URL.
   *
   * @method render
   *
   * @param  {Object} req
   * @param  {Object} res
   *
   * @return {Promise}
   */
	async render (req, res) {
      await this.nuxt.use(req, res)
  }

  /**
   * Runs the Callback on Nuxt ready hook
   *
   * @method render
   *
   * @param  {Function} callback
   *
   * @return {void}
   */

  async whenReady(callback)
  {
    await this.nuxt.ready()
    callback()
  }

}

let nuxt = new NuxtService()
const http = require('http')

const server = http.createServer((req, res)=>{
	return nuxt.render(req, res)
})

server.listen()

if(isDev)
{
  nuxt.build().then(()=>{
    process.send({
        status:'done',
        port:server.address().port
    })
  })
} else
{
  nuxt.whenReady(()=>process.send({
    status:'done',
    port:server.address().port
  }))
}

