<script>
    import { userStatus } from "../stores";
    
    let detail = "";
    userStatus.subscribe(value => {
        if (value === "O") {
            detail = "환영합니다. 이제 회원 정보를 뿌려줄 수 있도록 모델 정보를 목업 데이터로 생성하자."
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