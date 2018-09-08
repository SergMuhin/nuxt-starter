<template>

	<div>

		<section class="section top_twenty">

			<div class="top_twenty__head">
				<h3 class="head_text">Восхитительная 20-ка</h3>
			</div>

			<div class="top_twenty__content">

				<div v-for="(song, index) in songs" class="top_twenty__item rounded" :key="index">

					<div class="top_twenty__item_img">
						<div class="top_twenty__item_count">
							<span class="top_twenty__item_count_str">{{ song.number }}</span>
							<i class="material-icons equalizer">equalizer</i>
						</div>
					</div>

					<div class="top_twenty__item__song_info">
						<div class="top_twenty__item_song">{{ song.track }}</div>
						<div class="top_twenty__item_artist">{{ song.artist }}</div>
						<div class="top_twenty__item_app_store">
							<img src="~assets/img/app_store.png" alt="app_store.png">
						</div>
					</div>

					<div @click="playAction($event)" class="top_twenty__item_play">
						<span class="play_str play">Слушать</span>
						<span class="play_str pause">Пауза</span>
						<div class="top_twenty__item_play_icon">
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

				</div>

			</div>

		</section>

	</div>

</template>


<script>

	export default {

		data() {
			return {
				songs: [
				{
					number: '01',
					artist: 'David Guetta & Sia',
					track: 'Flames',
				},
				{
					number: '02',
					artist: 'David Guetta & Sia',
					track: 'Flames',
				},
				{
					number: '03',
					artist: 'David Guetta & Sia',
					track: 'Flames',
				},
				{
					number: '04',
					artist: 'David Guetta & Sia',
					track: 'Flames',
				},
				{
					number: '05',
					artist: 'David Guetta & Sia',
					track: 'Flames',
				},
				]
			}
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

			}
		}

	}

</script>


<style scoped>

	.top_twenty {
		float: left;
		width: 1059px;
		padding: 0 20px 30px 98px;
	}

	.top_twenty__item {
		margin: 0 0 5px 0;
		width: 941px;
		height: 114px;
		padding: 15px 30px 15px 35px;
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
		background: #f00;
	}

	.top_twenty__item:not(.playing):hover .top_twenty__item_play_icon i,
	.playing .top_twenty__item_play_icon i {
		font-size: 32px;
	}

	.top_twenty__item_img {
		flex: 0 1 88px;
		background: url('~/assets/img/top_twenty.png') no-repeat center;
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
		position: absolute;
		text-align: center;
		font-size: 14px;
		line-height: 36px;
		top: 10px;
		left: -16px;
		color: white;
	}

	.top_twenty__item_app_store {
		margin: 16px 0;
		cursor: pointer;
		width: 68px;
	}

	.top_twenty__item__song_info {
		flex: 1 0 160px;
	}

	.top_twenty__item_play {
		flex: 0 0 450px;
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
		background: #f00;
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

	.playing .top_twenty__item_count_str {
		display: none;
	}

	.playing .equalizer {
		display: block;
	}

	.playing .top_twenty__item_count {
		background: #463d9f;
	}

</style>