<template>

	<div id="main__wrapper">

		<HeaderMenu/>

		<header id="header">

			<section class="header__content_block">

				<HeaderPlayer/>

				<HeaderSocial/>

				<Breadcrumps>
					В эфире -
					<nuxt-link :to="{ path: '/on-air/programs'}">
						Программы
					</nuxt-link>
					- Большая двадцатка
				</Breadcrumps>

			</section>

		</header>

		<main id="main_content">

			<onAirNavigation/>

			<div class="main_image"></div>

			<div class="chip__wrapper">
				<div class="chip vote_chip active_chip">Голосование от 02.06.18</div>
			</div>

			<div class="top_twenty__content">

				<div v-for="(song) in chartsSongs" class="top_twenty__item rounded">

					<div class="top_twenty__item_number">

						<div class="top_twenty__item_count">
							<span class="top_twenty__item_count_str">{{ song.number }}</span>
							<i class="material-icons equalizer">equalizer</i>
						</div>
						<div class="arrow_number">
							<img class="arrow_number_img" :class="{arrow_down: !song.isRatingGrow }" src="~assets/img/charts_arrow_up.png" alt="charts_arrow_up.png">
							<span class="arrow_number_str">{{ song.ratingGrowNumber }}</span>
						</div>
					</div>

					<div :style="{backgroundImage: 'url(' + song.img + ')'}" class="top_twenty__item_img"></div>

					<div class="top_twenty__item__song_info">
						<div class="top_twenty__item_song">{{ song.track }}</div>
						<div class="top_twenty__item_artist">{{ song.artist }}</div>
						<div class="top_twenty__item_app_store">
							<img src="~/assets/img/app_store.png" alt="app_store.png">
						</div>
					</div>

					<div class="top_twenty__item_play">
						<span @click="playAction($event)" class="play_str play ">Слушать</span>
						<span @click="playAction($event)" class="play_str pause">Пауза</span>
						<div @click="playAction($event)" class="top_twenty__item_play_icon">
							<i class="material-icons play">play_arrow</i>
							<i class="material-icons pause">pause</i>
						</div>
					</div>

					<div class="player_actions">
						<div class="player_actions_icon share">
							<i class="material-icons">share</i>
							<div class="player_actions__share_menu">
								<div class="player_actions__share_menu_icon vkontakte"></div>
								<div class="player_actions__share_menu_icon facebook"></div>
								<div class="player_actions__share_menu_icon twitter"></div>
								<div class="player_actions__share_menu_icon instagram"></div>
								<div class="player_actions__share_menu_icon odnoklass"></div>
							</div>
						</div>
						<div @click="likeAction($event)" class="player_actions_icon like"><i class="material-icons">favorite</i></div>
						<div class="player_actions_icon fullscreen"><i class="material-icons">fullscreen</i></div>
					</div>

					<div class="top_twenty__item__right_content">

						<div class="top_twenty__item_stats">
							<div class="top_twenty__item_stats__top_rate">
								<div class="item_stats top_rate__str">Лучшее место</div>
								<div class="item_stats top_rate__num">{{ song.bestRating }}</div>
							</div>
							<div class="top_twenty__item_stats__vr"></div>
							<div class="top_twenty__item_stats__weeks">
								<div class="item_stats weeks__str">Недель в чарте</div>
								<div class="item_stats weeks__num">{{ song.weeksInChart }}</div>
							</div>
						</div>

						<div class="top_twenty__item_vote">
							<div class="top_twenty__item_vote_str">Голосуй</div>
							<div @click="voteAction($event)" class="top_twenty__item_vote_switcher">
								<div class="vote_switcher_circle"></div>
							</div>
						</div>

					</div>

				</div>

			</div>



		</main>

		<aside class="aside__left">

			<div class="aside__left_item">
				<img src="~assets/img/dummy.png" alt="dummy.png">
			</div>

			<div class="aside__left_item">
				<img src="~assets/img/dummy.png" alt="dummy.png">
			</div>

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
				chartsSongs: [
					{
						number: '01',
						isRatingGrow: true,
						ratingGrowNumber: 3,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 1,
						weeksInChart: 5
					},
					{
						number: '02',
						isRatingGrow: false,
						ratingGrowNumber: 2,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 2,
						weeksInChart: 4
					},
					{
						number: '03',
						isRatingGrow: true,
						ratingGrowNumber: 1,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 1,
						weeksInChart: 4
					},
					{
						number: '04',
						isRatingGrow: true,
						ratingGrowNumber: 4,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 6,
						weeksInChart: 2
					},
					{
						number: '05',
						isRatingGrow: false,
						ratingGrowNumber: 5,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 3,
						weeksInChart: 1
					},
					{
						number: '06',
						isRatingGrow: true,
						ratingGrowNumber: 7,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 2,
						weeksInChart: 6
					},
					{
						number: '07',
						isRatingGrow: true,
						ratingGrowNumber: 5,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 1,
						weeksInChart: 7
					},
					{
						number: '08',
						isRatingGrow: false,
						ratingGrowNumber: 6,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 6,
						weeksInChart: 2
					},
					{
						number: '09',
						isRatingGrow: false,
						ratingGrowNumber: 3,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 3,
						weeksInChart: 6
					},
					{
						number: '10',
						isRatingGrow: false,
						ratingGrowNumber: 8,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 3,
						weeksInChart: 1
					},
					{
						number: '11',
						isRatingGrow: false,
						ratingGrowNumber: 2,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 4,
						weeksInChart: 5
					},
					{
						number: '12',
						isRatingGrow: true,
						ratingGrowNumber: 1,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 2,
						weeksInChart: 1
					},
					{
						number: '13',
						isRatingGrow: true,
						ratingGrowNumber: 4,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 1,
						weeksInChart: 6
					},
					{
						number: '14',
						isRatingGrow: false,
						ratingGrowNumber: 8,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 6,
						weeksInChart: 7
					},
					{
						number: '15',
						isRatingGrow: true,
						ratingGrowNumber: 9,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 7,
						weeksInChart: 3
					},
					{
						number: '16',
						isRatingGrow: false,
						ratingGrowNumber: 5,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 2,
						weeksInChart: 4
					},
					{
						number: '17',
						isRatingGrow: false,
						ratingGrowNumber: 2,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 2,
						weeksInChart: 5
					},
					{
						number: '18',
						isRatingGrow: true,
						ratingGrowNumber: 1,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 6,
						weeksInChart: 3
					},
					{
						number: '19',
						isRatingGrow: true,
						ratingGrowNumber: 7,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 8,
						weeksInChart: 2
					},
					{
						number: '20',
						isRatingGrow: true,
						ratingGrowNumber: 8,
						img: require('~/assets/img/top_twenty.png'),
						artist: 'David Guetta & Sia',
						track: 'Flames',
						bestRating: 3,
						weeksInChart: 1
					},
				]
			}
		},
		components: {
			'onAirNavigation': onAirNavigation
		},
		methods: {
			likeAction(event) {
				event.target.closest('.player_actions_icon').classList.toggle('liked')
			},
			playAction(event) {

				let elem = event.target.closest('.top_twenty__item');

				if(elem.classList.contains('playing')) {
					elem.classList.remove('playing');
				} else {
					Array.from(document.getElementsByClassName('top_twenty__item')).forEach(
						(item) => {
							item.classList.remove('playing');
						});
					elem.classList.add('playing');
				}

			},
			voteAction(event) {

				let elem = event.target.closest('.top_twenty__item_vote_switcher');

				if(!elem.childNodes[0].classList.contains('voted')) {
					elem.childNodes[0].classList.add('voted');
				}

			},
		}

	}

