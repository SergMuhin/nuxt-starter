<template>

	<div id="main__wrapper">

		<HeaderMenu/>

		<header id="header">

			<section class="header__content_block">

				<HeaderPlayer/>

				<HeaderSocial/>

				<Breadcrumps>
					Слушать онлайн
				</Breadcrumps>

			</section>

		</header>

		<main id="main_content">

			<div class="player__wrapper rounded">

				<div class="player__now_playing">

					<div class="player__now_playing__img">

					</div>

					<div class="player__now_playing__info">

						<div class="now_playing__info">
							<div class="now_playing__info_icon"><i class="material-icons equalizer">equalizer</i></div>
							<div class="now_playing__info_str">Сейчас играет</div>
						</div>
						<div class="player__now_playing__info_artist">Remind me to forget</div>
						<div class="player__now_playing__info_track">David guetta & sia</div>
						<div class="top_twenty__item_app_store">
							<img src="~assets/img/app_store.png" alt="app_store.png">
						</div>
					</div>

					<div @click="playAction($event)" class="player__now_playing__icon">
						<div class="header__player_icon">
							<i class="material-icons play">play_arrow</i>
							<i class="material-icons pause">pause</i>
						</div>
					</div>

					<div class="player__now_playing__social">

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

				<div class="hr"></div>

				<div class="played__tracks">

					<div class="played__tracks_head">
						Отзвучавшие треки
					</div>

					<div class="played__tracks_content">

						<div v-for="(song, index) in playedTracks" class="played__tracks_item" :key="index">

							<div class="played__tracks_item__time">
								{{ song.time }}
							</div>

							<div class="played__tracks_item__name">
								<span class="bold">{{ song.artist }}</span> - {{ song.track }}
							</div>

							<div @click="playedTracksPlayAction($event)" class="played__tracks_item__icon">
								<i class="material-icons play">play_arrow</i>
								<i class="material-icons pause">pause</i>
							</div>

							<div class="played__tracks_item__social">

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

	export default {
		data() {
			return {
				playedTracks:
				[
					{
						time: '10.14',
						artist: 'Kygo/Miguel',
						track: 'Remind me to forget',
					},
					{
						time: '10.14',
						artist: 'Kygo/Miguel',
						track: 'Remind me to forget',
					},
					{
						time: '10.14',
						artist: 'Kygo/Miguel',
						track: 'Remind me to forget',
					},
					{
						time: '10.14',
						artist: 'Kygo/Miguel',
						track: 'Remind me to forget',
					},
					{
						time: '10.14',
						artist: 'Kygo/Miguel',
						track: 'Remind me to forget',
					},
					{
						time: '10.14',
						artist: 'Kygo/Miguel',
						track: 'Remind me to forget',
					},
					{
						time: '10.14',
						artist: 'Kygo/Miguel',
						track: 'Remind me to forget',
					},
					{
						time: '10.14',
						artist: 'Kygo/Miguel',
						track: 'Remind me to forget',
					},
					{
						time: '10.14',
						artist: 'Kygo/Miguel',
						track: 'Remind me to forget',
					},
					{
						time: '10.14',
						artist: 'Kygo/Miguel',
						track: 'Remind me to forget',
					},
					{
						time: '10.14',
						artist: 'Kygo/Miguel',
						track: 'Remind me to forget',
					},
				]
			}
		},
		methods: {
			likeAction(event) {
				event.target.closest('.player_actions_icon').classList.toggle('liked');
			},
			playAction(event) {
				let elem = event.target.closest('.player__now_playing__icon');
				elem.classList.toggle('playing');
			},
			playedTracksPlayAction(event) {
				let elem = event.target.closest('.played__tracks_item');
				if(elem.classList.contains('playing')) {
					elem.classList.remove('playing');
				} else {
					Array.from(document.getElementsByClassName('played__tracks_item')).forEach(
						(item) => {
							item.classList.remove('playing');
						});
					elem.classList.add('playing');
				}
			},
		}
	}


</script>


<style scoped>

	.player_actions__share_menu {
		top: -3px;
	}

	.playing .play {
		display: none;
	}

	.pause {
		color: #f60036;
		display: none;
		font-size: 32px;
	}

	.playing .pause {
		display: block;
	}

	.player__now_playing__icon .pause {
		color: white;
		font-size: 50px;
	}

	.header__player_icon {

	}

	.played__tracks {
		color: #7e7aa1;
		font-size: 14px;
		letter-spacing: 0.3px;
	}

	.played__tracks_head {
		margin: 0 0 20px 0;
		font-size: 20px;
		font-weight: 700;
		color: #19106a;
	}

	.played__tracks_content {

	}

	.played__tracks_item {
		height: 38px;
		display: flex;
		cursor: pointer;
		align-items: center;
	}

	.played__tracks_item:hover {
		color: #463d9f;
		-webkit-box-shadow: 0px 3px 7px -1px #ebeaf8;
		box-shadow: 0px 3px 7px -1px #ebeaf8;
	}

	.played__tracks_item:hover .player_actions i {
		color: #463d9f;
	}

	.played__tracks_item__time {
		text-align: center;
		flex: 0 0 90px;
	}

	.played__tracks_item__name {
		flex: 1 0;
	}

	.played__tracks_item__icon {
		margin: 0 100px 0 0;
		flex: 0 0 40px;
		text-align: center;
	}

	.played__tracks_item__icon i {
		font-size: 40px;
	}

	.playing .played__tracks_item__icon i {
		font-size: 32px;
	}

	.played__tracks_item__social {

	}

	.hr {
		margin: 30px 0 25px 0;
		height: 2px;
		background: url('~/assets/img/footer__hr.png') no-repeat center;
	}

	.player__wrapper {
		padding: 34px;
		background: #fff;
		padding: 34px 60px 34px 34px;
	}

	.player__now_playing {
		display: flex;
		align-items: stretch;
	}

	.player__now_playing__img {
		width: 160px;
		height: 160px;
		background: url('~assets/img/player__now_playing__img.png') no-repeat center;
		background-size: cover;
	}

	.player__now_playing__info {
		margin: 0 90px 0 30px;
		display: flex;
		flex-flow: column;
		justify-content: center;
	}

	.now_playing__info {
		margin-bottom: auto;
		display: flex;
		color: #f60036;
		letter-spacing: 0.34px;
	}

	.now_playing__info_icon {
		margin: 0 10px 0 0;
	}

	.now_playing__info_str {

	}

	.player__now_playing__icon {
		flex: 1;
		align-self: center;
	}

	.player__now_playing__social {
		align-self: center;
	}

	.top_twenty__item_app_store {
		margin: 20px 0 30px 0;
	}

	.player__now_playing__info_artist {

		color: #19106a;
		font-size: 20px;
		font-weight: 700;
		letter-spacing: 0.5px;
	}

	.player__now_playing__info_track {
		letter-spacing: 0.34px;
		color: #7e7aa1;
	}

	.header__player_icon {
		margin: 0 auto;
		border-radius: 52px;
		background-color: #f60036;
		/* font-size: 72px; */
		width: 60px;
		height: 60px;
		-webkit-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		-moz-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		box-shadow: 4px 6px 14px 3px #fcb7c6;
		position: relative;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 50px;
		margin: auto;
		color: #fff;
	}

	.header__player_icon i {
		font-size: 50px;
	}

	#header {
		padding: 0 98px 55px 0;
	}

</style>