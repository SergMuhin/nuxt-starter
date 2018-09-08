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
					- Шуры Амуры
				</Breadcrumps>

			</section>

		</header>

		<main id="main_content">

			<onAirNavigation/>

			<div class="main_image"></div>

			<div class="hanky_panky__content">

				<div class="hanky_panky__head">Шуры Амуры</div>

				<div class="hanky_panky__text">
					Рубрика-игра для знакомств на Хит FM с ведущей Наташей Стахановой. Проводится каждый вторник и четверг в 20:00. Хронометраж игры — один час. Ведущая знакомит слушателей в прямом эфире. В игре может познакомиться только одна пара (одна пара на одну игру). Слушатели могут быть из разных городов, в т.ч. из регионов. Задействованы и соцсети Хит FM — в частности, паблик Вконтакте и Инстаграм. В инстаграм слушатели, желающие познакомиться на Хит FM, выкладывают свои фото по хэштегу #шурыамурыхитфм. Паре, которая «совпала» в эфире Хит FM, предоставляется сувенир от станции.
				</div>

				<div class="hanky_panky__form_head">Хочешь стать героем программы?</div>
				<div class="hanky_panky__form_str">Внимание! Всё поля обязательны для заполнения!</div>

				<div class="hanky_panky__form">

					<form action="">
						<input id="name" class="hanky_panky__form_input" type="text" placeholder="Имя">
						<input id="info" class="hanky_panky__form_input" type="text" placeholder="Немного о себе">
						<input id="link" class="hanky_panky__form_input" type="text" placeholder="Ссылка на соц. сеть">
						<input id="desc" class="hanky_panky__form_input" type="text" placeholder="Описание парня/девушки мечты">
						<input id="phone" class="hanky_panky__form_input" type="text" placeholder="Телефон">
						<input id="email" class="hanky_panky__form_input" type="text" placeholder="Email">

						<input @click.prevent="" id="submit" type="submit" value="Отправить">
					</form>

				</div>

				<div class="hanky_panky__archive_wrapper">

					<div class="hanky_panky__head">Архив</div>

					<div class="hanky_panky__archive_content">

						<div v-for="(archive, index) in archives" class="hanky_panky__archive_item" :key="index">

							<div class="hanky_panky__archive_item__date">
								{{ archive.date }}
							</div>

							<div class="track_control_panel">
								<div @click="playAction($event)" class="track_control_panel__play">
									<i class="material-icons play">play_arrow</i>
									<i class="material-icons pause">pause</i>
								</div>
								<div class="track_control_panel__slider">
									<vs-slider vs-color="#26188e" v-model="archive.playerValue"/>
								</div>
								<div class="track_control_panel__time">{{ archive.time }}</div>
								<div class="track_control_panel__volume">
									<div class="volume_bar a"></div>
									<div class="volume_bar b"></div>
									<div class="volume_bar c"></div>
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
				archives:
				[
					{
						date: '01.06.2018',
						time: '12:15',
						playerValue: 120
					},
					{
						date: '02.06.2018',
						time: '11:22',
						playerValue: 155
					},
					{
						date: '03.06.2018',
						time: '12:51',
						playerValue: 170
					},
					{
						date: '04.06.2018',
						time: '14:53',
						playerValue: 130
					},
					{
						date: '05.06.2018',
						time: '17:23',
						playerValue: 110
					},
					{
						date: '06.06.2018',
						time: '13:35',
						playerValue: 100
					},
					{
						date: '07.06.2018',
						time: '17:45',
						playerValue: 180
					},
					{
						date: '08.06.2018',
						time: '12:32',
						playerValue: 190
					},
					{
						date: '09.06.2018',
						time: '12:25',
						playerValue: 160
					},
					{
						date: '10.06.2018',
						time: '19:34',
						playerValue: 120
					},
				]
			}
		},
		components: {
			'onAirNavigation': onAirNavigation
		},
		methods: {
			playAction(event) {
				let elem = event.target.closest('.track_control_panel');
				if(elem.classList.contains('playing')) {
					elem.classList.remove('playing');
				} else {
					Array.from(document.getElementsByClassName('track_control_panel')).forEach(
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

	.hanky_panky__archive_wrapper {
		margin: 0 0 60px 0;
	}

	.hanky_panky__archive_content {
		display: flex;
		justify-content: space-between;
		flex-flow: row wrap;
	}

	.hanky_panky__archive_item {
		margin: 0 0 15px 0;
		display: flex;
		align-items: center;
		width: 390px;
		justify-content: space-between;
	}

	.hanky_panky__archive_item__date {
		color: #26188e;
		font-size: 14px;
		letter-spacing: 0.3px;
	}

	.main_image {
		margin: 30px 0 30px 0;
		background: url('~/assets/img/hanky_panky_main_image.png') no-repeat;
	}

	.hanky_panky__head,
	.hanky_panky__form_head
	{
		display: inline-block;
		font-size: 20px;
		margin: 0 0 25px 0;
		padding: 9px 17px 7px 17px;
		background: linear-gradient(to right, #6800b6, #f70070);
		color: white;
		font-weight: 400;
	}

	.hanky_panky__form_head {
		margin: 0 0 15px 0;
	}

	.hanky_panky__text {
		margin: 0 0 30px 0;
		color: #7e7aa1;
		font-size: 18px;
		font-weight: 400;
		padding: 0px 10px 0 0;
		letter-spacing: 0.33px;
		line-height: 26px;
	}

	.hanky_panky__content {
		padding: 0 25px;
	}

	.hanky_panky__form_str {
		color: #7e7aa1;
		font-size: 12px;
		font-weight: 400;
		margin: 0 0 30px 0;
	}

	.hanky_panky__form {
		margin: 0 0 40px 0;
		width: 390px;
	}

	.hanky_panky__form input {
		display: block;
		border: none;
		padding: 16px 30px;
		border-radius: 25px;
		font-size: 14px;
		font-weight: 700;
		letter-spacing: 0.3px;
	}

	.hanky_panky__form_input {
		margin: 0 0 8px 0;
		width: 390px;

	}

	#submit {
		margin: 22px auto 0 auto;
		background-color: #f60036;
		color: white;
		cursor: pointer;
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
		text-align: center;
		width: 33px;
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
		margin: 0 0 2px 0;
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

	input::-webkit-input-placeholder {
		color: #bfbcd1;
		font-size: 14px;
	}

	input:-moz-placeholder {
		color: #bfbcd1;
		font-size: 14px;
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