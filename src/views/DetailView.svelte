<script>
    import { userInfo } from "../stores";
    
    let detail = "";
    let unsubscribe = userInfo.subscribe(value => {
        if (value) {
            detail = value
            console.log(detail)
        }
    })
</script>

{#if detail}
    <div class="user-detail-box">
        {detail.name} 님 환영합니다.
    </div>
{/if}

<style>
    .user-detail-box {
        padding: 30px;
    }
</style> 