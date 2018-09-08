<template>

	<div id="main__wrapper">

		<div class="main_content_block">

			<div class="left_content_block">

				<HeaderMenu/>

				<aside class="aside__left">

					<div class="aside__left_item">
						<img src="~assets/img/dummy.png" alt="dummy.png">
					</div>

				</aside>

			</div>

			<div class="center_content_block">

				<HeaderPlayer/>

				<Breadcrumps>
					Новости - {{ this.$route.params.name }}
				</Breadcrumps>

				<main id="main_content">

					<div class="news_item__content">

						<div class="main_image"></div>

						<div class="news_item__additional_content">

							<div class="track_control_panel">
								<div  @click="playAction($event)" class="track_control_panel__play">
									<i class="material-icons play">play_arrow</i>
									<i class="material-icons pause">pause</i>
								</div>
								<div class="track_control_panel__slider">
									<vs-slider vs-color="#26188e" v-model="playerValue"/>
								</div>
								<div class="track_control_panel__time">12:34</div>
								<div class="track_control_panel__volume">
									<div class="volume_bar a"></div>
									<div class="volume_bar b"></div>
									<div class="volume_bar c"></div>
								</div>
							</div>

							<div class="chip type_chip">#hit-news</div>

							<div class="back_button__wrapper" @click="$router.go(-1)">
								<div class="back_button__icon">
									<i class="material-icons">navigate_before</i>
								</div>
								<div class="back_button__str">Назад</div>
							</div>

						</div>

						<div class="news_item__wrap">

							<div class="news_item__name">
								«Сделай громче» — Макс Барских объявил
								новый  тренд …
							</div>
							<div class="news_item__date">
								01.06.2018
							</div>
							<div class="news_item__text">
								Испанский музыкальный дуэт Los Del Rio аошёл в историю музыки, благодаря песне "Macarena". Более ничего стоящего эти бодрые старички не записывали, но, как оказалосб, необходимости в этом не было. Мало того, что Macarena по праву считается самой популярной песней 90-ч годов прошлого столетия, так её не перестанут слушать и через много лет. А всё потому, что она может спасти жизнь. Macarena записана в ритме 103 удара в минуту. И это точная частота нажатий на грудную клетку во время прямого массажа сердца <br>

								<br>

								Врачи, студенты-медики и просто сознательнрые люди, наверняка, после такой информации закачают этот трек в свой плеер, и никогда не будут удалять. Мало ли, какая ситуация может произойти. Никому таких случаем мы, конечно, не желаем, но. На всякий случай, чтобы не надоедала одна и та же песня вспомним ещё три популярных хита, который имеют такой же ритм, а значит, тоже могут спасать жизни. Номер три. Madonna "Like A Prayer". Эту песню сразу можно проматывать или подрезать, если соберётесь использовать её в медицинских целях <br>

								<br>

								Вступление протяжное и для массажа сердца бесполезное, но зато потом Мадонна разгоняется до нужного ритма, под который можно не только массаж делать, но и полезные физические упражнения. Номер два. AC/DC "Highway To Hell". Это, конечно, для тех, кто не любит попсу и не обращает внимание на пугающее нгазвание трека. Ещё этот рок-боевик отлично заходит, например, на беговой дорожке. Ну и номер один. Bee Gees "Staying"
							</div>

							<div class="news_item__social">
								<div class="player_actions__share_menu">
									<div class="player_actions__share_menu_icon vkontakte"></div>
									<div class="player_actions__share_menu_icon facebook"></div>
									<div class="player_actions__share_menu_icon twitter"></div>
									<div class="player_actions__share_menu_icon instagram"></div>
									<div class="player_actions__share_menu_icon odnoklass"></div>
								</div>
							</div>

						</div>

					</div>
				</main>
			</div>

			<div class="right_content_block">

				<HeaderSocial/>

				<div class="other_news__content">

					<div class="other_news__head">
						Другие новости
					</div>

					<div v-for="(othewNew, index) in otherNews" class="other_news__item" :key="index">
						<div class="other_news__item_content_box rounded">
							<div :style="{backgroundImage: 'url(' + othewNew.img + ')'}" class="other_news__item_img rounded"></div>
							<div class="other_news__item_info">
								<div class="other_news__item_info__name">{{ othewNew.name }}</div>
								<div class="other_news__item_info__date">{{ othewNew.date }}</div>
							</div>
						</div>
					</div>

				</div>

			</div>

		</div>

		<Footer/>

	</div>

</template>


