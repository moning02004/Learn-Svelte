import MainView from './views/MainView.svelte'
import DetailView from './views/DetailView.svelte'

export const routes = {
    "/posts/:id": DetailView,
    "/": MainView,
}