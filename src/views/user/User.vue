<template>
    <div>
        <div class="container">
            <transition mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: "User"
}
</script>