<script>

	import onAirNavigation from '@/components/onAirNavigation';

	export default {

		data() {
			return {
				playerValue: 100,
				otherNews:
				[
					{
						id: 1,
						img: require('~/assets/img/other_news__item_img_1.png'),
						name: 'Том Круз не хочет стареть',
						date: '01.02.03'
					},
					{
						id: 2,
						img: require('~/assets/img/other_news__item_img_2.png'),
						name: 'С Днём Радио!',
						date: '02.03.04'
					},
					{
						id: 3,
						img: require('~/assets/img/other_news__item_img_3.png'),
						name: 'Они вместе?',
						date: '03.04.05'
					},
				]
			}
		},
		components: {
			'onAirNavigation': onAirNavigation
		},
		methods: {
			playAction(event) {
				let elem = event.target.closest('.track_control_panel__play');
				elem.classList.toggle('playing');
			},
		}


	}

</script>


<style scoped>


	.news_item__wrap {
		margin: 0 0 120px 0;
		padding: 0 0 0 30px;
		color: #7e7aa1;
		font-weight: 500;
		letter-spacing: 0.26px;
		font-size: 16px;
	}

	.news_item__name {
		margin: 0 0 10px 0;
		color: #19106a;
		font-size: 24px;
		font-weight: 700;
		line-height: 24px;
		height: 50px;
	}

	.news_item__date {
		margin: 0 0 20px;
		font-weight: 500;
		letter-spacing: 0.26px;
		font-size: 12px;

	}

	.news_item__text {
		margin: 0 0 20px 0;
		line-height: 21px;
	}

	.player_actions__share_menu {
		padding: 0;
		display: flex;
		position: static;
		display: flex;
		position: static;
		background: transparent;
	}

	.back_button__wrapper {
		margin: 0 0 0 auto;
	}

	.type_chip {
		margin: 0 0 0 40px;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.26px;
	}

	.news_item__additional_content {
		margin: 0 0 20px 0;
		display: flex;
	}

	.track_control_panel {
		padding: 0 15px;
		width: 270px;
		height: 30px;
		background: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 15px;

	}

	.track_control_panel__play {
		cursor: pointer;
	}

	.track_control_panel__play .play {
		display: block;
		margin: auto;
		color: #26188e;
		font-size: 33px;
	}

	.track_control_panel__slider {
		flex: 1 0;
	}

	.track_control_panel__time {
		flex: 0 1 50px;
		color: #bfbcd1;
		font-size: 12px;
		font-weight: 500;
		letter-spacing: 0.22px;
	}

	.track_control_panel__volume {
		justify-content: space-between;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: baseline;
		-ms-flex-align: baseline;
		align-items: baseline;
		flex: 0 0 14px;
		cursor: pointer;
	}

	.volume_bar {
		width: 4px;
		border-radius: 10px;
		background: #bfbcd1;
		border-radius: 10px;
		background: #26188e;
	}

	.volume_bar.a {
		height: 5px;
	}

	.volume_bar.b {
		height: 10px;
	}

	.volume_bar.c {
		height: 15px;
		background: #bfbcd1;
	}

	.other_news__content {
		margin: 20px 0 0 0;
	}

	.other_news__head {
		margin: 0 0 20px 0;
		color: #19106a;
		font-size: 20px;
		font-weight: 700;
	}

	.other_news__item {

	}

	.other_news__item_img {
		margin: 0 0 10px 0;
		width: 260px;
		height: 180px;
		background: no-repeat;
	}

	.other_news__item_info {

	}

	.other_news__item_info__name {
		margin: 0 0 5px 0;
		color: #19106a;
		height: 32px;
		font-size: 16px;
		font-weight: 700;
		line-height: 14px;
	}
	.other_news__item_info__date {
		color: #7e7aa1;
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 0.3px
	}

	.other_news__item_content_box {
		padding: 18px;
		width: 295px;
		height: 270px;
		background: #fff;
		margin: 0px 25px 10px 0;
		position: relative;
	}

	.main__wrapper {
		display: flex;
		flex-flow: column;
	}

	.main_content_block {
		display: flex;
	}

	.left_content_block {
		display: flex;
		flex-flow: column;
	}

	.center_content_block {
		display: flex;
		flex-flow: column;
		width: 620px;
		margin: 0 20px 0 0;
	}

	.right_content_block {
		width: 300px;
		display: flex;
		flex-flow: column;
	}

	#main_content {
		padding:0;
		float: none;
		width: 100%;
	}

	.main_image {
		margin: 0 0 20px 0;
		width: 620px;
		height: 440px;
		background: url('~/assets/img/news_item_main_image.png');
	}

	.header__breadcrumps {
		margin: 10px 0 30px 0;
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

</style>