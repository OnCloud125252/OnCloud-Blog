import { build } from "velite";

/** @type {import('next').NextConfig} */
export default {
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
};

class VeliteWebpackPlugin {
  // Next.js runs three compilers concurrently (client, server-nodejs, edge).
  // A shared promise makes every compiler await the same build, so none start
  // resolving `#site/content` before `.velite` is written.
  /** @type {Promise<unknown> | null} */
  static buildPromise = null;
  constructor(/** @type {import('velite').Options} */ options = {}) {
    this.options = options;
  }
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (!VeliteWebpackPlugin.buildPromise) {
        const dev = compiler.options.mode === "development";
        this.options.watch = this.options.watch ?? dev;
        this.options.clean = this.options.clean ?? !dev;
        VeliteWebpackPlugin.buildPromise = build(this.options);
      }
      await VeliteWebpackPlugin.buildPromise;
    });
  }
}
