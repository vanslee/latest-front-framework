<template>
    <div class="containner">
        <div class="user-info">
            <div class="user-avatar">
                <img src="" alt="">
            </div>
            <div class="username"></div>
            <div class="user-age"></div>
        </div>
        <hr>
        <div class="desc"></div>
    </div>
</template>
<style scoped>
* {
    margin: 0px;
    padding: 0px;
}

.containner {
    width: 100%;
    height: 500px;
    border: 1px solid red
}

.user-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: darkgray;
}

.username .user-age {
    margin-top: 50px;
    margin-left: 120px;
    background-color: darkgray;
    width: 50px;
    height: 10px;
}

.desc {
    width: 100%;
    height: 50px;
    background-color: darkgray;
}
</style>