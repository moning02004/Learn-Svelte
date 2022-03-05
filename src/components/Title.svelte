<script>
    import {link} from 'svelte-spa-router'
    export let id;
    const titleLink = `/posts/${id}`
</script>

<h3>
    <a use:link={{href: titleLink}} id={id}>Title {id}</a>
</h3>

<style>
    h3 {
        padding-left: 100px;
    }
</style>