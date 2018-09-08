<template>

	<div id="main__wrapper">

		<HeaderMenu/>

		<header id="header">

			<section class="header__content_block">

				<HeaderPlayer/>

				<HeaderSocial/>

				<Breadcrumps>
					В эфире - Расписание
				</Breadcrumps>

			</section>

		</header>

		<main id="main_content">

			<onAirNavigation/>

			<div class="timing__wrapper">

				<div class="timing__days">

					<div v-for="(day, index) in days" @click="showDay(day.value, $event)" class="timing__days_item"
					:class="day.value === 'monday' ? 'active_day' : '' " :key="index">
					{{ day.name }}
				</div>

			</div>

			<div class="timing__vr"></div>

			<div class="timing__schedule" >

				<div v-for="(dayShedule, index) in weekShedule" v-show="activeDay === days[index].value" :class="days[index].value" :key="index">

					<div v-for="(item, index) in dayShedule" class="timing__schedule_item" :key="index">

						<div class="schedule_item__time">
							<span class="schedule_item__start_time">{{ item.startTime }}</span>-<span class="schedule_item__end_time">{{ item.endTime }}</span>
						</div>

						<div class="schedule_item__img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>

						<div class="schedule_item__name">{{ item.name }}</div>
						<div v-if="index != dayShedule.length-1" class="schedule_item__hr"></div>

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
				activeDay: 'monday',
				days:
				[
					{
						name: 'Понедельник',
						value: 'monday'
					},
					{
						name: 'Вторник',
						value: 'tuesday'
					},
					{
						name: 'Среда',
						value: 'wednesday'
					},
					{
						name: 'Четверг',
						value: 'thursday'
					},
					{
						name: 'Пятница',
						value: 'friday'
					},
					{
						name: 'Суббота',
						value: 'saturday'
					},
					{
						name: 'Воскресенье',
						value: 'sunday'
					},
				],
				weekShedule: [
				// Расписание понедельника
				[
					{
						id: 1,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Большая 20-ка',
						img: require('~/assets/img/schedule_item__img_3.png')
					},
					{
						id: 2,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit персона',
						img: require('~/assets/img/schedule_item__img_6.png')
					},
					{
						id: 3,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit news',
						img: require('~/assets/img/schedule_item__img_1.png')
					},
					{
						id: 4,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Мировые чарты',
						img: require('~/assets/img/schedule_item__img_4.png')
					},
					{
						id: 5,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Шуры Амуры',
						img: require('~/assets/img/schedule_item__img_5.png')
					},
					{
						id: 6,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 7,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Большая 20-ка',
						img: require('~/assets/img/schedule_item__img_3.png')
					},
					{
						id: 8,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit персона',
						img: require('~/assets/img/schedule_item__img_6.png')
					},
					{
						id: 9,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit news',
						img: require('~/assets/img/schedule_item__img_1.png')
					},
					{
						id: 10,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Мировые чарты',
						img: require('~/assets/img/schedule_item__img_4.png')
					},
					{
						id: 11,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Шуры Амуры',
						img: require('~/assets/img/schedule_item__img_5.png')
					},
					{
						id: 12,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 13,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 14,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 15,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 16,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 17,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 18,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 19,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 20,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					}
				],
				// Расписание вторника
				[
					{
						id: 2,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit персона',
						img: require('~/assets/img/schedule_item__img_6.png')
					},
					{
						id: 1,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Большая 20-ка',
						img: require('~/assets/img/schedule_item__img_3.png')
					},
					{
						id: 4,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Мировые чарты',
						img: require('~/assets/img/schedule_item__img_4.png')
					},
					{
						id: 3,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit news',
						img: require('~/assets/img/schedule_item__img_1.png')
					},
					{
						id: 5,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Шуры Амуры',
						img: require('~/assets/img/schedule_item__img_5.png')
					},
					{
						id: 7,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Большая 20-ка',
						img: require('~/assets/img/schedule_item__img_3.png')
					},
					{
						id: 6,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 9,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit news',
						img: require('~/assets/img/schedule_item__img_1.png')
					},
					{
						id: 10,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Мировые чарты',
						img: require('~/assets/img/schedule_item__img_4.png')
					},
					{
						id: 8,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit персона',
						img: require('~/assets/img/schedule_item__img_6.png')
					},
					{
						id: 11,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Шуры Амуры',
						img: require('~/assets/img/schedule_item__img_5.png')
					},
					{
						id: 12,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 13,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 14,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 15,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 16,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 17,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 18,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 19,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 20,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					}
				],
				// Расписание среды
				[
					{
						id: 4,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Мировые чарты',
						img: require('~/assets/img/schedule_item__img_4.png')
					},
					{
						id: 2,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit персона',
						img: require('~/assets/img/schedule_item__img_6.png')
					},
					{
						id: 3,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit news',
						img: require('~/assets/img/schedule_item__img_1.png')
					},
					{
						id: 1,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Большая 20-ка',
						img: require('~/assets/img/schedule_item__img_3.png')
					},
					{
						id: 7,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Большая 20-ка',
						img: require('~/assets/img/schedule_item__img_3.png')
					},
					{
						id: 5,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Шуры Амуры',
						img: require('~/assets/img/schedule_item__img_5.png')
					},
					{
						id: 6,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 9,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit news',
						img: require('~/assets/img/schedule_item__img_1.png')
					},
					{
						id: 10,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Мировые чарты',
						img: require('~/assets/img/schedule_item__img_4.png')
					},
					{
						id: 8,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit персона',
						img: require('~/assets/img/schedule_item__img_6.png')
					},
					{
						id: 11,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Шуры Амуры',
						img: require('~/assets/img/schedule_item__img_5.png')
					},
					{
						id: 12,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 13,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 14,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 15,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 16,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 17,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 18,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 19,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 20,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					}
				],
				// Расписание четверга
				[
					{
						id: 3,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit news',
						img: require('~/assets/img/schedule_item__img_1.png')
					},
					{
						id: 2,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit персона',
						img: require('~/assets/img/schedule_item__img_6.png')
					},
					{
						id: 4,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Мировые чарты',
						img: require('~/assets/img/schedule_item__img_4.png')
					},
					{
						id: 7,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Большая 20-ка',
						img: require('~/assets/img/schedule_item__img_3.png')
					},
					{
						id: 1,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Большая 20-ка',
						img: require('~/assets/img/schedule_item__img_3.png')
					},
					{
						id: 5,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Шуры Амуры',
						img: require('~/assets/img/schedule_item__img_5.png')
					},
					{
						id: 6,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 9,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit news',
						img: require('~/assets/img/schedule_item__img_1.png')
					},
					{
						id: 10,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Мировые чарты',
						img: require('~/assets/img/schedule_item__img_4.png')
					},
					{
						id: 8,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit персона',
						img: require('~/assets/img/schedule_item__img_6.png')
					},
					{
						id: 11,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Шуры Амуры',
						img: require('~/assets/img/schedule_item__img_5.png')
					},
					{
						id: 12,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 13,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 14,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 15,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 16,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 17,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 18,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 19,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 20,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					}
				],
				// Расписание пятницы
				[
					{
						id: 6,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 7,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Большая 20-ка',
						img: require('~/assets/img/schedule_item__img_3.png')
					},
					{
						id: 3,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit news',
						img: require('~/assets/img/schedule_item__img_1.png')
					},
					{
						id: 2,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit персона',
						img: require('~/assets/img/schedule_item__img_6.png')
					},
					{
						id: 1,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Большая 20-ка',
						img: require('~/assets/img/schedule_item__img_3.png')
					},
					{
						id: 5,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Шуры Амуры',
						img: require('~/assets/img/schedule_item__img_5.png')
					},
					{
						id: 9,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit news',
						img: require('~/assets/img/schedule_item__img_1.png')
					},
					{
						id: 4,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Мировые чарты',
						img: require('~/assets/img/schedule_item__img_4.png')
					},
					{
						id: 10,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Мировые чарты',
						img: require('~/assets/img/schedule_item__img_4.png')
					},
					{
						id: 8,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit персона',
						img: require('~/assets/img/schedule_item__img_6.png')
					},
					{
						id: 11,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Шуры Амуры',
						img: require('~/assets/img/schedule_item__img_5.png')
					},
					{
						id: 12,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 13,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 14,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 15,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 16,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 17,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 18,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 19,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 20,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					}
				],
				// Расписание субботы
				[
					{
						id: 7,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Большая 20-ка',
						img: require('~/assets/img/schedule_item__img_3.png')
					},
					{
						id: 3,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit news',
						img: require('~/assets/img/schedule_item__img_1.png')
					},
					{
						id: 2,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit персона',
						img: require('~/assets/img/schedule_item__img_6.png')
					},
					{
						id: 6,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 1,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Большая 20-ка',
						img: require('~/assets/img/schedule_item__img_3.png')
					},
					{
						id: 5,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Шуры Амуры',
						img: require('~/assets/img/schedule_item__img_5.png')
					},
					{
						id: 9,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit news',
						img: require('~/assets/img/schedule_item__img_1.png')
					},
					{
						id: 4,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Мировые чарты',
						img: require('~/assets/img/schedule_item__img_4.png')
					},
					{
						id: 10,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Мировые чарты',
						img: require('~/assets/img/schedule_item__img_4.png')
					},
					{
						id: 8,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit персона',
						img: require('~/assets/img/schedule_item__img_6.png')
					},
					{
						id: 11,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Шуры Амуры',
						img: require('~/assets/img/schedule_item__img_5.png')
					},
					{
						id: 12,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 13,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 14,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 15,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 16,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 17,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 18,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 19,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 20,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					}
				],
				// Расписание воскресенья
				[
					{
						id: 6,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 3,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit news',
						img: require('~/assets/img/schedule_item__img_1.png')
					},
					{
						id: 7,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Большая 20-ка',
						img: require('~/assets/img/schedule_item__img_3.png')
					},
					{
						id: 2,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit персона',
						img: require('~/assets/img/schedule_item__img_6.png')
					},
					{
						id: 1,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Большая 20-ка',
						img: require('~/assets/img/schedule_item__img_3.png')
					},
					{
						id: 5,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Шуры Амуры',
						img: require('~/assets/img/schedule_item__img_5.png')
					},
					{
						id: 9,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit news',
						img: require('~/assets/img/schedule_item__img_1.png')
					},
					{
						id: 4,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Мировые чарты',
						img: require('~/assets/img/schedule_item__img_4.png')
					},
					{
						id: 10,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Мировые чарты',
						img: require('~/assets/img/schedule_item__img_4.png')
					},
					{
						id: 8,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Hit персона',
						img: require('~/assets/img/schedule_item__img_6.png')
					},
					{
						id: 11,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Шуры Амуры',
						img: require('~/assets/img/schedule_item__img_5.png')
					},
					{
						id: 12,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 13,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 14,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 15,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 16,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 17,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 18,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 19,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					},
					{
						id: 20,
						startTime: '07-15',
						endTime: '07-25',
						name: 'Погода',
						img: require('~/assets/img/schedule_item__img_2.png')
					}
				],

			],

			}
		},
		methods: {
			showDay(day, event)  {
				this.activeDay = day;
				Array.from(document.getElementsByClassName('timing__days_item')).forEach(
					(item) => {
						item.classList.remove('active_day');
					});
				event.target.classList.add('active_day');
			}
		},
		components: {
			'onAirNavigation': onAirNavigation
		},

	}

