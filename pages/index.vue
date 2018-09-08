<template>

	<div id="main__wrapper">

		<header id="header">

			<HeaderMenu/>

			<section class="header__content_block">

				<HeaderPlayer/>

				<HeaderSocial/>

				<HeaderSlider/>

			</section>

		</header>

		<main id="main">

			<LatestEvents/>

			<Novelties/>

			<Guests/>

			<AsideRight/>

			<TopTwenty/>

			<PlayOnline/>

		</main>

		<Footer/>

	</div>

</template>


<script>

	import HeaderSlider from '@/components/index/HeaderSlider';
	import LatestEvents from '@/components/index/LatestEvents';
	import Novelties from '@/components/index/Novelties';
	import Guests from '@/components/index/Guests';
	import PlayOnline from '@/components/index/PlayOnline';
	import HitFmRadio from '@/components/index/HitFmRadio';
	import TopTwenty from '@/components/index/TopTwenty';
	import AsideRight from '@/components/index/AsideRight';

	export default {
		components: {
			'HeaderSlider' : HeaderSlider,
			'LatestEvents' : LatestEvents,
			'Novelties' : Novelties,
			'Guests' : Guests,
			'PlayOnline' : PlayOnline,
			'HitFmRadio' : HitFmRadio,
			'TopTwenty' : TopTwenty,
			'AsideRight' : AsideRight,
		},
	}

</script>
