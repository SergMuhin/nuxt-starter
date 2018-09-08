<template>

	<div>

		<section class="section latest_events">

			<div class="latest_news__head">

				<h3 class="head_text">Последние новости</h3>

				<nuxt-link :to="{ name: 'news'}">
					<span class="see_all">
						Смотреть все
					</span>
				</nuxt-link>

			</div>

			<div class="latest_news__content">

				<div class="latest_news__content_item__left rounded"></div>

				<div class="latest_news__content_block">
					<div class="latest_news__content_item a rounded"></div>
					<div class="latest_news__content_item b rounded"></div>
					<div class="latest_news__content_item c rounded"></div>
					<div class="latest_news__content_item d rounded"></div>
					<div class="latest_news__content_item e rounded"></div>
					<div class="latest_news__content_item f rounded"></div>
				</div>

				<div class="latest_news__content_item__right rounded"></div>

			</div>

		</section>

	</div>

</template>


<style scoped>

	.latest_news__content {
		height: 400px;
		display: flex;
	}

	.latest_news__content_block {
		display: flex;
		flex-flow: row wrap;
		padding: 0px 17px;
		justify-content: space-between;
	}

	.latest_news__content_item {
		width: 175px;
		height: 191px;
		margin: 0 0 18px 0;
		cursor: pointer;
	}

	.latest_news__content_item.a {
		background: url('~/assets/img/latest_news_a.png') no-repeat center;
	}

	.latest_news__content_item.b {
		background: url('~/assets/img/latest_news_b.png') no-repeat center;
	}

	.latest_news__content_item.c {
		background: url('~/assets/img/latest_news_c.png') no-repeat center;
	}

	.latest_news__content_item.d {
		background: url('~/assets/img/latest_news_d.png') no-repeat center;
	}

	.latest_news__content_item.e {
		background: url('~/assets/img/latest_news_e.png') no-repeat center;
	}

	.latest_news__content_item.f {
		background: url('~/assets/img/latest_news_f.png') no-repeat center;
	}

	.latest_news__content_item__left {
		width: 372px;
		height: 100%;
		flex: 1 0 372px;
		background: url('~/assets/img/latest_news__left.png') no-repeat center;
		-webkit-box-shadow: 0px 15px 16px 2px #f998b1;
		-moz-box-shadow: 0px 15px 16px 2px #f998b1;
		box-shadow: 0px 25px 23px -10px #f998b1;
		cursor: pointer;
	}

	.latest_news__content_item__right {
		background: url('~/assets/img/dummy.png') no-repeat center;
		flex: 1 0 240px;
		cursor: pointer;
	}

</style>