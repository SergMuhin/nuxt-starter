<template>

	<div id="main__wrapper">

		<HeaderMenu/>

		<header id="header">

			<section class="header__content_block">

				<HeaderPlayer/>

				<HeaderSocial/>

				<Breadcrumps>
					В эфире -  Ведущие
				</Breadcrumps>

			</section>

		</header>

		<main id="main_content">

			<onAirNavigation/>

			<div class="djs__wrapper">

				<div v-for="(dj, index) in djs" :key="index" class="dj__content_box rounded">

					<div class="dj__item">
						<div class="dj__item_like__wrapper">
							<div @click="likeAction($event)" class="dj__item_like">
								<i class="material-icons">favorite</i>

							</div>
							<div class="dj__item_like_count">{{dj.likeCount}}</div>
						</div>
						<img class="dj__item_img" :src="dj.img" alt="">
						<div class="dj__item_name">{{dj.name}}</div>
						<div class="dj__item_social">
							<div class="dj__item_social__icon facebook"></div>
							<div class="dj__item_social__icon vkontakte"></div>
							<div class="dj__item_social__icon instagram"></div>
						</div>
					</div>

				</div>

			</div>

		</main>

		<aside class="aside__left">

			<div class="aside__left_item">
				<img src="~assets/img/dummy.png" alt="dummy.png">
			</div>

		</aside>

		<Footer/>

	</div>

</template>


<script>

	import onAirNavigation from '@/components/onAirNavigation';

	export default {

		data() {
			return {
				djs:
				[
					{
						id: 1,
						img: require('~/assets/img/dj_item_1.png'),
						name: 'Наташа Калашникова',
						likeCount: 254
					},
					{
						id: 2,
						img: require('~/assets/img/dj_item_2.png'),
						name: 'Наташа Стаханова',
						likeCount: 275
					},
					{
						id: 3,
						img: require('~/assets/img/dj_item_3.png'),
						name: 'Илья Обломов',
						likeCount: 247
					},
					{
						id: 4,
						img: require('~/assets/img/dj_item_4.png'),
						name: 'Женя Вудян',
						likeCount: 258
					},
					{
						id: 5,
						img: require('~/assets/img/dj_item_5.png'),
						name: 'Максим Королёв',
						likeCount: 267
					},
					{
						id: 6,
						img: require('~/assets/img/dj_item_6.png'),
						name: 'Андрей Белов',
						likeCount: 242
					},
				]
			}
		},
		components: {
			'onAirNavigation': onAirNavigation
		},
		methods: {
			likeAction(event) {
				event.target.closest('.dj__item_like__wrapper').classList.toggle('liked')
			}
		}

	}

</script>


<style scoped>

	.dj__item_like__wrapper {
		display: none;
		flex-flow: column;
		position: absolute;
		top: 10px;
		right: 10px;
	}

	.dj__item_like_count {
		margin: 5px 0 0 0;
		color: #7e7aa1;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.21px;
		text-align: center;
	}

	.dj__item_like {
		padding: 0 0px 0 1px;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 28px;
		height: 28px;
		background: #bfbcd1;
		border-radius: 48px;
		cursor: pointer;
		-webkit-transition: all 0.2s ease-in;
		transition: all 0.2s ease-in;
		color: #fff;
	}

	.dj__item_like i {
		font-size: 18px;
	}

	.liked .dj__item_like {
		background: white;
		color: red;
	}

	.liked .dj__item_like i {
		font-size: 20px
	}

	.dj__item_social {
		display: none;
		justify-content: space-around;
		width: 100px;
		margin: 0 auto;
	}

	.dj__item_social__icon {
		width: 23px;
		height: 23px;
		opacity: 0.5;
		background-size: cover;
	}

	.dj__item_social__icon:hover {
		opacity: 1;
	}

	.dj__content_box {
		padding: 18px;
		width: 225px;
		height: 280px;
		background: #fff;
		margin: 0px 10px 15px 0;
		cursor: pointer;
	}

	.dj__content_box:hover {
		-webkit-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		-moz-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		box-shadow: 0px 12px 16px 2px #dad6f2;
	}

	.dj__content_box:hover .dj__item_social {
		display: flex;
	}

	.dj__content_box:hover .dj__item_like__wrapper {
		display: flex;
	}

	.djs__wrapper {
		display: flex;
		flex-flow: row wrap;
	}

	.dj__item {
		margin: 0 0 30px 0;
		position: relative;
	}

	.dj__item_img {
		margin: 0 0 15px 0;
		width: 186px;
		height: 186px;
		-webkit-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		-moz-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		box-shadow: 0px 25px 23px -10px #bab8cc;
	}

	.dj__item_name {
		margin: 0 0 5px 0;
		font-weight: 700;
		letter-spacing: 0.3px;
		color: #19106a;
		text-align: center;
		white-space: no-wrap;
	}

</style>