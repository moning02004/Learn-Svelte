<script>
    import {push} from 'svelte-spa-router'
    export let params = {};

    const onBack = () => {
        history.back()
    }

    function gotoMain() {
        push("/")
    }
</script>

<div>
    {params.id} 번째 글 입니다.

    <button on:click={gotoMain}>메인으로</button>
    <button on:click={onBack}>뒤로가기</button>
</div>