</script>


<style scoped>

	.playing .play {
		display: none;
	}

	.pause {
		display: none;
	}

	.playing .pause {
		display: block;
	}

	.play_str {
		margin: 0 10px 0 0;
		color: #f60036;
		letter-spacing: 0.34;
		font-weight: 700;
		cursor: pointer;
		width: 85px;
		text-align: center;
		opacity: 0;
	}

	.playing .play_str {
		opacity: 1 !important;
	}

	.playing .top_twenty__item_count {
		background: #463d9f;
	}

	.top_twenty__item:hover .top_twenty__item_stats {
		display: none;
	}

	.top_twenty__item:hover .top_twenty__item_vote {
		display: flex;
	}

	.arrow_down {
		transform: rotate(180deg);
	}

	.top_twenty__item__right_content {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.top_twenty__item_vote {
		color: #f60036;
		align-items: center;
		display: flex;
		width: 125px;
		justify-content: space-between;
	}

	.top_twenty__item_vote_str {
		font-weight: 700;
		letter-spacing: 0.34px;
	}

	.top_twenty__item_vote_switcher {
		width: 50px;
		height: 25px;
		border: 3px solid #f60036;
		border-radius: 13px;
		display: flex;
		position: relative;
		cursor: pointer;
	}

	.vote_switcher_circle {
		width: 28px;
		height: 28px;
		border-radius: 14px;
		background: #f60036;
		position: absolute;
		top: -5px;
		left: -3px;
	}

	.top_twenty__item_stats {
		display: flex;
		text-align: center;
		align-items: center;\
		font-size: 12px;
		color: #7e7aa1;
		width: 210px;
		justify-content: space-between;
		font-size: 12px;
		margin-left: auto;
	}

	.stats__top_rate {

	}

	.item_stats {

	}

	.top_twenty__item_vote {
		display: none;
	}

	.top_rate__num,
	.weeks__num
	{
		font-size: 16px;
		color: #463d9f;
	}

	.top_twenty__item_stats__vr {
		width: 2px;
		height: 100px;
		background: url('~/assets/img/top_twenty__item_stats__vr.png') no-repeat center;
	}

	.main_image {
		margin: 30px 0 30px 0;
		background: url('~/assets/img/charts_main_image.png') no-repeat;
	}

	.vote_chip  {
		margin: 0 0 30px 0;
	}

	.player_actions {
		margin: 0 0 0 30px;
		flex: 0 0 130px;
	}

	.top_twenty {
		float: left;
		width: 1059px;
		padding: 0 20px 30px 98px;
	}

	.top_twenty__content {
		margin: 0 0 45px 0;
	}

	.arrow_number {
		color: #7e7aa1;
		font-size: 14px;
	}

	.arrow_number_img {
		margin: 0 3px 2px 0;
		vertical-align: bottom;
	}

	.top_twenty__item {
		margin: 0 0 5px 0;
		width: 941px;

		height: 114px;
		padding: 15px 30px 15px 12px;
		/* outline: 1px dashed red; */
		background: white;
		display: flex;
		align-items: safe;
		transition: box-shadow 0.2s ease-in;
	}

	.top_twenty__item:hover {
		-webkit-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		-moz-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		box-shadow: 0px 12px 16px 2px #dad6f2;
		position: relative;
	}

	.top_twenty__item:hover .play_str {
		opacity: 1;
	}

	.top_twenty__item:not(.playing):hover .top_twenty__item_play_icon {
		background: #f60036;
	}

/*	.top_twenty__item:not(.playing):hover .top_twenty__item_play_icon i,
	.playing .top_twenty__item_play_icon i {
		font-size: 32px;
	}*/

	.top_twenty__item_number {
		font-variant: tabular-nums;
		justify-content: space-around;
		margin: 0 12px 0 0;
		display: flex;
		flex-flow: column;
	}

	.top_twenty__item_img {
		flex: 0 1 88px;
		position: relative;
		float: left;
		display: inline-block;
		margin: 0 20px 0 0;
	}

	.top_twenty__item_count {
		background: #f60036;
		width: 33px;
		height: 33px;
		border-radius: 20px;
		text-align: center;
		font-size: 14px;
		line-height: 35px;
		color: white;
	}

	.top_twenty__item_app_store {
		margin: 16px 0;
		cursor: pointer;
		width: 68px;
	}

	.top_twenty__item__song_info {
		flex: 0 0 155px;
	}

	.top_twenty__item_play {
		flex: 0 0 175px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.top_twenty__item_play_icon {
		width: 60px;
		height: 60px;
		background: #bfbcd1;
		color: #fff;
		cursor: pointer;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.top_twenty__item_play_icon i {
		font-size: 50px;
	}

	.playing .top_twenty__item_play_icon {
		background: #f60036;
	}

	.playing .play {
		display: none;
	}

	.pause {
		display: none;
	}

	.playing .pause {
		display: block;
	}

	.play_str {
		margin: 0 10px 0 0;
		color: #f60036;
		letter-spacing: 0.34;
		font-weight: 700;
		cursor: pointer;
		width: 85px;
		text-align: center;
		opacity: 0;
	}

	.playing .play_str {
		opacity: 1 !important;
	}

	.eq_blue {
		background: #463d9f;
	}

	.equalizer {
		display: none;
		font-size: 20px;
		line-height: 1.5;
	}

	.playing .top_twenty__item_count_str {
		display: none;
	}

	.playing .equalizer {
		display: block;
	}

	.top_twenty__item_play_img {

	}

	.top_twenty__item_artist {
		font-size: 14px;
		color: #7e7aa1;
	}

	.top_twenty__item_song {
		font-weight: bold;
		color: #19106a;
		margin: 0 0 5px 0;
	}

	.voted {
		left: 20px;
	}

</style>