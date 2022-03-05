<script>
    import { userStatus } from "../stores";
    
    let detail = "";
    userStatus.subscribe(value => {
        if (value === "O") {
            detail = "환영합니다."
        } else {
            detail = ""
        }
    })
</script>

<div class="user-detail-box">
    {detail}
</div>

<style>
    .user-detail-box {
        padding: 30px;
    }
</style> 