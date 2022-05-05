
export default async function ({ store, route, app }) {
    // Add the userAgent property to the context
   await store.dispatch('fetchCurrentPageable', route);
   await store.dispatch('fetchConfiguration');
}