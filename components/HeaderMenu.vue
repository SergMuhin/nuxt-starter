<template>

	<div>

		<div class="header__menu rounded">

			<nuxt-link to="/">
				<img class="header__menu_logo" src="~assets/img/logo.png" alt="hitfm_logo">
			</nuxt-link>

			<div class="header__menu_hr"></div>

			<div class="header__menu_list">

				<ul>

					<nuxt-link :to="{ name: 'online-player'}">
						<div class="header__menu_list_item">
							<li>Слушать онлайн</li>
						</div>
					</nuxt-link>

					<nuxt-link :to="{ name: 'novelty'}">
						<div class="header__menu_list_item">
							<li>Новинки</li>
						</div>
					</nuxt-link>

					<nuxt-link :to="{ name: 'charts'}">
						<div class="header__menu_list_item">
							<li>Большая двадцатка</li>
						</div>
					</nuxt-link>

					<nuxt-link :to="{ name: 'news'}">
						<div class="header__menu_list_item">
							<li>Новости</li>
						</div>
					</nuxt-link>

					<nuxt-link to="/on-air/programs" :class="{'nuxt-link-active' : this.$route.name.indexOf('on-air') >= 0}">
						<div class="header__menu_list_item" >
							<li>В эфире</li>
						</div>
					</nuxt-link>

					<nuxt-link :to="{ path: '/guests'}">
						<div class="header__menu_list_item">
							<li>Гости</li>
						</div>
					</nuxt-link>

					<nuxt-link :to="{ name: 'promo'}">
						<div class="header__menu_list_item">
							<li>Акции</li>
						</div>
					</nuxt-link>
				</ul>

			</div>

			<div class="header__menu_hr"></div>

			<div class="header__menu_device_icons">
				<div class="device_icon apple_icon"></div>
				<div class="device_icon android_icon"></div>
			</div>

		</div>

	</div>

</template>


<script>

export default {

}

</script>

<style scoped>

	.header__menu {
		width: 240px;
		height: 598px;
		margin: 0 20px 0 96px;
		float: left;
		background: white;
		flex: 1 0 240px;
		-webkit-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		-moz-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		box-shadow: 0px 12px 16px 2px #dad6f2;
	}

	.header__menu_logo {
		cursor: pointer;
		margin: 12px 26px 12px 33px;
	}

	.header__menu_hr {
		background: url('~/assets/img/line.png');
		height: 2px;
		background-position: center;
		background-repeat: no-repeat;
	}

	.header__menu_list {
		margin: 20px 0;
		font-weight: 500;
	}

	.header__menu_list_item {
		padding: 0 0 0 30px;
		height: 53px;
		line-height: 53px;
		padding: 0px 0 0 40px;
		color: #463d9f;
		cursor: pointer;
	}

	.header__menu_list_item li {
		padding: 0 0 0 10px;
	}

	.nuxt-link-exact-active .header__menu_list_item,
	.nuxt-link-active .header__menu_list_item {
		color: #f60036;
		font-weight: 700;
	}

	.nuxt-link-exact-active .header__menu_list_item li,
	.nuxt-link-active .header__menu_list_item li {
		list-style-type: disc;
	}


	.header__menu_device_icons {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		width: 140px;
		justify-content: space-evenly;
		margin: 20px auto;
	}

	.apple_icon {
		background: url('~/assets/img/apple.png');
	}

	.android_icon {
		background: url('~/assets/img/android.png');
	}

	.device_icon {
		width: 26px;
		height: 30px;
		background-repeat: no-repeat !important;
		cursor: pointer;
	}

</style>