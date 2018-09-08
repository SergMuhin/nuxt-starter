<template>

	<div>
<keep-alive>
		<div class="header__player rounded">

			<div @click="playAction($event)" class="header__player_icon">
				<i class="material-icons play">play_arrow</i>
				<i class="material-icons pause">pause</i>
			</div>

			<div class="header__player_song">
				<div class="playing_track">
					<div class="playing_track__img"><img src="~assets/img/header__player_song_img.png" alt="header__player_song_img"></div>
					<div class="playing_track__info">
						<div class="playing_track__artict">Mirage</div>
						<div class="playing_track__track">Else</div>
					</div>
				</div>
				<div class="song_slider">
				<keep-alive>
					<vs-slider vs-color="#f60036" v-model="headerPlayerValue"/>
				</keep-alive>
					<div class="song_slider__value">{{ headerPlayerValue }}%</div>
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
</keep-alive>
	</div>

</template>

<script>

	// import vueSlider from 'vue-slider-component';

	export default {
		data(){
			return {
				headerPlayerValue: 15,
				colorx:'#f60036',
			}
		},
		methods: {
			likeAction(event) {
				event.target.closest('.player_actions_icon').classList.toggle('liked')
			},
			playAction(event) {
				let elem = event.target.closest('.header__player');
				elem.classList.toggle('playing');
			}
		},
		beforeDestroy() {
		// alert('beforeDestroy header player');
			// this.resizex = 128;
			// window.removeEventListener('resize', this.resizex, true);
		}
		// 		components: {
		// 	'vue-slider': vueSlider
		// },
	}

</script>

<style scoped>

	.header__player_song {
		margin: 0 auto 0 40px;
	}

	.playing_track {
		display: flex;
		margin: 0 0 6px 0;
		display: flex;
	}

	.playing_track__img {
		-webkit-box-shadow: 2px 17px 21px -8px #bab8cc;
		box-shadow: 2px 17px 21px -8px #bab8cc;
		height: 40px;
	}

	.playing_track__artict {
		font-size: 14px;
		font-weight: 700;
		letter-spacing: 0.26px;
	}


	.playing_track__track {
		color: #7e7aa1;
		font-size: 12px;
		font-weight: 500;
		letter-spacing: 0.26px;
	}

	.playing_track__info {
		margin: 0 0 0 20px;
		display: flex;
		justify-content: center;
		flex-flow: column;
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

	.header__player {
		padding: 12px 40px 17px 30px;
		float: left;
		width: 623px;
		height: 90px;
		margin: 0 50px 20px 0;
		background: white;
		-webkit-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		-moz-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		box-shadow: 0px 12px 16px 2px #dad6f2;
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: space-between;
	}

	.header__player .player_actions__share_menu {
		top: 10px;
	}

	.header__player_icon {
		border-radius: 52px;
		background-color: #f60036;
		width: 60px;
		height: 60px;
		-webkit-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		-moz-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		box-shadow: 4px 6px 14px 3px #fcb7c6;
		position: relative;
		cursor: pointer;
		display: flex;
	}

	.header__player_icon i {
		font-size: 50px;
		margin: auto;
		color: #fff;
	}

	.player_actions {
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		justify-content: space-between;
		width: 130px;
		align-content:  flex-start;
		position: relative;
	}

	.player_actions__share_menu {
		display: none;
		position: absolute;
		border-top-right-radius: 20px;
		width: 208px;
		height: 38px;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: space-around;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		border-bottom-right-radius: 20px;
		right: -100px;
		background: #fff;
		top: 20px;
		padding: 0px 0 0 26px;
	}

	.player_actions__share_menu_icon {
		width: 26px;
		height: 26px;
		background-repeat: no-repeat !important;
		background-position: center !important;
		background-size: contain !important;
		cursor: pointer;
		-webkit-transition: -webkit-transform 0.05s ease-in;
		transition: -webkit-transform 0.05s ease-in;
		transition: transform 0.05s ease-in;
		transition: transform 0.05s ease-in, -webkit-transform 0.05s ease-in;
	}

	.share {
		margin: 0 7px 0 0;
	}

	.share:hover i {
		color: #f60036;
	}

	.liked i {
		color: #f60036;
	}

	.fullscreen i{
		font-size: 31px;
	}

	.player_actions_icon {
		color: #bfbcd1;
		cursor: pointer;
	}

	.player_actions_icon.share:hover .player_actions__share_menu {
		display: flex;
	}

	.toddler {
		width: 100%;
	}

	.song_slider {
		display: flex;
		align-items: center;
	}

	.song_slider__value {
		margin: 0 0 0 20px;
		color: #bfbcd1;
		font-size: 14px;
		letter-spacing: 0.26px;
	}

	.con-slider {
		margin: 0 auto 0 auto;
		display: flex;
		align-items: flex-end;
		width: 200px;
		padding: 10px 0;
	}

	.header__player .circle-interno,
	.header__player .circle-slider
	{
		width: 14px;
		height: 14px;
		-webkit-box-shadow: 1px 3px 13px 1px #fcb7c6;
		box-shadow: 1px 3px 13px 1px #fcb7c6;
	}

	.header__player .linea-slider {
		height: 3px;
	}



	.header__player	.con-slider {
		margin: 0 auto 0 auto;
		display: flex;
		align-items: flex-end;
		width: 200px;
		padding: 10px 0;
	}

	.header__player	.circle-interno,
	.header__player	.circle-slider
	{
		width: 14px;
		height: 14px;
		-webkit-box-shadow: 1px 3px 13px 1px #fcb7c6;
		box-shadow: 1px 3px 13px 1px #fcb7c6;
	}

</style>