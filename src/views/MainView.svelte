<script>
    import {userStatus} from "../stores"
import DetailView from "./DetailView.svelte";
    
    let username = ""
    let password = ""
    let status = ""

    userStatus.subscribe(value => {
        status = value
    })

    function loginCheck() {
        if (password !== "" && username !== "") {
            userStatus.set("O")
            return
        }
        userStatus.set("X")
    }
</script>

<div class="login-box">
    <div class="login-status"><span>로그인 상태: {status}</span></div>
    <div>
        <input type="text" bind:value="{username}" class="login-input">
    </div>
    
    <div>
        <input type="password" bind:value="{password}" class="login-input">
    </div>
    
    <div>
        <button class="login-input" on:click="{loginCheck}">로그인</button>
    </div>
</div>
<DetailView />

<style>
    .login-input {
        width: 100%;
    }

    .login-status {
        margin-bottom: 15px;
    }

    .login-box {
        padding: 10px;
        border: 1px solid black;
        border-radius: 8px;
    }
</style>
    