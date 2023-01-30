// vite.config.ts
import { qwikVite } from "file:///Users/frazier.la/dev/papanasi-fork/node_modules/@builder.io/qwik/optimizer.mjs";
import { defineConfig } from "file:///Users/frazier.la/dev/papanasi-fork/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig(() => {
  return {
    build: {
      target: "es2020",
      lib: {
        entry: "./src/index.ts",
        formats: ["es", "cjs"],
        fileName: (format) => `index.qwik.${format === "es" ? "mjs" : "cjs"}`
      }
    },
    plugins: [qwikVite()]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZnJhemllci5sYS9kZXYvcGFwYW5hc2ktZm9yay9wYWNrYWdlcy9xd2lrXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZnJhemllci5sYS9kZXYvcGFwYW5hc2ktZm9yay9wYWNrYWdlcy9xd2lrL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9mcmF6aWVyLmxhL2Rldi9wYXBhbmFzaS1mb3JrL3BhY2thZ2VzL3F3aWsvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBxd2lrVml0ZSB9IGZyb20gJ0BidWlsZGVyLmlvL3F3aWsvb3B0aW1pemVyJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGJ1aWxkOiB7XG4gICAgICB0YXJnZXQ6ICdlczIwMjAnLFxuICAgICAgbGliOiB7XG4gICAgICAgIGVudHJ5OiAnLi9zcmMvaW5kZXgudHMnLFxuICAgICAgICBmb3JtYXRzOiBbJ2VzJywgJ2NqcyddLFxuICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LnF3aWsuJHtmb3JtYXQgPT09ICdlcycgPyAnbWpzJyA6ICdjanMnfWBcbiAgICAgIH1cbiAgICB9LFxuICAgIHBsdWdpbnM6IFtxd2lrVml0ZSgpXVxuICB9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFVLFNBQVMsZ0JBQWdCO0FBQzlWLFNBQVMsb0JBQW9CO0FBRTdCLElBQU8sc0JBQVEsYUFBYSxNQUFNO0FBQ2hDLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxRQUNILE9BQU87QUFBQSxRQUNQLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxRQUNyQixVQUFVLENBQUMsV0FBVyxjQUFjLFdBQVcsT0FBTyxRQUFRO0FBQUEsTUFDaEU7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTLENBQUMsU0FBUyxDQUFDO0FBQUEsRUFDdEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
