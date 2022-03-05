<script>
    import Title from "../Components/Title.svelte";
    let loops = [1,2,3,4,5]
</script>

{#each loops as loop}
	<Title id={loop} />
{/each}