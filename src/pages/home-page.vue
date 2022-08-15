<script setup lang="ts">

const goSocialMedia = async (url: string) => {
    if (url) {
        window.open(url, "_blank")
    }
}
</script>

<template>
    <div>
        <div class="bg-image">
            <div class="bg-child">
                <div class="media">
                    <div class="face">
                        <img width="170px" style="border-radius: 50%;" src="../assets/images/Jovo.jpg" alt="bg-image">
                    </div>

                    <div style="margin-top: 54px;">
                        <h1 style="color: #fff; text-align: center">Javohirbek Mahmudov</h1>
                    </div>

                    <div style="margin-top: 40px;">
                        <h2 style="color: #727379; text-align: center">NodeJs Backend Developer</h2>
                    </div>

                    <div class="social">
                        <div class="cycle" @click="goSocialMedia('https://t.me/javohirbek_mahmudov')">
                            <img style="width: 40px;" class="image" src="../../src/assets/icons/telegram.png" alt="img">
                        </div>

                        <div class="cycle" @click="goSocialMedia('https://instagram.com/javohirbek_mahmudov')">
                            <img style="width: 40px;" class="image" src="../assets/icons/instagram.png" alt="img" />
                        </div>

                        <div class="cycle" @click="goSocialMedia('https://t.me/javokhirbekuz')">
                            <img style="width: 40px;" class="image" src="../assets/icons/blog.png" alt="img" />
                        </div>

                        <div class="cycle" @click="goSocialMedia('https://linkedin.com/in/javokhirbekmakhmudov')">
                            <img style="width: 40px;" class="image" src="../assets/icons/linkedin.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.bg-image {
    width: 100%;
    height: 100vh;
    background-image: url("../assets/images/bg.svg");
    display: flex;
    align-items: center;
    justify-content: center;
}

.bg-child {
    width: 600px;
    height: 590px;
    border-radius: 50px;
    background: rgba(26, 29, 40, 0.79);
    display: flex;
    justify-content: center;
}

.media {
    width: 350px;
    height: 100%;
}

.face {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    margin: auto;
    margin-top: 60px;
}

.social {
    margin-top: 45px;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cycle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.438);
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: relative;
    transition: all 0.3s;
    -webkit-user-select: none;
}

.cycle:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.253);
}

.cycle:active {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.363);
}
</style>