</script>


<style scoped>

	::-webkit-scrollbar{
		width:12px;
	}

	::-webkit-scrollbar-thumb{
		width: 4px;
		background-image: -webkit-linear-gradient(#c9c7c7, #F5F5F5);
	}

	::-webkit-scrollbar-thumb:hover{
		/*border-width: 1px 1px 1px 1px;*/
		/*border-color: red;*/
		width: 20px;
		height: 20px;
		background-color: white;
		border: 2px solid blue;
	}

	::-webkit-scrollbar-track{
		border-width:0;
	}

	::-webkit-scrollbar-track:hover{
		/*border-left: solid 1px blue;*/
		background-color: transparent;
	}

	.timing__wrapper {
		display: flex;
		justify-content: space-between;
		background: #fff;
		padding: 30px 15px 15px 45px;
	}

	.timing__days {
		-webkit-flex: 0 0 145px;
		-moz-flex: 0 0 145px;
		-ms-flex: 0 0 145px;
		-o-flex: 0 0 145px;
		flex: 0 0 145px;
	}


	.timing__days_item {
		color: #19106a;
		font-size: 18px;
		font-weight: 700;
		line-height: 80px;
		cursor: pointer;

	}

	.active_day {
		color: #f60036;
	}

	.timing__vr {
		margin: 0 75px 0 40px;
		width: 2px;
		height: 500px;
		background: url('~/assets/img/top_twenty__item_stats__vr.png');
		background-size: cover;
	}

	.timing__schedule {
		height: 780px;
		overflow-y: scroll;
		flex: 1 0;
	}

	.timing__schedule_item {
		font-size: 14px;
		display: flex;
		align-items: center;
		flex-flow: row wrap;
	}

	.schedule_item__time {
		color: #7e7aa1;
		flex: 0 0 280px;
		font-weight: 500;
	}

	.schedule_item__img {
		margin: 0 30px 0 0;
		width: 40px;
		height: 40px;
		-webkit-box-shadow: 0px 6px 8px 0px #bab8cc;
		box-shadow: 0px 6px 8px 0px #bab8cc;
	}

	.schedule_item__name {
		color: #463d9f;
		font-weight: 700;
		letter-spacing: 0.3px;
	}

	.schedule_item__hr {
		margin: 10px 0;
		width: 100%;
		height: 2px;
		background: url('~/assets/img/footer__hr.png') center;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

</style>